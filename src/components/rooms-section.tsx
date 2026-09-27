"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BedDouble,
  Users,
  Mountain,
  Maximize2,
  Check,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface RoomItem {
  id: string;
  name: string;
  category: "all" | "mountain" | "suites" | "garden";
  badge: string;
  price: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  bed: string;
  guests: string;
  view: string;
  size: string;
  amenities: string[];
  highlights: string[];
}

const ROOMS_DATA: RoomItem[] = [
  {
    id: "deluxe-room",
    name: "Deluxe Pine Room",
    category: "all",
    badge: "Popular Stay",
    price: "₹7,500",
    shortDesc:
      "A cozy wooden haven with private sun balcony, warm cedar paneling, and sweeping views of the morning mist rolling through pine trees.",
    fullDesc:
      "Designed for deep rest and quiet mornings. The Deluxe Pine Room is enveloped in hand-planed Himalayan cedar that infuses the air with a soothing natural fragrance. Floor-to-ceiling glass doors open onto a private wooden balcony where morning tea is accompanied by crisp mountain air.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    bed: "King Size Plush",
    guests: "2 Adults",
    view: "Pine Valley & Mountain Mist",
    size: "340 sq ft / 32 m²",
    amenities: [
      "Private Sun Balcony",
      "Kangra Organic Tea Bar",
      "Heated Wooden Flooring",
      "En-Suite Stone Bathroom",
      "High-Speed Wi-Fi",
      "Daily Mountain Breakfast",
    ],
    highlights: [
      "Acoustically insulated cedar walls for total silence",
      "Handcrafted wool blankets and 400-thread Egyptian cotton linen",
      "Artisanal herbal toiletries crafted with Himalayan lavender",
      "Dedicated room service hosted by Rahul Kapoor’s team",
    ],
  },
  {
    id: "mountain-view",
    name: "Dhauladhar Mountain View Room",
    category: "mountain",
    badge: "Panoramic View",
    price: "₹9,800",
    shortDesc:
      "Wake up directly to breathtaking panoramas of the snow-crested Dhauladhar peaks, with an expansive private sun terrace and fireplace.",
    fullDesc:
      "Our most sought-after mountain sanctuary. Elevated on the upper tier of Green House, this room commands an unhindered 180-degree view of the jagged Dhauladhar snowline. Featuring a cozy cast-iron wood fireplace and panoramic sun terrace, it offers front-row seats to spectacular Himalayan sunrises.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    ],
    bed: "Emperor Featherbed",
    guests: "2 Adults + 1 Child",
    view: "Direct Snow Peak Panorama",
    size: "420 sq ft / 39 m²",
    amenities: [
      "Panoramic Snow View Balcony",
      "Wood Burning Fireplace",
      "Kangra Tea & French Press Coffee",
      "Rainforest Stone Shower",
      "Premium Bluetooth Speaker",
      "In-Room Breakfast Service",
    ],
    highlights: [
      "Direct sunrise sightline onto high Dhauladhar peaks",
      "Warm evening fireplace setup with fragrant cedar logs",
      "Hand-carved wooden reading nook overlooking the valley",
      "Complimentary evening tea & fresh bakery snacks",
    ],
  },
  {
    id: "garden-room",
    name: "Garden Cedar Room",
    category: "garden",
    badge: "Nature Retreat",
    price: "₹8,200",
    shortDesc:
      "Serene ground-level retreat opening directly onto our aromatic herb garden and ancient stone patio, nestled under towering deodar boughs.",
    fullDesc:
      "Immerse yourself in forest tranquility. The Garden Cedar Room connects directly with Green House's private alpine herb garden. Step out barefoot onto cool morning stone slates, breathe in fresh thyme and cedar scent, and enjoy unhurried reading on your private patio.",
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    bed: "King Bed + Daybed",
    guests: "2 Adults",
    view: "Alpine Garden & Forest Canopy",
    size: "380 sq ft / 35 m²",
    amenities: [
      "Direct Herb Garden Access",
      "Private Stone Sun Patio",
      "Deep Soaking Wood Tub",
      "Organic Tea & Herbal Infusions",
      "Yoga Mat & Meditation Cushions",
      "Heated Bathroom Floors",
    ],
    highlights: [
      "Private garden gateway directly into forest walking trails",
      "Traditional wooden soaking tub with hot mountain mineral water",
      "Quiet meditation and reading terrace",
      "Zero noise from corridors or upper floors",
    ],
  },
  {
    id: "himalayan-suite",
    name: "The Himalayan Luxury Suite",
    category: "suites",
    badge: "Signature Suite",
    price: "₹14,500",
    shortDesc:
      "Our premier suite with separate lounge, private stone fireplace, wrap-around corner glass walls, and dedicated personal host service.",
    fullDesc:
      "The pinnacle of Green House hospitality. An expansive 650-sq-ft private residence featuring high cathedral ceilings with exposed cedar trusses. With a separate fireplace living room, double-vanity en-suite, and 180-degree wrap-around glass views, it offers unmatched luxury in Dharamkot.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    bed: "Handcrafted Teak King Bed",
    guests: "Up to 3 Adults",
    view: "180° Mountain & Valley Vista",
    size: "650 sq ft / 60 m²",
    amenities: [
      "Separate Living Lounge",
      "Dual Fireplace (Living & Bedroom)",
      "Wrap-Around Sunset Deck",
      "Double Vanity & Soaking Tub",
      "Artisanal Coffee & Tea Bar",
      "Personalized Host Service",
    ],
    highlights: [
      "Full private sunset deck with panoramic valley view",
      "Custom concierge & trek planning with Rahul Kapoor",
      "Evening complimentary chef’s special snack platter",
      "Priority check-in & flexible departure",
    ],
  },
  {
    id: "family-room",
    name: "The Two-Tier Family Chalet",
    category: "all",
    badge: "Family & Groups",
    price: "₹18,000",
    shortDesc:
      "A spacious two-level chalet room crafted with mezzanine wooden lofts, multiple balconies, and abundant space for families and small groups.",
    fullDesc:
      "The ideal mountain getaway for families or lifelong friends. Designed like a traditional Swiss-Himalayan chalet, this suite features a master bedroom downstairs and a charming cozy cedar loft above with twin beds. Multiple private balconies ensure everyone enjoys quiet moments with the mountains.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    ],
    bed: "1 King Bed + 2 Twin Loft Beds",
    guests: "Up to 4 Guests",
    view: "Pine Canopy & High Snowline",
    size: "780 sq ft / 72 m²",
    amenities: [
      "Two Separate Sleeping Areas",
      "Two Private Forest Balconies",
      "Family Tea & Snack Kitchenette",
      "Two En-Suite Bathrooms",
      "Curated Mountain Books & Board Games",
      "Heated Floors Throughout",
    ],
    highlights: [
      "Mezzanine loft kids and friends adore",
      "Two full stone bathrooms for zero morning rush",
      "Large family dining table for shared meals and stories",
      "Special organic children's menu available on request",
    ],
  },
];

