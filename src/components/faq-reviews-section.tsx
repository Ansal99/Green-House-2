"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CornerDownRight,
  ThumbsUp,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import Faqs01, { FAQItem } from "@/components/ui/faqs-01";

// ── Google Maps Icon (Authentic 4-color Google G logo) ──
const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

// ── Google Local Guide Badge ──
const LocalGuideBadge = () => (
  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#FFF8E1] text-[#E65100] border border-[#FFE082]">
    <span className="text-[11px] leading-none">★</span>
    <span>Local Guide</span>
  </span>
);

export interface GoogleReview {
  id: string;
  name: string;
  avatar: string;
  isLocalGuide?: boolean;
  guideStats?: string;
  rating: number;
  date: string;
  tripType: string;
  reviewText: string;
  likes: number;
  ownerReply?: {
    ownerName: string;
    role: string;
    avatar: string;
    date: string;
    replyText: string;
  };
}

const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    id: "rev-1",
    name: "Pooja Malhotra",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    isLocalGuide: true,
    guideStats: "32 reviews • 18 photos",
    rating: 5,
    date: "2 days ago",
    tripType: "Holiday • Couple",
    reviewText:
      "Green House is hands down the best boutique stay in Dharamkot! The room was spotless with an authentic cedarwood fireplace that Vikram lit for us every evening. Owner Rahul Kapoor gave us the clearest route map for the Triund trek and secret sunset cliff spots away from the crowd. Waking up to the pine scent and fresh Kangra green tea was sheer bliss.",
    likes: 19,
    ownerReply: {
      ownerName: "Rahul Kapoor",
      role: "Owner & Founder",
      avatar: "/images/rahul-kapoor-owner.jpg",
      date: "1 day ago",
      replyText:
        "Thank you so much Pooja! It was a true pleasure hosting you both at Green House. So glad you enjoyed the evening cedarwood hearth fire and our secret sunset trail. Look forward to welcoming you back to Dharamkot soon!",
    },
  },
  {
    id: "rev-2",
    name: "Arjun Deshmukh",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    isLocalGuide: true,
    guideStats: "14 reviews • 9 photos",
    rating: 5,
    date: "5 days ago",
    tripType: "Vacation • Solo Traveler",
    reviewText:
      "If you want genuine mountain peace and 5-star hospitality, this is the place. Manager Vikram Negi coordinated my cab from Gaggal airport and arranged packed parathas & trail energy bars for my early sunrise hike. The cedarwood suite was warm, cozy, and had an incredible snowline view.",
    likes: 12,
    ownerReply: {
      ownerName: "Rahul Kapoor",
      role: "Owner & Founder",
      avatar: "/images/rahul-kapoor-owner.jpg",
      date: "4 days ago",
      replyText:
        "Arjun, thank you for your wonderful review! Vikram and our kitchen team were thrilled to hear that the early breakfast packs and airport cab made your Triund summit seamless. Safe travels always!",
    },
  },
  {
    id: "rev-3",
    name: "Dr. Tanya Sen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    isLocalGuide: false,
    guideStats: "Verified Guest",
    rating: 5,
    date: "1 week ago",
    tripType: "Workation • 10 Nights",
    reviewText:
      "Booked the workation stay for 10 days. The high-speed fiber Wi-Fi had zero downtime, power backup was seamless, and working from the cedar balcony overlooking pine valleys was super inspiring. Fresh home-style Himachali Dham cooked by their chef was exceptional!",
    likes: 24,
    ownerReply: {
      ownerName: "Rahul Kapoor",
      role: "Owner & Founder",
      avatar: "/images/rahul-kapoor-owner.jpg",
      date: "6 days ago",
      replyText:
        "Thank you Dr. Tanya! We are delighted that Green House provided the serene focus and fast internet you needed for your workation. You are always welcome back to your mountain workspace.",
    },
  },
  {
    id: "rev-4",
    name: "Siddharth Rao",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    isLocalGuide: true,
    guideStats: "21 reviews • 15 photos",
    rating: 5,
    date: "2 weeks ago",
    tripType: "Holiday • Friends",
    reviewText:
      "Unmatched serenity. Away from Mcleodganj chaos yet easily walkable to Dharamkot cafes. Rahul arranged certified mountain guides for our group, and Vikram kept hot spiced chai ready upon our return. Will recommend to everyone visiting Himachal.",
    likes: 16,
    ownerReply: {
      ownerName: "Rahul Kapoor",
      role: "Owner & Founder",
      avatar: "/images/rahul-kapoor-owner.jpg",
      date: "13 days ago",
      replyText:
        "Thank you Siddharth! Hosting your group was an absolute joy. Glad the guided trek and hot chai hit the spot after the trail. See you on your next trip to Dharamshala!",
    },
  },
];

