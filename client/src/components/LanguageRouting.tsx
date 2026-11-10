import { useLayoutEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { pageInfo, pageRedirect } from "@shared/localization";
import { seoMarkup } from "@shared/seo";

export default function LanguageRouting({ children }: { children: ReactNode }) {
  const [path, navigate] = useLocation();
  const { i18n } = useTranslation();
  const { language } = pageInfo(path);

  useLayoutEffect(() => {
    const redirect = pageRedirect(new URL(window.location.href));
    if (redirect) {
      navigate(redirect, { replace: true });
      return;
    }
    void i18n.changeLanguage(language);
    document.documentElement.lang = language;
    const template = document.createElement("template");
    template.innerHTML = seoMarkup(path);
    document.head.querySelectorAll("[data-seo]").forEach(node => node.remove());
    document.head.appendChild(template.content);
  }, [path, language, i18n, navigate]);

  return children;
}
