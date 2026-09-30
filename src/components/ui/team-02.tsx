"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-instagram-team02)">
      <path
        d="M12 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898s.68.82.898 1.38c.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228a3.7 3.7 0 0 1-.898 1.38c-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.228-.413a3.7 3.7 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.054-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38s.82-.68 1.38-.898c.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.9 5.9 0 0 0-2.126 1.384A5.9 5.9 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.059 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.9 5.9 0 0 0 4.14 23.37c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.059 2.15-.261 2.912-.558a5.9 5.9 0 0 0 2.126-1.384 5.9 5.9 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.277-.261-2.15-.558-2.912a5.9 5.9 0 0 0-1.384-2.126A5.9 5.9 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip-instagram-team02">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-linkedin-team02)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team02">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const DribbbleIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-dribbble-team02)">
      <path
        d="M15.942 4.242C12.683 7.617 8.333 8.7 1.874 9.117m16.25 1.583c-5.517-1.175-10.117.833-13.65 5.267M7.133 2.292c3.642 5 5 7.85 6.667 14.766M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip-dribbble-team02">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export interface TeamMember {
  name: string;
  role: string;
  badge?: string;
  responsibility?: string;
  description: string;
  image: string;
  socials: {
    icon: React.ReactNode;
    link: string;
    label?: string;
  }[];
}

const DEFAULT_HOTEL_LEADERSHIP: TeamMember[] = [
  {
    name: "Rahul Kapoor",
    role: "Founder & Hotel Host",
    badge: "Host & Visionary",
    responsibility:
      "Guest hospitality vision, personalized Dharamkot itineraries, private sunset walks, and ensuring Green House feels like your peaceful mountain home.",
    description:
      "Born with deep love for the Himalayas, Rahul personally welcomes each traveler to Green House. From suggesting hidden pine trails to lighting cozy hearth fires, he ensures your stay feels intimate and unforgettable.",
    image: "/images/rahul-kapoor-owner.jpg",
    socials: [
      {
        icon: <Phone size={15} />,
        link: "tel:+919816000000",
        label: "Direct Call",
      },
      {
        icon: <MessageCircle size={15} />,
        link: "https://wa.me/919816000000",
        label: "WhatsApp",
      },
      {
        icon: <InstagramIcon size={15} />,
        link: "https://instagram.com",
        label: "Instagram",
      },
    ],
  },
  {
    name: "Vikram Negi",
    role: "Resident Estate Manager",
    badge: "Operations & Stays",
    responsibility:
      "24/7 on-ground guest care, fresh Himachali dining coordination, cedar suite comforts & Triund trek logistics.",
    description:
      "A seasoned Himachal hospitality professional, Vikram oversees every operational detail with warmth and prompt precision. He is on-site daily to handle transfers, hot teas, luggage, and trek guides.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    socials: [
      {
        icon: <Phone size={15} />,
        link: "tel:+919816000000",
        label: "Front Desk",
      },
      {
        icon: <MessageCircle size={15} />,
        link: "https://wa.me/919816000000",
        label: "WhatsApp Concierge",
      },
      {
        icon: <Mail size={15} />,
        link: "mailto:concierge@greenhousedharamkot.com",
        label: "Email Concierge",
      },
    ],
  },
];

export interface TeamProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  className?: string;
  showHeading?: boolean;
}

export const Team: React.FC<TeamProps> = ({
  badgeText = "Personal Mountain Hospitality",
  title = "Meet Your Host & Estate Team",
  subtitle = "Our boutique sanctuary in Dharamkot is hosted with heartfelt personal care. Meet the founder and manager dedicated to your stay.",
  members = DEFAULT_HOTEL_LEADERSHIP,
  className,
  showHeading = true,
}) => {
  const isTwoMembers = members.length === 2;

  return (
    <div className={cn("w-full", className)}>
      {showHeading && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-2 mb-8 sm:mb-10"
        >
          <Badge
            variant={"outline"}
            className="px-3.5 py-1 text-[11px] tracking-[0.2em] uppercase font-medium bg-[#EDE7DC]/70 text-[#1A2E26] border-[#C8AC83]/60 shadow-xs"
          >
            {badgeText}
          </Badge>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-light text-[#1A2E26] tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7C72] font-light leading-relaxed max-w-lg">
              {subtitle}
            </p>
          </div>
        </motion.div>
      )}

      {/* Member Cards Grid */}
      <div
        className={cn(
          "grid gap-6 sm:gap-8 w-full",
          isTwoMembers
            ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {members.map((value, index) => {
          return (
            <motion.div
              key={value.name + index}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start gap-4 sm:gap-5 rounded-3xl bg-[#FFFFFF] border border-[#E5DECF] p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Portrait Photo */}
              <div className="relative w-full sm:w-44 md:w-full lg:w-48 h-64 sm:h-52 md:h-64 lg:h-56 shrink-0 overflow-hidden rounded-2xl bg-[#EDE7DC]">
                <img
                  src={value.image}
                  alt={value.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {value.badge && (
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-[9px] tracking-[0.18em] uppercase text-[#F8F5EF] font-medium">
                      {value.badge}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 z-20">
                  <span className="text-[10px] text-white/90 font-serif-luxury italic">
                    {value.name}
                  </span>
                  <div className="flex gap-1.5">
                    {value.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label || "Social link"}
                        className="flex w-fit bg-[#FAF7F2] text-[#1A2E26] p-2 rounded-full hover:bg-[#C8AC83] transition-colors shadow-xs"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="flex flex-col justify-between h-full gap-2.5 w-full min-w-0">
                <div>
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#E5DECF]/60 pb-2">
                    <div>
                      <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#1A2E26]">
                        {value.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#C8AC83] font-semibold mt-0.5">
                        {value.role}
                      </p>
                    </div>
                  </div>

                  {value.responsibility && (
                    <div className="bg-[#FAF7F2] border border-[#E5DECF]/70 rounded-xl p-2.5 mt-2.5">
                      <span className="text-[9px] tracking-[0.18em] uppercase text-[#84796B] font-bold block mb-0.5">
                        Key Responsibilities:
                      </span>
                      <p className="text-[11px] text-[#2C4339] font-medium leading-relaxed">
                        {value.responsibility}
                      </p>
                    </div>
                  )}

                  <p className="text-[11px] text-[#6B7C72] font-light leading-relaxed mt-2 line-clamp-3">
                    {value.description}
                  </p>
                </div>

                {/* Direct quick action buttons */}
                <div className="pt-2 flex items-center gap-2">
                  {value.socials.slice(0, 2).map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium bg-[#FAF7F2] hover:bg-[#EDE7DC] text-[#1A2E26] border border-[#E5DECF] transition-colors shadow-2xs"
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