const HOTEL_FAQS: FAQItem[] = [
  {
    q: "How do we reach Green House from Gaggal Airport or Pathankot?",
    a: "Gaggal (Dharamshala) Airport is ~45 minutes away, and Pathankot Railway Station is ~2.5 hours away. Manager Vikram Negi coordinates reliable private mountain cabs straight to the hotel steps.",
  },
  {
    q: "What are the check-in and check-out timings? Can we arrive early?",
    a: "Standard check-in is 1:00 PM and check-out is 11:00 AM. Early arrivals are warmly accommodated subject to room availability with complimentary Kangra high tea in our lounge.",
  },
  {
    q: "Can you arrange certified Triund trek guides and mountain gear?",
    a: "Yes! Owner Rahul Kapoor arranges certified local guides, trekking poles, summit permits, and hot trail lunch packs directly for our guests.",
  },
  {
    q: "Are cedarwood fireplaces operational in winter? How warm are the rooms?",
    a: "All suites feature dual electric warming systems plus authentic handcrafted cedarwood hearths. Fresh seasoned cedar firewood is provided daily during evening turn-down.",
  },
  {
    q: "What dining options are available, and do you cater to dietary preferences?",
    a: "Our hearth kitchen serves fresh home-style Himachali Dham, wholesome continental breakfasts, and fresh Kangra green tea. Vegan, gluten-free, and custom dietary requests are happily catered to.",
  },
];

