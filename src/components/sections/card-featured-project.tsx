"use client";

import React from "react";
import { ArrowUpRight, Code2 } from "lucide-react";

export const CardFeaturedProject = () => {
  return (
    <div className="w-full p-4 sm:p-5 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 transition-all shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 mb-2.5 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
            {"FEATURED PROJECT"}
          </span>
          <span className="text-zinc-600 font-mono text-xs">{"•"}</span>
          <span className="font-mono text-xs font-semibold text-white">
            {"FinixBooks"}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs shrink-0">
          <a
            href="https://finixbooks.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-2.5 sm:py-1 rounded bg-white hover:bg-zinc-200 text-black font-semibold transition-all text-xs shadow-sm"
          >
            <span>{"Live App"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://github.com/rajeev-the"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-2.5 sm:py-1 rounded border border-white/20 hover:border-white/40 text-zinc-200 hover:text-white bg-white/[0.06] transition-colors text-xs font-medium"
          >
            <Code2 className="w-3 h-3" />
            <span>{"Code"}</span>
          </a>
        </div>
      </div>

      {/* Tech Stack Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 pb-2 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] mr-1">
            {"Tech Stack //"}
          </span>
          {["React", "Node.js", "Express", "MongoDB", "Electron", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-200 border border-white/[0.12] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider hidden sm:inline-block">
          {"FINANCIAL LEDGER SYSTEM"}
        </span>
      </div>

      {/* 4 Points (Frosted Glass Sub-Boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs font-mono">
        <div className="h-full p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-start gap-2.5">
          <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
          <span className="text-zinc-200 font-sans text-xs sm:text-[13px] leading-relaxed">
            {"Replaced standard IEEE-754 floating-point storage with strict integer-paise calculations across all ledger postings to eliminate cumulative decimal rounding drift."}
          </span>
        </div>

        <div className="h-full p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-start gap-2.5">
          <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
          <span className="text-zinc-200 font-sans text-xs sm:text-[13px] leading-relaxed">
            {"Engineered an atomic balance verification engine at the database layer that automatically rejects any transaction voucher where total debits do not equal total credits."}
          </span>
        </div>

        <div className="h-full p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-start gap-2.5">
          <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
          <span className="text-zinc-200 font-sans text-xs sm:text-[13px] leading-relaxed">
            {"Built a background Electron IPC desktop agent executing bi-directional XML data synchronization to automate real-time journal and invoice sync with local Tally ERP."}
          </span>
        </div>

        <div className="h-full p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-start gap-2.5">
          <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
          <span className="text-zinc-200 font-sans text-xs sm:text-[13px] leading-relaxed">
            {"Architected append-only MongoDB schemas across 8 voucher types with atomic sequential numbering to preserve an unalterable, audit-compliant financial history."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFeaturedProject;
