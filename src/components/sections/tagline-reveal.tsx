"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionWrapper from "../ui/section-wrapper";

const TAGLINE =
  "I build reliable software systems designed for production integrity. From double entry ledgers with integer paise precision to serverless media pipelines, every layer is engineered to perform without failure.";

export const TaglineRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState<number>(0);
  const words = TAGLINE.split(" ");

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveCount(words.length);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Activation window: when section top reaches 75% down to 25% of viewport
          const start = windowHeight * 0.85;
          const end = windowHeight * 0.25;

          if (rect.top > start) {
            setActiveCount(0);
          } else if (rect.bottom < end) {
            setActiveCount(words.length);
          } else {
            const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
            const count = Math.floor(progress * words.length);
            setActiveCount(count);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <SectionWrapper id="philosophy" className="w-full py-20 md:py-32 border-y border-white/[0.06] bg-[#17171a]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#ff9d9f]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#ff9d9f] font-semibold">
            {"ENGINEERING PHILOSOPHY // CORE PRINCIPLE"}
          </span>
        </div>

        <div ref={containerRef} className="max-w-[800px]">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.3] text-balance">
            {words.map((word, idx) => {
              const isActive = idx <= activeCount;
              return (
                <span
                  key={`${word}-${idx}`}
                  className={`inline-block mr-[0.25em] transition-colors duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "text-[#fbf8fe] font-bold" : "text-zinc-600 font-normal"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TaglineRevealSection;