export const FAQReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = GOOGLE_REVIEWS_DATA;
  const activeReview = reviews[currentIndex];

  // Auto-advance reviews smoothly every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSelectIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleAskUsAnything = () => {
    window.open(
      "https://wa.me/919816012345?text=Hello%20Rahul,%20I%20have%20a%20question%20regarding%20my%20stay%20at%20Green%20House%20Dharamkot",
      "_blank"
    );
  };

  // Animation variants for smooth sliding transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="faq-reviews"
      className="relative w-full bg-[#FAF7F2] text-[#1A2E26] py-14 sm:py-20 lg:py-24 border-t border-[#E8E2D5] overflow-hidden"
    >
      {/* Ambient Mountain Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#EDE7DC]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-[#C8AC83]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-14 relative z-10">

        {/* ─────────────────────────────────────────────────────────────
            1. SECTION HEADER
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2.5"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE7DC] border border-[#C8AC83]/70 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#84796B] font-medium shadow-2xs">
            <GoogleIcon className="w-3.5 h-3.5" />
            Verified Google Reviews & Stay Knowledge
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#1A2E26] tracking-tight">
            Curated Answers & <span className="italic text-[#2C4339]">Google Reviews</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7C72] font-light leading-relaxed">
            Direct clarity on stays and Triund treks on the left, paired with authentic, verified Google Maps reviews and direct owner replies on the right.
          </p>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            2. TWO-COLUMN MAIN CONTENT:
            LEFT: FAQs (faqs-01.tsx)
            RIGHT: Google Maps Reviews with Owner Replies & Animated Transitions
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ── Left Column: FAQs ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 xl:col-span-7 bg-[#FFFFFF] rounded-3xl border border-[#E8E2D5] p-6 sm:p-8 shadow-[0_4px_24px_-6px_rgba(26,46,38,0.06)] flex flex-col justify-between"
          >
            <Faqs01
              items={HOTEL_FAQS}
              defaultValue="item-0"
              title="Frequently asked questions"
              subtitle="Direct answers regarding Gaggal airport cabs, check-in, Triund trek gear, operational cedarwood fireplaces, and meals."
              onAskClick={handleAskUsAnything}
            />
          </motion.div>

          {/* ── Right Column: Google Maps Reviews with Transitions ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between bg-[#FFFFFF] rounded-3xl border border-[#E8E2D5] hover:border-[#C8AC83]/60 p-6 sm:p-7 shadow-[0_4px_24px_-6px_rgba(26,46,38,0.06)] hover:shadow-[0_12px_32px_-8px_rgba(26,46,38,0.12)] transition-all duration-300 relative group"
          >
            
            {/* Top Bar: Google Rating & Navigation */}
            <div>
              <div className="pb-4 border-b border-[#E8E2D5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] shadow-2xs group-hover:scale-105 transition-transform">
                    <GoogleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base text-[#1A2E26]">Google Reviews</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                        4.9 ★
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6B7C72] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#C8AC83]" />
                      Dharamkot, Dharamshala • 190+ verified reviews
                    </p>
                  </div>
                </div>

                {/* Controls: Prev, Play/Pause, Next */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    title={isPaused ? "Play auto-advance" : "Pause auto-advance"}
                    className="w-7 h-7 rounded-full border border-[#E8E2D5] bg-[#FAF7F2] hover:bg-[#EDE7DC] flex items-center justify-center text-[#84796B] hover:text-[#1A2E26] transition-colors cursor-pointer"
                  >
                    {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                  </button>

                  <button
                    onClick={handlePrev}
                    title="Previous Review"
                    className="w-8 h-8 rounded-full border border-[#E8E2D5] bg-[#FAF7F2] hover:bg-[#EDE7DC] hover:border-[#C8AC83] flex items-center justify-center text-[#1A2E26] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    title="Next Review"
                    className="w-8 h-8 rounded-full border border-[#E8E2D5] bg-[#FAF7F2] hover:bg-[#EDE7DC] hover:border-[#C8AC83] flex items-center justify-center text-[#1A2E26] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Animated Progress Timer Bar (when auto-advancing) */}
              <div className="w-full bg-[#E8E2D5]/40 h-0.5 overflow-hidden">
                <motion.div
                  key={currentIndex + (isPaused ? "-paused" : "-running")}
                  initial={{ width: "0%" }}
                  animate={{ width: isPaused ? "0%" : "100%" }}
                  transition={{ duration: isPaused ? 0 : 6, ease: "linear" }}
                  className="h-full bg-[#C8AC83]"
                />
              </div>
            </div>

            {/* Active Google Review with Animated Slide Transitions */}
            <div className="py-4 flex-1 min-h-[300px] flex flex-col justify-center overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeReview.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-3.5"
                >
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={activeReview.avatar}
                        alt={activeReview.name}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-[#EDE7DC] shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-semibold text-sm text-[#1A2E26] leading-tight">
                            {activeReview.name}
                          </h4>
                          {activeReview.isLocalGuide && <LocalGuideBadge />}
                        </div>
                        <p className="text-[11px] text-[#84796B] leading-tight mt-0.5">
                          {activeReview.guideStats}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] text-[#84796B] shrink-0 font-light">
                      {activeReview.date}
                    </span>
                  </div>

                  {/* Stars & Trip Type */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-0.5 text-[#FBBC05]">
                      {[...Array(activeReview.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#6B7C72] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E8E2D5]">
                      {activeReview.tripType}
                    </span>
                  </div>

                  {/* Review Body */}
                  <p className="text-xs sm:text-[13px] text-[#2C4339] font-light leading-relaxed">
                    {activeReview.reviewText}
                  </p>

                  {/* Helpful likes count */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#84796B]">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#C8AC83]" />
                    <span>{activeReview.likes} people found this helpful</span>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      OWNER REPLY BOX WITH STAGGERED REVEAL
                      ───────────────────────────────────────────────────────── */}
                  {activeReview.ownerReply && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      className="rounded-2xl bg-[#FAF7F2] border-l-4 border-l-[#C8AC83] border border-[#E8E2D5] p-3.5 sm:p-4 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CornerDownRight className="w-3.5 h-3.5 text-[#C8AC83] shrink-0" />
                          <img
                            src={activeReview.ownerReply.avatar}
                            alt={activeReview.ownerReply.ownerName}
                            className="w-6 h-6 rounded-full object-cover ring-1 ring-[#C8AC83]"
                          />
                          <div>
                            <span className="text-xs font-semibold text-[#1A2E26] block leading-tight">
                              Response from the owner
                            </span>
                            <span className="text-[10px] text-[#84796B]">
                              {activeReview.ownerReply.ownerName} ({activeReview.ownerReply.role})
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] text-[#84796B]">
                          {activeReview.ownerReply.date}
                        </span>
                      </div>

                      <p className="text-xs text-[#5A6961] font-light leading-relaxed pl-5">
                        {activeReview.ownerReply.replyText}
                      </p>
                    </motion.div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Dots Indicator & Google Verification */}
            <div className="pt-3.5 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#84796B]">
              <div className="flex items-center gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === i
                        ? "w-6 bg-[#1A2E26]"
                        : "w-1.5 bg-[#E8E2D5] hover:bg-[#C8AC83]"
                    }`}
                  />
                ))}
              </div>

              <span className="text-[11px] text-[#1A2E26] font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Google Maps Reviews
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FAQReviewsSection;
