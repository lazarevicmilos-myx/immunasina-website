/**
 * SensorySection — A Multi-Sensory Experience
 * Shows the product's sensory profile: creamy, herbal, sweet, textural
 * Layout: Left boxes | Center image | Right boxes (horizontal)
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const PRODUCT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20glass%20and%20cup%20modern.webp";





export default function SensorySection() {
  const { t } = useTranslation();
  const { ref } = useScrollReveal();

  const senses = [
    {
      label: t("SENSORY.AROMA_TITLE"),
      desc: t("SENSORY.AROMA_SUBTITLE"),
      detail: t("SENSORY.AROMA_DESC"),
    },
    {
      label: t("SENSORY.HERBAL_TITLE"),
      desc: t("SENSORY.HERBAL_SUBTITLE"),
      detail: t("SENSORY.HERBAL_DESC"),
    },
    {
      label: t("SENSORY.TASTE_TITLE"),
      desc: t("SENSORY.TASTE_SUBTITLE"),
      detail: t("SENSORY.TASTE_DESC"),
    },
    {
      label: t("SENSORY.TEXTURE_TITLE"),
      desc: t("SENSORY.TEXTURE_SUBTITLE"),
      detail: t("SENSORY.TEXTURE_DESC"),
    },
  ];

  const SenseCard = ({ sense, index }: { sense: typeof senses[0]; index: number }) => (
    <div
      className="reveal p-5"
      style={{
        transitionDelay: `${index * 80}ms`,
        backgroundColor: "oklch(0.97 0.015 80)",
        border: "1px solid oklch(0.85 0.03 75)",
        transition: "all 250ms cubic-bezier(0.23,1,0.32,1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "oklch(0.72 0.12 80 / 0.5)";
        el.style.boxShadow = "0 4px 20px oklch(0.72 0.12 80 / 0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = "oklch(0.97 0.015 80 / 0.04)";
        el.style.borderColor = "oklch(0.85 0.03 75)";
        el.style.boxShadow = "none";
      }}
    >
      <div className="flex items-start gap-3">
        <div
          style={{
            width: "4px",
            height: "100%",
            minHeight: "40px",
            background: "oklch(0.72 0.12 80)",
            flexShrink: 0,
            marginTop: "2px",
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "oklch(0.22 0.04 55)",
              lineHeight: 1.2,
            }}
          >
            {sense.label}
          </div>
          <div
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.7rem",
              fontStyle: "italic",
              color: "oklch(0.55 0.12 75)",
              marginBottom: "0.5rem",
            }}
          >
            {sense.desc}
          </div>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.8rem",
              color: "oklch(0.50 0.03 65)",
              lineHeight: 1.6,
            }}
          >
            {sense.detail}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="sensory"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "oklch(0.93 0.025 75)", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal section-label mb-4">            {t("SENSORY.TITLE")}</div>
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
            {t("SENSORY.HEADING_PART1")}{" "}
            <span style={{ fontStyle: "italic", color: "oklch(0.55 0.12 75)" }}>{t("SENSORY.HEADING_PART2")}</span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.40 0.03 60)",
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            {t("SENSORY.SUBTITLE")}
          </p>
        </div>

        {/* Horizontal layout: Left boxes | Center image | Right boxes */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
          {/* Left column: Creamy and Lightly Sweet */}
          <div className="flex flex-col gap-6 lg:w-1/4">
            <SenseCard sense={senses[0]} index={0} />
            <SenseCard sense={senses[2]} index={1} />
          </div>

          {/* Center column: Product image */}
          <div className="reveal flex-1 flex items-center justify-center" style={{ aspectRatio: "1/1", minWidth: "280px", maxWidth: "640px" }}>
            <img
              src={PRODUCT_IMG}
              alt="Rtanj Boba Tea — the multi-sensory wellness experience"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Right column: Herbal and Texturally Unique */}
          <div className="flex flex-col gap-6 lg:w-1/4">
            <SenseCard sense={senses[1]} index={2} />
            <SenseCard sense={senses[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
