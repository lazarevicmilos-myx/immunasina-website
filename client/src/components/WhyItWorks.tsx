import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";

const NATURE_ICON = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/why_it_works_icon_nature_no_bkg.webp";
const SCIENCE_ICON = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/why_it_works_icon_science_no_bkg.webp";
const FUNCTION_ICON = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/why_it_works_icon_function_no_bkg.webp";
const EXPERIENCE_ICON = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/icon_experience_no_bkg.webp";
const IMMUNITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunity%20pictogram.webp";
const DIGESTIVITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Digestivity%20pictogram.webp";
const VITALITY_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Vitality%20pictogram.webp";
const PROTEIN_DROP_PICT_IMG = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/protein_drop_icon_no_bkg.webp";

export default function WhyItWorks() {
  const { ref: sectionRef } = useScrollReveal();
  const { ref: milkRef } = useScrollReveal();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[oklch(0.95_0.02_80)]">
      {/* The Immunasina Method Section */}
      <section id="why-it-works"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="reveal section-label mb-4">{t("WHY_IT_WORKS.PAGE_TITLE")}</div>
            <div className="reveal flex items-center justify-center gap-4 mb-4">
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
              {t("WHY_IT_WORKS.METHOD_TITLE")}{" "}
            </h2>
            <p className="text-2xl" style={{ fontStyle: "italic", color: "oklch(0.55 0.12 75)" }}>{t("WHY_IT_WORKS.METHOD_SUBTITLE")}</p>
          </div>

          {/* Four Steps in One Row */}
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 mb-12">
            {/* Step 1: Nature */}
            <div className="flex-1 text-center px-4">
              <div className="flex justify-center mb-2">
                {/* Icon */}
                <div className="flex justify-center items-center mx-auto"
                  style={{
                    width: "95px",
                    height: "95px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={NATURE_ICON}
                  />
                </div>
              </div>
              <p className="text-sm text-amber-700 tracking-widest font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "oklch(0.40 0.03 60)",
                }}>01</p>
              <h3 className="text-xl text-gray-900 mb-3 uppercase tracking-wide font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}>
                {t('WHY_IT_WORKS.STEP_1.TITLE')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.9rem",
                color: "oklch(0.40 0.03 60)",
              }}>
                {t('WHY_IT_WORKS.STEP_1.DESCRIPTION')}
              </p>
            </div>

            {/* Arrow - Hidden on mobile */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <span className="inline-block mt-2 text-[oklch(0.72_0.12_80)] text-3xl">→</span>
            </div>

            {/* Step 2: Science */}
            <div className="flex-1 text-center px-4">
              <div className="flex justify-center mb-2">
                {/* Icon */}
                <div className="flex justify-center items-center mx-auto"
                  style={{
                    width: "95px",
                    height: "95px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={SCIENCE_ICON}
                  />
                </div>
              </div>
              <p className="text-sm font-serif text-amber-700 mb-2 tracking-widest font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "oklch(0.40 0.03 60)",
                }}>02</p>
              <h3 className="text-xl text-gray-900 mb-3 uppercase tracking-wide font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}>
                {t('WHY_IT_WORKS.STEP_2.TITLE')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.9rem",
                color: "oklch(0.40 0.03 60)",
              }}>
                {t('WHY_IT_WORKS.STEP_2.DESCRIPTION')}
              </p>
            </div>

            {/* Arrow - Hidden on mobile */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <span className="inline-block mt-2 text-[oklch(0.72_0.12_80)] text-3xl">→</span>
            </div>

            {/* Step 3: Function */}
            <div className="flex-1 text-center px-4">
              <div className="flex justify-center mb-2">
                {/* Icon */}
                <div className="flex justify-center items-center mx-auto"
                  style={{
                    width: "95px",
                    height: "95px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={FUNCTION_ICON}
                  />
                </div>
              </div>
              <p className="text-sm font-serif text-amber-700 mb-2 tracking-widest font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "oklch(0.40 0.03 60)",
                }}>03</p>
              <h3 className="text-xl text-gray-900 mb-3 uppercase tracking-wide font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}>
                {t('WHY_IT_WORKS.STEP_3.TITLE')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.9rem",
                color: "oklch(0.40 0.03 60)",
              }}>
                {t('WHY_IT_WORKS.STEP_3.DESCRIPTION')}
              </p>
            </div>

            {/* Arrow - Hidden on mobile */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <span className="inline-block mt-2 text-[oklch(0.72_0.12_80)] text-3xl">→</span>
            </div>

            {/* Step 4: Experience */}
            <div className="flex-1 text-center px-4">
              <div className="flex justify-center mb-2">
                {/* Icon */}
                <div className="flex justify-center items-center mx-auto"
                  style={{
                    width: "95px",
                    height: "95px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={EXPERIENCE_ICON}
                  />
                </div>
              </div>
              <p className="text-sm font-serif text-amber-700 mb-2 tracking-widest font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "oklch(0.40 0.03 60)",
                }}>04</p>
              <h3 className="text-xl text-gray-900 mb-3 uppercase tracking-wide font-bold"
              style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}>
                {t('WHY_IT_WORKS.STEP_4.TITLE')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.9rem",
                color: "oklch(0.40 0.03 60)",
              }}>
                {t('WHY_IT_WORKS.STEP_4.DESCRIPTION')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donkey Milk Section */}
      <section
      ref={milkRef as React.RefObject<HTMLElement>}
      className="relative py-24 bg-[oklch(0.95_0.02_80)] overflow-hidden"
      style={{
        backgroundImage: "url('https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/lyophilized_donkey_milk_glass_bkg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"}}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[oklch(0.97_0.015_80)]/80 md:hidden pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="min-w-0 flex flex-col gap-6 text-left">
              <div className="reveal section-label">{t("INGREDIENTS.INGREDIENT_1_LABEL")}</div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3vw, 3.2rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "oklch(0.22 0.04 55)",
              }}
            >
              {t("WHY_IT_WORKS.DONKEY_MILK_TITLE")}
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400, fontSize: "0.7em", color: "oklch(0.55 0.12 75)" }}>
                {t("WHY_IT_WORKS.DONKEY_MILK_SUBTITLE")}
              </span>
            </h2>

            <div className="reveal flex items-center gap-4">
              <span style={{ width: "80px", height: "1px", background: "oklch(0.72 0.12 80)" }} />
              <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "0.9rem" }}>✦</span>
              <span style={{ width: "80px", height: "1px", background: "oklch(0.72 0.12 80)" }} />
            </div>

            <p className="reveal"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "oklch(0.40 0.03 60)" }}
              >
              {t('WHY_IT_WORKS.DONKEY_MILK_INTRO')}
            </p>

          {/* Benefits Grid */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Benefit 1 */}
            <div className="flex gap-4 rounded-lg"
              style={{ border: "2px solid oklch(0.72 0.12 80 / 0.25)" }}
            >
              <div className="flex-shrink-0">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1"
                  style={{
                    width: "45px",
                    height: "45px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={IMMUNITY_PICT_IMG}
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="mb-2" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.22 0.04 55)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_1_TITLE')}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "oklch(0.50 0.03 65)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_1_DESC')}
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-4 rounded-lg"
              style={{ border: "2px solid oklch(0.72 0.12 80 / 0.25)" }}
            >
              <div className="flex-shrink-0">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1"
                  style={{
                    width: "50px",
                    height: "50px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={DIGESTIVITY_PICT_IMG}
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="mb-2" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.22 0.04 55)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_2_TITLE')}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "oklch(0.50 0.03 65)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_2_DESC')}
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-4 rounded-lg"
              style={{ border: "2px solid oklch(0.72 0.12 80 / 0.25)" }}
            >
              <div className="flex-shrink-0">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={PROTEIN_DROP_PICT_IMG}
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="mb-2" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.22 0.04 55)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_3_TITLE')}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "oklch(0.50 0.03 65)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_3_DESC')}
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex gap-4 rounded-lg"
              style={{ border: "2px solid oklch(0.72 0.12 80 / 0.25)" }}
            >
              <div className="flex-shrink-0">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1"
                  style={{
                    width: "45px",
                    height: "45px",
                    color: "oklch(0.72 0.12 80)",
                    transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <img
                    src={VITALITY_PICT_IMG}
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="mb-2" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "oklch(0.22 0.04 55)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_4_TITLE')}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "oklch(0.50 0.03 65)" }}>
                  {t('WHY_IT_WORKS.DONKEY_MILK_BENEFIT_4_DESC')}
                </p>
              </div>
            </div>

            {/* Lyophilization callout */}
            <div
              className="reveal flex items-start gap-3 p-4 w-full col-span-full"
              style={{ backgroundColor: "oklch(0.97 0.015 80)", border: "1px solid oklch(0.72 0.12 80 / 0.25)" }}
            >
              <span style={{ color: "oklch(0.72 0.12 80)", fontSize: "0.8rem", marginTop: "0.1rem" }}>❄</span>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: "oklch(0.30 0.04 60)", lineHeight: 1.6 }}>
                {t("INGREDIENTS.DONKEY_MILK_FOOTER_QUOTE_PART1")}{" "}
                <strong style={{ color: "oklch(0.55 0.12 75)", fontStyle: "normal" }}>{t("INGREDIENTS.DONKEY_MILK_FOOTER_QUOTE_PART2")}</strong>{" "}
                {t("INGREDIENTS.DONKEY_MILK_FOOTER_QUOTE_PART3")}
              </p>
            </div>

          </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
