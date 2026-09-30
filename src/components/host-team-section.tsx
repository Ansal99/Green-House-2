"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Copy,
  Check,
  Compass,
  Sunset,
  Sparkles,
  Car,
  UtensilsCrossed,
  Flame,
  Clock,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Leadership Team Data (Owner on Left, Manager on Right)
interface LeaderData {
  id: string;
  name: string;
  badge: "Owner" | "Manager";
  role: string;
  phone: string;
  email: string;
  availability: string;
  responseTime: string;
  workFocus: string;
  highlights: { icon: React.ElementType; text: string }[];
  image: string;
  imagePosition?: string;
  callLink: string;
  whatsappLink: string;
}

const LEADERS: LeaderData[] = [
  {
    id: "owner",
    name: "Rahul Kapoor",
    badge: "Owner",
    role: "Property Owner & Founder",
    phone: "+91 98160 12345",
    email: "rahul@greenhousedharamkot.com",
    availability: "Available 24/7",
    responseTime: "Direct Owner Access",
    workFocus:
      "Oversees the sanctuary vision, personally welcomes guests to Dharamkot, curates private sunset cliff viewpoints, and arranges custom Triund ridge expeditions.",
    highlights: [
      { icon: Sunset, text: "Private Sunset Secret Spots" },
      { icon: Compass, text: "Triund Summit Guides & Gear" },
      { icon: Sparkles, text: "Bespoke Mountain Itineraries" },
    ],
    image: "/images/rahul-kapoor-owner.jpg",
    imagePosition: "object-[center_18%]",
    callLink: "tel:+919816012345",
    whatsappLink:
      "https://wa.me/919816012345?text=Hello%20Rahul,%20I%20am%20planning%20a%20stay%20at%20Green%20House%20Dharamkot",
  },
  {
    id: "manager",
    name: "Vikram Negi",
    badge: "Manager",
    role: "Resident General Manager",
    phone: "+91 98160 54321",
    email: "concierge@greenhousedharamkot.com",
    availability: "Available 24/7",
    responseTime: "On-Site Round the Clock",
    workFocus:
      "Coordinates seamless express check-ins, private Kangra airport & station transfers, authentic kitchen-fresh Himachali meals, and evening cedarwood fireplace lighting.",
    highlights: [
      { icon: Car, text: "Gaggal Airport & Station Cabs" },
      { icon: UtensilsCrossed, text: "Fresh Home-Style Himachali Meals" },
      { icon: Flame, text: "Evening Cedar Hearth Firewood" },
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    imagePosition: "object-center",
    callLink: "tel:+919816054321",
    whatsappLink:
      "https://wa.me/919816054321?text=Hello%20Vikram,%20I%20need%20assistance%20regarding%20my%20stay%20at%20Green%20House",
  },
];

export const HostTeamSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyPhoneNumber = (phone: string, id: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="host"
      className="relative w-full bg-[#F7F4EE] text-[#1A2E26] pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Anchor targets */}
      <div id="team" className="absolute top-0" />
      <div id="owner" className="absolute top-0" />

      {/* ─────────────────────────────────────────────────────────────
          1. THICK, CLEAN SVG SHAPE DIVIDER FROM SECTION ABOVE (#101A16)
          ───────────────────────────────────────────────────────────── */}
      <div className="w-full overflow-hidden leading-none pointer-events-none select-none bg-[#101A16] -mt-0.5">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 md:h-16 lg:h-20 text-[#F7F4EE] fill-current"
        >
          {/* Layer 1: Subtle translucent wave */}
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,140 900,20 1200,60 L1200,120 L0,120 Z"
            className="opacity-25"
          />
          {/* Layer 2: Medium wave */}
          <path
            d="M0,0 C200,50 450,10 700,75 C950,130 1100,50 1200,30 L1200,120 L0,120 Z"
            className="opacity-55"
          />
          {/* Layer 3: Solid foreground wave */}
          <path
            d="M0,0 C321.39,56.44 600,10 850,55 C1050,90 1150,30 1200,20 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#EDE7DC]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-[#C8AC83]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* FULL-WIDTH CONTAINER: Matching max-w-7xl of Navbar, Offers & Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6 sm:space-y-8 relative z-10 pt-3 sm:pt-5">

        {/* ─────────────────────────────────────────────────────────────
            2. COMPACT LUXURY SECTION HEADER
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE7DC] border border-[#C8AC83]/70 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#84796B] font-medium shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8AC83] animate-pulse" />
            Direct Leadership & Stay Care
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#1A2E26] tracking-tight">
            Meet the <span className="italic text-[#2C4339]">Owner & Manager</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7C72] font-light leading-relaxed">
            Direct on-ground leadership in Dharamkot. Connect with Rahul & Vikram anytime for reservations, personalized itineraries, and round-the-clock mountain assistance.
          </p>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            3. TWO WIDE, MAGAZINE-GRADE CARDS (UTILIZING FULL SIDE SPACES)
            LEFT: Owner (Rahul Kapoor)
            RIGHT: Manager (Vikram Negi)
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-[#FFFFFF] border border-[#E8E2D5] hover:border-[#C8AC83] p-6 sm:p-7 shadow-[0_4px_24px_-6px_rgba(26,46,38,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(26,46,38,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle Luxury Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C8AC83]/12 to-transparent rounded-tr-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                
                {/* ── Portrait Column (Generous Size) ── */}
                <div className="relative w-full sm:w-44 md:w-48 lg:w-52 h-64 sm:h-auto sm:min-h-[290px] shrink-0 overflow-hidden rounded-2xl bg-[#EDE7DC] shadow-inner ring-1 ring-[#E8E2D5] group-hover:ring-[#C8AC83]/70 transition-all duration-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                      leader.imagePosition || "object-center"
                    )}
                  />
                  {/* Badge: Strictly Owner or Manager */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#1A2E26]/85 backdrop-blur-md border border-[#C8AC83]/50 text-[10px] tracking-wider uppercase text-[#FAF7F2] font-semibold shadow-xs">
                      {leader.badge}
                    </span>
                  </div>

                  {/* Image Bottom Overlay with Quick Tag */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <span className="text-[10px] text-[#FAF7F2]/90 font-medium tracking-wide flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#C8AC83]" />
                      {leader.responseTime}
                    </span>
                  </div>
                </div>

                {/* ── Details Column (Well-utilized space) ── */}
                <div className="flex flex-col justify-between flex-1 w-full text-center sm:text-left min-w-0">
                  <div className="space-y-3">
                    
                    {/* Top Row: Live Status Pill */}
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-300/80 text-[10px] text-emerald-800 font-semibold tracking-wide shadow-2xs">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        {leader.availability}
                      </span>
                    </div>

                    {/* Name & Role */}
                    <div>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#1A2E26] leading-tight tracking-tight">
                        {leader.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#C8AC83] font-semibold mt-0.5">
                        {leader.role}
                      </p>
                    </div>

                    {/* Phone Row with Quick Copy & Email */}
                    <div className="pt-0.5 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-[#1A2E26]">
                      <div className="flex items-center gap-1.5">
                        <a
                          href={leader.callLink}
                          className="font-semibold hover:text-[#C8AC83] transition-colors inline-flex items-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#C8AC83]" />
                          <span>{leader.phone}</span>
                        </a>
                        <button
                          onClick={() => copyPhoneNumber(leader.phone, leader.id)}
                          title="Copy phone number"
                          className="p-1 rounded-md text-[#84796B] hover:text-[#1A2E26] hover:bg-[#EDE7DC] transition-colors cursor-pointer"
                        >
                          {copiedId === leader.id ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>

                      <a
                        href={`mailto:${leader.email}`}
                        className="text-[11px] text-[#6B7C72] hover:text-[#1A2E26] transition-colors hidden xl:inline-flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3 text-[#C8AC83]" />
                        <span>{leader.email}</span>
                      </a>
                    </div>

                    {/* Work Description */}
                    <p className="text-xs text-[#5A6961] font-light leading-relaxed">
                      {leader.workFocus}
                    </p>

                    {/* Specialty Care Highlights (Utilizing the horizontal space!) */}
                    <div className="pt-1 space-y-1.5">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-[#84796B] font-bold block">
                        Direct Assistance Scope:
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                        {leader.highlights.map((h, i) => {
                          const Icon = h.icon;
                          return (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E8E2D5] text-[10px] text-[#2C4339] font-medium"
                            >
                              <Icon className="w-3 h-3 text-[#C8AC83]" />
                              <span>{h.text}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* Quick Call & WhatsApp Action Buttons */}
                  <div className="mt-5 pt-3.5 border-t border-[#E8E2D5] flex items-center gap-2.5">
                    <a
                      href={leader.callLink}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium bg-[#FAF7F2] hover:bg-[#EDE7DC] hover:border-[#C8AC83] text-[#1A2E26] border border-[#E8E2D5] transition-all duration-200 shadow-2xs group/btn"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C8AC83] group-hover/btn:scale-110 transition-transform" />
                      <span>Call {leader.badge}</span>
                    </a>

                    <a
                      href={leader.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium bg-[#1A2E26] hover:bg-[#254236] text-[#FAF7F2] transition-all duration-200 shadow-2xs group/btn"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#C8AC83] group-hover/btn:scale-110 transition-transform" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default HostTeamSection;
