/**
 * HeroSection — Full-viewport mountain hero with animated text reveal
 * Background: AI-generated Rtanj mountain at golden hour
 * Text: White on dark gradient overlay
 */

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663783644552/ePjzXSW5uHequDXcADS9Jc/hero_rtanj_mountain-966cnYam8dtLocX5wCsU84.webp";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => {
      el.querySelectorAll(".hero-reveal").forEach((item, i) => {
        setTimeout(() => {
          (item as HTMLElement).style.opacity = "1";
          (item as HTMLElement).style.transform = "translateY(0)";
        }, i * 120);
      });
    }, 200);
  }, []);

  const benefits = [
    t("HERO.BENEFIT_1"),
    t("HERO.BENEFIT_2"),
    t("HERO.BENEFIT_3"),
    t("HERO.BENEFIT_4"),
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      {/* Gradient overlay — dark at bottom for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.03 55 / 0.35) 0%, oklch(0.12 0.03 55 / 0.55) 50%, oklch(0.12 0.03 55 / 0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center py-32">
        {/* Badge */}
        <div
          className="hero-reveal mb-6 px-5 py-2 border btn-gold"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            borderColor: "oklch(0.72 0.12 80 / 0.6)",
            color: "oklch(0.85 0.08 80)",
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          {t("HERO.TAGLINE")}
        </div>

        {/* Brand name - IMMUNASINA */}
        <div
          className="hero-reveal mb-2"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "oklch(0.72 0.12 80)",
          }}
        >
          {t("HERO.BRAND")}
        </div>

        {/* Main headline */}
        <h1
          className="hero-reveal"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            color: "oklch(0.97 0.015 80)",
            maxWidth: "900px",
            marginBottom: "0.5rem",
          }}
        >
          {t("HERO.TITLE")}
        </h1>

        {/* Tagline */}
        <p
          className="hero-reveal"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 400,
            color: "oklch(0.85 0.08 80)",
            marginBottom: "2.5rem",
          }}
        >
          {t("HERO.SUBTITLE")}
        </p>

        {/* Ornament divider */}
        <div
          className="hero-reveal flex items-center gap-4 mb-8"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <span style={{ width: "60px", height: "1px", background: "oklch(0.72 0.12 80 / 0.6)" }} />
          <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "1rem" }}>✦</span>
          <span style={{ width: "60px", height: "1px", background: "oklch(0.72 0.12 80 / 0.6)" }} />
        </div>

        {/* Benefit pills */}
        <div
          className="hero-reveal flex flex-wrap justify-center gap-3 mb-10"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          {benefits.map((benefit) => (
            <span
              key={benefit}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.97 0.015 80)",
                border: "1px solid oklch(0.72 0.12 80 / 0.5)",
                borderRadius: "20px",
                padding: "0.4rem 0.8rem",
              }}
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <a
            href="#sensory"
            className="btn-ghost-gold"
            style={{
              padding: "0.8rem 2rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {t("HERO.CTA_DISCOVER")}
          </a>
          <a
            href="#pillars"
            className="btn-gold"
            style={{
              padding: "0.8rem 2rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {t("HERO.CTA_WHY_IT_WORKS")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "oklch(0.85 0.08 80 / 0.6)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em" }}
      >
        <span style={{ textTransform: "uppercase" }}>{t("HERO.SCROLL")}</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2v12M3 12l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
