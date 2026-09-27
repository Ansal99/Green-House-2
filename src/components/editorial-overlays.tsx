"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHAPTERS, type Chapter } from "@/lib/constants";

interface EditorialOverlaysProps {
  progress: number; // 0.0 to 1.0
}

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export const EditorialOverlays: React.FC<EditorialOverlaysProps> = ({ progress }) => {
  // Determine active chapter based on scroll progress
  const activeChapter = CHAPTERS.find(
    (ch: Chapter) => progress >= ch.startProgress && progress <= ch.endProgress
  );

  const isArrival = activeChapter?.id === "arrival";

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
      {/* Main Dynamic Editorial Text Layer */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeChapter && (
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(6px)",
                transition: { duration: 0.5, ease: luxuryEase },
              }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(16, 26, 21, 0.52) 0%, rgba(16, 26, 21, 0.22) 55%, transparent 75%)",
              }}
              className={`w-full max-w-3xl py-8 px-6 sm:px-10 rounded-3xl ${
                activeChapter.alignment === "center"
                  ? "mx-auto text-center"
                  : activeChapter.alignment === "right"
                  ? "ml-auto text-right"
                  : "mr-auto text-left"
              }`}
            >
              {/* 1. Tag / Category */}
              {activeChapter.tag && (
                <motion.div
                  initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.1,
                    ease: luxuryEase,
                    delay: isArrival ? 0.45 : 0.05,
                  }}
                  className="mb-3"
                >
                  <span className="text-[11px] sm:text-[12px] tracking-[0.28em] uppercase text-[#E5C799] font-medium opacity-90">
                    {activeChapter.tag}
                  </span>
                  <div className="mt-2 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#E5C799] to-transparent opacity-40 mx-auto" />
                </motion.div>
              )}

              {/* 2. Headline Title */}
              <motion.h2
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.2,
                  ease: luxuryEase,
                  delay: isArrival ? 0.75 : 0.15,
                }}
                style={{
                  textShadow:
                    "0 4px 30px rgba(0, 0, 0, 0.85), 0 2px 10px rgba(0, 0, 0, 0.6)",
                }}
                className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF6EE] leading-[1.08] tracking-tight mb-4 sm:mb-6"
              >
                {activeChapter.title}
              </motion.h2>

              {/* 3. Description Body */}
              <motion.p
                initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.1,
                  ease: luxuryEase,
                  delay: isArrival ? 1.05 : 0.25,
                }}
                style={{
                  textShadow:
                    "0 2px 18px rgba(0, 0, 0, 0.85), 0 1px 4px rgba(0, 0, 0, 0.7)",
                }}
                className="text-base sm:text-lg md:text-xl text-[#F2ECE1] font-normal max-w-2xl leading-relaxed tracking-wide mx-auto"
              >
                {activeChapter.description}
              </motion.p>

              {/* 4. Signature Badge */}
              {activeChapter.badge && (
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.0,
                    ease: luxuryEase,
                    delay: isArrival ? 1.35 : 0.35,
                  }}
                  style={{
                    textShadow: "0 2px 14px rgba(0, 0, 0, 0.85)",
                  }}
                  className="mt-6 flex items-center justify-center gap-3 text-xs sm:text-sm tracking-[0.28em] uppercase text-[#E5C799] font-medium"
                >
                  <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C799]/80 to-[#E5C799]" />
                  <span>{activeChapter.badge}</span>
                  <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent via-[#E5C799]/80 to-[#E5C799]" />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
