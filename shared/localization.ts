export const languages = ["en", "sr"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "sr";

export function languageFromPath(path: string): Language | undefined {
  return /^\/(en|sr)(?:\/|$)/.exec(path)?.[1] as Language | undefined;
}

export function localizedPath(path: string, language: Language): string {
  const suffix = path.replace(/^\/(en|sr)(?=\/|$|\?|#)/, "");
  if (!suffix || suffix === "/") return `/${language}`;
  return `/${language}${/^[/?#]/.test(suffix) ? suffix : `/${suffix}`}`;
}

export function pageInfo(pathname: string) {
  const language = languageFromPath(pathname) ?? defaultLanguage;
  const path = localizedPath(pathname, language).replace(/\/+$/, "");
  const page = path === `/${language}` ? "home" : path === `/${language}/science` ? "science" : path === `/${language}/partners` ? "partners" : "notFound";
  return { language, path, page, isHome: page === "home", isKnown: page !== "notFound" };
}

export function pageRedirect(url: URL): string | undefined {
  if (url.pathname === "/index.html") return `/sr${url.search}${url.hash}`;
  if (!languageFromPath(url.pathname)) {
    return `${localizedPath(url.pathname, defaultLanguage)}${url.search}${url.hash}`;
  }
  if (url.pathname.endsWith("/")) {
    return `${url.pathname.replace(/\/+$/, "")}${url.search}${url.hash}`;
  }
}
