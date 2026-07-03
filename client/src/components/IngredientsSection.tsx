/**
 * IngredientsSection — Two key ingredient stories
 * 1. Rtanj Tea (Satureja montana) — traditional + scientific
 * 2. Lyophilized Donkey Milk — ancient + modern
 * Layout: Alternating full-bleed split panels
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const HERB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663783644552/ePjzXSW5uHequDXcADS9Jc/satureja_herb-QX5CoNXzg8aA2rPGwarNsL.webp";
const DONKEY_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20donkey_left.webp";




export default function IngredientsSection() {
  const { t } = useTranslation();
  const { ref: ref1 } = useScrollReveal();
  const { ref: ref2 } = useScrollReveal();

  return (
    <section id="ingredients">
      {/* Ingredient 1: Rtanj Tea */}
      <div
        ref={ref1 as React.RefObject<HTMLDivElement>}
        style={{ backgroundColor: "oklch(0.93 0.025 75)", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div className="reveal section-label">{t("INGREDIENTS.INGREDIENT_1_LABEL")}</div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "oklch(0.22 0.04 55)",
                }}
              >
                {t("INGREDIENTS.INGREDIENT_1_NAME")}
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 400, fontSize: "0.7em", color: "oklch(0.55 0.12 75)" }}>
                  {t("INGREDIENTS.INGREDIENT_1_SCIENTIFIC")}
                </span>
              </h2>
              <p
                className="reveal"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "oklch(0.40 0.03 60)" }}
              >
                {t("INGREDIENTS.INGREDIENT_1_DESC")}
              </p>

              <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Traditional */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "oklch(0.72 0.12 80)",
                      marginBottom: "0.75rem",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid oklch(0.72 0.12 80 / 0.3)",
                    }}
                  >
                    {t("INGREDIENTS.RTANJ_TRADITIONAL_USES_TITLE")}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {Object.values(t("INGREDIENTS.RTANJ_TRADITIONAL_USES", { returnObjects: true }) as Record<string, string >).map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2"
                        style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "oklch(0.40 0.03 60)" }}
                      >
                        <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "0.5rem" }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Science */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "oklch(0.72 0.12 80)",
                      marginBottom: "0.75rem",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid oklch(0.72 0.12 80 / 0.3)",
                    }}
                  >
                    {t("INGREDIENTS.RTANJ_SCIENCE_CONFIRMS_TITLE")}
                  </div>
                  <ul className="flex flex-col gap-3">
                    {Object.values(t("INGREDIENTS.RTANJ_SCIENCE_ITEMS", { returnObjects: true }) as Record<string, { TITLE: string; DESC: string }>).map((item) => (
                      <li key={item.TITLE}>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.22 0.04 55)" }}>
                          {item.TITLE}
                        </div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.50 0.03 65)", lineHeight: 1.5 }}>
                          {item.DESC}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer quote */}
              <div
                className="reveal flex items-start gap-3 p-4"
                style={{ backgroundColor: "oklch(0.97 0.015 80)", border: "1px solid oklch(0.72 0.12 80 / 0.25)" }}
              >
                <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "0.8rem", marginTop: "0.1rem" }}>◆</span>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: "oklch(0.30 0.04 60)", lineHeight: 1.6 }}>
                  {t("INGREDIENTS.RTANJ_FOOTER_QUOTE_PART1")}{" "}
                  <strong style={{ color: "oklch(0.55 0.12 75)", fontStyle: "normal" }}>{t("INGREDIENTS.RTANJ_FOOTER_QUOTE_PART2")}</strong>
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="reveal relative order-1 lg:order-2" style={{ aspectRatio: "4/3" }}>
              <img
                src={HERB_IMG}
                alt="Satureja montana — Rtanj Tea herb"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 right-0"
                style={{
                  padding: "0.75rem 1.25rem",
                  backgroundColor: "oklch(0.22 0.04 55 / 0.85)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.72 0.12 80)" }}>
                  {t("INGREDIENTS.RTANJ_IMAGE_CAPTION")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredient 2: Donkey Milk */}
      <div
        ref={ref2 as React.RefObject<HTMLDivElement>}
        style={{ backgroundColor: "oklch(0.97 0.015 80)", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="reveal relative" style={{ aspectRatio: "4/4" }}>
              <img
                src={DONKEY_IMG}
                alt="Lyophilized donkey milk — nature's rarest milk"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-1 left-10 flex items-center justify-center"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "1.5px solid oklch(0.72 0.12 80)",
                  backgroundColor: "oklch(0.97 0.015 80 / 0.9)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="text-center" style={{ padding: "0.4rem" }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.02rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "oklch(0.72 0.12 80)", lineHeight: 1.7 }}>
                      {t("INGREDIENTS.DONKEY_MILK_IMAGE_CAPTION_PART1")}<br />{t("INGREDIENTS.DONKEY_MILK_IMAGE_CAPTION_PART2")}<br />{t("INGREDIENTS.DONKEY_MILK_IMAGE_CAPTION_PART3")}<br />{t("INGREDIENTS.DONKEY_MILK_IMAGE_CAPTION_PART4")}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6">
              <div className="reveal section-label">{t("INGREDIENTS.INGREDIENT_2_LABEL")}</div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "oklch(0.22 0.04 55)",
                }}
              >
                {t("INGREDIENTS.INGREDIENT_2_NAME_PART1")}{" "}
                <span style={{ fontStyle: "italic", color: "oklch(0.55 0.12 75)" }}>{t("INGREDIENTS.INGREDIENT_2_NAME_PART2")}</span>
              </h2>
              <p
                className="reveal"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "oklch(0.40 0.03 60)" }}
              >
                {t("INGREDIENTS.INGREDIENT_2_DESC")}
              </p>

              <div className="reveal flex flex-col gap-4">
                {Object.values(t("INGREDIENTS.DONKEY_MILK_BENEFITS", { returnObjects: true }) as Record<string, { TITLE: string; DESC: string }>).map((benefit) => (
                  <div
                    key={benefit.TITLE}
                    className="flex items-start gap-4 p-4 ingredient-card"
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid oklch(0.72 0.12 80 / 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "oklch(0.72 0.12 80)",
                        fontSize: "0.7rem",
                      }}
                    >
                      ✦
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", fontWeight: 700, color: "oklch(0.22 0.04 55)", marginBottom: "0.2rem" }}>
                        {benefit.TITLE}
                      </div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "oklch(0.50 0.03 65)", lineHeight: 1.5 }}>
                        {benefit.DESC}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lyophilization callout */}
              <div
                className="reveal flex items-start gap-3 p-4"
                style={{ backgroundColor: "oklch(0.93 0.025 75)", border: "1px solid oklch(0.72 0.12 80 / 0.25)" }}
              >
                <span style={{ fontSize: "1.2rem", marginTop: "0.1rem" }}>❄</span>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "oklch(0.40 0.03 60)", lineHeight: 1.6 }}>
                  {t("INGREDIENTS.DONKEY_MILK_FOOTER_QUOTE_PART1")}{" "}
                  <strong style={{ color: "oklch(0.55 0.12 75)" }}>{t("INGREDIENTS.DONKEY_MILK_FOOTER_QUOTE_PART2")}</strong>{" "}
                  {t("INGREDIENTS.DONKEY_MILK_FOOTER_QUOTE_PART3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
