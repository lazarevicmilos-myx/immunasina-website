import { build } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const entry = resolve("dist/prerender/entry.mjs");
await build({
  entryPoints: ["client/src/entry-prerender.tsx"],
  outfile: entry,
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  jsx: "automatic",
  loader: { ".css": "empty" },
  define: { "import.meta.env": JSON.stringify({ PROD: true }), "process.env.NODE_ENV": '"production"' },
});
const { render, localizeHtml } = await import(pathToFileURL(entry).href);
const template = await readFile("dist/public/index.html", "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("Prerender root placeholder missing");
for (const language of ["en", "sr"]) {
  for (const suffix of ["", "/science", "/partners"]) {
    const route = `/${language}${suffix}`;
    const markup = await render(route);
    if (!markup.includes("<h1") || markup.includes('data-msg="')) {
      throw new Error(`Prerender failed for ${route}`);
    }
    const html = localizeHtml(template, route).replace('<div id="root"></div>', () => `<div id="root" data-prerendered="true">${markup}</div>`);
    const file = resolve(`dist/public/prerender${route}/index.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
    console.log(`Prerendered ${route}`);
  }
}
