/**
 * HowToPrepareSection — Step-by-step brewing ritual
 * Shows the 30-second preparation process: 25g powder + 220ml cold water
 * Professional SVG icons for each step
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";



export default function HowToPrepareSection() {
  const { t } = useTranslation();
  const { ref } = useScrollReveal();

  const steps = [
    {
      number: t("HOWTO.STEP_1_NUMBER"),
      title: t("HOWTO.STEP_1_TITLE"),
      desc: t("HOWTO.STEP_1_DESC"),
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 12C14 12 14 20 14 24C14 28 16 32 20 34C24 36 32 36 36 34C40 32 42 28 42 24C42 20 42 12 42 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 12L28 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="22" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="28" cy="24" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="34" cy="22" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      ),
    },
    {
      number: t("HOWTO.STEP_2_NUMBER"),
      title: t("HOWTO.STEP_2_TITLE"),
      desc: t("HOWTO.STEP_2_DESC"),
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12H38V42C38 46 35 48 28 48C21 48 18 46 18 42V12Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <path d="M20 28C20 28 20 40 28 40C36 40 36 28 36 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M20 26Q24 24 28 26T36 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
    },
    {
      number: t("HOWTO.STEP_3_NUMBER"),
      title: t("HOWTO.STEP_3_TITLE"),
      desc: t("HOWTO.STEP_3_DESC"),
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 18H36V40C36 44 33 46 28 46C23 46 20 44 20 40V18Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <rect x="24" y="10" width="8" height="8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <circle cx="26" cy="12" r="1" fill="currentColor" />
          <circle cx="30" cy="12" r="1" fill="currentColor" />
          <path d="M16 28L12 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M40 28L44 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M16 32L12 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M40 32L44 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
    },
    {
      number: t("HOWTO.STEP_4_NUMBER"),
      title: t("HOWTO.STEP_4_TITLE"),
      desc: t("HOWTO.STEP_4_DESC"),
      icon: (
        <img
          src="https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/smiley%20pictogram.webp"
          alt="Thumbs up"
          width="56"
          height="56"
          style={{ objectFit: "contain" }}
        />
      ),
    },
  ];

  return (
    <section
      id="how-to-prepare"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "oklch(0.97 0.015 80)", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal section-label mb-4">            {t("HOWTO.TITLE")}</div>
          <div className="reveal flex items-center justify-center gap-4 mb-6">
            <span style={{ width: "50px", height: "1px", background: "oklch(0.72 0.12 80)" }} />
            <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "0.9rem" }}>✦</span>
            <span style={{ width: "50px", height: "1px", background: "oklch(0.72 0.12 80)" }} />
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              color: "oklch(0.22 0.04 55)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            {t("HOWTO.HEADING_PART1")}{" "}
            <span style={{ fontStyle: "italic", color: "oklch(0.55 0.12 75)" }}>
              {t("HOWTO.HEADING_PART2")}
            </span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.40 0.03 60)",
              lineHeight: 1.8,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            {t("HOWTO.SUBTITLE")}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal flex flex-col gap-4 p-6"
              style={{
                transitionDelay: `${i * 80}ms`,
                backgroundColor: "oklch(0.93 0.025 75)",
                border: "1px solid oklch(0.85 0.03 75)",
                transition: "all 250ms cubic-bezier(0.23,1,0.32,1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "oklch(0.95 0.02 78)";
                el.style.borderColor = "oklch(0.72 0.12 80 / 0.5)";
                el.style.boxShadow = "0 8px 24px oklch(0.72 0.12 80 / 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "oklch(0.93 0.025 75)";
                el.style.borderColor = "oklch(0.85 0.03 75)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div style={{ color: "oklch(0.72 0.12 80)", display: "flex", alignItems: "center", justifyContent: "center", height: "64px" }}>
                {step.icon}
              </div>

              {/* Number */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "oklch(0.72 0.12 80 / 0.4)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "oklch(0.22 0.04 55)",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.825rem",
                  color: "oklch(0.50 0.03 65)",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {step.desc}
              </p>

              <div style={{ width: "24px", height: "1px", background: "oklch(0.72 0.12 80 / 0.5)" }} />
            </div>
          ))}
        </div>


        {/* Key specs callout */}
        <div
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{
            backgroundColor: "oklch(0.93 0.025 75)",
            border: "1px solid oklch(0.72 0.12 80 / 0.3)",
            padding: "2rem",
          }}
        >
          {[
            { label: t("HOWTO.SPEC_1_TITLE"), value: t("HOWTO.SPEC_1_DESC") },
            { label: t("HOWTO.SPEC_2_TITLE"), value: t("HOWTO.SPEC_2_DESC") },
            { label: t("HOWTO.SPEC_3_TITLE"), value: t("HOWTO.SPEC_3_DESC") },
          ].map((spec) => (
            <div key={spec.label} className="text-center">
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 80)",
                  marginBottom: "0.5rem",
                }}
              >
                {spec.label}
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "oklch(0.22 0.04 55)",
                }}
              >
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip */}
        <div
          className="reveal mt-12 p-6 text-center"
          style={{
            backgroundColor: "oklch(0.22 0.04 55)",
            border: "1px solid oklch(0.72 0.12 80 / 0.3)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "oklch(0.72 0.12 80)",
              lineHeight: 1.7,
            }}
          >
            💡 <strong style={{ fontStyle: "normal", color: "oklch(0.97 0.015 80)" }}>{t("HOWTO.FOOTER_1")}</strong> {t("HOWTO.FOOTER_2")}
          </p>
        </div>
      </div>
    </section>
  );
}
