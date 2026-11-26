"use client";

import React from "react";

export const CardExperience = () => {
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-5 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 transition-all shadow-2xl">
      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-white/[0.08]">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            {"EXPERIENCE"}
          </span>
          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-300 border border-white/[0.12] shrink-0">
            {"OVERALL EXPERIENCE: 11+ MONTHS"}
          </span>
        </div>

        {/* Roles Container */}
        <div className="space-y-2.5">
          {/* Role 1: AventIQ Internship */}
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md border-l-2 border-l-cyan-400">
            <div className="flex flex-wrap items-baseline justify-between gap-1.5 mb-1.5 pb-1 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-xs sm:text-sm font-bold text-white">
                  {"AventIQ"}
                </h3>
                <span className="text-zinc-500 font-mono text-xs select-none">{"//"}</span>
                <span className="font-mono text-xs font-semibold text-zinc-300">
                  {"Software Dev Intern"}
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-400 font-medium">
                {"Jul – Oct 2026"}
              </span>
            </div>

            <div className="space-y-1.5 text-xs font-sans text-zinc-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
                <p className="text-xs leading-relaxed">
                  {"Architected and deployed scalable Node.js & Express RESTful microservices, implementing structured middleware and request validation pipelines."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
                <p className="text-xs leading-relaxed">
                  {"Built cross-platform client interfaces using Flutter (mobile) and Electron (desktop) with offline-first local state and native OS integration."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
                <p className="text-xs leading-relaxed">
                  {"Engineered cloud asset processing workflows integrating Amazon S3 storage pipelines with event-driven AWS Lambda serverless execution handlers."}
                </p>
              </div>
            </div>
          </div>

          {/* Role 2: Webdesino */}
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md border-l-2 border-l-cyan-400">
            <div className="flex flex-wrap items-baseline justify-between gap-1.5 mb-1.5 pb-1 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-xs sm:text-sm font-bold text-white">
                  {"Webdesino"}
                </h3>
                <span className="text-zinc-500 font-mono text-xs select-none">{"//"}</span>
                <span className="font-mono text-xs font-semibold text-zinc-300">
                  {"Full Stack Developer"}
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-400 font-medium">
                {"Mar – Sep 2025"}
              </span>
            </div>

            <div className="space-y-1.5 text-xs font-sans text-zinc-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
                <p className="text-xs leading-relaxed">
                  {"Shipped production multi-tenant web applications end-to-end using React, Node.js, and Django with responsive UI and relational database modeling."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold shrink-0 select-none">•</span>
                <p className="text-xs leading-relaxed">
                  {"Integrated third-party payment gateway workflows, two-factor SMS/email OTP authentication systems, and real-time operational admin analytics dashboards."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
