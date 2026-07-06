/**
 * OrderSection — Product Selection and Order
 * Premium product showcase with order form
 * Layout: Two-column — product showcase + order form
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const PACKAGE_IMAGES: Record<string, string> = {
  latte: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Rtanj%20Wild%20Latte%20small%20pack%20%2B%20box.webp",
  boba: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Rtanj%20Boba%20Tea%20small%20pack%20%2B%20box.webp",
  protein: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Bio_active%20Protein%20Shake%20small%20pack%20%2B%20box.webp",
  shake: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Gentle%20Vitality%20Blend%20small%20pack%20%2B%20box.webp",
  coffee: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Immuno-Brew%203in1%20small%20pack%20%2B%20box.webp",
};

export default function OrderSection() {
  const { t } = useTranslation();
  const { ref } = useScrollReveal();
  const [selected, setSelected] = useState("latte");
  const [formData, setFormData] = useState({ name: "", email: "", country: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const products = [
    {
      id: "latte",
      name: t("ORDER.PRODUCT_1_NAME"),
      size: t("ORDER.PRODUCT_1_SIZE"),
      servings: t("ORDER.PRODUCT_1_SERVINGS"),
      price: t("ORDER.PRODUCT_1_PRICE"),
      priceNote: t("ORDER.PRODUCT_1_PRICE_NOTE"),
    },
    {
      id: "boba",
      name: t("ORDER.PRODUCT_2_NAME"),
      size: t("ORDER.PRODUCT_2_SIZE"),
      servings: t("ORDER.PRODUCT_2_SERVINGS"),
      price: t("ORDER.PRODUCT_2_PRICE"),
      priceNote: t("ORDER.PRODUCT_2_PRICE_NOTE"),
    },
    {
      id: "protein",
      name: t("ORDER.PRODUCT_3_NAME"),
      size: t("ORDER.PRODUCT_3_SIZE"),
      servings: t("ORDER.PRODUCT_3_SERVINGS"),
      price: t("ORDER.PRODUCT_3_PRICE"),
      priceNote: t("ORDER.PRODUCT_3_PRICE_NOTE"),
    },
    {
      id: "shake",
      name: t("ORDER.PRODUCT_4_NAME"),
      size: t("ORDER.PRODUCT_4_SIZE"),
      servings: t("ORDER.PRODUCT_4_SERVINGS"),
      price: t("ORDER.PRODUCT_4_PRICE"),
      priceNote: t("ORDER.PRODUCT_4_PRICE_NOTE"),
    },
    {
      id: "coffee",
      name: t("ORDER.PRODUCT_5_NAME"),
      size: t("ORDER.PRODUCT_5_SIZE"),
      servings: t("ORDER.PRODUCT_5_SERVINGS"),
      price: t("ORDER.PRODUCT_5_PRICE"),
      priceNote: t("ORDER.PRODUCT_5_PRICE_NOTE"),
    },
  ];

  const submitOrderMutation = trpc.orders.submitInquiry.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitOrderMutation.mutateAsync({
        productId: selected as "latte" | "boba" | "protein" | "shake" | "coffee",
        fullName: formData.name,
        email: formData.email,
        country: formData.country,
        notes: formData.notes || undefined,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", country: "", notes: "" });
      toast.success("Order inquiry submitted successfully!");
    } catch (error) {
      console.error("Failed to submit order:", error);
      toast.error("Failed to submit order inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="order"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "oklch(0.93 0.025 75)", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal section-label mb-4">{t("ORDER.SECTION_LABEL")}</div>
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
            {t("ORDER.HEADING_PART1")}{" "}
            <span style={{ fontStyle: "italic", color: "oklch(0.55 0.12 75)" }}>{t("ORDER.HEADING_PART2")}</span>
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
            {t("ORDER.DESCRIPTION")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Product image on left */}
          <div className="reveal flex-1 flex items-center justify-center" style={{ aspectRatio: "1/1", minWidth: "280px", maxWidth: "420px" }}>
            <img
              src={PACKAGE_IMAGES[selected]}
              alt="Immunasina product packaging"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product options on right - same row */}
          <div className="reveal flex flex-col gap-6 flex-1">
            {/* Product options header and buttons */}
            <div className="flex flex-col gap-3">
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
                {t("ORDER.CHOOSE_PRODUCT")}
              </div>
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelected(product.id)}
                  className="flex items-center justify-between p-4 text-left w-full"
                  style={{
                    border: selected === product.id
                      ? "1.5px solid oklch(0.72 0.12 80)"
                      : "1px solid oklch(0.85 0.03 75)",
                    backgroundColor: selected === product.id
                      ? "oklch(0.97 0.015 80)"
                      : "oklch(0.95 0.02 78)",
                    transition: "all 200ms cubic-bezier(0.23,1,0.32,1)",
                    position: "relative",
                  }}
                >
                  {product.id === "latte" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "16px",
                        backgroundColor: "oklch(0.72 0.12 80)",
                        color: "oklch(0.97 0.015 80)",
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.55rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.6rem",
                      }}
                    >
                      {t("ORDER.FLAGSHIP_BADGE")}
                    </div>
                  )}
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, color: "oklch(0.22 0.04 55)" }}>
                      {product.name}
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.50 0.03 65)" }}>
                      {product.size} · {product.servings}
                    </div>
                  </div>
                  <div className="text-right">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "oklch(0.55 0.12 75)" }}>
                      {product.price}
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", color: "oklch(0.50 0.03 65)" }}>
                      {product.priceNote}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Trust signals */}
            <div className="reveal grid grid-cols-3 gap-4 pt-4" style={{ borderTop: "1px solid oklch(0.85 0.03 75)" }}>
              {[
                { icon: "🌿", label: "100% Natural" },
                { icon: "❄", label: "Lyophilized" },
                { icon: "🏔", label: "Wild Harvested" },
              ].map((trust) => (
                <div key={trust.label} className="flex flex-col items-center gap-1 text-center">
                  <span style={{ fontSize: "1.2rem" }}>{trust.icon}</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.50 0.03 65)" }}>
                    {trust.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order form - full width below */}
        <div
          className="reveal mt-12"
          style={{
            backgroundColor: "oklch(0.97 0.015 80)",
            border: "1px solid oklch(0.85 0.03 75)",
            padding: "2.5rem",
          }}
        >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
                <div style={{ color: "oklch(0.72 0.12 80)", fontSize: "2.5rem" }}>✦</div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "oklch(0.22 0.04 55)",
                  }}
                >
                  {t("ORDER.SUBMITTED_TITLE")}
                </h3>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.9rem",
                    color: "oklch(0.50 0.03 65)",
                    lineHeight: 1.7,
                    maxWidth: "340px",
                  }}
                >
                  {t("ORDER.SUBMITTED_MESSAGE")}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost-gold"
                >
                  {t("ORDER.PLACE_ANOTHER_ORDER")}
                </button>
              </div>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "oklch(0.22 0.04 55)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("ORDER.INQUIRY_TITLE")}
                </div>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.8rem",
                    color: "oklch(0.50 0.03 65)",
                    lineHeight: 1.6,
                    marginBottom: "2rem",
                  }}
                >
                  {t("ORDER.INQUIRY_DESCRIPTION")}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Selected product summary */}
                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "oklch(0.93 0.025 75)",
                      border: "1px solid oklch(0.72 0.12 80 / 0.3)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(0.72 0.12 80)", marginBottom: "0.25rem" }}>
                      {t("ORDER.SELECTED_PRODUCT_LABEL")}
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, color: "oklch(0.22 0.04 55)" }}>
                      {products.find((p) => p.id === selected)?.name} — {products.find((p) => p.id === selected)?.price}
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.72 0.12 80)", marginTop: "0.4rem", fontWeight: 600 }}>
                      {products.find((p) => p.id === selected)?.size} • {products.find((p) => p.id === selected)?.servings}
                    </div>
                  </div>

                  {[
                    { id: "name", label: t("ORDER.FORM_NAME_LABEL"), type: "text", placeholder: t("ORDER.FORM_NAME_PLACEHOLDER"), required: true },
                    { id: "email", label: t("ORDER.FORM_EMAIL_LABEL"), type: "email", placeholder: t("ORDER.FORM_EMAIL_PLACEHOLDER"), required: true },
                    { id: "country", label: t("ORDER.FORM_COUNTRY_LABEL"), type: "text", placeholder: t("ORDER.FORM_COUNTRY_PLACEHOLDER"), required: true },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field.id}
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "oklch(0.40 0.03 60)",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.875rem",
                          color: "oklch(0.22 0.04 55)",
                          backgroundColor: "oklch(0.97 0.015 80)",
                          border: "1px solid oklch(0.85 0.03 75)",
                          padding: "0.75rem 1rem",
                          outline: "none",
                          transition: "border-color 200ms",
                          width: "100%",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "oklch(0.72 0.12 80)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "oklch(0.85 0.03 75)";
                        }}
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="notes"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "oklch(0.40 0.03 60)",
                      }}
                    >
                      {t("ORDER.FORM_NOTES_LABEL")}
                    </label>
                    <textarea
                      id="notes"
                      placeholder={t("ORDER.FORM_NOTES_PLACEHOLDER")}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.875rem",
                        color: "oklch(0.22 0.04 55)",
                        backgroundColor: "oklch(0.97 0.015 80)",
                        border: "1px solid oklch(0.85 0.03 75)",
                        padding: "0.75rem 1rem",
                        outline: "none",
                        transition: "border-color 200ms",
                        width: "100%",
                        resize: "vertical",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "oklch(0.72 0.12 80)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "oklch(0.85 0.03 75)";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full"
                  >
                    {isSubmitting ? t("ORDER.SUBMITTING_BUTTON") : t("ORDER.SUBMIT_BUTTON")}
                  </button>
                </form>
              </>
            )}
        </div>
      </div>
    </section>
  );
}
