import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { languageFromPath, localizedPath, pageInfo, pageRedirect } from "../shared/localization";
import { localizeHtml, seoMarkup } from "../shared/seo";
import en from "../client/src/locales/en.json";
import sr from "../client/src/locales/sr.json";
import worker from "../worker-site/index.js";
import express from "express";
import { localizedPage, redirectLocalizedPage } from "./localizedPages";

describe("localized routing", () => {
  it("uses only complete supported language prefixes", () => {
    expect(languageFromPath('/en')).toBe('en');
    expect(languageFromPath('/sr/missing')).toBe('sr');
    expect(languageFromPath('/english')).toBeUndefined();
    expect(languageFromPath('/de')).toBeUndefined();
  });
  it("switches language without losing the page, query, or fragment", () => {
    expect(localizedPath('/sr', 'en')).toBe('/en');
    expect(localizedPath('/en/missing?ref=test#details', 'sr')).toBe('/sr/missing?ref=test#details');
    expect(localizedPath('/', 'sr')).toBe('/sr');
  });
  it("redirects unprefixed URLs and trailing slashes consistently", () => {
    expect(pageRedirect(new URL('https://immunasina.com/?ref=test#rituals'))).toBe('/sr?ref=test#rituals');
    expect(pageRedirect(new URL('https://immunasina.com/en/'))).toBe('/en');
    expect(pageRedirect(new URL('https://immunasina.com/en'))).toBeUndefined();
    expect(pageInfo('/en/missing').isHome).toBe(false);
  });
});

describe("localized HTML", () => {
  const template = readFileSync('client/index.html', 'utf8');
  for (const [language, translations] of [['en', en], ['sr', sr]] as const) {
    it(`renders ${language} metadata before JavaScript executes`, () => {
      const html = localizeHtml(template, `/${language}`);
      expect(html).toContain(`<html lang="${language}">`);
      expect(html).toContain(translations.SEO.TITLE.replace(/&/g, '&amp;'));
      expect(html).toContain(translations.SEO.KEYWORDS_1);
      expect(html).toContain(`rel="canonical" href="https://immunasina.com/${language}"`);
      expect(html).toContain('hreflang="en"');
      expect(html).toContain('hreflang="sr"');
      const scripts = [...html.matchAll(/<script data-seo type="application\/ld\+json">(.*?)<\/script>/g)];
      expect(scripts).toHaveLength(2);
      for (const script of scripts) expect(JSON.parse(script[1]).description).toBe(translations.SEO.DESCRIPTION);
      expect(localizeHtml(html, `/${language}`)).toBe(html);
    });
  }
  it("gives missing pages localized metadata and prevents indexing", () => {
    const html = seoMarkup('/sr/missing');
    expect(html).toContain(sr.NOT_FOUND.SEO_TITLE);
    expect(html).toContain('noindex, follow');
    expect(html).not.toContain('application/ld+json');
    expect(html).not.toContain('hreflang=');
  });
  it("escapes untrusted paths in metadata", () => {
    expect(seoMarkup('/en/\"><script>')).not.toContain('<script>');
  });
  it("serves localized HTML, redirects, and real 404 responses at the edge", async () => {
    const env = { ASSETS: { fetch: async () => new Response(template) } };
    for (const language of ['en', 'sr']) {
      const response = await worker.fetch(new Request(`https://immunasina.com/${language}`), env);
      expect(response.status).toBe(200);
      expect(await response.text()).toContain(`<html lang="${language}">`);
    }
    const redirect = await worker.fetch(new Request('https://immunasina.com/?ref=test'), env);
    expect(redirect.status).toBe(308);
    expect(redirect.headers.get('location')).toBe('https://immunasina.com/sr?ref=test');
    const missing = await worker.fetch(new Request('https://immunasina.com/en/missing'), env);
    expect(missing.status).toBe(404);
    expect(await missing.text()).toContain('noindex, follow');
  });
  it("serves localized pages and redirects through Express", async () => {
    const app = express();
    app.use(redirectLocalizedPage);
    app.get(['/@vite/client', '/@react-refresh', '/@id/virtual-module', '/__manus__/runtime'], (_req, res) => {
      res.type('application/javascript').send('export {};');
    });
    app.use(localizedPage('client/index.html'));
    const server = app.listen(0, '127.0.0.1');
    await new Promise<void>(resolve => server.once('listening', resolve));
    const address = server.address() as { port: number };
    const origin = `http://127.0.0.1:${address.port}`;
    try {
      for (const endpoint of ['/@vite/client', '/@react-refresh', '/@id/virtual-module', '/__manus__/runtime']) {
        const asset = await fetch(`${origin}${endpoint}`, { redirect: 'manual' });
        expect(asset.status).toBe(200);
        expect(asset.headers.get('location')).toBeNull();
        expect(await asset.text()).toBe('export {};');
      }
      const redirect = await fetch(`${origin}/?ref=test`, { redirect: 'manual' });
      expect(redirect.status).toBe(308);
      expect(redirect.headers.get('location')).toBe('/sr?ref=test');
      for (const [language, translations] of [['en', en], ['sr', sr]] as const) {
        const response = await fetch(`${origin}/${language}`);
        expect(response.status).toBe(200);
        const html = await response.text();
        expect(html).toContain(`<html lang="${language}">`);
        expect(html).toContain(translations.SEO.TITLE.replace(/&/g, '&amp;'));
      }
      const missing = await fetch(`${origin}/en/missing`);
      expect(missing.status).toBe(404);
      expect(await missing.text()).toContain('noindex, follow');
    } finally {
      await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    }
  });
});
