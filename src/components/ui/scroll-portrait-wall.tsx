"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface Speaker {
  name: string;
  role: string;
  /** Image URL. Square / portrait crops look best. */
  src: string;
}

export interface ScrollPortraitWallProps {
  /** Big sticky title rendered with `mix-blend-exclusion`. */
  title?: React.ReactNode;
  /** Small line under the title. */
  date?: React.ReactNode;
  /** Scroll hint that fades out as the wall comes into view. */
  hint?: React.ReactNode;
  /** People to scatter across the wall. Defaults to a built-in demo set. */
  speakers?: Speaker[];
  /** Columns on large screens (auto-reduced to 3 on `sm` and 2 on mobile). */
  columns?: number;
  /** Show the name / role caption under each portrait. Default `true`. */
  showCaptions?: boolean;
  className?: string;
}

/* Deterministic placement so SSR and client agree (no Math.random):
 * one portrait per row, with every third row holding a second one,
 * columns walked in a scattered pattern. Returns a grid of speaker
 * indices (or -1 for an empty cell). */
function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = [];
  let i = 0;
  let r = 0;
  while (i < count) {
    const row = new Array<number>(cols).fill(-1);
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = i++;
    if (r % 3 === 0 && i < count) {
      let b = (a + 2) % cols;
      if (b === a) b = (a + 1) % cols;
      row[b] = i++;
    }
    rows.push(row);
    r++;
  }
  return rows;
}

/* Keep portraits a usable size: cap the desired column count on smaller
 * viewports. Starts from `desired` so the SSR markup matches the first
 * client render, then narrows after mount. */
function useResponsiveColumns(desired: number): number {
  const [cols, setCols] = React.useState(desired);

  React.useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (lg.matches) setCols(desired);
      else if (sm.matches) setCols(Math.min(desired, 3));
      else setCols(Math.min(desired, 2));
    };
    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, [desired]);

  return cols;
}

export const GREEN_HOUSE_PEOPLE: Speaker[] = [
  {
    name: "Rahul Kapoor",
    role: "Founder & Hotel Host",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tenzin Norbu",
    role: "Master Cedar Artisan",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chef Anil Sharma",
    role: "Kangra Heritage Cuisine",
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sunita Devi",
    role: "Alpine Herb & Tea Master",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vikram Jamwal",
    role: "Himalayan Trail Naturalist",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Kapoor",
    role: "Guest Experience & Wellness",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sonam Dorje",
    role: "Traditional Stone Mason",
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amit Dogra",
    role: "Hearth & Evening Chai",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Meera Rao",
    role: "Ayurvedic Practitioner",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Karan Negi",
    role: "Dhauladhar Trekking Lead",
    src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
  },
];

export function ScrollPortraitWall({
  title = "The Keepers",
  date = "Dharamkot · Himachal Pradesh · Hosted with Heart",
  hint = "scroll to meet our family",
  speakers = GREEN_HOUSE_PEOPLE,
  columns = 4,
  showCaptions = true,
  className,
}: ScrollPortraitWallProps) {
  const root = React.useRef<HTMLElement | null>(null);
  const hintRef = React.useRef<HTMLDivElement | null>(null);
  const cols = useResponsiveColumns(Math.max(1, columns));
  const layout = React.useMemo(
    () => buildLayout(speakers.length, cols),
    [speakers.length, cols],
  );

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const items = gsap.utils.toArray<HTMLElement>(".spw-item");

      if (reduce) {
        gsap.set(items, { scale: 1 });
        return;
      }

      // Hint fades away over the first stretch of scrolling.
      gsap.to(hintRef.current, {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=40%",
          scrub: true,
        },
      });

      // Each portrait scrubs scale 0 → 1 → 0 across its full pass through the
      // viewport: it grows in from its transform-origin corner, peaks at
      // centre, then shrinks away — "comes and goes".
      items.forEach((el) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
          .fromTo(
            el,
            { scale: 0 },
            { scale: 1, ease: "power2.out", duration: 0.5 },
          )
          .to(el, { scale: 0, ease: "power2.in", duration: 0.5 });
      });
    },
    { scope: root, dependencies: [cols], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      id="people"
      aria-label={typeof title === "string" ? title : undefined}
      className={cn("relative w-full bg-[#16211C] text-[#FAF6EE] overflow-hidden py-16", className)}
    >
      {/* Scroll hint, lower-centre of the first screen, fading on scroll */}
      <div
        ref={hintRef}
        className="pointer-events-none absolute left-1/2 top-[55vh] z-30 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center"
      >
        <span className="relative max-w-[20ch] text-[11px] sm:text-xs uppercase tracking-[0.25em] leading-tight text-[#C8AC83] after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#C8AC83] after:to-transparent after:content-['']">
          {hint}
        </span>
      </div>

      {/* Sticky centred title — inverts against whatever portrait is behind it */}
      <div className="pointer-events-none sticky top-1/2 z-20 -translate-y-1/2 text-center text-white mix-blend-exclusion px-4">
        <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#E5C799] block mb-2 font-medium">
          The People of Green House
        </span>
        <h2 className="font-serif-luxury text-5xl font-light tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          {title}
        </h2>
        {date && (
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/75 sm:text-sm font-light">
            {date}
          </p>
        )}
      </div>

      {/* The scattered portrait grid */}
      <div className="relative z-0 mb-[40vh] mt-[40vh] max-w-7xl mx-auto px-4 sm:px-8">
        {layout.map((row, ri) => (
          <div key={ri} className="flex w-full gap-4 sm:gap-6 my-4 sm:my-6">
            {row.map((idx, ci) => {
              if (idx === -1)
                return <div key={ci} className="aspect-square flex-1" />;

              const s = speakers[idx];
              const origin = ci < cols / 2 ? "right bottom" : "left bottom";

              return (
                <div key={ci} className="aspect-square flex-1">
                  <div
                    className="spw-item relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1C2B24]"
                    style={{ transformOrigin: origin, transform: "scale(0)" }}
                  >
                    <img
                      src={s.src}
                      alt={s.name}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover filter contrast-[1.1] brightness-95 transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    {showCaptions && (
                      <div className="absolute bottom-3 left-3 right-3 flex flex-col justify-end text-left pointer-events-none">
                        <span className="font-serif-luxury text-sm sm:text-base text-[#FAF6EE] font-medium leading-tight truncate">
                          {s.name}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-[#C8AC83] font-light tracking-wider uppercase truncate">
                          {s.role}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollPortraitWall;
