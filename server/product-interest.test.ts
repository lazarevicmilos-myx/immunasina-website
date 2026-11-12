import { describe, expect, it, vi } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import worker from "../worker-site/index.js";

const input = { productId: "matcha", fullName: " Test Customer ", email: " TEST@example.com ", country: " Serbia ", notes: "Let me know", language: "en" };
function request(body: unknown = input, method = "POST", headers = {}) {
  return new Request("https://immunasina.com/api/product-interest", {
    method, headers: { "Content-Type": "application/json", ...headers },
    ...(method === "GET" ? {} : { body: JSON.stringify(body) }),
  });
}
function database() {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec(readFileSync("d1/migrations/0001_product_interest.sql", "utf8"));
  const DB = { prepare: (sql: string) => ({ bind: (...values: any[]) => ({
    run: async () => { sqlite.prepare(sql).run(...values); return { success: true }; },
  }) }) };
  return { sqlite, DB };
}

describe("Cloudflare product interest endpoint", () => {
  it("persists normalized fields in SQLite and updates repeat interest without duplicating it", async () => {
    const { sqlite, DB } = database();
    try {
      const ASSETS = { fetch: vi.fn() };
      const response = await worker.fetch(request(), { DB, ASSETS });
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual({ success: true });
      expect(ASSETS.fetch).not.toHaveBeenCalled();
      expect(sqlite.prepare("SELECT * FROM product_interest").get()).toMatchObject({
        product_id: "matcha", full_name: "Test Customer", email: "test@example.com", country: "Serbia", notes: "Let me know", language: "en",
      });
      await worker.fetch(request({ ...input, notes: "Updated", language: "sr" }), { DB });
      expect(sqlite.prepare("SELECT * FROM product_interest").all()).toHaveLength(1);
      expect(sqlite.prepare("SELECT * FROM product_interest").get()).toMatchObject({ notes: "Updated", language: "sr" });
      await worker.fetch(request({ ...input, productId: "latte" }), { DB });
      expect(sqlite.prepare("SELECT * FROM product_interest").all()).toHaveLength(2);
    } finally { sqlite.close(); }
  });

  it.each([
    { ...input, email: "invalid" }, { ...input, fullName: "   " },
    { ...input, productId: "unknown" }, { ...input, language: "xx" },
    { ...input, country: "" }, { ...input, notes: "x".repeat(2001) },
  ])("rejects invalid form data before writing", async body => {
    const prepare = vi.fn();
    expect((await worker.fetch(request(body), { DB: { prepare } })).status).toBe(400);
    expect(prepare).not.toHaveBeenCalled();
  });

  it("rejects wrong methods, cross-origin requests, non-JSON and oversized bodies", async () => {
    expect((await worker.fetch(request(undefined, "GET"), {})).status).toBe(405);
    expect((await worker.fetch(request(input, "POST", { Origin: "https://other.example" }), {})).status).toBe(403);
    expect((await worker.fetch(request(input, "POST", { "Content-Type": "text/plain" }), {})).status).toBe(415);
    expect((await worker.fetch(request({ ...input, notes: "x".repeat(17000) }), {})).status).toBe(413);
    expect((await worker.fetch(new Request("https://immunasina.com/api/product-interest", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: "{",
    }), {})).status).toBe(400);
  });

  it("never reports success when the binding is missing or the write fails", async () => {
    expect((await worker.fetch(request(), {})).status).toBe(503);
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      for (const run of [async () => { throw new Error("offline"); }, async () => ({ success: false })]) {
        const response = await worker.fetch(request(), { DB: { prepare: () => ({ bind: () => ({ run }) }) } });
        expect(response.status).toBe(503);
        expect(await response.json()).not.toHaveProperty("success", true);
      }
    } finally { log.mockRestore(); }
  });
});