export const RoomsSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (activeFilter === "all") return true;
    return room.category === activeFilter;
  });

  const handleBookClick = (roomName?: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      if (roomName) {
        const input = document.querySelector('input[placeholder*="Room"]') as HTMLInputElement;
        if (input) input.value = roomName;
      }
    }
  };

  return (
    <section
      id="stay"
      className="relative w-full bg-[#FAF7F2] text-[#1A2E26] py-20 sm:py-28 lg:py-36 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#E5DECF] overflow-hidden"
    >
      {/* Anchor for Rooms link */}
      <div id="rooms" className="absolute top-0" />

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#E5DECF]">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.28em] uppercase text-[#84796B] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C8AC83]" />
              Accommodations & Suites
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-[#1A2E26] leading-tight">
              Our Stays & <span className="italic text-[#2C4339]">Sanctuaries</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C72] font-light leading-relaxed">
              Every room at Green House is handcrafted from Himalayan cedar timber, local stone, and glass—angled toward the morning sun and snow-dusted Dhauladhar peaks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Stays (5)" },
              { id: "mountain", label: "Mountain View" },
              { id: "suites", label: "Luxury Suites" },
              { id: "garden", label: "Garden Retreat" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-[#1A2E26] text-[#F8F5EF] shadow-sm"
                    : "bg-[#EDE7DC] text-[#84796B] hover:text-[#1A2E26] hover:bg-[#E5DAC6]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <Card className="h-full rounded-3xl overflow-hidden border border-[#E0D7C7] bg-[#F8F5EF] shadow-md hover:shadow-xl transition-all duration-500 flex flex-col group p-0">
                {/* Image Stage */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#EDE7DC]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.2em] uppercase text-[#F8F5EF] font-medium">
                      {room.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#1A2E26]/90 backdrop-blur-md text-[11px] font-medium text-[#FAF6EE] shadow-sm">
                      {room.price} <span className="text-[9px] text-[#C8AC83]">/ night</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 text-xs font-serif-luxury italic text-white/90">
                    Dharamkot, 2,100m
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[#1A2E26] group-hover:text-[#2C4339] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7C72] leading-relaxed font-light line-clamp-3">
                      {room.shortDesc}
                    </p>
                  </div>

                  {/* 4-Item Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2.5 py-4 border-y border-[#E5DECF] text-xs text-[#84796B]">
                    <div className="flex items-center gap-2 min-w-0">
                      <BedDouble className="w-4 h-4 text-[#C8AC83] shrink-0" />
                      <span className="truncate">{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Users className="w-4 h-4 text-[#C8AC83] shrink-0" />
                      <span className="truncate">{room.guests}</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Mountain className="w-4 h-4 text-[#C8AC83] shrink-0" />
                      <span className="truncate">{room.view}</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Maximize2 className="w-4 h-4 text-[#C8AC83] shrink-0" />
                      <span className="truncate">{room.size}</span>
                    </div>
                  </div>

                  {/* Key Amenities Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2.5 py-1 rounded-md bg-[#EDE7DC]/80 text-[10px] font-medium text-[#2C4339] tracking-wider uppercase"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="px-2 py-1 text-[10px] text-[#84796B] font-medium">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action CTAs */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedRoom(room)}
                      className="w-full py-2.5 rounded-full border-[#C8AC83]/60 text-[#1A2E26] hover:bg-[#EDE7DC] text-xs uppercase tracking-wider font-medium"
                    >
                      Explore Room
                    </Button>
                    <Button
                      onClick={() => handleBookClick(room.name)}
                      className="w-full py-2.5 rounded-full bg-[#1A2E26] hover:bg-[#2C4339] text-[#F8F5EF] text-xs uppercase tracking-wider font-medium shadow-sm"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Room Detail Modal Dialog */}
      <AnimatePresence>
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRoom(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#F8F5EF] text-[#1A2E26] rounded-3xl shadow-2xl border border-[#E0D7C7] overflow-y-auto z-10 p-6 sm:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 p-2 rounded-full bg-[#EDE7DC] hover:bg-[#E5DAC6] text-[#1A2E26] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                {/* Header & Title */}
                <div>
                  <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#84796B] font-medium mb-1">
                    <span>{selectedRoom.badge}</span>
                    <span>•</span>
                    <span>Dharamkot, Himachal Pradesh</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1A2E26]">
                      {selectedRoom.name}
                    </h3>
                    <div className="text-xl sm:text-2xl font-serif-luxury text-[#1A2E26]">
                      {selectedRoom.price}{" "}
                      <span className="text-xs text-[#84796B] font-sans font-normal">/ night (incl. taxes)</span>
                    </div>
                  </div>
                </div>

                {/* Photo Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedRoom.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#EDE7DC]">
                      <img
                        src={img}
                        alt={`${selectedRoom.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Specs Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#F3EEE5] border border-[#E5DECF] text-xs">
                  <div>
                    <span className="block text-[10px] uppercase text-[#84796B] tracking-widest">Bed Type</span>
                    <span className="font-medium text-[#1A2E26] mt-0.5 block">{selectedRoom.bed}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#84796B] tracking-widest">Occupancy</span>
                    <span className="font-medium text-[#1A2E26] mt-0.5 block">{selectedRoom.guests}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#84796B] tracking-widest">Room Size</span>
                    <span className="font-medium text-[#1A2E26] mt-0.5 block">{selectedRoom.size}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#84796B] tracking-widest">Mountain View</span>
                    <span className="font-medium text-[#1A2E26] mt-0.5 block">{selectedRoom.view}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-[#84796B] font-semibold">
                    The Sanctuary Experience
                  </h4>
                  <p className="text-sm sm:text-base text-[#6B7C72] font-light leading-relaxed">
                    {selectedRoom.fullDesc}
                  </p>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-[#84796B] font-semibold">
                    Signature Room Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedRoom.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2.5 text-xs text-[#2C4339]">
                        <Check className="w-4 h-4 text-[#C8AC83] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Amenities */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-[#84796B] font-semibold">
                    Complete Facilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoom.amenities.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-[#EDE7DC] text-xs text-[#1A2E26] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Modal CTA */}
                <div className="pt-6 border-t border-[#E5DECF] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#84796B]">
                    <span>Hosted by Rahul Kapoor · Check-in 1:00 PM · Check-out 11:00 AM</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedRoom(null)}
                      className="flex-1 sm:flex-none rounded-full px-6 text-xs uppercase tracking-wider"
                    >
                      Back to Rooms
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedRoom(null);
                        handleBookClick(selectedRoom.name);
                      }}
                      className="flex-1 sm:flex-none rounded-full px-8 bg-[#1A2E26] text-[#F8F5EF] hover:bg-[#2C4339] text-xs uppercase tracking-wider"
                    >
                      Book This Room
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
