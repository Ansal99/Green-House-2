"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export interface FAQItem {
  q: string;
  a: string;
}

const DEFAULT_HOTEL_FAQS: FAQItem[] = [
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

export interface Faqs01Props {
  defaultValue?: string;
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  onAskClick?: () => void;
}

export default function Faqs01({
  defaultValue = "item-0",
  items = DEFAULT_HOTEL_FAQS,
  title = "Frequently asked questions",
  subtitle = "Direct answers to common questions about stays, arrivals, and mountain activities in Dharamkot.",
  className,
  onAskClick,
}: Faqs01Props) {
  return (
    <div className={className}>
      <div className="w-full">
        <div className="flex flex-col items-start gap-2.5 text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C8AC83]/60 bg-[#EDE7DC]/70 px-3 py-1 text-xs font-medium text-[#1A2E26] shadow-xs">
            <Sparkles className="size-3 text-[#C8AC83]" />
            FAQ & Guest Knowledge
          </span>
          <h2
            className="font-serif-luxury text-3xl sm:text-4xl text-[#1A2E26] tracking-tight font-light"
            style={{
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-[#6B7C72] font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-6 sm:mt-8 divide-y divide-[#E8E2D5]"
          defaultValue={defaultValue}
        >
          {items.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-[#E8E2D5] py-1"
            >
              <AccordionTrigger className="text-left font-serif-luxury text-base sm:text-lg font-normal text-[#1A2E26] hover:text-[#C8AC83] transition-colors py-3.5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-[#5A6961] font-light leading-relaxed pb-4 pt-1">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-dashed border-[#C8AC83]/60 bg-[#FFFFFF] p-4 sm:p-5 sm:flex-row shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#1A2E26] text-[#FAF7F2]">
              <MessageCircle className="size-4 text-[#C8AC83]" />
            </span>
            <div className="flex flex-col leading-tight">
              <p className="text-xs sm:text-sm font-medium text-[#1A2E26]">
                Still have a specific question?
              </p>
              <p className="text-[11px] text-[#6B7C72]">
                Rahul & Vikram reply directly within minutes.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={onAskClick}
            className="rounded-full bg-[#1A2E26] hover:bg-[#254236] text-[#FAF7F2] text-xs font-medium px-4 py-2 shadow-xs cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Ask Us Anything</span>
            <ArrowRight className="size-3 text-[#C8AC83]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

