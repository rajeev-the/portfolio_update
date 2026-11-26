"use client";

import { useState } from "react";
import Link from "next/link";
import { config } from "@/data/config";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "[01] Skills", href: "#skills" },
  { label: "[02] Project", href: "#project" },
  { label: "[03] Experience", href: "#experience" },
  { label: "[04] DSA", href: "#dsa" },
  { label: "[Resume]", href: "/rajeev_sdd.pdf", external: true },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left: Brand Monogram & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-[3px] bg-black text-white font-mono text-xs font-black tracking-tight group-hover:bg-neutral-800 transition-colors">
            {"RR"}
          </span>
          <span className="font-display font-black text-sm tracking-tight text-black uppercase">
            {config.author}
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
            {"// PORTFOLIO"}
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              className="text-xs font-mono font-semibold text-neutral-600 hover:text-black uppercase tracking-wider hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions & Contact Button */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${config.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-black hover:bg-neutral-800 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all active:translate-y-[1px]"
          >
            <span>{"CONTACT"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-[3px] text-black hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-300 px-6 py-4 flex flex-col gap-3 shadow-xs animate-in fade-in slide-in-from-top-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-semibold text-neutral-800 hover:text-black uppercase tracking-wider py-1"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
            <a
              href={`mailto:${config.email}`}
              className="text-xs font-mono font-semibold text-black uppercase"
            >
              {config.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
