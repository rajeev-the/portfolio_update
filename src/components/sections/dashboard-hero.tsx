"use client";

import React from "react";
import { config } from "@/data/config";

export const DashboardHero = () => {
  return (
    <header className="w-full px-4 py-3 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/25 transition-all shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        {/* Left: Name // Title */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h1 className="font-display font-bold text-base sm:text-lg tracking-tight text-white uppercase">
            {"Rajeev Ranjan"}
          </h1>
          <span className="text-zinc-500 font-mono text-xs select-none">{"//"}</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
            {"Software Engineer"}
          </span>
        </div>

        {/* Right: Gmail, GitHub, LinkedIn, X */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-zinc-400">
          <a
            href={`mailto:${config.email}`}
            className="hover:text-white hover:underline transition-colors capitalize font-medium"
          >
            {"Gmail"}
          </a>
          <span className="text-zinc-600">/</span>
          <a
            href={config.social.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline transition-colors capitalize font-medium"
          >
            {"GitHub"}
          </a>
          <span className="text-zinc-600">/</span>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline transition-colors capitalize font-medium"
          >
            {"LinkedIn"}
          </a>
          <span className="text-zinc-600">/</span>
          <a
            href={config.social.twitter || "https://x.com/"}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline transition-colors capitalize font-medium"
          >
            {"X"}
          </a>
        </div>
      </div>
    </header>
  );
};

export default DashboardHero;
