import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  standout: string;
  texture: string;
  bestFor: string;
  weight: string;
  servings: string;
  price: string;
  isHero?: boolean;
}

export default function ProductCarousel() {
  const { t } = useTranslation();

  const products: Product[] = [
    {
      id: "latte",
      name: t("PRODUCTS.PRODUCT_1_NAME"),
      tagline: t("PRODUCTS.PRODUCT_1_TAGLINE"),
      description: t("PRODUCTS.PRODUCT_1_DESC"),
      standout: t("PRODUCTS.PRODUCT_1_STANDOUT"),
      texture: t("PRODUCTS.PRODUCT_1_TEXTURE"),
      bestFor: t("PRODUCTS.PRODUCT_1_BEST"),
      weight: t("PRODUCTS.PRODUCT_1_SIZE"),
      servings: t("PRODUCTS.PRODUCT_1_SERVINGS"),
      price: t("PRODUCTS.PRODUCT_1_PRICE"),
      isHero: true,
    },
    {
      id: "boba",
      name: t("PRODUCTS.PRODUCT_2_NAME"),
      tagline: t("PRODUCTS.PRODUCT_2_TAGLINE"),
      description: t("PRODUCTS.PRODUCT_2_DESC"),
      standout: t("PRODUCTS.PRODUCT_2_STANDOUT"),
      texture: t("PRODUCTS.PRODUCT_2_TEXTURE"),
      bestFor: t("PRODUCTS.PRODUCT_2_BEST"),
      weight: t("PRODUCTS.PRODUCT_2_SIZE"),
      servings: t("PRODUCTS.PRODUCT_2_SERVINGS"),
      price: t("PRODUCTS.PRODUCT_2_PRICE"),
    },
    {
      id: "protein",
      name: t("PRODUCTS.PRODUCT_3_NAME"),
      tagline: t("PRODUCTS.PRODUCT_3_TAGLINE"),
      description: t("PRODUCTS.PRODUCT_3_DESC"),
      standout: t("PRODUCTS.PRODUCT_3_STANDOUT"),
      texture: t("PRODUCTS.PRODUCT_3_TEXTURE"),
      bestFor: t("PRODUCTS.PRODUCT_3_BEST"),
      weight: t("PRODUCTS.PRODUCT_3_SIZE"),
      servings: t("PRODUCTS.PRODUCT_3_SERVINGS"),
      price: t("PRODUCTS.PRODUCT_3_PRICE"),
    },
    {
      id: "shake",
      name: t("PRODUCTS.PRODUCT_4_NAME"),
      tagline: t("PRODUCTS.PRODUCT_4_TAGLINE"),
      description: t("PRODUCTS.PRODUCT_4_DESC"),
      standout: t("PRODUCTS.PRODUCT_4_STANDOUT"),
      texture: t("PRODUCTS.PRODUCT_4_TEXTURE"),
      bestFor: t("PRODUCTS.PRODUCT_4_BEST"),
      weight: t("PRODUCTS.PRODUCT_4_SIZE"),
      servings: t("PRODUCTS.PRODUCT_4_SERVINGS"),
      price: t("PRODUCTS.PRODUCT_4_PRICE"),
    },
    {
      id: "coffee",
      name: t("PRODUCTS.PRODUCT_5_NAME"),
      tagline: t("PRODUCTS.PRODUCT_5_TAGLINE"),
      description: t("PRODUCTS.PRODUCT_5_DESC"),
      standout: t("PRODUCTS.PRODUCT_5_STANDOUT"),
      texture: t("PRODUCTS.PRODUCT_5_TEXTURE"),
      bestFor: t("PRODUCTS.PRODUCT_5_BEST"),
      weight: t("PRODUCTS.PRODUCT_5_SIZE"),
      servings: t("PRODUCTS.PRODUCT_5_SERVINGS"),
      price: t("PRODUCTS.PRODUCT_5_PRICE"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Create a dictionary map of your CDN assets
  const bannerImages: Record<ProjectStatus, string> = {
    latte: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Rtanj%20Wild%20Latte%20cup.webp",
    boba: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Rtanj%20Boba%20Tea%20promo%20banner-1.webp",
    protein: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Bio-Active%20protein%20shake%20promo%20banner.webp",
    shake: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Gentle%20Vitality%20Blend%20promo%20banner.webp",
    coffee: "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/Immunasina%20Immuno-Brew%203in1%20promo%20banner.webp",
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlay(false);
  };

  const currentProduct = products[currentIndex];

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 6000);
    autoPlayRef.current = timer;

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay]);



  return (
    <section
      id="products"
      className="relative py-20 px-4 md:px-8"
      style={{ backgroundColor: "oklch(0.97 0.015 80)" }}
      aria-label="Product carousel showcasing all Immunasina products"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "oklch(0.65 0.08 80)" }}>
            {t("PRODUCTS.SECTION_TITLE")}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: "oklch(0.22 0.04 55)" }}>
            {t("PRODUCTS.HEADING")} <span style={{ color: "oklch(0.65 0.08 80)" }}>{t("PRODUCTS.HEADING_SPAN")}</span>
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: "oklch(0.65 0.08 80)" }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "oklch(0.65 0.08 80)" }}></div>
            <div className="w-12 h-1" style={{ backgroundColor: "oklch(0.65 0.08 80)" }}></div>
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.35 0.04 55)" }}>
            {t("PRODUCTS.DESCRIPTION")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg" onMouseEnter={() => setIsAutoPlay(false)} onMouseLeave={() => setIsAutoPlay(true)}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >

                <div className="h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-lg" style={{ backgroundColor: product.id === 'latte' ? "oklch(63.503% 0.09391 116.62 / 0.812)" :
                  product.id === 'boba' ? "oklch(78.144% 0.12155 80.533)" :
                  product.id === 'coffee' ? "oklch(40.975% 0.06601 80.077)" :
                  product.id === 'shake' ? "oklch(67.517% 0.08469 70.968 / 0.812)" :
                  "oklch(0.95 0.01 80)" }}>
                  {/* Content */}
                  <div className="flex-1 md:pr-8">
                    {product.isHero && (
                      <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase rounded-full mb-4" style={{ backgroundColor: "oklch(0.65 0.08 80)", color: "oklch(0.25 0.04 55)" }}>
                        {t("PRODUCTS.PRODUCT_1_BADGE")}
                      </span>
                    )}
                    <h3 className="text-3xl md:text-4xl font-serif mb-2" style={{ color: product.id === 'latte' ? "oklch(0.95 0.01 80)" : "oklch(0.22 0.04 55)" }}>
                      {product.name}
                    </h3>
                    <p className="text-sm tracking-widest uppercase mb-4" style={{ color: product.id === 'latte' ? "oklch(0.25 0.04 55)" :
                    product.id === 'boba' ? "oklch(0.95 0.01 80)" :
                    product.id === 'shake' ? "oklch(0.95 0.01 80)" : "oklch(0.65 0.08 80)" }}>
                      {product.tagline}
                    </p>
                    <p className="mb-4 leading-relaxed" style={{ color: product.id === 'latte' ? "oklch(0.95 0.01 80)" :
                      product.id === 'coffee' ? "oklch(0.72 0.12 80)" : "oklch(0.35 0.04 55)" }}>
                      {product.description}
                    </p>
                    <div className="space-y-2 text-sm mb-6" style={{ color: product.id === 'coffee' ? "oklch(0.95 0.01 80)" : "oklch(0.45 0.04 55)" }}>
                      <p><strong>{t("PRODUCTS.STANDOUT_LABEL")}:</strong> {product.standout}</p>
                      <p><strong>{t("PRODUCTS.TEXTURE_LABEL")}:</strong> {product.texture}</p>
                      <p><strong>{t("PRODUCTS.BEST_FOR_LABEL")}:</strong> {product.bestFor}</p>
                    </div>

                    {/* Product Specs */}
                    <div className="flex gap-6 text-sm">
                      <div>
                        <p className="text-xs tracking-widest uppercase opacity-75" style={{ color: product.id === 'latte' ? "oklch(0.25 0.04 55)" :
                        product.id === 'boba' ? "oklch(0.95 0.01 80)" :
                        product.id === 'shake' ? "oklch(0.95 0.01 80)" :
                        product.id === 'coffee' ? "oklch(0.72 0.12 80)" : "oklch(0.65 0.08 80)" }}>
                          {t("PRODUCTS.SIZE_LABEL")}
                        </p>
                        <p className="font-semibold" style={{ color: product.id === 'latte' ? "oklch(0.95 0.01 80)" : "oklch(0.22 0.04 55)" }}>
                          {product.weight}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase opacity-75" style={{ color: product.id === 'latte' ? "oklch(0.25 0.04 55)" :
                        product.id === 'boba' ? "oklch(0.95 0.01 80)" :
                        product.id === 'shake' ? "oklch(0.95 0.01 80)" :
                        product.id === 'coffee' ? "oklch(0.72 0.12 80)" : "oklch(0.65 0.08 80)" }}>
                          {t("PRODUCTS.SERVINGS_LABEL")}
                        </p>
                        <p className="font-semibold" style={{ color: product.id === 'latte' ? "oklch(0.95 0.01 80)" : "oklch(0.22 0.04 55)" }}>
                          {product.servings}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase opacity-75" style={{ color: product.id === 'latte' ? "oklch(0.25 0.04 55)" :
                        product.id === 'boba' ? "oklch(0.95 0.01 80)" :
                        product.id === 'shake' ? "oklch(0.95 0.01 80)" :
                        product.id === 'coffee' ? "oklch(0.72 0.12 80)" : "oklch(0.65 0.08 80)" }}>
                          {t("PRODUCTS.PRICE_LABEL")}
                        </p>
                        <p className="font-semibold" style={{ color: product.id === 'latte' ? "oklch(0.25 0.04 55)" : product.id === 'boba' ? "oklch(0.95 0.01 80)" :
                        product.id === 'shake' ? "oklch(0.95 0.01 80)" :
                        product.id === 'coffee' ? "oklch(0.72 0.12 80)" : "oklch(0.65 0.08 80)" }}>
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  <div className="hidden md:flex flex-col items-center justify-center w-96 h-96 rounded-full" style={{ backgroundColor: product.id === 'latte' ? "oklch(0.35 0.04 55)" : "oklch(0.92 0.01 80)" }}>
                    <div className="text-5xl">
                      <img
                        src={bannerImages[product.id]}
                        alt={`Immunasina — ${product.name}`}
                        style={{ width: "256px", height: "256px", opacity: 1, transition: "opacity 0.3s", borderRadius: "12px" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 p-2 rounded-full hover:bg-opacity-80 transition-all"
            style={{ backgroundColor: "oklch(0.65 0.08 80)" }}
            aria-label={t("PRODUCTS.PREVIOUS_PRODUCT")}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: "oklch(0.95 0.01 80)" }} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 p-2 rounded-full hover:bg-opacity-80 transition-all"
            style={{ backgroundColor: "oklch(0.65 0.08 80)" }}
            aria-label={t("PRODUCTS.NEXT_PRODUCT")}
          >
            <ChevronRight className="w-6 h-6" style={{ color: "oklch(0.95 0.01 80)" }} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8" role="tablist">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300"
              style={{
                width: index === currentIndex ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor: index === currentIndex ? "oklch(0.65 0.08 80)" : "oklch(0.85 0.02 80)",
              }}
              aria-label={t("PRODUCTS.GO_TO_PRODUCT", { index: index + 1 })}
              role="tab"
              aria-selected={index === currentIndex}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all"
            style={{
              backgroundColor: isAutoPlay ? "oklch(0.65 0.08 80)" : "transparent",
              color: isAutoPlay ? "oklch(0.95 0.01 80)" : "oklch(0.65 0.08 80)",
              border: `1px solid oklch(0.65 0.08 80)`,
            }}
          >
            {isAutoPlay ? t("PRODUCTS.PAUSE") : t("PRODUCTS.PLAY")}
          </button>
        </div>
      </div>
    </section>
  );
}
