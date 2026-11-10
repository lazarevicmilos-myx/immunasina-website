import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage, languageFromPath } from "@shared/localization";
import enTranslations from '../locales/en.json';
import srTranslations from '../locales/sr.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: enTranslations },
      sr: { translation: srTranslations },
    },
    supportedLngs: ["en", "sr"],
    lng: languageFromPath(window.location.pathname) ?? defaultLanguage,
  });

export default i18n;
