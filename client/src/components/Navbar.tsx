/**
 * Navbar — Immunasina Rtanj Boba Tea
 * Scroll-aware: transparent over hero, ivory/blur on scroll
 * Logo: donkey-in-teardrop SVG in antique gold
 * Language toggle: EN/SR with localStorage persistence
 */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LOGO_URL = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20logo%20short.webp";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem("preferredLanguage", lang);
    } catch (error) {
      console.error("Failed to access localStorage", error);
    }
  };

  const navLinks = [
    { label: t("NAV.LEGEND"), href: "#legend" },
    { label: t("NAV.INGREDIENTS"), href: "#ingredients" },
    { label: t("NAV.BLEND"), href: "#formulation" },
    { label: t("NAV.RITUAL"), href: "#how-to-prepare" },
    { label: t("NAV.COLLECTION"), href: "#products" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(0.97 0.015 80 / 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.85 0.03 75)" : "none",
        boxShadow: scrolled ? "0 2px 20px oklch(0.22 0.04 55 / 0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0 no-underline" style={{ maxWidth: "140px" }}>
          <img
            src={LOGO_URL}
            alt="Immunasina — Pure Functional Nutrition"
            style={{ width: "100%", height: "auto", opacity: scrolled ? 0.9 : 1, transition: "opacity 0.3s" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: "2rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: scrolled ? "oklch(0.40 0.03 60)" : "oklch(0.93 0.02 80)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.72 0.12 80)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = scrolled
                  ? "oklch(0.40 0.03 60)"
                  : "oklch(0.93 0.02 80)";
              }}
            >
              {link.label}
            </a>
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center gap-2" style={{ marginLeft: "1rem", paddingLeft: "1rem", borderLeft: "1px solid oklch(0.85 0.03 75)" }}>
            <button
              onClick={() => handleLanguageChange("en")}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: i18n.language === "en" ? "oklch(0.72 0.12 80)" : (scrolled ? "oklch(0.40 0.03 60)" : "oklch(0.93 0.02 80)"),
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                padding: "0.25rem 0.5rem",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.72 0.12 80)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = i18n.language === "en" ? "oklch(0.72 0.12 80)" : (scrolled ? "oklch(0.40 0.03 60)" : "oklch(0.93 0.02 80)");
              }}
            >
              EN
            </button>
            <span style={{ color: scrolled ? "oklch(0.40 0.03 60)" : "oklch(0.93 0.02 80)" }}>|</span>
            <button
              onClick={() => handleLanguageChange("sr")}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: i18n.language === "sr" ? "oklch(0.72 0.12 80)" : (scrolled ? "oklch(0.40 0.03 60)" : "oklch(0.93 0.02 80)"),
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                padding: "0.25rem 0.5rem",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.72 0.12 80)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = i18n.language === "sr" ? "oklch(0.72 0.12 80)" : (scrolled ? "oklch(0.40 0.03 60)" : "oklch(0.93 0.02 80)");
              }}
            >
              SR
            </button>
          </div>

          <a
            href="#order"
            className="btn-gold"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.7rem", textDecoration: "none" }}
          >
            {t("NAV.ORDER")}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-200"
              style={{ backgroundColor: scrolled ? "oklch(0.22 0.04 55)" : "oklch(0.97 0.015 80)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden py-6 px-6 flex flex-col gap-5"
          style={{ backgroundColor: "oklch(0.97 0.015 80)", borderTop: "1px solid oklch(0.85 0.03 75)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "oklch(0.40 0.03 60)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Language Toggle */}
          <div className="flex items-center gap-3 py-3" style={{ borderTop: "1px solid oklch(0.85 0.03 75)", borderBottom: "1px solid oklch(0.85 0.03 75)" }}>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "oklch(0.40 0.03 60)" }}>LANGUAGE:</span>
            <button
              onClick={() => {
                handleLanguageChange("en");
                setMenuOpen(false);
              }}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: i18n.language === "en" ? "oklch(0.72 0.12 80)" : "oklch(0.40 0.03 60)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem 0.5rem",
              }}
            >
              EN
            </button>
            <button
              onClick={() => {
                handleLanguageChange("sr");
                setMenuOpen(false);
              }}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: i18n.language === "sr" ? "oklch(0.72 0.12 80)" : "oklch(0.40 0.03 60)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem 0.5rem",
              }}
            >
              SR
            </button>
          </div>

          <a
            href="#order"
            className="btn-gold text-center"
            style={{ textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            {t("NAV.ORDER")}
          </a>
        </div>
      )}
    </header>
  );
}
