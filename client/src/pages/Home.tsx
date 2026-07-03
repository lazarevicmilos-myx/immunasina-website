/**
 * Immunasina Rtanj Boba Tea — Home Page
 * Design: Balkan Heritage Luxe
 * Typography: Cormorant Garamond (display) + Lato (body)
 * Palette: Warm ivory, antique gold oklch(0.72 0.12 80), deep warm brown
 * Sections: Hero → Legend → Ingredients → Formulation → Sensory → HowToPrepare → Pillars → Products → Order
 */
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import LegendSection from "@/components/LegendSection";
import IngredientsSection from "@/components/IngredientsSection";
import FormulationSection from "@/components/FormulationSection";
import SensorySection from "@/components/SensorySection";
import HowToPrepareSection from "@/components/HowToPrepareSection";
import PillarsSection from "@/components/PillarsSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.015 80)", color: "oklch(0.22 0.04 55)" }}>
      <Navbar />
      <HeroSection />
      <LegendSection />
      <IngredientsSection />
      <FormulationSection />
      <SensorySection />
      <HowToPrepareSection />
      <PillarsSection />
      <ProductCarousel />
      <OrderSection />
      <Footer />
    </div>
  );
}
