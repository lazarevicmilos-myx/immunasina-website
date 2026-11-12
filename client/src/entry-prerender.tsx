import { renderToString } from "react-dom/server";
import { Suspense } from "react";
import { Router } from "wouter";
import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import App from "./App";
import en from "./locales/en.json";
import sr from "./locales/sr.json";
import { pageInfo } from "../../shared/localization";
export { localizeHtml } from "../../shared/seo";

export async function render(path: string) {
  const i18n = createInstance();
  await i18n.init({
    lng: pageInfo(path).language,
    fallbackLng: "en",
    resources: { en: { translation: en }, sr: { translation: sr } },
    interpolation: { escapeValue: false },
  });
  return renderToString(
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <Router ssrPath={path}><App /></Router>
      </I18nextProvider>
    </Suspense>
  );
}
