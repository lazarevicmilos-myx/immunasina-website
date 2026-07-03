import { useTranslation } from "react-i18next";

const LOGO_URL = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20logo%20short.webp";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        backgroundColor: "oklch(0.18 0.03 55)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10" style={{ borderBottom: "1px solid oklch(0.97 0.015 80 / 0.1)" }}>
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img
              src={LOGO_URL}
              alt="Immunasina — Pure Functional Nutrition"
              style={{ width: "140px", height: "auto", marginBottom: "0.5rem" }}
            />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "oklch(0.65 0.02 65)",
                lineHeight: 1.7,
              }}
            >
              {t("FOOTER.TAGLINE")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.72 0.12 80)",
                marginBottom: "1.25rem",
              }}
            >
              {t("FOOTER.NAVIGATE_TITLE")}
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: t("FOOTER.NAVIGATE_1"), href: "#legend" },
                { label: t("FOOTER.NAVIGATE_2"), href: "#ingredients" },
                { label: t("FOOTER.NAVIGATE_3"), href: "#formulation" },
                { label: t("FOOTER.NAVIGATE_4"), href: "#how-to-prepare" },
                { label: t("FOOTER.NAVIGATE_5"), href: "#products" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.825rem",
                    color: "oklch(0.65 0.02 65)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.72 0.12 80)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.65 0.02 65)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.72 0.12 80)",
                marginBottom: "1.25rem",
              }}
            >
              {t("FOOTER.CONTACT_TITLE")}
            </div>
            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.825rem", color: "oklch(0.65 0.02 65)", lineHeight: 1.6 }}>
                {t("FOOTER.CONTACT_DESC")}
              </p>
              <a
                href="mailto:hello@immunasina.com"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.825rem",
                  color: "oklch(0.72 0.12 80)",
                  textDecoration: "none",
                }}
              >
                {t("FOOTER.CONTACT_EMAIL")}
              </a>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.50 0.02 60)", lineHeight: 1.6 }}>
                {t("FOOTER.SHIPPING")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.7rem",
              color: "oklch(0.45 0.02 60)",
            }}
          >
            {t("FOOTER.COPYRIGHT")}
          </p>
          <div className="flex items-center gap-2" style={{ color: "oklch(0.72 0.12 80 / 0.5)" }}>
            <span style={{ width: "30px", height: "1px", background: "oklch(0.72 0.12 80 / 0.4)" }} />
            <span style={{ fontSize: "0.7rem", color: "oklch(0.72 0.12 80)" }}>✦</span>
            <span style={{ width: "30px", height: "1px", background: "oklch(0.72 0.12 80 / 0.4)" }} />
          </div>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.7rem",
              color: "oklch(0.45 0.02 60)",
            }}
          >
            {t("FOOTER.LOCATION")}
          </p>
        </div>
      </div>
    </footer>
  );
}
