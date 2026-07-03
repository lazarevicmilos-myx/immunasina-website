/**
 * PillarsSection — Three Pillars of Wellness
 * Immune Support, Digestive Comfort, Vitality
 * Icons match the presentation (page 6)
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const IMMUNITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunity%20pictogram.webp";
const DIGESTIVITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Digestivity%20pictogram.webp";
const VITALITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Vitality%20pictogram.webp";


export default function PillarsSection() {
  const { t } = useTranslation();
  const { ref } = useScrollReveal();

  const pillars = [
    {
      icon: IMMUNITY_PICT_IMG,
      label: t("PILLARS.PILLAR_1_TITLE"),
      subtitle: t("PILLARS.PILLAR_1_SUBTITLE"),
      desc: t("PILLARS.PILLAR_1_DESC"),
    },
    {
      icon: DIGESTIVITY_PICT_IMG,
      label: t("PILLARS.PILLAR_2_TITLE"),
      subtitle: t("PILLARS.PILLAR_2_SUBTITLE"),
      desc: t("PILLARS.PILLAR_2_DESC"),
    },
    {
      icon: VITALITY_PICT_IMG,
      label: t("PILLARS.PILLAR_3_TITLE"),
      subtitle: t("PILLARS.PILLAR_3_SUBTITLE"),
      desc: t("PILLARS.PILLAR_3_DESC"),
    },
  ];

  return (
    <section
      id="pillars"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "oklch(0.97 0.015 80)", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal section-label mb-4">            {t("PILLARS.TITLE")}</div>
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
            }}
          >
            {t("PILLARS.HEADING_PART1")}{" "}
            <span style={{ fontStyle: "italic", color: "oklch(0.55 0.12 75)" }}>{t("PILLARS.HEADING_PART2")}</span>
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className="reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="mb-6 flex items-center justify-center"
                style={{
                  width: "80px",
                  height: "80px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={pillar.icon}
                />
              </div>

              {/* Label */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "oklch(0.22 0.04 55)",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                {pillar.label}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "oklch(0.55 0.12 75)",
                  marginBottom: "1rem",
                }}
              >
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.9rem",
                  color: "oklch(0.50 0.03 65)",
                  lineHeight: 1.7,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
