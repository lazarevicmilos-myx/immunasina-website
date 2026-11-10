import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("consent-gated analytics", () => {
  let append: ReturnType<typeof vi.fn>;
  let reload: ReturnType<typeof vi.fn>;
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("PROD", true);
    append = vi.fn();
    reload = vi.fn();
    vi.stubGlobal("window", {
      location: { hostname: "immunasina.com", origin: "https://immunasina.com", pathname: "/sr", reload },
    });
    vi.stubGlobal("document", {
      title: "Srpski naslov", documentElement: { lang: "sr" },
      referrer: "https://example.com/article?private=value#fragment", cookie: "_ga=test; _ga_WN5P40SDHF=test; necessary=yes",
      head: { appendChild: append }, createElement: () => ({}),
    });
    vi.stubGlobal("localStorage", { getItem: vi.fn(() => null), setItem: vi.fn() });
  });
  afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); });

  it("does not load or queue analytics before acceptance or on rejection", async () => {
    const analytics = await import("../client/src/lib/analytics");
    analytics.applyConsent(null);
    analytics.trackPageView();
    analytics.saveConsent("denied");
    analytics.trackPageView();
    expect(append).not.toHaveBeenCalled();
    expect(window.dataLayer).toBeUndefined();
    expect(localStorage.setItem).toHaveBeenCalledWith(analytics.consentKey, "denied");
  });

  it("loads once after consent and tracks localized navigation without duplicate renders", async () => {
    const analytics = await import("../client/src/lib/analytics");
    analytics.saveConsent("granted");
    analytics.trackPageView();
    analytics.applyConsent("granted");
    analytics.trackPageView();
    expect(append).toHaveBeenCalledTimes(1);
    expect(append.mock.calls[0][0].src).toBe('https://www.googletagmanager.com/gtm.js?id=GTM-WNMJ2GZM');
    window.location.pathname = "/en";
    document.title = "English title";
    document.documentElement.lang = "en";
    analytics.trackPageView();
    window.location.pathname = "/sr";
    analytics.trackPageView();
    const commands = window.dataLayer!.filter(item => typeof item === 'object' && item !== null && 'length' in item).map(item => Array.from(item as ArrayLike<unknown>));
    expect(commands[0]).toEqual(["consent", "default", expect.objectContaining({ analytics_storage: "denied", ad_storage: "denied" })]);
    expect(commands.some(c => c[0] === "config" || c[0] === "js" || c[0] === "event")).toBe(false);
    expect(window.dataLayer![2]).toMatchObject({ event: 'gtm.js', 'gtm.start': expect.any(Number) });
    const views = window.dataLayer!.filter(item => (item as { event?: string }).event === "immunasina_page_view");
    expect(views).toHaveLength(3);
    expect(views[0]).toMatchObject({ page_referrer: "https://example.com/article" });
    expect(views[1]).toMatchObject({ page_location: "https://immunasina.com/en", page_title: "English title", language: "en" });
  });

  it("disables collection and reloads on withdrawal", async () => {
    const analytics = await import("../client/src/lib/analytics");
    analytics.saveConsent("granted");
    analytics.trackPageView();
    analytics.saveConsent("denied");
    const count = window.dataLayer!.length;
    window.location.pathname = "/en";
    analytics.trackPageView();
    expect(window.dataLayer).toHaveLength(count);
    expect((window as unknown as Record<string, unknown>)[`ga-disable-${analytics.measurementId}`]).toBe(true);
    expect(reload).toHaveBeenCalledOnce();
  });

  it.each(["localhost", "127.0.0.1", "preview.example.com"])("never loads Google on %s", async hostname => {
    window.location.hostname = hostname;
    const analytics = await import("../client/src/lib/analytics");
    analytics.saveConsent("granted");
    analytics.trackPageView();
    expect(append).not.toHaveBeenCalled();
    expect(window.dataLayer).toBeUndefined();
  });

  it("never loads in development, even on the production domain", async () => {
    vi.stubEnv("PROD", false);
    const analytics = await import("../client/src/lib/analytics");
    analytics.saveConsent("granted");
    expect(append).not.toHaveBeenCalled();
  });

  it("remains usable when browser storage is blocked", async () => {
    vi.mocked(localStorage.getItem).mockImplementation(() => { throw new Error("blocked"); });
    vi.mocked(localStorage.setItem).mockImplementation(() => { throw new Error("blocked"); });
    const analytics = await import("../client/src/lib/analytics");
    expect(analytics.readConsent()).toBeNull();
    expect(() => analytics.saveConsent("granted")).not.toThrow();
    expect(append).toHaveBeenCalledOnce();
  });
});
