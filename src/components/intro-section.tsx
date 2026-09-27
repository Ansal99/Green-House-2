"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Compass,
  Trees,
  Mountain,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Green+House+Dharamkot+Dharamshala+Himachal+Pradesh";

// Pure coordinates query gives a clean Google Map without redundant info popups
const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=32.2532,76.3245&hl=en&z=15&output=embed";

const GALLERY_ROW_1 = [
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    title: "Cedar Valley Balcony",
    category: "Mountain Living",
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    title: "Dhauladhar Dawn Terrace",
    category: "Sunrise Views",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    title: "Stone Courtyard & Garden",
    category: "Forest Courtyard",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    title: "Snowline High Peak View",
    category: "Alpine Vistas",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    title: "Starlit Mountain Dusk",
    category: "Quiet Evenings",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    title: "Cedar Forest Spa Deck",
    category: "Wellness",
  },
];

const GALLERY_ROW_2 = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    title: "Cedar Fireplace Lounge",
    category: "Warm Interiors",
  },
  {
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    title: "Panoramic Glass Corridor",
    category: "Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    title: "Hand-Dressed Timber Suite",
    category: "Artisan Craft",
  },
  {
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    title: "Morning Mountain Tea Nook",
    category: "Quiet Corners",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
    title: "Heated Wooden Bath Sanctuary",
    category: "Private Luxury",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    title: "Pine Canopy Sun Deck",
    category: "Outdoor Spaces",
  },
];

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export const IntroSection: React.FC = () => {
  const row1Items = [...GALLERY_ROW_1, ...GALLERY_ROW_1];
  const row2Items = [...GALLERY_ROW_2, ...GALLERY_ROW_2];

  return (
    <section
      id="intro"
      className="relative z-10 -mt-[100vh] w-full bg-[#F3EEE5] text-[#1A2E26] pt-24 pb-14 sm:pt-28 sm:pb-16 px-6 sm:px-10 md:px-14 lg:px-16 shadow-[0_-25px_50px_rgba(0,0,0,0.5)] border-t border-[#E5DECF] border-b border-[#E5DECF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Top Split: Left = Introduction & Story, Right = Clean Live Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Introduction of Green House */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#84796B] font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8AC83]" />
              The Sanctuary · Dharamkot
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: luxuryEase, delay: 0.1 }}
              className="font-serif-luxury text-3xl sm:text-4xl lg:text-[2.75rem] font-light leading-[1.14] tracking-tight text-[#1A2E26]"
            >
              A Peaceful Mountain Haven in Dharamkot
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: luxuryEase, delay: 0.2 }}
              className="text-sm sm:text-base text-[#4A5D54] leading-relaxed font-light"
            >
              Hosted by <strong className="text-[#1A2E26] font-medium">{HOTEL_INFO.owner}</strong>, Green House is an intimate luxury boutique hotel resting at 2,100 meters in Dharamkot. Hand-built with aromatic Himalayan cedar timber and native stone, our retreat offers quiet pine mornings, fresh mountain air, and uninterrupted panoramic views of the snow-crowned Dhauladhar peaks.
            </motion.p>

            {/* Micro-Highlight Badges */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: luxuryEase, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-2 border-t border-[#E5DECF]"
            >
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DECF] shadow-xs hover:border-[#C8AC83]/50 transition-colors">
                <Trees className="w-4 h-4 text-[#C8AC83] shrink-0" />
                <span className="text-xs text-[#2C4339] font-medium truncate">
                  Pine Canopy
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DECF] shadow-xs hover:border-[#C8AC83]/50 transition-colors">
                <Mountain className="w-4 h-4 text-[#C8AC83] shrink-0" />
                <span className="text-xs text-[#2C4339] font-medium truncate">
                  2,100m Altitude
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DECF] shadow-xs hover:border-[#C8AC83]/50 transition-colors">
                <Compass className="w-4 h-4 text-[#C8AC83] shrink-0" />
                <span className="text-xs text-[#2C4339] font-medium truncate">
                  Triund Trail
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Clean, Minimalist Real-Time Google Map (Balanced Height) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: luxuryEase, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="h-[280px] sm:h-[300px] lg:h-[320px] w-full relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5DECF] shadow-lg bg-[#EFE9DF] group">
              {/* Live Interactive Google Map without clutter */}
              <iframe
                title="Green House Dharamkot Live Google Map"
                src={GOOGLE_MAPS_EMBED_URL}
                className="w-full h-full border-0 filter contrast-[1.03]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Minimalist Floating "Open in Maps" Pill */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#1A2E26]/90 hover:bg-[#1A2E26] text-[#FAF7F2] text-xs font-medium rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 group/btn"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C8AC83]" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8AC83] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Dual Counter-Directional Infinite Auto-Play Gallery (Loop de Loops) */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          className="space-y-3 pt-3 border-t border-[#E5DECF]"
        >
          <div className="px-1 text-xs tracking-[0.25em] uppercase text-[#84796B] font-medium">
            Hotel Spaces & Surroundings
          </div>

          <div className="relative w-full overflow-hidden space-y-2.5">
            {/* Left & Right Edge Vignette Fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F3EEE5] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F3EEE5] to-transparent z-10" />

            {/* Loop 1: Gliding Left to Right */}
            <div className="flex flex-row flex-nowrap w-max animate-marquee-right py-1">
              {row1Items.map((item, index) => (
                <div
                  key={`r1-${item.title}-${index}`}
                  className="w-64 sm:w-72 md:w-80 h-36 sm:h-40 md:h-44 flex-shrink-0 mx-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm group border border-[#E5DECF] bg-[#FAF7F2]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3 sm:p-3.5 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#E5DAC6] font-medium">
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-medium leading-tight truncate text-[#FAF6EE]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Loop 2: Gliding Right to Left (Opposite Direction) */}
            <div className="flex flex-row flex-nowrap w-max animate-marquee-left py-1">
              {row2Items.map((item, index) => (
                <div
                  key={`r2-${item.title}-${index}`}
                  className="w-64 sm:w-72 md:w-80 h-36 sm:h-40 md:h-44 flex-shrink-0 mx-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm group border border-[#E5DECF] bg-[#FAF7F2]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3 sm:p-3.5 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#E5DAC6] font-medium">
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-medium leading-tight truncate text-[#FAF6EE]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
