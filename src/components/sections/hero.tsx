"use client";

import React from "react";
import { config } from "@/data/config";
import { Mail, ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import ActivityHeatmap from "../activity-heatmap";
import HeroShowcase from "./hero-showcase";

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="w-full pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Main First Screen 2 Column Layout */}
        <div id="highlights" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Profile & Fast Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a0e13] border border-[#8b1e2b]/30 text-[#ff9d9f] text-xs font-mono font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e06d79] animate-pulse" />
                <span>{"Available for hire"}</span>
              </div>

              {/* Headline with B5 Left to Right Gradient & Text Balance */}
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4 max-w-[680px] text-balance">
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  {"Rajeev Ranjan "}
                </span>
                <span className="text-[#ff9d9f] block sm:inline">
                  {"Software Developer"}
                </span>
              </h1>

              {/* Subheading Capped at 680px with Text Pretty */}
              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-normal mb-6 max-w-[680px] text-pretty">
                {"Engineered backend architectures, financial ledger engines, and multiplatform client applications with Java, Node.js, Flutter, and AWS."}
              </p>

              {/* Primary Action Buttons (8px V / 12px H padding per B2) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <a
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#8b1e2b] hover:bg-[#721422] text-white text-xs font-mono font-semibold tracking-wide transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] shadow-xs active:scale-[0.98] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e2b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1b1f]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{config.email}</span>
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-white/15 hover:border-[#8b1e2b] text-zinc-200 hover:text-[#ff9d9f] text-xs font-medium transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e2b]"
                >
                  <span>{"Projects"}</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/rajeev_sdd.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-white/15 hover:border-[#8b1e2b] text-zinc-200 hover:text-[#ff9d9f] text-xs font-mono font-semibold transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e2b]"
                >
                  <FileText className="w-3.5 h-3.5 text-[#ff9d9f]" />
                  <span>{"Resume"}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </a>
              </div>

              {/* Monospace Quick Direct Links */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                {config.social.github && (
                  <a
                    href={config.social.github}
                    target="_blank"
                    className="hover:text-[#ff9d9f] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b] rounded-sm"
                  >
                    {"GitHub ↗"}
                  </a>
                )}
                <span>•</span>
                {config.social.linkedin && (
                  <a
                    href={config.social.linkedin}
                    target="_blank"
                    className="hover:text-[#ff9d9f] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b] rounded-sm"
                  >
                    {"LinkedIn ↗"}
                  </a>
                )}
                <span>•</span>
                {config.social.leetcode && (
                  <a
                    href={config.social.leetcode}
                    target="_blank"
                    className="hover:text-[#ff9d9f] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b] rounded-sm"
                  >
                    {"LeetCode ↗"}
                  </a>
                )}
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-lg font-bold text-white block">{"500+"}</span>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">{"DSA Solved"}</span>
              </div>
              <div>
                <span className="font-mono text-lg font-bold text-[#ff9d9f] block">{"Production"}</span>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">{"Intern & Author"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: First Screen Showcase */}
          <div className="lg:col-span-7">
            <HeroShowcase />
          </div>
        </div>

        {/* GitHub Contributions Heatmap */}
        <div className="mt-8">
          <ActivityHeatmap />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
