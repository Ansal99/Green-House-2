"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  BedDouble,
  Sparkles,
  UtensilsCrossed,
  Compass,
  Sun,
  Car,
  ArrowUpRight,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  image: string;
  badge: string;
  icon: React.ElementType;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "suites",
    category: "Rooms & Suites",
    title: "Luxury Mountain View Rooms",
    shortDesc:
      "Handcrafted cedarwood rooms with private balconies, warm fireplaces, and direct morning views of snow-capped Dhauladhar peaks.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    badge: "Sanctuary Stays",
    icon: BedDouble,
  },
  {
    id: "wellness",
    category: "Spa & Wellness",
    title: "Ayurvedic Spa & Herbal Baths",
    shortDesc:
      "Relax with soothing herbal oil massages, warm cedar wood soaking tubs, and refreshing steam therapy rooted in mountain wellness.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    badge: "Holistic Wellness",
    icon: Sparkles,
  },
  {
    id: "dining",
    category: "Dining & Cafe",
    title: "Fresh Mountain Food & Chai Lounge",
    shortDesc:
      "Hot home-style Himachali dishes, fresh multi-cuisine specialties, and world-renowned Kangra valley green tea by the hearth.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    badge: "Kangra Cuisine",
    icon: UtensilsCrossed,
  },
  {
    id: "expeditions",
    category: "Guided Treks",
    title: "Triund Trek & Nature Trails",
    shortDesc:
      "Guided nature walks through pine forests, nearby cascading waterfalls, and the famous high snowline Triund ridge trek.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    badge: "Alpine Adventures",
    icon: Compass,
  },
  {
    id: "meditation",
    category: "Yoga & Peace",
    title: "Morning Yoga & Meditation Shala",
    shortDesc:
      "Start your morning with peaceful guided yoga, light breathing exercises, and fresh Himalayan air looking over the pine valley.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    badge: "Mindful Living",
    icon: Sun,
  },
  {
    id: "transit",
    category: "Travel & Taxi",
    title: "Airport Transfers & Local Cabs",
    shortDesc:
      "Comfortable private transfers from Kangra Airport (Gaggal), Pathankot Railway, and local Dharamkot & McLeod Ganj points.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
    badge: "Seamless Transit",
    icon: Car,
  },
];

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [currentStepProgress, setCurrentStepProgress] = useState(0);

  // Track natural window scroll over the section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = SERVICES_DATA.length;
    const rawIndex = Math.floor(latest * total);
    const index = Math.min(Math.max(rawIndex, 0), total - 1);
    setActive(index);

    const stepSize = 1 / total;
    const progress = Math.min(
      Math.max((latest - index * stepSize) / stepSize, 0),
      1
    );
    setCurrentStepProgress(progress);
  });

  // Click-to-jump smoothly to any service
  const handleItemClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = (index + 0.3) / SERVICES_DATA.length;
    const targetScroll = containerTop + targetProgress * scrollDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const currentItem = SERVICES_DATA[active];

  return (
    <div
      ref={containerRef}
      id="experience"
      className="relative w-full h-[260vh] bg-[#FAF7F2] text-[#1A2E26] border-b border-[#E5DECF]"
    >
      {/* Anchor targets */}
      <div id="services" className="absolute top-0" />

      {/* Pinned / Sticky Viewport: Responds naturally to page scroll without inner scrollbars */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-center px-4 sm:px-8 lg:px-14">
        
        {/* Side Fade Gradients (Left and Right Soft Edges) - Pinned inside the viewport */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 md:w-32 lg:w-44 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/85 to-transparent z-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 md:w-32 lg:w-44 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/85 to-transparent z-40" />

        {/* Top & Bottom Soft Blend Gradients */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#FAF7F2] to-transparent z-30" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#FAF7F2] to-transparent z-30" />

        {/* Subtle Ambient Decorative Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[420px] h-[420px] bg-[#EDE7DC]/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto w-full max-w-6xl relative z-20">
          
          {/* Section Header */}
          <div className="mb-4 sm:mb-6 lg:mb-8 pb-3 sm:pb-4 border-b border-[#E5DECF]/80 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div className="space-y-1 max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#84796B] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8AC83] animate-pulse" />
                Hotel Facilities & Guest Experience
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1A2E26] tracking-tight">
                Curated Services & <span className="italic text-[#2C4339]">Sanctuary Amenities</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7C72] font-light leading-relaxed hidden sm:block">
                Scroll down naturally to explore our guest offerings—from warm Ayurvedic herbal oil therapies to guided Triund ridge walks.
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-[#84796B]">
              <span className="text-[10px] uppercase tracking-wider text-[#C8AC83] block font-semibold">
                Hosted by Rahul Kapoor
              </span>
              <span className="text-[11px]">Available daily for all in-house guests</span>
            </div>
          </div>

          {/* DESKTOP LAYOUT (lg:grid): Left interactive list + Right sticky media card */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-10 items-center">
            
            {/* Left Column: Services list responding to page scroll */}
            <div className="lg:col-span-6 flex flex-col gap-1.5 sm:gap-2">
              {SERVICES_DATA.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(index)}
                    className={cn(
                      "group relative px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-center",
                      isActive
                        ? "bg-[#EDE7DC] border-[#C8AC83]/80 shadow-sm"
                        : "bg-transparent border-transparent hover:bg-[#EDE7DC]/40 hover:border-[#E5DECF]/60"
                    )}
                  >
                    {/* Active Step Progress Micro-bar on Left Edge */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-[#1A2E26] rounded-l-2xl overflow-hidden">
                        <div
                          className="w-full bg-[#C8AC83] transition-all duration-100"
                          style={{
                            height: `${Math.round(currentStepProgress * 100)}%`,
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Service Icon Badge */}
                        <span
                          className={cn(
                            "w-7 h-7 rounded-xl flex items-center justify-center text-xs shrink-0 transition-colors duration-200",
                            isActive
                              ? "bg-[#1A2E26] text-[#F8F5EF]"
                              : "bg-[#EDE7DC] text-[#84796B] group-hover:text-[#1A2E26]"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </span>

                        {/* Title */}
                        <span
                          className={cn(
                            "text-sm sm:text-[15px] font-medium transition-colors duration-200 truncate",
                            isActive
                              ? "text-[#1A2E26] font-semibold"
                              : "text-[#5A6961] group-hover:text-[#1A2E26]"
                          )}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Category Pill */}
                      <span
                        className={cn(
                          "text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full shrink-0 transition-colors duration-200",
                          isActive
                            ? "bg-[#1A2E26]/10 text-[#2C4339] font-medium"
                            : "text-[#84796B] group-hover:text-[#2C4339]"
                        )}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Short Description (Reveals with smooth transition when active) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-[13px] text-[#6B7C72] font-light leading-relaxed pl-10 pt-1.5 pr-2">
                            {item.shortDesc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Visual Stage (High-Res Media Card) */}
            <div className="lg:col-span-6">
              <Card className="relative w-full aspect-[16/11] max-h-[380px] sm:max-h-[420px] overflow-hidden rounded-3xl border border-[#E0D7C7] p-0 shadow-lg bg-[#EDE7DC]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-end"
                  >
                    {/* Background Visual */}
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Atmospheric Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />

                    {/* Top Tag inside Media */}
                    <div className="relative z-10 p-5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.2em] uppercase text-[#F8F5EF] font-medium">
                        {currentItem.badge}
                      </span>
                      <span className="text-[11px] font-serif-luxury text-white/85 italic">
                        Dharamkot, 2,100m
                      </span>
                    </div>

                    {/* Bottom Details inside Media */}
                    <div className="relative z-10 p-5 pt-0 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[9px] tracking-[0.22em] uppercase text-[#C8AC83] font-medium block">
                          {currentItem.category}
                        </span>
                        <h4 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#F8F5EF] leading-tight">
                          {currentItem.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#D8D0C3] font-light max-w-sm line-clamp-1 mt-0.5">
                          {currentItem.shortDesc}
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className="shrink-0 p-2.5 rounded-full bg-[#F8F5EF] text-[#1A2E26] hover:bg-[#C8AC83] transition-colors shadow-md flex items-center justify-center"
                        aria-label="Inquire about this service"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Card>
            </div>
          </div>

          {/* MOBILE & TABLET LAYOUT (< lg): Focused Media Card + Category Selector */}
          <div className="lg:hidden flex flex-col gap-3">
            {/* Active Service Card */}
            <Card className="relative w-full aspect-[16/10] max-h-[260px] overflow-hidden rounded-2xl border border-[#E0D7C7] p-0 shadow-md bg-[#EDE7DC]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end"
                >
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Top Tag inside Media */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-[9px] tracking-wider uppercase text-[#F8F5EF]">
                      {currentItem.badge}
                    </span>
                    <span className="text-[10px] text-white/80 font-serif-luxury italic">
                      {active + 1} of {SERVICES_DATA.length}
                    </span>
                  </div>

                  {/* Bottom details */}
                  <div className="relative z-10 p-3.5 pt-0 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[9px] tracking-widest uppercase text-[#C8AC83] font-medium block">
                        {currentItem.category}
                      </span>
                      <h4 className="font-serif-luxury text-base font-light text-[#F8F5EF] leading-snug truncate">
                        {currentItem.title}
                      </h4>
                    </div>

                    <a
                      href="#contact"
                      className="shrink-0 p-2 rounded-full bg-[#F8F5EF] text-[#1A2E26] hover:bg-[#C8AC83] transition-colors shadow flex items-center justify-center"
                      aria-label="Inquire about this service"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Description text */}
            <p className="text-xs text-[#6B7C72] font-light leading-relaxed line-clamp-2 px-1">
              {currentItem.shortDesc}
            </p>

            {/* Horizontal Pill Indicators */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
              {SERVICES_DATA.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(index)}
                    className={cn(
                      "px-2.5 py-1.5 rounded-xl text-xs font-medium shrink-0 flex items-center gap-1.5 transition-all duration-200 border",
                      isActive
                        ? "bg-[#1A2E26] text-[#F8F5EF] border-[#1A2E26] shadow-sm"
                        : "bg-[#EDE7DC]/70 text-[#5A6961] border-transparent hover:bg-[#EDE7DC]"
                    )}
                  >
                    <Icon className="w-3 h-3" />
                    <span className="truncate">{item.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
