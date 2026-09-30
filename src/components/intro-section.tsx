"use client";

import React from "react";
import {
  MapPin,
  ArrowUpRight,
  Sparkles,
  Compass,
  Trees,
  Mountain,
  Navigation,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Green+House+Dharamkot+Dharamshala+Himachal+Pradesh";

const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Dharamkot%2C%20Dharamshala%2C%20Himachal%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    title: "Pine Balcony Suite",
    category: "Mountain Living",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    title: "Cedar Wood Fireplace Lounge",
    category: "Warm Interiors",
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    title: "Sunrise Terrace Deck",
    category: "Dhauladhar Dawn",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    title: "Stone Courtyard & Garden",
    category: "Forest Cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    title: "Panoramic Glass Corridor",
    category: "Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    title: "Hand-Crafted Himalayan Cedar",
    category: "Artisan Craft",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Snowy Peak Panorama",
    category: "Alpine Views",
  },
];

export const IntroSection: React.FC = () => {
  // Duplicate array once for seamless mathematical 0 -> -50% CSS infinite marquee
  const marqueeItems = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section
      id="intro"
      className="relative z-10 -mt-[100vh] w-full min-h-screen min-h-[100dvh] bg-[#F3EEE5] text-[#1A2E26] flex flex-col justify-between py-14 sm:py-18 lg:py-20 px-6 sm:px-12 md:px-16 lg:px-20 shadow-[0_-25px_50px_rgba(0,0,0,0.5)] border-t border-[#E5DECF] border-b border-[#E5DECF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between gap-8 lg:gap-12">
        {/* Top Split: Left = Introduction & Story, Right = Live Real-Time Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Introduction of Green House */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#84796B] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C8AC83]" />
                01 / THE GREEN HOUSE DHARAMKOT
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] tracking-tight text-[#1A2E26]">
                A Peaceful Mountain Haven in Dharamkot
              </h2>

              <p className="text-sm sm:text-base text-[#4A5D54] leading-relaxed">
                Hosted by <strong className="text-[#1A2E26] font-medium">{HOTEL_INFO.owner}</strong>, Green House is an intimate luxury boutique sanctuary nestled at 2,100 meters among ancient Himalayan pines. Hand-built with indigenous cedar wood and dressed mountain stone, we offer quiet mornings, organic Kangra tea, and uninterrupted panoramic views of the snow-crowned Dhauladhar peaks.
              </p>
            </div>

            {/* Micro-Highlight Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#E5DECF]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DECF] shadow-xs">
                <Trees className="w-4 h-4 text-[#C8AC83] shrink-0" />
                <span className="text-xs text-[#2C4339] font-medium truncate">
                  Pine Canopy
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DECF] shadow-xs">
                <Mountain className="w-4 h-4 text-[#C8AC83] shrink-0" />
                <span className="text-xs text-[#2C4339] font-medium truncate">
                  2,100m High
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DECF] shadow-xs">
                <Compass className="w-4 h-4 text-[#C8AC83] shrink-0" />
                <span className="text-xs text-[#2C4339] font-medium truncate">
                  Triund Trail
                </span>
              </div>
            </div>

            {/* Quick Proximity Notice */}
            <div className="flex items-center gap-4 text-xs text-[#6B7C72]">
              <span className="flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#C8AC83]" />
                15 min to Bhagsu Waterfall
              </span>
              <span>•</span>
              <span>20 min to McLeod Ganj</span>
            </div>
          </div>

          {/* Right: Real-Time Interactive Google Map Container */}
          <div className="lg:col-span-6">
            <div className="h-[300px] sm:h-[340px] lg:h-[380px] w-full relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5DECF] shadow-xl bg-[#EFE9DF]">
              {/* Live Google Map Interactive Embed */}
              <iframe
                title="Green House Dharamkot Live Google Map"
                src={GOOGLE_MAPS_EMBED_URL}
                className="w-full h-full border-0 filter contrast-[1.05]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Top Controls & Status */}
              <div className="pointer-events-none absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                <div className="pointer-events-auto bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#E5DECF] shadow-md flex items-center gap-2 text-xs font-medium text-[#1A2E26]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <span>Green House · Dharamkot</span>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-[#1A2E26] hover:bg-[#253D33] text-[#FAF7F2] text-xs font-medium px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 transition-all duration-300 group"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8AC83] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Floating Bottom Location Details */}
              <div className="pointer-events-none absolute bottom-3 left-3 right-3">
                <div className="pointer-events-auto bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E5DECF] shadow-md flex items-center justify-between text-xs text-[#5D6B63]">
                  <div className="flex items-center gap-1.5 font-medium text-[#1A2E26]">
                    <MapPin className="w-3.5 h-3.5 text-[#C8AC83] shrink-0" />
                    <span className="truncate">Upper Dharamshala, Kangra, HP 176219</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#84796B] hidden sm:inline">
                    {HOTEL_INFO.coordinates}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Continuous Auto-Play Gallery (Looping Marquee) */}
        <div className="space-y-3 pt-4 border-t border-[#E5DECF]">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#84796B] font-semibold">
              <Sparkles className="w-4 h-4 text-[#C8AC83]" />
              Hotel Spaces & Surroundings
            </div>
            <span className="text-xs text-[#84796B] hidden sm:inline">
              Auto-playing continuous loop · Hover to pause
            </span>
          </div>

          {/* Infinite Marquee Track with gradient fade borders */}
          <div className="relative w-full overflow-hidden rounded-2xl">
            {/* Left Edge Fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#F3EEE5] to-transparent z-10" />
            {/* Right Edge Fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#F3EEE5] to-transparent z-10" />

            <div className="animate-marquee py-1.5">
              {marqueeItems.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="w-64 sm:w-72 md:w-80 h-40 sm:h-48 flex-shrink-0 mx-2.5 relative rounded-2xl overflow-hidden shadow-md group border border-[#E5DECF] bg-[#FAF7F2]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3 sm:p-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#E5DAC6] font-semibold">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-medium leading-tight truncate text-[#FAF6EE]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
