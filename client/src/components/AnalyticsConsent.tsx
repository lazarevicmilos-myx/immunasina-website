import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { applyConsent, consentKey, readConsent, saveConsent, settingsEvent, trackPageView, type AnalyticsConsent as Consent } from "@/lib/analytics";

export default function AnalyticsConsent() {
  const { t } = useTranslation();
  const [path] = useLocation();
  const [choice, setChoice] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    setChoice(saved);
    setOpen(saved === null);
  }, []);

  useEffect(() => {
    applyConsent(choice);
    trackPageView();
  }, [choice, path]);

  useEffect(() => {
    const show = () => setOpen(true);
    const sync = (event: StorageEvent) => {
      if (event.key !== consentKey && event.key !== null) return;
      // Reload to remove any active tracking listeners after a choice in another tab.
      window.location.reload();
    };
    window.addEventListener(settingsEvent, show);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(settingsEvent, show);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const choose = (value: Consent) => {
    saveConsent(value);
    setChoice(value);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <section aria-labelledby="analytics-consent-title" className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-2xl rounded-lg border border-stone-300 bg-[#faf7ef] p-5 text-stone-800 shadow-xl" style={{ fontFamily: "'Lato', sans-serif" }}>
      <h2 id="analytics-consent-title" className="mb-2 text-lg font-bold">{t("ANALYTICS.TITLE")}</h2>
      <p className="mb-4 text-sm leading-relaxed">{t("ANALYTICS.DESCRIPTION")}</p>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("granted")} className="rounded border border-stone-700 px-4 py-2 text-sm font-bold hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2">{t("ANALYTICS.ACCEPT")}</button>
        <button type="button" onClick={() => choose("denied")} className="rounded border border-stone-700 px-4 py-2 text-sm font-bold hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2">{t("ANALYTICS.REJECT")}</button>
        {choice !== null && <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 text-sm underline">{t("ANALYTICS.CLOSE")}</button>}
      </div>
    </section>
  );
}
