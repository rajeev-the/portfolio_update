"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { config } from "@/data/config";

export const CardContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(config.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-5 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 transition-all shadow-2xl">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              {"DIRECT CONTACT & INQUIRY"}
            </span>
            <span className="text-zinc-600 font-mono text-xs">{"•"}</span>
            <span className="font-mono text-xs text-zinc-400">{"CONNECT"}</span>
          </div>
          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            {"OPEN FOR ROLES"}
          </span>
        </div>

        {/* Big Headline */}
        <div className="mb-2.5">
          <div className="flex items-baseline justify-between mb-0.5">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {"Let's Connect"}
            </h3>
            <span className="font-mono text-xs text-cyan-400 font-semibold">
              {"Response < 24 Hours"}
            </span>
          </div>
          <p className="font-mono text-xs text-zinc-400">
            {"Open to Full-Time Software Engineering & Backend Roles"}
          </p>
        </div>

        {/* Contact Information List */}
        <div className="flex flex-col gap-1.5 mb-2.5 font-mono text-xs">
          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-center justify-between hover:bg-white/[0.08] transition-colors">
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-2 text-zinc-200 hover:text-white min-w-0"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="font-medium text-white truncate">{config.email}</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-zinc-400 hover:text-white transition-colors p-1"
              title="Copy email address"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-center justify-between text-zinc-200">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-medium text-white">{config.phone}</span>
            </div>
            <span className="text-[10px] text-zinc-400 uppercase">{"DIRECT"}</span>
          </div>

          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-center justify-between text-zinc-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-medium text-zinc-200">{"New Delhi, India"}</span>
            </div>
            <span className="text-[10px] text-zinc-400 uppercase">{"REMOTE & RELO"}</span>
          </div>
        </div>
      </div>

      {/* Footer Quick Action Buttons */}
      <div className="pt-2.5 border-t border-white/[0.08] mt-2 flex flex-wrap items-center justify-between gap-2.5 font-mono text-xs">
        <a
          href={`mailto:${config.email}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-3 sm:py-1 rounded bg-white hover:bg-zinc-200 text-black font-semibold transition-all text-xs shadow-sm"
        >
          <Mail className="w-3 h-3" />
          <span>{"Send Direct Email"}</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>

        <div className="flex items-center gap-2 text-zinc-400">
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline"
          >
            {"LinkedIn"}
          </a>
          <span>{"•"}</span>
          <a
            href={config.social.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline"
          >
            {"GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
