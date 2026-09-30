"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowUpRight,
  ShieldCheck,
  Coffee,
  HeartHandshake,
  Clock,
  Compass,
  CloudRain,
  Laptop,
  Snowflake,
  BedDouble,
  Tag,
  Percent,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Word-by-word staggered text animator for luxury micro-interaction
const AnimatedWords: React.FC<{
  text: string;
  className?: string;
  delayOffset?: number;
}> = ({ text, className = "", delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: delayOffset + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Line-by-line staggered text animator
const AnimatedLine: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 22, rotate: -0.5 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

interface SeasonalOffer {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  period: string;
  discount: string;
  originalPrice: string;
  offerPrice: string;
  icon: React.ElementType;
  accentColor: string;
  description: string;
  perks: string[];
  minimumStay: string;
  popular: boolean;
}

const SEASONAL_OFFERS: SeasonalOffer[] = [
  {
    id: "monsoon-retreat",
    title: "Monsoon & Mist Mountain Retreat",
    tagline: "High-Canopy Pines & Misty Dharamkot Trails",
    badge: "Seasonal Special",
    period: "July to September",
    discount: "Flat 15% Off",
    originalPrice: "₹7,500",
    offerPrice: "₹6,375",
    icon: CloudRain,
    accentColor: "#2F5D50",
    description:
      "Watch misty clouds drift through cedar canopy right from your heated sun terrace. Includes warm mountain high tea, hot pakoras, and guided mist trail walks.",
    perks: [
      "Daily Kangra organic high tea & hot steamed snacks",
      "Guided forest walk to hidden Dharamkot waterfall",
      "Complimentary cedar log evening fireplace setup",
      "Guaranteed late check-out till 2:00 PM",
    ],
    minimumStay: "3 Nights Min. · Incl. Breakfast",
    popular: true,
  },
  {
    id: "winter-snowline",
    title: "Winter Snowline & Fireplace Getaway",
    tagline: "Heated Wooden Chalet & Cedar Hearth Evenings",
    badge: "Winter Peak",
    period: "November to February",
    discount: "Free Spa & Cider",
    originalPrice: "₹9,800",
    offerPrice: "₹8,500",
    icon: Snowflake,
    accentColor: "#C8AC83",
    description:
      "Breathtaking clear blue winter skies and snow-covered high ridges. Cozy up with fragrant seasoned cedar logs in authentic stone hearths every evening.",
    perks: [
      "Unlimited evening cedar fireplace logs & wool throws",
      "Complimentary spiced Himalayan apple cider kettle",
      "20% discount on all Ayurvedic spa treatments",
      "Clear-night stargazing telescope session on terrace",
    ],
    minimumStay: "2 Nights Min. · Incl. Breakfast",
    popular: false,
  },
  {
    id: "himalayan-workation",
    title: "Himalayan Workation & Long Stay",
    tagline: "100 Mbps Dedicated Fiber & Forest Silence",
    badge: "Work & Rest",
    period: "Available All Year",
    discount: "Flat 25% Off",
    originalPrice: "₹7,000",
    offerPrice: "₹5,250",
    icon: Laptop,
    accentColor: "#4B6B5C",
    description:
      "Engineered for creators, authors, and founders. Peaceful wooden room with valley vista, ergonomic desk, and 100Mbps dedicated fiber.",
    perks: [
      "Dedicated 100 Mbps optical fiber Wi-Fi + inverter backup",
      "Unlimited French-press coffee & organic herbal infusions",
      "Twice-weekly complimentary laundry & room refreshing",
      "Ergonomic cedar work desk & comfortable leather chair",
    ],
    minimumStay: "7+ Nights Required · Incl. Breakfast",
    popular: true,
  },
  {
    id: "triund-trekker",
    title: "Triund Summit & Ridge Adventure",
    tagline: "Guided High Trail & Post-Hike Recovery",
    badge: "Trek Package",
    period: "March–June & Sep–Nov",
    discount: "Free Guide & Kit",
    originalPrice: "₹9,200",
    offerPrice: "₹7,800",
    icon: Compass,
    accentColor: "#3B6955",
    description:
      "Conquer the famous Triund mountain ridge. We provide a licensed local guide, summit trail pack, and relaxing herbal soak upon return.",
    perks: [
      "Certified Dharamkot mountain guide for Triund climb",
      "Nutritious summit trail pack (dry fruits & energy bars)",
      "Soothing hot herbal foot soak after trek return",
      "Hearty 3-course celebratory Himachali mountain dinner",
    ],
    minimumStay: "2 Nights Min. · Incl. Breakfast",
    popular: false,
  },
];

interface RoomTariff {
  id: string;
  name: string;
  category: string;
  standardRate: string;
  peakRate: string;
  longStayRate: string;
  capacity: string;
  size: string;
  bestFor: string;
}

const ROOM_TARIFFS: RoomTariff[] = [
  {
    id: "deluxe-pine",
    name: "Deluxe Pine Room",
    category: "Cozy Wood Stay",
    standardRate: "₹7,500",
    peakRate: "₹8,500",
    longStayRate: "₹5,625",
    capacity: "2 Guests",
    size: "340 sq ft",
    bestFor: "Couples & Solo Explorers",
  },
  {
    id: "mountain-view",
    name: "Dhauladhar Mountain View Room",
    category: "Panoramic Snow Views",
    standardRate: "₹9,800",
    peakRate: "₹11,200",
    longStayRate: "₹7,350",
    capacity: "2-3 Guests",
    size: "420 sq ft",
    bestFor: "Spectacular Sunrises & Fireplace",
  },
  {
    id: "garden-cedar",
    name: "Garden Cedar Room",
    category: "Alpine Garden & Patio",
    standardRate: "₹8,200",
    peakRate: "₹9,400",
    longStayRate: "₹6,150",
    capacity: "2 Guests",
    size: "380 sq ft",
    bestFor: "Nature Enthusiasts & Quiet Reading",
  },
  {
    id: "himalayan-suite",
    name: "The Himalayan Luxury Suite",
    category: "Signature Residence",
    standardRate: "₹14,500",
    peakRate: "₹16,500",
    longStayRate: "₹10,875",
    capacity: "Up to 3 Guests",
    size: "650 sq ft",
    bestFor: "Luxury Living Lounge & Sunset Terrace",
  },
  {
    id: "family-chalet",
    name: "Two-Tier Family Chalet",
    category: "Mezzanine Loft Stay",
    standardRate: "₹18,000",
    peakRate: "₹21,000",
    longStayRate: "₹13,500",
    capacity: "Up to 4 Guests",
    size: "780 sq ft",
    bestFor: "Families & Close Friend Groups",
  },
];

const DIRECT_PERKS = [
  {
    icon: ShieldCheck,
    title: "Best Rate Guaranteed",
    desc: "Direct bookings are always ₹500–₹1,500 lower than online travel agent sites.",
  },
  {
    icon: Coffee,
    title: "Organic Kangra Breakfast",
    desc: "Wholesome morning spread with farm eggs, local mountain honey, and Kangra tea.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Host Care",
    desc: "Rahul Kapoor personally coordinates customized trek guides, cabs, and meals.",
  },
  {
    icon: Clock,
    title: "Flexible Rescheduling",
    desc: "Date changes accommodated with zero penalties for unpredictable mountain weather.",
  },
];

export const PricingOffersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"offers" | "tariffs">("offers");

  const handleInquire = (title: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const input = document.querySelector(
        'input[placeholder*="Room"]'
      ) as HTMLInputElement;
      if (input) {
        input.value = title;
      }
    }
  };

  return (
    <section
      id="offers"
      className="relative w-full bg-[#101A16] text-[#FAF7F2] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-b border-[#243830] overflow-hidden"
    >
      {/* Anchor for alternative pricing link */}
      <div id="pricing" className="absolute top-0" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#C8AC83]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#1E3A2F]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Section Header with Multi-Layer Staggered Animations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#243830]">
          <div className="space-y-2.5 max-w-2xl">
            {/* Animated Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-[#C8AC83] font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8AC83] animate-pulse" />
              <span>Seasonal Retreats & Tariffs</span>
            </motion.div>

            {/* Word-by-word Heading Animation */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF7F2] leading-tight">
              <AnimatedWords
                text="Curated Mountain Escapes &"
                className="text-[#FAF7F2]"
              />{" "}
              <AnimatedWords
                text="Seasonal Offers"
                className="italic text-[#C8AC83]"
                delayOffset={0.2}
              />
            </h2>

            {/* Animated Subtitle Description */}
            <AnimatedLine delay={0.25}>
              <p className="text-xs sm:text-sm text-[#9AA8A1] font-light leading-relaxed max-w-xl">
                Experience the untouched beauty of Dharamkot across every season.
                Book directly for transparent nightly rates, complimentary organic breakfast,
                and personalized hospitality hosted by Rahul Kapoor.
              </p>
            </AnimatedLine>
          </div>

          {/* Animated Interactive View Switcher */}
          <div className="flex items-center p-1 rounded-full bg-[#172520] border border-[#263D33] self-start md:self-end">
            <button
              onClick={() => setActiveTab("offers")}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                activeTab === "offers"
                  ? "text-[#101A16] font-bold"
                  : "text-[#9AA8A1] hover:text-[#FAF7F2]"
              }`}
            >
              {activeTab === "offers" && (
                <motion.div
                  layoutId="activePricingTab"
                  className="absolute inset-0 bg-[#C8AC83] rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                Seasonal Packages
              </span>
            </button>

            <button
              onClick={() => setActiveTab("tariffs")}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                activeTab === "tariffs"
                  ? "text-[#101A16] font-bold"
                  : "text-[#9AA8A1] hover:text-[#FAF7F2]"
              }`}
            >
              {activeTab === "tariffs" && (
                <motion.div
                  layoutId="activePricingTab"
                  className="absolute inset-0 bg-[#C8AC83] rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5" />
                Room Tariffs & Rates
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "offers" ? (
            /* TAB 1: SEASONAL OFFERS GRID */
            <motion.div
              key="offers-tab"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {SEASONAL_OFFERS.map((offer, index) => {
                const IconComponent = offer.icon;
                return (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col h-full"
                  >
                    <Card
                      className="h-full rounded-2xl bg-[#15231D]/90 border-[#263D33] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:border-[#C8AC83]/80 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.6)]"
                    >
                      {/* Popular Accent Ribbon */}
                      {offer.popular && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-[#C8AC83] text-[#101A16] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-xs">
                            Featured
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {/* Header: Icon & Period */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="p-2.5 rounded-xl bg-[#1E332A] text-[#C8AC83] group-hover:bg-[#C8AC83] group-hover:text-[#101A16] transition-colors duration-300">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] tracking-wider uppercase font-semibold text-[#C8AC83] px-2.5 py-1 rounded-full bg-[#1E332A] border border-[#263D33]">
                            {offer.period}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div className="space-y-1">
                          <div className="text-[11px] font-medium uppercase tracking-wider text-[#C8AC83]">
                            {offer.badge}
                          </div>
                          <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#FAF7F2] leading-snug group-hover:text-[#C8AC83] transition-colors">
                            {offer.title}
                          </h3>
                          <p className="text-xs text-[#9AA8A1] font-light leading-relaxed line-clamp-2">
                            {offer.description}
                          </p>
                        </div>

                        {/* Price & Discount Banner */}
                        <div className="p-3 rounded-xl bg-[#0D1612]/80 border border-[#263D33] space-y-1">
                          <div className="flex items-baseline justify-between">
                            <span className="text-xs text-[#84796B]">From</span>
                            <span className="text-[10px] uppercase font-semibold text-[#C8AC83] bg-[#C8AC83]/20 border border-[#C8AC83]/40 px-2 py-0.5 rounded-md">
                              {offer.discount}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-serif-luxury text-2xl font-light text-[#FAF7F2]">
                              {offer.offerPrice}
                            </span>
                            <span className="text-xs text-[#6B7C72] line-through">
                              {offer.originalPrice}
                            </span>
                            <span className="text-[10px] text-[#84796B] font-light">
                              / night
                            </span>
                          </div>
                          <div className="text-[10px] text-[#9AA8A1]">
                            {offer.minimumStay}
                          </div>
                        </div>

                        {/* Highlights List */}
                        <div className="space-y-2 pt-1 border-t border-[#263D33]">
                          <span className="text-[10px] uppercase tracking-wider text-[#C8AC83] font-medium block">
                            Curated Inclusions
                          </span>
                          <ul className="space-y-1.5">
                            {offer.perks.map((perk, pIdx) => (
                              <li
                                key={pIdx}
                                className="flex items-start gap-2 text-xs text-[#D5DDD8] leading-snug"
                              >
                                <Check className="w-3.5 h-3.5 text-[#C8AC83] shrink-0 mt-0.5" />
                                <span>{perk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-5 mt-4 border-t border-[#263D33]">
                        <Button
                          onClick={() => handleInquire(offer.title)}
                          className="w-full h-9 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 bg-[#C8AC83] hover:bg-[#D4BC96] text-[#101A16] shadow-xs cursor-pointer"
                        >
                          <span>Claim Offer</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* TAB 2: TRANSPARENT ROOM TARIFFS & RATES MATRIX */
            <motion.div
              key="tariffs-tab"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              {/* Tariffs Comparison Grid */}
              <div className="rounded-2xl border border-[#263D33] bg-[#15231D] overflow-hidden shadow-sm">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[#172520] border-b border-[#263D33] text-xs font-semibold uppercase tracking-wider text-[#C8AC83]">
                  <div className="col-span-4">Room Sanctuary</div>
                  <div className="col-span-2 text-center">Standard Rate</div>
                  <div className="col-span-2 text-center">Peak Season</div>
                  <div className="col-span-2 text-center">Workation (7d+)</div>
                  <div className="col-span-2 text-right">Inquiry</div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-[#263D33]">
                  {ROOM_TARIFFS.map((tariff, idx) => (
                    <motion.div
                      key={tariff.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="p-5 md:px-6 md:py-4 flex flex-col md:grid md:grid-cols-12 md:items-center gap-3 hover:bg-[#1E332A]/70 transition-colors"
                    >
                      {/* Room Column */}
                      <div className="md:col-span-4 space-y-1">
                        <div className="flex items-center gap-2">
                          <BedDouble className="w-4 h-4 text-[#C8AC83]" />
                          <h4 className="font-serif-luxury text-lg sm:text-xl font-light text-[#FAF7F2]">
                            {tariff.name}
                          </h4>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-[#9AA8A1]">
                          <span>{tariff.capacity}</span>
                          <span>•</span>
                          <span>{tariff.size}</span>
                          <span>•</span>
                          <span className="text-[#C8AC83] font-medium">
                            {tariff.bestFor}
                          </span>
                        </div>
                      </div>

                      {/* Standard Rate */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="md:hidden text-xs text-[#84796B]">
                          Standard Rate:
                        </span>
                        <div className="text-right md:text-center">
                          <span className="font-serif-luxury text-xl font-light text-[#FAF7F2]">
                            {tariff.standardRate}
                          </span>
                          <span className="text-[10px] text-[#84796B] block">
                            / night
                          </span>
                        </div>
                      </div>

                      {/* Peak Season */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="md:hidden text-xs text-[#84796B]">
                          Peak Rate:
                        </span>
                        <div className="text-right md:text-center">
                          <span className="font-serif-luxury text-xl font-light text-[#9AA8A1]">
                            {tariff.peakRate}
                          </span>
                          <span className="text-[10px] text-[#84796B] block">
                            May–Jun & New Year
                          </span>
                        </div>
                      </div>

                      {/* Workation Rate */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="md:hidden text-xs text-[#84796B]">
                          Long Stay (7+ Nights):
                        </span>
                        <div className="text-right md:text-center">
                          <span className="font-serif-luxury text-xl font-medium text-[#C8AC83]">
                            {tariff.longStayRate}
                          </span>
                          <span className="text-[10px] text-[#C8AC83] font-medium block">
                            Save 25%
                          </span>
                        </div>
                      </div>

                      {/* Action CTA */}
                      <div className="md:col-span-2 flex justify-end pt-2 md:pt-0">
                        <Button
                          onClick={() => handleInquire(tariff.name)}
                          variant="outline"
                          className="w-full md:w-auto h-8 rounded-full border-[#C8AC83] text-[#FAF7F2] hover:bg-[#C8AC83] hover:text-[#101A16] text-[11px] uppercase tracking-wider px-4 transition-all"
                        >
                          Inquire
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Direct Booking Assurance Perks */}
        <div className="pt-6 border-t border-[#243830]">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8AC83] font-medium block">
              Direct Reservation Advantages
            </span>
            <h3 className="font-serif-luxury text-2xl font-light text-[#FAF7F2]">
              Why Guests Book Directly with Green House
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIRECT_PERKS.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-4 rounded-xl bg-[#15231D]/80 border border-[#263D33] flex items-start gap-3 hover:bg-[#1E332A] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#1E332A] text-[#C8AC83] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-semibold text-[#FAF7F2] tracking-wide">
                      {perk.title}
                    </h4>
                    <p className="text-[11px] text-[#9AA8A1] leading-relaxed font-light">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOffersSection;
