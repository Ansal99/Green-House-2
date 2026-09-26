import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHAPTERS, type Chapter } from "@/lib/constants";

interface EditorialOverlaysProps {
  progress: number; // 0.0 to 1.0
}

export const EditorialOverlays: React.FC<EditorialOverlaysProps> = ({ progress }) => {
  // Determine active chapter based on scroll progress
  const activeChapter = CHAPTERS.find(
    (ch: Chapter) => progress >= ch.startProgress && progress <= ch.endProgress
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
      {/* Main Dynamic Editorial Text Layer */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeChapter && (
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(16, 26, 21, 0.5) 0%, rgba(16, 26, 21, 0.22) 50%, transparent 75%)",
              }}
              className={`w-full max-w-3xl py-8 px-6 sm:px-10 rounded-3xl ${
                activeChapter.alignment === "center"
                  ? "mx-auto text-center"
                  : activeChapter.alignment === "right"
                  ? "ml-auto text-right"
                  : "mr-auto text-left"
              }`}
            >
              {/* Display Headline */}
              <h2
                style={{
                  textShadow:
                    "0 4px 30px rgba(0, 0, 0, 0.85), 0 2px 10px rgba(0, 0, 0, 0.6)",
                }}
                className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF6EE] leading-[1.08] tracking-tight mb-4 sm:mb-6"
              >
                {activeChapter.title}
              </h2>

              {/* Editorial Description */}
              <p
                style={{
                  textShadow:
                    "0 2px 18px rgba(0, 0, 0, 0.85), 0 1px 4px rgba(0, 0, 0, 0.7)",
                }}
                className="text-base sm:text-lg md:text-xl text-[#F2ECE1] font-normal max-w-2xl leading-relaxed tracking-wide mx-auto"
              >
                {activeChapter.description}
              </p>

              {/* Optional Signature Badge */}
              {activeChapter.badge && (
                <div
                  style={{
                    textShadow: "0 2px 14px rgba(0, 0, 0, 0.85)",
                  }}
                  className="mt-6 flex items-center justify-center gap-3 text-xs sm:text-sm tracking-[0.28em] uppercase text-[#E5C799] font-medium"
                >
                  <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C799]/80 to-[#E5C799]"></span>
                  <span>{activeChapter.badge}</span>
                  <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent via-[#E5C799]/80 to-[#E5C799]"></span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
