/**
 * FormulationSection — The complete product formulation
 * Shows the 4 ingredients and positions the product as a new category
 * Layout: Dark section with gold accents, centered editorial
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";



export default function FormulationSection() {
  const { t } = useTranslation();
  const { ref } = useScrollReveal();

  const ingredients = [
    {
      number: "01",
      name: t("FORMULATION.LAYER_1_NAME"),
      latin: t("FORMULATION.LAYER_1_SCIENTIFIC"),
      desc: t("FORMULATION.LAYER_1_DESC"),
      icon: "🌿",
    },
    {
      number: "02",
      name: t("FORMULATION.LAYER_2_NAME"),
      latin: t("FORMULATION.LAYER_2_SCIENTIFIC"),
      desc: t("FORMULATION.LAYER_2_DESC"),
      icon: "🥛",
    },
    {
      number: "03",
      name: t("FORMULATION.LAYER_3_NAME"),
      latin: t("FORMULATION.LAYER_3_SCIENTIFIC"),
      desc: t("FORMULATION.LAYER_3_DESC"),
      icon: "🍯",
    },
    {
      number: "04",
      name: t("FORMULATION.LAYER_4_NAME"),
      latin: t("FORMULATION.LAYER_4_SCIENTIFIC"),
      desc: t("FORMULATION.LAYER_4_DESC"),
      icon: "⚪",
    },
  ];

  return (
    <section
      id="formulation"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "oklch(0.22 0.04 55)", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="reveal section-label mb-4"
            style={{ color: "oklch(0.72 0.12 80)" }}
          >
            {t("FORMULATION.TITLE")}
          </div>
          <div className="reveal flex items-center justify-center gap-4 mb-6">
            <span style={{ width: "50px", height: "1px", background: "oklch(0.72 0.12 80 / 0.5)" }} />
            <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "0.9rem" }}>✦</span>
            <span style={{ width: "50px", height: "1px", background: "oklch(0.72 0.12 80 / 0.5)" }} />
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              color: "oklch(0.97 0.015 80)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            {t("FORMULATION.HEADING_PART1")}{" "}
            <span style={{ fontStyle: "italic", color: "oklch(0.72 0.12 80)" }}>
              {t("FORMULATION.HEADING_PART2")}
            </span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.75 0.02 70)",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {t("FORMULATION.DESCRIPTION_PART1")}{" "}
            <em style={{ color: "oklch(0.72 0.12 80)", fontStyle: "italic" }}>{t("FORMULATION.DESCRIPTION_PART2")}</em>
          </p>
        </div>

        {/* Ingredient grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ingredients.map((ing, i) => (
            <div
              key={ing.number}
              className="reveal flex flex-col gap-4 p-6"
              style={{
                transitionDelay: `${i * 80}ms`,
                border: "1px solid oklch(0.97 0.015 80 / 0.12)",
                backgroundColor: "oklch(0.97 0.015 80 / 0.04)",
                transition: "all 250ms cubic-bezier(0.23,1,0.32,1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "oklch(0.97 0.015 80 / 0.08)";
                el.style.borderColor = "oklch(0.72 0.12 80 / 0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "oklch(0.97 0.015 80 / 0.04)";
                el.style.borderColor = "oklch(0.97 0.015 80 / 0.12)";
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  color: "oklch(0.72 0.12 80 / 0.4)",
                  lineHeight: 1,
                }}
              >
                {ing.number}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "oklch(0.97 0.015 80)",
                    lineHeight: 1.2,
                    marginBottom: "0.25rem",
                  }}
                >
                  {ing.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.7rem",
                    fontStyle: "italic",
                    color: "oklch(0.72 0.12 80)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {ing.latin}
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.825rem",
                  color: "oklch(0.70 0.02 70)",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {ing.desc}
              </p>
              <div style={{ width: "24px", height: "1px", background: "oklch(0.72 0.12 80 / 0.5)" }} />
            </div>
          ))}
        </div>

        {/* Technical details */}
        <div
          className="reveal"
          style={{
            border: "1px solid oklch(0.72 0.12 80 / 0.3)",
            padding: "2.5rem",
            backgroundColor: "oklch(0.97 0.015 80 / 0.04)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 80)",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid oklch(0.72 0.12 80 / 0.3)",
                }}
              >
                {t("FORMULATION.SPECS_TITLE")}
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: t("FORMULATION.SPECS_FORMAT"), value: t("FORMULATION.SPECS_FORMAT_VALUE") },
                  { label: t("FORMULATION.SPECS_WEIGHT"), value: t("FORMULATION.SPECS_WEIGHT_VALUE") },
                  { label: t("FORMULATION.SPECS_SERVINGS"), value: t("FORMULATION.SPECS_SERVINGS_VALUE") },
                  { label: t("FORMULATION.SPECS_PRESERVATION"), value: t("FORMULATION.SPECS_PRESERVATION_VALUE") },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "oklch(0.60 0.02 65)" }}>
                      {spec.label}
                    </span>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.90 0.015 80)" }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 80)",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid oklch(0.72 0.12 80 / 0.3)",
                }}
              >
                {t("FORMULATION.QUALITY_TITLE")}
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: t("FORMULATION.QUALITY_MILK"), value: t("FORMULATION.QUALITY_MILK_VALUE") },
                  { label: t("FORMULATION.QUALITY_HERB"), value: t("FORMULATION.QUALITY_HERB_VALUE") },
                  { label: t("FORMULATION.QUALITY_SWEETENER"), value: t("FORMULATION.QUALITY_SWEETENER_VALUE") },
                  { label: t("FORMULATION.QUALITY_ADDITIVES"), value: t("FORMULATION.QUALITY_ADDITIVES_VALUE") },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "oklch(0.60 0.02 65)" }}>
                      {spec.label}
                    </span>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.90 0.015 80)" }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 80)",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid oklch(0.72 0.12 80 / 0.3)",
                }}
              >
                {t("FORMULATION.WELLNESS_TITLE")}
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: t("FORMULATION.WELLNESS_IMMUNE"), value: "✓ " + t("FORMULATION.WELLNESS_IMMUNE_DESC") },
                  { label: t("FORMULATION.WELLNESS_DIGESTIVE"), value: "✓ " + t("FORMULATION.WELLNESS_DIGESTIVE_DESC") },
                  { label: t("FORMULATION.WELLNESS_ANTIOXIDANT"), value: "✓ " + t("FORMULATION.WELLNESS_ANTIOXIDANT_DESC") },
                  { label: t("FORMULATION.WELLNESS_VITALITY"), value: "✓ " + t("FORMULATION.WELLNESS_VITALITY_DESC") },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "oklch(0.60 0.02 65)" }}>
                      {spec.label}
                    </span>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.72 0.12 80)" }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand manifesto */}
        <div className="reveal text-center mt-12">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "oklch(0.72 0.12 80)",
              lineHeight: 1.6,
            }}
          >
            {t("FORMULATION.FOOTER")}
          </p>
        </div>
      </div>
    </section>
  );
}
