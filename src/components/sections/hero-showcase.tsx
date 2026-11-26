"use client";

import React from "react";
import { ArrowUpRight, Code2, Briefcase, Layers } from "lucide-react";

export const HeroShowcase = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Eyebrow Label */}
      <div className="flex items-center justify-between gap-2 px-1">
        <span className="font-mono text-xs uppercase tracking-wider text-[#ff9d9f] font-semibold">
          {"00 // FEATURED TRACK RECORD"}
        </span>
        <span className="font-mono text-xs text-zinc-500">
          {"PRODUCTION HIGHLIGHTS"}
        </span>
      </div>

      {/* Card 1: AventIQ Internship */}
      <div className="rounded-2xl bg-[#232328] border border-white/[0.08] hover:border-[#8b1e2b]/50 p-4 sm:p-6 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.15)]">
        {/* Header Badge & Date */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-[#2a0e13] flex items-center justify-center text-[#ff9e98]">
              <Briefcase className="w-3 h-3" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#ff9d9f]">
              {"Recent Internship"}
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-400 shrink-0">
            {"Jul 2026 to Oct 2026"}
          </span>
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#fbf8fe] tracking-tight text-balance">
            {"Software Developer Intern "}
            <span className="text-[#ff9d9f] font-mono text-sm font-semibold">{"@AventIQ"}</span>
          </h3>
        </div>

        {/* Impact Bullets */}
        <ul className="space-y-2 text-sm text-zinc-300 leading-normal mb-4 text-pretty">
          <li className="flex items-start gap-2">
            <span className="text-[#ff9d9f] font-mono text-xs mt-0.5 shrink-0">•</span>
            <span>{"Engineered production REST APIs and microservice workflows using Node.js and Express."}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff9d9f] font-mono text-xs mt-0.5 shrink-0">•</span>
            <span>{"Built multiplatform client features for mobile and desktop applications with Flutter and Electron."}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff9d9f] font-mono text-xs mt-0.5 shrink-0">•</span>
            <span>{"Integrated AWS S3 cloud media pipelines and AWS Lambda serverless handlers for scalable processing."}</span>
          </li>
        </ul>

        {/* Tech Badges */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/[0.06]">
          {["Node.js", "Flutter", "Electron", "AWS S3", "AWS Lambda"].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs font-medium px-2 py-0.5 rounded-md bg-[#1b1b1f] text-zinc-300 border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card 2: FinixBooks ERP Flagship */}
      <div className="rounded-2xl bg-[#232328] border border-white/[0.08] hover:border-[#8b1e2b]/50 p-4 sm:p-6 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.15)]">
        {/* Header Badge & Quick Action */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-[#2a0e13] flex items-center justify-center text-[#ff9e98]">
              <Layers className="w-3 h-3" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#ff9d9f]">
              {"Flagship Project // ERP"}
            </span>
          </div>
          <a
            href="https://finixbooks.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#ff9d9f] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b] rounded-sm"
          >
            <span>{"Live Demo"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#fbf8fe] tracking-tight text-balance">
            {"FinixBooks: Financial Ledger and Tally Sync"}
          </h3>
        </div>

        {/* Impact Bullets */}
        <ul className="space-y-2 text-sm text-zinc-300 leading-normal mb-4 text-pretty">
          <li className="flex items-start gap-2">
            <span className="text-[#ff9d9f] font-mono text-xs mt-0.5 shrink-0">•</span>
            <span>{"Double entry posting engine with balanced validation where debits equal credits at integer paise precision."}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff9d9f] font-mono text-xs mt-0.5 shrink-0">•</span>
            <span>{"Append only MongoDB voucher schema for 8 transaction types with atomic sequencing."}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff9d9f] font-mono text-xs mt-0.5 shrink-0">•</span>
            <span>{"Bidirectional Electron bridge for automated accounting synchronization with desktop Tally."}</span>
          </li>
        </ul>

        {/* Footer with Badges and Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-1.5">
            {["React", "Node.js", "MongoDB", "Flutter", "Electron"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs font-medium px-2 py-0.5 rounded-md bg-[#2a0e13] text-[#ff9e98] border border-[#8b1e2b]/25"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://finixbooks.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-[#8b1e2b] hover:bg-[#721422] text-white text-xs font-mono font-semibold transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1e2b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1b1f]"
            >
              <span>{"Demo"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/rajeev-the"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-300 px-2 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8b1e2b] rounded-md"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{"Code"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
