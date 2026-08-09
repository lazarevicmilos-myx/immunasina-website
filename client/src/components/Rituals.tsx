import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function Rituals() {
  const { ref: sectionRef } = useScrollReveal();
  const { t } = useTranslation();

  const MORNING_RITUAL_ICON = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/icon_morning_no_bkg.webp";
  const AFTERNOON_RITUAL_ICON = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/icon_afternoon_no_bkg.webp";
  const EVENING_RITUAL_ICON = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/icon_evening_no_bkg.webp";
  const morningRitualImage = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/morning_ritual_01.webp";
  const afternoonRitualImage = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/afternoon_ritual_02.webp";
  const eveningRitualImage = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/evening_ritual_03.webp";

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "oklch(0.97 0.015 80)", color: "oklch(0.22 0.04 55)" }}>

      {/* Rituals Section */}
      <section 
        id="rituals"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Morning Ritual */}
          <div className="bg-[oklch(0.98_0.01_80)] p-12 lg:p-16 flex flex-col h-full border-r border-[oklch(0.9_0.02_80)]" style={{ fontFamily: "'Lato', sans-serif" }}>
            <div className="text-center mb-6">
              {/* Icon */}
              <div className="flex justify-center mb-2 items-center mx-auto"
                style={{
                  width: "45px",
                  height: "45px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={MORNING_RITUAL_ICON}
                />
              </div>
              <p className="section-label mb-2">01</p>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-2 text-[oklch(0.72_0.12_80)]">{t("RITUALS.MORNING.TITLE1")} <br/> {t("RITUALS.MORNING.TITLE2")}</h3>
              <p className="text-xs font-bold text-[oklch(0.5_0.02_55)] tracking-widest">{t("RITUALS.MORNING.TIME")}</p>
            </div>
            
            <div className="text-center mb-4 flex-grow">
              <h4 className="text-3xl font-serif font-medium mb-4 text-[oklch(0.22_0.04_55)]" style={{ fontFamily: "'Playfair Display', serif" }}>{t("RITUALS.MORNING.SUBTITLE")}</h4>
              <p className="reveal mb-4"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}
              >
                {t("RITUALS.MORNING.DESCRIPTION1")}
              </p>
            </div>
                        
            <div className="text-center mb-4 flex-grow">
              <h1 className="text-3xl font-serif font-medium mb-4 text-[oklch(0.72_0.12_80)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t("RITUALS.MORNING.H1_BRAND")}</h1>
              <p className="text-sm font-bold text-[oklch(0.4_0.02_55)] leading-relaxed mb-4 whitespace-pre-line">
                {t("RITUALS.MORNING.H1_TAGLINE")}
              </p>
            </div>

            <div className="text-center mb-4 flex-grow">
              {/* <p className="text-sm text-[oklch(0.4_0.02_55)] leading-relaxed mb-8 whitespace-pre-line"> */}
              <p className="reveal mb-4"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.40 0.03 60)",
              }}
            >
                {t("RITUALS.MORNING.DESCRIPTION2")}
              </p>
            </div>

            <div className="mt-auto flex flex-col items-center relative">
              <Button className="w-full max-w-xs z-10 relative" style={{ backgroundColor: "oklch(0.265_0.055_120)", color: "white", padding: "1rem 2.5rem", fontFamily: "'Lato', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "all 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {t("RITUALS.MORNING.BUTTON")} &gt;
              </Button>
              
              {/* Button
              <div
                className="w-full max-w-xs mb-10"
                style={{ backgroundColor: "oklch(0.25 0.05 90)", color: "white", padding: "1rem 2.5rem", fontFamily: "'Lato', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "all 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
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
                  {t("RITUALS.MORNING.BUTTON")} &gt;
                </a>
              </div> */}

              <div className="w-full aspect-[2/3] -mt-12 overflow-hidden relative z-0">
                <img src={morningRitualImage} alt="Morning Ritual Latte" className="w-full h-full object-cover" style={{ mask: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 60%, black 100%)", WebkitMask: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 60%, black 100%)" }} />
              </div>
            </div>
          </div>

          {/* Afternoon Ritual */}
          <div className="bg-[oklch(0.95_0.02_80)] p-12 lg:p-16 flex flex-col h-full border-r border-[oklch(0.9_0.02_80)]" style={{ fontFamily: "'Lato', sans-serif" }}>
            <div className="text-center mb-6">                
              {/* Icon */}
              <div className="flex justify-center mb-2 items-center mx-auto"
                style={{
                  width: "45px",
                  height: "45px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={AFTERNOON_RITUAL_ICON}
                />
              </div>
              <p className="section-label mb-2">02</p>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-2 text-[oklch(0.72_0.12_80)]">{t("RITUALS.AFTERNOON.TITLE1")} <br/> {t("RITUALS.AFTERNOON.TITLE2")}</h3>
              <p className="text-xs font-bold text-[oklch(0.5_0.02_55)] tracking-widest">{t("RITUALS.AFTERNOON.TIME")}</p>
            </div>
            
            <div className="text-center mb-10 flex-grow">
              <h4 className="text-3xl font-serif font-medium mb-4 text-[oklch(0.22_0.04_55)]" style={{ fontFamily: "'Playfair Display', serif" }}>{t("RITUALS.AFTERNOON.SUBTITLE")}</h4>
              <p className="reveal mb-4"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}
              >
                {t("RITUALS.AFTERNOON.DESCRIPTION1")}
              </p>
            </div>
                        
            <div className="text-center mb-4 flex-grow">
              <h1 className="text-3xl font-serif font-medium mb-4 text-[oklch(0.72_0.12_80)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t("RITUALS.AFTERNOON.H1_BRAND")}</h1>
              <p className="text-sm font-bold text-[oklch(0.4_0.02_55)] leading-relaxed mb-4 whitespace-pre-line">
                {t("RITUALS.AFTERNOON.H1_TAGLINE")}
              </p>
            </div>

            <div className="text-center mb-4 flex-grow">
              {/* <p className="text-sm text-[oklch(0.4_0.02_55)] leading-relaxed mb-8 whitespace-pre-line"> */}
              <p className="reveal mb-4"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.40 0.03 60)",
              }}
            >
                {t("RITUALS.AFTERNOON.DESCRIPTION2")}
              </p>
            </div>

            <div className="mt-auto flex flex-col items-center relative">
              <Button className="w-full max-w-xs z-10 relative" style={{ backgroundColor: "oklch(0.85 0.08 80)", color: "white", padding: "1rem 2.5rem", fontFamily: "'Lato', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "all 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {t("RITUALS.AFTERNOON.BUTTON")} &gt;
              </Button>
              <div className="w-full aspect-[2/3] -mt-12 overflow-hidden relative z-0">
                <img src={afternoonRitualImage} alt="Afternoon Ritual Protein Shake" className="w-full h-full object-cover" style={{ mask: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 60%, black 100%)", WebkitMask: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 60%, black 100%)" }} />
              </div>
            </div>
          </div>

          {/* Evening Ritual */}
          <div className="bg-[oklch(0.92_0.01_280)] p-12 lg:p-16 flex flex-col h-full" style={{ fontFamily: "'Lato', sans-serif" }}>
            <div className="text-center mb-6">
              {/* Icon */}
              <div className="flex justify-center mb-2 items-center mx-auto"
                style={{
                  width: "35px",
                  height: "35px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={EVENING_RITUAL_ICON}
                />
              </div>
              <p className="section-label mb-2">03</p>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-2 text-[oklch(0.72_0.12_80)]">{t("RITUALS.EVENING.TITLE1")} <br/> {t("RITUALS.EVENING.TITLE2")}</h3>
              <p className="text-xs font-bold text-[oklch(0.5_0.02_55)] tracking-widest">{t("RITUALS.EVENING.TIME")}</p>
            </div>
            
            <div className="text-center mb-10 flex-grow">
              <h4 className="text-3xl font-serif font-medium mb-4 text-[oklch(0.22_0.04_55)]" style={{ fontFamily: "'Playfair Display', serif" }}>{t("RITUALS.EVENING.SUBTITLE")}</h4>
              <p className="reveal mb-4"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}
              >
                {t("RITUALS.EVENING.DESCRIPTION1")}
              </p>
            </div>
                        
            <div className="text-center mb-4 flex-grow">
              <h1 className="text-3xl font-serif font-medium mb-4 text-[oklch(0.72_0.12_80)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t("RITUALS.EVENING.H1_BRAND")}</h1>
              <p className="text-sm font-bold text-[oklch(0.4_0.02_55)] leading-relaxed mb-4 whitespace-pre-line">
                {t("RITUALS.EVENING.H1_TAGLINE")}
              </p>
            </div>

            <div className="text-center mb-4 flex-grow">
              {/* <p className="text-sm text-[oklch(0.4_0.02_55)] leading-relaxed mb-8 whitespace-pre-line"> */}
              <p className="reveal mb-4"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.40 0.03 60)",
              }}
            >
                {t("RITUALS.EVENING.DESCRIPTION2")}
              </p>
            </div>

            <div className="mt-auto flex flex-col items-center relative">
              <Button className="w-full max-w-xs z-10 relative" style={{ backgroundColor: "oklch(0.3 0.05 280)", color: "white", padding: "1rem 2.5rem", fontFamily: "'Lato', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "all 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {t("RITUALS.EVENING.BUTTON")} &gt;
              </Button>
              <div className="w-full aspect-[2/3] -mt-12 overflow-hidden relative z-0">
                <img src={eveningRitualImage} alt="Evening Ritual Blend" className="w-full h-full object-cover" style={{ mask: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 60%, black 100%)", WebkitMask: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 60%, black 100%)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Designed Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-[oklch(0.98_0.01_80)] relative overflow-hidden" style={{
        backgroundImage: "url('https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/milk_bkg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[oklch(0.98_0.01_80)]/60 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl mb-16">
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
              {t("NUTRITION.SUBTITLE1")}
              <span style={{ color: "oklch(0.55 0.12 75)", fontStyle: "italic" }}>
                {t("NUTRITION.SUBTITLE2")}
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className=" flex-shrink-0 mt-1"
                style={{
                  width: "45px",
                  height: "45px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={MORNING_RITUAL_ICON}
                />
              </div>
              <div>
                <h5 className="text-lg font-bold tracking-wide mb-1">{t("NUTRITION.MORNING.TITLE")}</h5>
                <p className="text-sm text-[oklch(0.5_0.02_55)]"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}>{t("NUTRITION.MORNING.DESCRIPTION")}</p>
                <span className="inline-block mt-2 text-[oklch(0.72_0.12_80)]">→</span>
              </div>
            </div>
            <div className="flex items-start space-x-4">          
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
                  src={AFTERNOON_RITUAL_ICON}
                />
              </div>
              <div>
                <h5 className="text-lg font-bold tracking-wide mb-1">{t("NUTRITION.AFTERNOON.TITLE")}</h5>
                <p className="text-sm text-[oklch(0.5_0.02_55)]"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}>{t("NUTRITION.AFTERNOON.DESCRIPTION")}</p>
                <span className="inline-block mt-2 text-[oklch(0.72_0.12_80)]">→</span>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1"
                style={{
                  width: "30px",
                  height: "30px",
                  color: "oklch(0.72 0.12 80)",
                  transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                <img
                  src={EVENING_RITUAL_ICON}
                />
              </div>
              <div>
                <h5 className="text-lg font-bold tracking-wide mb-1">{t("NUTRITION.EVENING.TITLE")}</h5>
                <p className="text-sm text-[oklch(0.5_0.02_55)]"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "oklch(0.40 0.03 60)",
                }}>{t("NUTRITION.EVENING.DESCRIPTION")}</p>
                <span className="inline-block mt-2 text-[oklch(0.72_0.12_80)]">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
