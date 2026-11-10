export const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-WN5P40SDHF";
export const containerId = import.meta.env.VITE_GTM_CONTAINER_ID || "GTM-K46Z6HCT";
export const consentKey = "immunasina.analytics-consent.v1";
export const settingsEvent = "immunasina:analytics-settings";
export type AnalyticsConsent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;
let consent: AnalyticsConsent | null = null;
let lastPage = "";

export function analyticsEnabled() {
  return import.meta.env.PROD && ["immunasina.com", "www.immunasina.com"].includes(window.location.hostname);
}

export function readConsent(): AnalyticsConsent | null {
  try {
    const saved = localStorage.getItem(consentKey);
    return saved === "granted" || saved === "denied" ? saved : null;
  } catch { return null; }
}

function command(..._args: unknown[]) {
  window.dataLayer ??= [];
  window.dataLayer.push(arguments);
}

function setDisabled(disabled: boolean) {
  (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = disabled;
}

function clearAnalyticsCookies() {
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of ["", window.location.hostname, ".immunasina.com"]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export function applyConsent(choice: AnalyticsConsent | null) {
  consent = choice;
  if (choice !== "granted") {
    setDisabled(true);
    lastPage = "";
    if (initialized) {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
    }
    return;
  }
  if (!analyticsEnabled()) return;
  setDisabled(false);
  if (initialized) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  initialized = true;
  window.gtag = command;
  command("consent", "default", {
    analytics_storage: "denied", ad_storage: "denied",
    ad_user_data: "denied", ad_personalization: "denied",
  });
  command("consent", "update", { analytics_storage: "granted" });
  // Consent is queued before GTM starts. GA4 configuration belongs to the container.
  window.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "google-tag-manager";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`;
  document.head.appendChild(script);
}

export function saveConsent(choice: AnalyticsConsent) {
  try { localStorage.setItem(consentKey, choice); } catch { /* Honor the choice in this tab even if storage is unavailable. */ }
  applyConsent(choice);
  // Unload Google's listeners when withdrawing consent, including enhanced measurement.
  if (choice === "denied" && initialized) window.location.reload();
}

export function trackPageView() {
  if (consent !== "granted" || !initialized || !analyticsEnabled()) return;
  const path = window.location.pathname;
  if (!/^\/(en|sr)(?:\/|$)/.test(path) || path === lastPage) return;
  const previousPage = lastPage;
  lastPage = path;
  // Exclude query strings and fragments so form values and other URL data aren't sent.
  window.dataLayer!.push({
    event: "immunasina_page_view",
    page_location: window.location.origin + path,
    page_title: document.title,
    page_referrer: previousPage ? window.location.origin + previousPage : safeReferrer(),
    language: document.documentElement.lang,
  });
}

function safeReferrer() {
  try { const url = new URL(document.referrer); return url.origin + url.pathname; }
  catch { return ""; }
}
