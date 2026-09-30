"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Check,
  Copy,
} from "lucide-react";

interface LeaderData {
  id: string;
  name: string;
  roleTitle: "OWNER" | "MANAGER";
  subRole: string;
  phone: string;
  availability: string;
  description: string;
  image: string;
  tags: string[];
  callLink: string;
  whatsappLink: string;
}

const LEADERS: LeaderData[] = [
  {
    id: "owner",
    name: "Rahul Kapoor",
    roleTitle: "OWNER",
    subRole: "Property Owner & Founder",
    phone: "+91 98160 12345",
    availability: "Available 24/7 on-ground",
    description:
      "Deeply connected to Dharamkot, Rahul personally welcomes every guest, curating secluded pine forest trails, sunset viewpoints, and bespoke mountain stays.",
    image: "/images/rahul-kapoor-owner.jpg",
    tags: [
      "Direct Booking Best Rates",
      "Triund Trekking Permits & Guides",
      "Tailored Mountain Itineraries",
    ],
    callLink: "tel:+919816012345",
    whatsappLink:
      "https://wa.me/919816012345?text=Hello%20Rahul,%20I%20am%20planning%20a%20stay%20at%20Green%20House%20Dharamkot",
  },
  {
    id: "manager",
    name: "Vikram Negi",
    roleTitle: "MANAGER",
    subRole: "Resident Estate Manager",
    phone: "+91 98160 54321",
    availability: "Available 24/7 on-ground",
    description:
      "A seasoned Himachal hospitality professional, Vikram oversees seamless daily operations with prompt care—from sunrise Kangra tea to luggage and hearth wood.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    tags: [
      "24/7 Check-in & Luggage Care",
      "Kangra Airport & Station Cabs",
      "Daily Cedar Firewood & Dining",
    ],
    callLink: "tel:+919816054321",
    whatsappLink:
      "https://wa.me/919816054321?text=Hello%20Vikram,%20I%20need%20assistance%20regarding%20my%20stay%20at%20Green%20House",
  },
];

export const HostTeamSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section
      id="team"
      className="relative w-full bg-[#FAF7F2] text-[#1A2E26] pb-10 sm:pb-14 border-b border-[#E5DECF] overflow-hidden"
    >
      {/* Anchor targets */}
      <div id="owner" className="absolute top-0" />

      {/* ─────────────────────────────────────────────────────────────
          1. CRISP MOUNTAIN SHAPE DIVIDER
          Solid vector curve transitioning smoothly from previous dark section (#101A16)
          ───────────────────────────────────────────────────────────── */}
      <div className="w-full overflow-hidden leading-none bg-[#101A16] -mt-px mb-6 sm:mb-8">
        <svg
          className="relative block w-full h-7 sm:h-10 md:h-14 text-[#FAF7F2]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,110 880,110 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
          {/* Crisp Gold Crest Line */}
          <path
            d="M0,0 C320,110 880,110 1200,0"
            fill="none"
            stroke="#C8AC83"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* ─────────────────────────────────────────────────────────────
            2. SECTION HEADER (COMPACT & BALANCED)
            ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#E8E2D5]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-1.5"
          >
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#84796B] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse" />
              <span>Direct On-Ground Access • Dharamkot</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-light text-[#1A2E26] tracking-tight">
              Meet the <span className="italic text-[#2C4339]">Owner & Manager</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7C72] font-light max-w-xl">
              Direct on-ground access in Dharamkot. Connect with our Owner and Manager anytime for bookings, personalized itineraries, and 24/7 guest assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:flex items-center gap-2 text-xs text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] px-3.5 py-1.5 rounded-full font-medium shrink-0 self-start sm:self-auto"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Intermediaries • 100% Direct Care</span>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. MAIN 2-COLUMN GRID (OWNER ON LEFT, MANAGER ON RIGHT)
            Fully utilizes horizontal space with a compact vertical footprint
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -3 }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#E5DECF] hover:border-[#C8AC83] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-stretch group"
            >
              {/* Left Side: Photo & Live Status Beacon */}
              <div className="relative shrink-0 w-full sm:w-36 md:w-32 lg:w-40 flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] sm:h-full min-h-[170px] rounded-2xl overflow-hidden border border-[#E5DECF] shadow-2xs bg-[#EDE7DC]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Distinctive Role Tag */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-widest uppercase bg-[#101A16]/90 backdrop-blur-xs text-[#FAF7F2] border border-[#C8AC83]/60 shadow-xs">
                      {leader.roleTitle}
                    </span>
                  </div>
                </div>

                {/* Live Availability Beacon */}
                <div className="mt-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[10px] font-medium text-[#166534] w-full justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span>Available 24/7</span>
                </div>
              </div>

              {/* Right Side: Profile Details, Scope Tags & Direct Contact */}
              <div className="flex-1 flex flex-col justify-between space-y-3 min-w-0">
                {/* Header Information */}
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#84796B] block mb-0.5">
                    {leader.subRole}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#1A2E26]">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-[#52635B] font-light leading-relaxed mt-1.5">
                    {leader.description}
                  </p>
                </div>

                {/* Key Assistance & Scope Tags */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#84796B] font-semibold block">
                    Key Assistance & Scope:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {leader.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#F4EFE6] border border-[#E5DECF] text-[#2C4339] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Row & Direct Buttons */}
                <div className="pt-3 border-t border-[#EAE4D7] flex flex-wrap items-center justify-between gap-2.5">
                  {/* Phone with 1-Click Copy */}
                  <button
                    type="button"
                    onClick={() => handleCopyPhone(leader.phone)}
                    title="Click to copy phone number"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE4D7] border border-[#DCD3C3] text-xs font-mono font-medium text-[#1A2E26] transition-colors cursor-pointer group/btn"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C8AC83]" />
                    <span>{leader.phone}</span>
                    {copiedPhone === leader.phone ? (
                      <span className="text-[10px] text-emerald-600 font-sans font-bold flex items-center gap-0.5 ml-1">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-3 h-3 text-[#84796B] group-hover/btn:text-[#1A2E26] opacity-60 ml-0.5" />
                    )}
                  </button>

                  {/* Call & WhatsApp CTAs */}
                  <div className="flex items-center gap-2">
                    <a
                      href={leader.callLink}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2C4339] hover:bg-[#1A2E26] text-[#FAF7F2] transition-colors shadow-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </a>
                    <a
                      href={leader.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
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
