/**
 * LegendSection — The mystical story of Mount Rtanj, Serbia
 * Layout: Asymmetric split — large image left, editorial text right
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const MOUNTAIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663783644552/ePjzXSW5uHequDXcADS9Jc/hero_rtanj_mountain-966cnYam8dtLocX5wCsU84.webp";

export default function LegendSection() {
  const { ref: sectionRef } = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section
      id="legend"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "oklch(0.97 0.015 80)", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image panel */}
          <div className="reveal relative" style={{ aspectRatio: "4/3" }}>
            <img
              src={MOUNTAIN_IMG}
              alt="Mount Rtanj"
              className="w-full h-full object-cover"
              style={{ filter: "sepia(0.15) saturate(1.1)" }}
            />
            {/* Gold frame accent */}
            <div
              className="absolute"
              style={{
                top: "-16px",
                left: "-16px",
                right: "16px",
                bottom: "16px",
                border: "1px solid oklch(0.72 0.12 80 / 0.35)",
                pointerEvents: "none",
              }}
            />
            {/* Seal badge */}
            <div
              className="absolute bottom-6 right-6 flex items-center justify-center"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "1.5px solid oklch(0.72 0.12 80)",
                backgroundColor: "oklch(0.97 0.015 80 / 0.92)",
                backdropFilter: "blur(4px)",
              }}
            >
              <div className="text-center" style={{ padding: "0.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.45rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "oklch(0.72 0.12 80)",
                    lineHeight: 1.6,
                  }}
                >
                  <div>{t("LEGEND.SECTION_TITLE")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text panel */}
          <div className="flex flex-col gap-6">
            <div className="reveal section-label">{t("LEGEND.HEADING")}</div>

            <div className="reveal flex items-center gap-4">
              <span style={{ width: "40px", height: "1px", background: "oklch(0.72 0.12 80)" }} />
              <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "0.9rem" }}>✦</span>
            </div>

            <h2
              className="reveal"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "oklch(0.22 0.04 55)",
              }}
            >
              {t("LEGEND.PARAGRAPH_1")}
              <span style={{ color: "oklch(0.55 0.12 75)", fontStyle: "italic" }}>
                {t("LEGEND.PARAGRAPH_1_1")}
              </span>
            </h2>

            <p
              className="reveal"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.40 0.03 60)",
              }}
            >
              {t("LEGEND.PARAGRAPH_2")}
            </p>

            <p
              className="reveal"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.40 0.03 60)",
              }}
            >
              {t("LEGEND.PARAGRAPH_3")}
              <strong style={{ color: "oklch(0.22 0.04 55)", fontWeight: 700 }}>
                {t("LEGEND.PARAGRAPH_3_1")}
              </strong>{" "}
              {t("LEGEND.PARAGRAPH_3_2")}
            </p>

            {/* Stats row */}
            <div className="reveal grid grid-cols-3 gap-4 pt-4" style={{ borderTop: "1px solid oklch(0.85 0.03 75)" }}>
              {[
                { value: t("LEGEND.ALTITUDE"), label: t("LEGEND.ALTITUDE_LABEL") },
                { value: t("LEGEND.TRADITION"), label: t("LEGEND.TRADITION_LABEL") },
                { value: t("LEGEND.REGION"), label: t("LEGEND.REGION_LABEL") },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "oklch(0.72 0.12 80)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "oklch(0.55 0.03 65)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
