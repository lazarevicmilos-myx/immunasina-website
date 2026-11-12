import { expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import { createOrderInquiry } from "./db";
import { notifyOwner } from "./_core/notification";
import type { TrpcContext } from "./_core/context";

vi.mock("./db", () => ({ createOrderInquiry: vi.fn().mockResolvedValue({ id: 42 }) }));
vi.mock("./_core/notification", () => ({ notifyOwner: vi.fn().mockResolvedValue(true) }));

it("accepts a matcha inquiry and saves and notifies with the correct product details", async () => {
  const caller = appRouter.createCaller({
    user: null,
    req: {} as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  });
  const result = await caller.orders.submitInquiry({
    productId: "matcha",
    fullName: "Sample Customer",
    email: "sample@example.com",
    country: "Serbia",
  });
  expect(result).toEqual({ success: true, inquiryId: 42 });
  expect(createOrderInquiry).toHaveBeenCalledWith(expect.objectContaining({
    productId: "matcha",
    productName: "Rosehip & Matcha Latte",
    productSize: "250g",
    productPrice: "€65.50",
  }));
  expect(notifyOwner).toHaveBeenCalledWith(expect.objectContaining({
    content: expect.stringContaining("Product: Rosehip & Matcha Latte"),
  }));
});
