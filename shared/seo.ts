import en from "../client/src/locales/en.json";
import sr from "../client/src/locales/sr.json";
import { languages, localizedPath, pageInfo } from "./localization";

export const siteUrl = "https://immunasina.com";
const image = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/rtanj_latte_bkg.webp";
const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const json = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export function seoMarkup(pathname: string): string {
  const { language, path, isHome } = pageInfo(pathname);
  const translations = language === "en" ? en : sr;
  const seo = translations.SEO;
  const title = isHome ? seo.TITLE : translations.NOT_FOUND.SEO_TITLE;
  const description = isHome ? seo.DESCRIPTION : translations.NOT_FOUND.DESCRIPTION;
  const url = siteUrl + path;
  const meta = (key: string, value: string, property = false) => `<meta data-seo ${property ? "property" : "name"}="${key}" content="${escape(value)}" />`;
  return [
    `<title data-seo>${escape(title)}</title>`,
    meta("description", description),
    meta("keywords", isHome ? Object.entries(seo).filter(([key]) => key.startsWith("KEYWORDS_")).map(([, value]) => value).join(", ") : ""),
    meta("robots", isHome ? "index, follow" : "noindex, follow"),
    `<link data-seo rel="canonical" href="${escape(url)}" />`,
    ...(isHome ? [...languages.map(lang => `<link data-seo rel="alternate" hreflang="${lang}" href="${siteUrl}${localizedPath(path, lang)}" />`), `<link data-seo rel="alternate" hreflang="x-default" href="${siteUrl}/sr" />`] : []),
    meta("og:type", "website", true), meta("og:url", url, true),
    meta("og:title", title, true), meta("og:description", description, true),
    meta("og:image", image, true), meta("og:locale", language === "en" ? "en_US" : "sr_RS", true),
    meta("og:locale:alternate", language === "en" ? "sr_RS" : "en_US", true),
    meta("twitter:card", "summary_large_image"), meta("twitter:title", title),
    meta("twitter:description", description), meta("twitter:image", image),
    ...(isHome ? [
      `<script data-seo type="application/ld+json">${json({ "@context": "https://schema.org", "@type": "Organization", name: "Immunasina", url, logo: `${siteUrl}/favicon.ico`, description, sameAs: [] })}</script>`,
      `<script data-seo type="application/ld+json">${json({ "@context": "https://schema.org", "@type": "Product", name: title, image, description, url, brand: { "@type": "Brand", name: "Immunasina" }, offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "45.50", highPrice: "63.50", offerCount: "3" } })}</script>`,
    ] : []),
  ].join("\n    ");
}

export function localizeHtml(html: string, pathname: string): string {
  return html.replace(/<html\s+lang="[^"]*"/, `<html lang="${pageInfo(pathname).language}"`)
    .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, () => `<!-- SEO:START -->\n    ${seoMarkup(pathname)}\n    <!-- SEO:END -->`);
}
