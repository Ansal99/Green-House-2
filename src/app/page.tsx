"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSequence } from "@/components/hero-sequence";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { useImagePreloader } from "@/hooks/use-image-preloader";

// Green House — Boutique Luxury Hotel, Dharamkot
export default function HomePage() {
  const { getNearestFrame, progress, isComplete } = useImagePreloader();

  return (
    <div className="relative w-full bg-[#F8F5EF] text-[#1A2421] selection:bg-[#E0D7C7] selection:text-[#1A2421]">
      <Navbar />

      <main className="relative w-full">
        <HeroSequence
          getNearestFrame={getNearestFrame}
          loadedProgress={progress}
          isComplete={isComplete}
        />

        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
