/**
 * HeroSection — Full-viewport mountain hero with animated text reveal
 * Background: AI-generated Premium functional beverage
 * Text: White on dark gradient overlay
 */

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const HERO_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/hero_bck.webp";
const IMMUNITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunity%20pictogram.webp";
const DIGESTIVITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Digestivity%20pictogram.webp";
const VITALITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Vitality%20pictogram.webp";
const EXPERIENCE_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/icon_experience_no_bkg.webp";

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

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left">
          {/* H1 Section - Brand and Tagline */}
          <div className="mb-2 pt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-widest mb-2 text-[oklch(0.265_0.055_120)]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t("HERO.H1_BRAND")}
            </h1>
            <p className="text-1xl md:text-2xl lg:text-2xl tracking-widest uppercase text-[oklch(0.72_0.12_80)] mb-2 letter-spacing">
              {t("HERO.H1_TAGLINE")}
            </p>
          </div>
          
          {/* Ornament divider */}
          <div
            className="hero-reveal flex items-center gap-6"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <span style={{ width: "160px", height: "1px", background: "oklch(0.72 0.12 80 / 0.6)" }} />
            <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "1rem" }}>✦</span>
            <span style={{ width: "160px", height: "1px", background: "oklch(0.72 0.12 80 / 0.6)" }} />
          </div>

          {/* Main Hero Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-4 text-[oklch(0.22_0.04_55)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("HERO.TITLE_PART1")}
            <br />
            {t("HERO.TITLE_PART2")}
          </h2>
          
          {/* Badge */}
          <p
            className="hero-reveal mb-6 px-5 py-2 border btn-gold"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
              borderColor: "oklch(0.72 0.12 80 / 0.6)",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {t("HERO.SUBTITLE")}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <span className="flex items-center space-x-2 text-sm tracking-widest uppercase font-bold text-[oklch(0.4_0.03_55)]">
              {/* Icon */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={IMMUNITY_PICT_IMG}
                />
              </div>
              <span className="text-[oklch(0.72_0.12_80)]">{t("HERO.BENEFIT_1")}</span>
            </span>
            <span className="text-[oklch(0.72_0.12_80)]">•</span>
            <span className="flex items-center space-x-2 text-sm tracking-widest uppercase font-bold text-[oklch(0.4_0.03_55)]">
              {/* Icon */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "30px",
                  height: "30px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={DIGESTIVITY_PICT_IMG}
                />
              </div>
              <span className="text-[oklch(0.72_0.12_80)]">{t("HERO.BENEFIT_2")}</span>
            </span>
            <span className="flex items-center space-x-2 text-sm tracking-widest uppercase font-bold text-[oklch(0.4_0.03_55)]">
              {/* Icon */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={VITALITY_PICT_IMG}
                />
              </div>
              <span className="text-[oklch(0.72_0.12_80)]">{t("HERO.BENEFIT_3")}</span>
            </span>
            <span className="text-[oklch(0.72_0.12_80)]">•</span>
            <span className="flex items-center space-x-2 text-sm tracking-widest uppercase font-bold text-[oklch(0.4_0.03_55)]">
              {/* Icon */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={EXPERIENCE_PICT_IMG}
                />
              </div>
              <span className="text-[oklch(0.72_0.12_80)]">{t("HERO.BENEFIT_4")}</span>
            </span>
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
              href="#products"
              className="btn-green"
              style={{
                padding: "0.8rem 2rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                color: "oklch(0.85 0.08 80)",
              }}
            >
              {t("HERO.CTA_DISCOVER")} &gt;
            </a>
            <a
              href="#why-it-works"
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
              {t("HERO.CTA_WHY_IT_WORKS")} &gt;
            </a>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          {/* The background image handles the visual on the right side */}
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
