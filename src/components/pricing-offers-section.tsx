"use client";

import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SeasonalOffer {
  id: string;
  title: string;
  seasonBadge: string;
  period: string;
  discountPill: string;
  originalPrice: string;
  offerPrice: string;
  icon: React.ElementType;
  perks: string[];
  terms: string;
  featured?: boolean;
}

const SEASONAL_OFFERS: SeasonalOffer[] = [
  {
    id: "monsoon-retreat",
    title: "Monsoon & Mist Mountain Retreat",
    seasonBadge: "Monsoon",
    period: "Jul – Sep",
    discountPill: "15% OFF",
    originalPrice: "₹7,500",
    offerPrice: "₹6,375",
    icon: CloudRain,
    perks: [
      "Daily Kangra high tea & warm snacks",
      "Guided mist walk to Dharamkot waterfall",
      "Complimentary cedarwood fireplace evening",
    ],
    terms: "Min. 3 Nights Stay",
    featured: false,
  },
  {
    id: "winter-snowline",
    title: "Winter Snowline & Fireplace Stay",
    seasonBadge: "Winter",
    period: "Nov – Feb",
    discountPill: "Free Fireplace & Spa",
    originalPrice: "₹9,800",
    offerPrice: "₹8,500",
    icon: Snowflake,
    perks: [
      "Unlimited cedar firewood & wool throws",
      "Hot spiced Himalayan apple cider kettle",
      "20% discount on Ayurvedic wellness therapies",
    ],
    terms: "Min. 2 Nights Stay",
    featured: true,
  },
  {
    id: "himalayan-workation",
    title: "Himalayan Workation & Long Stay",
    seasonBadge: "Workation",
    period: "All Year",
    discountPill: "FLAT 25% OFF",
    originalPrice: "₹7,000",
    offerPrice: "₹5,250",
    icon: Laptop,
    perks: [
      "100 Mbps dedicated fiber Wi-Fi + inverter backup",
      "Ergonomic cedar desk with quiet valley vista",
      "Unlimited French-press coffee & laundry service",
    ],
    terms: "7+ Nights Required",
    featured: false,
  },
  {
    id: "triund-trekker",
    title: "Triund Summit & Ridge Adventure",
    seasonBadge: "Adventure",
    period: "Mar – Nov",
    discountPill: "Free Guide & Kit",
    originalPrice: "₹9,200",
    offerPrice: "₹7,800",
    icon: Compass,
    perks: [
      "Certified local guide for the Triund summit hike",
      "Nutritious high-trail energy pack & summit lunch",
      "Soothing hot herbal foot soak after trek return",
    ],
    terms: "Min. 2 Nights Stay",
    featured: false,
  },
];

const DIRECT_PERKS = [
  {
    icon: ShieldCheck,
    title: "Best Rate Guarantee",
    desc: "Always ₹500–₹1,500 lower than OTAs",
  },
  {
    icon: Coffee,
    title: "Organic Breakfast",
    desc: "Fresh Kangra morning spread included",
  },
  {
    icon: HeartHandshake,
    title: "Host Concierge",
    desc: "Personal care hosted by Rahul Kapoor",
  },
  {
    icon: Clock,
    title: "Flexible Rescheduling",
    desc: "Zero fees for weather date changes",
  },
];

export const PricingOffersSection: React.FC = () => {
  const handleInquire = (offerTitle: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const input = document.querySelector(
        'input[placeholder*="Room" i], input[placeholder*="email" i], input[type="email"]'
      ) as HTMLInputElement;
      if (input) {
        if (input.placeholder && input.placeholder.toLowerCase().includes("room")) {
          input.value = offerTitle;
        }
        input.focus();
      }
    }
  };

  return (
    <section
      id="offers"
      className="relative w-full bg-[#101A16] text-[#FAF7F2] py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Anchor for alternative pricing link */}
      <div id="pricing" className="absolute top-0" />

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#C8AC83]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1E3A2F]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Minimal, Punchy Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-[#243830]">
          <div className="space-y-1.5 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#C8AC83] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8AC83] animate-pulse" />
              Seasonal Offers & Retreats
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#FAF7F2] leading-tight">
              Curated Mountain <span className="italic text-[#C8AC83]">Packages</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9BB2A7] font-light leading-relaxed">
              Special limited-period packages tailored for monsoon mists, cozy snowy winters, and mountain workations.
            </p>
          </div>

          <div className="text-left md:text-right text-xs text-[#8BA499]">
            <span className="text-[10px] uppercase tracking-wider text-[#C8AC83] block">Direct Booking Guarantee</span>
            <span>Organic Breakfast Included · Zero Booking Fees</span>
          </div>
        </div>

        {/* 4 Crisp & Compact Seasonal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SEASONAL_OFFERS.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="flex flex-col h-full"
              >
                <Card
                  className={`h-full rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                    offer.featured
                      ? "bg-[#182C24] border-[#C8AC83] shadow-lg shadow-black/30 ring-1 ring-[#C8AC83]/30"
                      : "bg-[#13221C] border-[#243B31] hover:border-[#385B4B]"
                  }`}
                >
                  <div className="space-y-3.5">
                    {/* Header: Icon & Discount Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-2 rounded-xl bg-[#1D332B] text-[#C8AC83] group-hover:bg-[#C8AC83] group-hover:text-[#101A16] transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C8AC83] text-[#101A16]">
                        {offer.discountPill}
                      </span>
                    </div>

                    {/* Season Tag & Title */}
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-wider uppercase text-[#C8AC83] font-medium block">
                        {offer.seasonBadge} · {offer.period}
                      </span>
                      <h4 className="font-serif-luxury text-lg sm:text-xl font-light text-[#FAF7F2] leading-snug group-hover:text-[#C8AC83] transition-colors">
                        {offer.title}
                      </h4>
                    </div>

                    {/* Price Strip */}
                    <div className="p-2.5 rounded-xl bg-[#0E1714] border border-[#21352C] space-y-0.5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif-luxury text-2xl font-light text-[#FAF7F2]">
                          {offer.offerPrice}
                        </span>
                        <span className="text-xs text-[#6F8279] line-through">
                          {offer.originalPrice}
                        </span>
                        <span className="text-[10px] text-[#C8AC83]">/ night</span>
                      </div>
                      <span className="text-[10px] text-[#8BA499] block font-light">
                        {offer.terms}
                      </span>
                    </div>

                    {/* 3 Crisp Perks */}
                    <ul className="space-y-1.5 pt-1 border-t border-[#21352C]">
                      {offer.perks.map((perk, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-xs text-[#C7D9D0] leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-[#C8AC83] shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 mt-3 border-t border-[#21352C]">
                    <Button
                      onClick={() => handleInquire(offer.title)}
                      className={`w-full h-8 sm:h-9 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-1 ${
                        offer.featured
                          ? "bg-[#C8AC83] text-[#101A16] hover:bg-[#D9BE96]"
                          : "bg-[#1E342B] text-[#FAF7F2] hover:bg-[#C8AC83] hover:text-[#101A16] border border-[#2D483C]"
                      }`}
                    >
                      <span>Claim Offer</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Direct Perks Bar */}
        <div className="pt-6 border-t border-[#243830]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {DIRECT_PERKS.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#14231E] border border-[#243B31] flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-[#1D332B] text-[#C8AC83] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11px] font-semibold text-[#FAF7F2] truncate">
                      {perk.title}
                    </h5>
                    <p className="text-[10px] text-[#9BB2A7] truncate">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingOffersSection;
