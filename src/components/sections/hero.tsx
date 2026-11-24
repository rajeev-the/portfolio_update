"use client";

import React from "react";
import { config } from "@/data/config";
import { Mail, ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import ActivityHeatmap from "../activity-heatmap";

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="w-full pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#f3e8e8] dark:bg-[#2a0e13] border border-[#8b1e2b]/20 text-[#8b1e2b] dark:text-[#ff9d9f] text-xs font-mono font-medium mb-5 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8b1e2b] animate-pulse" />
          <span>Available for hire</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#1b1b1f] dark:text-[#fbf8fe] mb-4 max-w-4xl">
          Rajeev Ranjan —{" "}
          <span className="text-[#8b1e2b] dark:text-[#ff9d9f]">
            Software Developer.
          </span>
        </h1>

        {/* Concise Narrative */}
        <p className="font-sans text-base sm:text-lg text-[#574141] dark:text-zinc-300 leading-relaxed max-w-2xl mb-8">
          Building backend services, financial ledger engines, and cross-platform applications with Java, Spring Boot, Node.js, Flutter, and AWS.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#8b1e2b] hover:bg-[#721422] text-white text-xs sm:text-sm font-mono font-semibold tracking-wide transition-all shadow-xs active:translate-y-[1px]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{config.email}</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[4px] border border-black/15 dark:border-white/15 hover:border-[#8b1e2b] text-[#1b1b1f] dark:text-zinc-200 hover:text-[#8b1e2b] text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="/rajeev_sdd.pdf"
            target="_blank"
            className="inline-flex items-center gap-1 px-3 py-2 text-xs sm:text-sm font-mono text-[#574141] dark:text-zinc-300 hover:text-[#8b1e2b] transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#8b1e2b]" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Monospace Quick Links */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#574141] dark:text-zinc-400">
          {config.social.github && (
            <a
              href={config.social.github}
              target="_blank"
              className="hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors"
            >
              GitHub ↗
            </a>
          )}
          <span>•</span>
          {config.social.linkedin && (
            <a
              href={config.social.linkedin}
              target="_blank"
              className="hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors"
            >
              LinkedIn ↗
            </a>
          )}
          <span>•</span>
          {config.social.leetcode && (
            <a
              href={config.social.leetcode}
              target="_blank"
              className="hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors"
            >
              LeetCode ↗
            </a>
          )}
        </div>

        {/* GitHub Heatmap - 100% visible immediately */}
        <ActivityHeatmap />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
