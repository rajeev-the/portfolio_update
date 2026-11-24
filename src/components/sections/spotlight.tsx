"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { ArrowUpRight, Code2, Briefcase, Layers } from "lucide-react";

export const SpotlightSection = () => {
  return (
    <SectionWrapper id="spotlight" className="w-full py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="spotlight"
          eyebrow="HIGHLIGHTS // CORE FOCUS"
          title="Featured Work & Production Track Record"
          desc="Key engineering milestones: real-world software developer internship & enterprise double-entry ERP."
        />

        {/* 2-Column Responsive Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Internship @ AventIQ */}
          <div className="rounded-lg bg-[#232328] border border-white/[0.08] hover:border-[#8b1e2b]/50 p-6 md:p-7 flex flex-col justify-between transition-all shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.15)]">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-[3px] bg-[#2a0e13] flex items-center justify-center text-[#ff9e98]">
                    <Briefcase className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#ff9d9f]">
                    {"Recent Internship // 2026"}
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400 shrink-0">
                  {"Jul 2026 — Oct 2026"}
                </span>
              </div>

              {/* Title & Organization */}
              <div className="mb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#fbf8fe]">
                  {"Software Developer Intern"}
                </h3>
                <span className="font-mono text-sm font-semibold text-[#ff9d9f] block mt-1">
                  {"@AventIQ"}
                </span>
              </div>

              {/* Concise Impact Points */}
              <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-300 leading-relaxed mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ff9d9f] font-mono text-xs mt-1 shrink-0">•</span>
                  <span>{"Engineered production backend RESTful APIs and microservice workflows using Node.js and Express."}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ff9d9f] font-mono text-xs mt-1 shrink-0">•</span>
                  <span>{"Built cross-platform client features for mobile and desktop applications using Flutter and Electron."}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ff9d9f] font-mono text-xs mt-1 shrink-0">•</span>
                  <span>{"Integrated AWS S3 cloud media pipelines and AWS Lambda serverless handlers for scalable processing."}</span>
                </li>
              </ul>
            </div>

            {/* Bottom Tech Chips */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff9d9f]/70 mr-1">
                  {"TECH //"}
                </span>
                {["Node.js", "Flutter", "Electron", "AWS S3", "AWS Lambda", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-[3px] bg-[#1b1b1f] text-zinc-300 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: FinixBooks Flagship Project */}
          <div className="rounded-lg bg-[#232328] border border-white/[0.08] hover:border-[#8b1e2b]/50 p-6 md:p-7 flex flex-col justify-between transition-all shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.15)]">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-[3px] bg-[#2a0e13] flex items-center justify-center text-[#ff9e98]">
                    <Layers className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#ff9d9f]">
                    {"Flagship Project // ERP v1.0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://finixbooks.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#ff9d9f] hover:underline"
                  >
                    <span>{"Live Demo"}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Title & Architecture */}
              <div className="mb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#fbf8fe]">
                  {"FinixBooks: Financial Ledger & Tally Sync"}
                </h3>
                <p className="font-sans text-xs text-zinc-400 mt-1">
                  {"Enterprise double-entry ledger ERP with integer-paise precision & bidirectional Tally sync."}
                </p>
              </div>

              {/* Visual Preview */}
              <div className="relative w-full h-36 sm:h-40 rounded-[6px] overflow-hidden border border-white/[0.08] bg-[#1b1b1f] mb-5 shadow-inner">
                <img
                  src="/assets/projects-screenshots/finixbooks-preview.svg"
                  alt="FinixBooks ERP"
                  className="w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Concise Impact Points */}
              <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ff9d9f] font-mono text-xs mt-1 shrink-0">•</span>
                  <span>{"High-integrity double-entry posting engine with balanced validation (Debits = Credits)."}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ff9d9f] font-mono text-xs mt-1 shrink-0">•</span>
                  <span>{"Append-only MongoDB voucher schema for 8+ transaction types with atomic sequencing."}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ff9d9f] font-mono text-xs mt-1 shrink-0">•</span>
                  <span>{"Bidirectional Electron bridge for automated accounting sync with desktop Tally."}</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions & Tech */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {["React", "TypeScript", "Node.js", "MongoDB", "Flutter", "Electron"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-[3px] bg-[#2a0e13] text-[#ff9e98] border border-[#8b1e2b]/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://finixbooks.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[4px] bg-[#8b1e2b] hover:bg-[#721422] text-white text-xs font-mono font-semibold transition-colors shadow-xs"
                >
                  <span>{"Visit"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/rajeev-the"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Code2 className="w-3 h-3" />
                  <span>{"Code"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SpotlightSection;
