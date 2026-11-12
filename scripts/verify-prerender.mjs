import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";

// Exercise the actual built HTML through the production Worker's request handler.
const entry = resolve("dist/prerender/worker-test.mjs");
await build({ entryPoints: ["worker-site/index.js"], outfile: entry, bundle: true, platform: "node", format: "esm", packages: "external" });
const { default: worker } = await import(pathToFileURL(entry).href);
const env = { ASSETS: { async fetch(input) {
  const url = new URL(input instanceof Request ? input.url : input);
  try { return new Response(await readFile(resolve("dist/public", `.${url.pathname}`))); }
  catch { return new Response("Missing asset", { status: 404 }); }
} } };
const translations = {};
for (const lang of ["en", "sr"]) {
  translations[lang] = JSON.parse(await readFile(`client/src/locales/${lang}.json`, "utf8"));
}
const escape = text => text.replaceAll("&", "&amp;").replaceAll("'", "&#x27;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
for (const lang of ["en", "sr"]) {
  for (const suffix of ["", "/science", "/partners"]) {
    const path = `/${lang}${suffix}`;
    const response = await worker.fetch(new Request(`https://immunasina.com${path}`), env);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes('<div id="root" data-prerendered="true">'));
    assert.match(html, /<h1[ >]/);
    assert.ok(html.includes(`<html lang="${lang}">`));
    assert.ok(html.includes(`rel="canonical" href="https://immunasina.com${path}"`));
    assert.ok(!html.includes('data-msg="'), 'React rendering must not fall back after an error');
    const copy = translations[lang];
    const expected = suffix === "/science" ? copy.SCIENCE.HEADING : suffix === "/partners" ? copy.PARTNERS.HEADING : copy.ORDER.INQUIRY_DESCRIPTION;
    assert.ok(html.includes(escape(expected)), `Missing localized content for ${path}`);
    if (suffix === "/science") {
      assert.ok(html.includes('aria-controls="science-research"'));
      assert.ok(html.includes('aria-expanded="false"'));
      assert.ok(html.includes('https://pubmed.ncbi.nlm.nih.gov/40647089/'));
    }
    if (!suffix) {
      assert.ok(html.includes('id="order"'));
      assert.ok(html.includes('<form'));
      assert.ok(!/class="hero-reveal[^\"]*" style="[^"]*opacity:0/.test(html));
    }
    const head = await worker.fetch(new Request(`https://immunasina.com${path}`, { method: "HEAD" }), env);
    assert.equal(head.status, 200);
    assert.equal(await head.text(), "");
    console.log(`Verified HTML + HEAD ${path}`);
  }
}
const redirect = await worker.fetch(new Request("https://immunasina.com/science"), env);
assert.equal(redirect.status, 308);
assert.equal(redirect.headers.get("Location"), "https://immunasina.com/sr/science");
const missing = await worker.fetch(new Request("https://immunasina.com/en/missing"), env);
assert.equal(missing.status, 404);
assert.ok((await missing.text()).includes("noindex, follow"));
console.log("Verified redirects and genuine 404s");
