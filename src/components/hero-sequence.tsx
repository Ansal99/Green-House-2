"use client";

import React, { useRef, useState, useEffect } from 'react';
import { TOTAL_FRAMES } from '@/lib/constants';
import { FrameCanvas } from './frame-canvas';
import { EditorialOverlays } from './editorial-overlays';

interface HeroSequenceProps {
  getNearestFrame: (index: number) => HTMLImageElement | null;
  loadedProgress: number;
  isComplete: boolean;
}

export const HeroSequence: React.FC<HeroSequenceProps> = ({
  getNearestFrame,
  loadedProgress,
  isComplete,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          // Reserve the final 100vh of scroll track so the last frame stays perfectly stationary while the next section rises over it
          const playDistance = rect.height - 2 * window.innerHeight;

          if (playDistance > 0) {
            const rawProgress = -rect.top / playDistance;
            const clamped = Math.min(Math.max(rawProgress, 0), 1);
            setScrollProgress(clamped);
            setFrameIndex(Math.min(clamped, 1) * (TOTAL_FRAMES - 1));
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-[480vh] bg-[#16211C]"
    >
      {/* Sticky Fullscreen Canvas Viewport: Remains pinned until entire 240-frame sequence finishes */}
      <div className="sticky top-0 left-0 w-full h-screen h-[100dvh] overflow-hidden bg-[#16211C]">
        {/* Instant Native First Frame Poster (Zero-latency initial visual paint) */}
        <img
          src="/frames/ezgif-frame-001.jpg"
          alt="Green House Dharamkot"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* The High-Performance Frame Canvas */}
        <FrameCanvas
          frameIndex={frameIndex}
          getNearestFrame={getNearestFrame}
          className="absolute inset-0 w-full h-full"
        />

        {/* Narrative Scrollytelling Typography Layer */}
        <EditorialOverlays progress={scrollProgress} />

        {/* Discreet Minimal Frame Buffering Progress Bar (if still streaming in background) */}
        {!isComplete && (
          <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
            <div
              className="h-[2px] bg-gradient-to-r from-[#C8AC83] to-[#E5DAC6] transition-all duration-300 opacity-60"
              style={{ width: `${Math.round(loadedProgress * 100)}%` }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSequence;
