"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSequence } from "@/components/hero-sequence";
import { IntroSection } from "@/components/intro-section";
import { RoomsSection } from "@/components/rooms-section";
import { ServicesSection } from "@/components/services-section";
import { PricingOffersSection } from "@/components/pricing-offers-section";
import { HostTeamSection } from "@/components/host-team-section";
import { FAQReviewsSection } from "@/components/faq-reviews-section";
import { Footer } from "@/components/footer";
import { useImagePreloader } from "@/hooks/use-image-preloader";

// Green House — Boutique Luxury Hotel, Dharamkot
export default function HomePage() {
  const { getNearestFrame, progress, isComplete } = useImagePreloader();

  return (
    <div className="relative w-full bg-[#F8F5EF] text-[#1A2421] selection:bg-[#E0D7C7] selection:text-[#1A2421]">
      <Navbar />

      <main className="relative w-full">
        {/* 1. Cinematic 240-Frame Scroll Sequence */}
        <HeroSequence
          getNearestFrame={getNearestFrame}
          loadedProgress={progress}
          isComplete={isComplete}
        />

        {/* 2. Compact Introduction, Google Maps Location & Auto-Loop Gallery */}
        <IntroSection />

        {/* 3. Rooms & Stays */}
        <RoomsSection />

        {/* 4. Hotel Services & Facilities */}
        <ServicesSection />

        {/* 5. Pricing & Seasonal Offers */}
        <PricingOffersSection />

        {/* 6. Host & Estate Team */}
        <HostTeamSection />

        {/* 7. FAQs & Guest Reviews */}
        <FAQReviewsSection />
      </main>

      <Footer />
    </div>
  );
}
