import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  ArrowUpRight,
  Compass,
  BedDouble,
  UtensilsCrossed,
  Sun,
  Car,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  indexStr: string;
  category: string;
  title: string;
  shortDesc: string;
  image: string;
  alt: string;
  badge: string;
  icon: React.ElementType;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "suites",
    indexStr: "01",
    category: "Rooms & Suites",
    title: "Luxury Mountain View Rooms",
    shortDesc:
      "Cozy wooden rooms with private balconies, warm fireplaces, and direct views of snow-capped peaks.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury mountain view room at Green House Hotel Dharamkot",
    badge: "Hotel Rooms",
    icon: BedDouble,
  },
  {
    id: "wellness",
    indexStr: "02",
    category: "Spa & Wellness",
    title: "Ayurvedic Spa & Hot Herbal Baths",
    shortDesc:
      "Relax with soothing herbal oil massages, warm wooden soaking tubs, and refreshing steam therapy.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    alt: "Ayurvedic spa and herbal bath at Green House Hotel",
    badge: "Spa & Wellness",
    icon: Sparkles,
  },
  {
    id: "dining",
    indexStr: "03",
    category: "Dining & Cafe",
    title: "Fresh Mountain Food & Chai Lounge",
    shortDesc:
      "Hot home-style Himachali dishes, fresh multi-cuisine food, and famous Kangra valley tea.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    alt: "Warm restaurant and tea lounge at Green House Hotel",
    badge: "Hotel Restaurant",
    icon: UtensilsCrossed,
  },
  {
    id: "expeditions",
    indexStr: "04",
    category: "Treks & Sightseeing",
    title: "Triund Trek & Local Nature Walks",
    shortDesc:
      "Guided nature walks through pine forests, nearby waterfalls, and the famous Triund ridge trek.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    alt: "Scenic mountain trek in Dharamkot Himachal Pradesh",
    badge: "Guided Treks",
    icon: Compass,
  },
  {
    id: "meditation",
    indexStr: "05",
    category: "Yoga & Peace",
    title: "Morning Yoga & Meditation Shala",
    shortDesc:
      "Start your day with peaceful morning yoga, light breathing exercises, and fresh Himalayan air.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    alt: "Morning yoga and meditation space with mountain views",
    badge: "Daily Yoga",
    icon: Sun,
  },
  {
    id: "transit",
    indexStr: "06",
    category: "Travel & Taxi Service",
    title: "Airport Pickup & Local Taxi Service",
    shortDesc:
      "Comfortable taxi transfers from Kangra Airport (Gaggal), Pathankot, and local McLeod Ganj.",
    image:
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1600&q=80",
    alt: "Scenic mountain road in Dharamkot Himachal Pradesh",
    badge: "Travel Desk",
    icon: Car,
  },
];

export const ServicesSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll "Hold" / Pinning Logic:
  // The outer container has multi-screen height (e.g. 300vh), and the inner container
  // is sticky h-screen. As user scrolls through, the section is pinned and cycles
  // through all features before allowing scroll to proceed to the next section!
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const scrollDistance = rect.height - window.innerHeight;

          if (scrollDistance > 0) {
            const rawProgress = -rect.top / scrollDistance;
            const clamped = Math.min(Math.max(rawProgress, 0), 1);
            setScrollProgress(clamped);

            // Compute active index based on scroll progress
            const count = SERVICES_DATA.length;
            const index = Math.min(Math.floor(clamped * count), count - 1);
            setActive(index);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Jump to specific service on click
  const handleItemClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = index / SERVICES_DATA.length + 0.02;
    const targetScroll = containerTop + targetProgress * scrollDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const currentItem = SERVICES_DATA[active];

  // Calculate progress within current active item for mini indicator
  const stepSize = 1 / SERVICES_DATA.length;
  const currentStepProgress = Math.min(
    Math.max((scrollProgress - active * stepSize) / stepSize, 0),
    1
  );

  return (
    <div
      ref={containerRef}
      id="experience"
      className="relative w-full h-[320vh] bg-[#F8F5EF]"
    >
      {/* Anchor targets */}
      <div id="services" className="absolute top-0" />

      {/* Pinned / Sticky Viewport: Held in place until all features finish */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-center px-4 sm:px-8 lg:px-14 border-t border-[#E5DECF]">
        {/* Subtle Decorative Ambient Lighting */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[420px] bg-[#EDE7DC]/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto w-full max-w-6xl">
          {/* Compact Section Header */}
          <div className="mb-6 sm:mb-8 pb-4 border-b border-[#E5DECF]/70">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#84796B] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8AC83]" />
              Hotel Facilities & Guest Services
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#1A2E26] tracking-tight mt-1">
              Hotel Services{" "}
              <span className="italic text-[#2C4339]">& Facilities</span>
            </h2>
          </div>

          {/* Compact 2-Column Layout fitting completely in 1 screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: All Features visible at once in screen */}
            <div className="lg:col-span-6 flex flex-col gap-1.5 sm:gap-2">
              {SERVICES_DATA.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(index)}
                    className={cn(
                      "group relative px-3.5 py-2.5 sm:py-3 rounded-xl cursor-pointer transition-all duration-300 border flex flex-col justify-center",
                      isActive
                        ? "bg-[#F3EEE5] border-[#C8AC83]/70 shadow-sm"
                        : "bg-transparent border-transparent hover:bg-[#F3EEE5]/50 hover:border-[#E5DECF]/60"
                    )}
                  >
                    {/* Active Step Progress Micro-bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1A2E26] rounded-l-xl overflow-hidden">
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
                        {/* Number badge */}
                        <span
                          className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 transition-colors duration-200",
                            isActive
                              ? "bg-[#1A2E26] text-[#F8F5EF]"
                              : "bg-[#EDE7DC] text-[#84796B] group-hover:text-[#1A2E26]"
                          )}
                        >
                          {item.indexStr}
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

                      {/* Icon */}
                      <span
                        className={cn(
                          "shrink-0 transition-colors duration-200",
                          isActive
                            ? "text-[#1A2E26]"
                            : "text-[#B8ADA0] group-hover:text-[#84796B]"
                        )}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Short Description (Revealed when active, kept ultra concise) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[12px] sm:text-[13px] text-[#6B7C72] font-light leading-relaxed pl-9 pt-1 pr-2">
                            {item.shortDesc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Visual Stage (Compact Card fitting screen) */}
            <div className="lg:col-span-6">
              <Card className="relative w-full aspect-[16/11] max-h-[380px] sm:max-h-[420px] overflow-hidden rounded-2xl border border-[#E0D7C7] p-0 shadow-lg bg-[#EDE7DC]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-end"
                  >
                    {/* Background Visual */}
                    <img
                      src={currentItem.image}
                      alt={currentItem.alt}
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
                        Dharamkot, Himachal Pradesh
                      </span>
                    </div>

                    {/* Bottom Details inside Media */}
                    <div className="relative z-10 p-5 pt-0 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[9px] tracking-[0.22em] uppercase text-[#C8AC83] font-medium block">
                          Service {currentItem.indexStr} of {SERVICES_DATA.length}
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
                        aria-label="Book or inquire"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

