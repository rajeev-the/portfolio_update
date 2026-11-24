"use client";

import { useState } from "react";
import Link from "next/link";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import FunnyThemeToggle from "../theme/funny-theme-toggle";

const NAV_ITEMS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Competitive Programming", href: "#competitive-programming" },
  { label: "Certifications & Achievements", href: "#certifications" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf8fe]/90 dark:bg-[#1b1b1f]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Monogram & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#8b1e2b] text-white font-mono text-xs font-bold tracking-tight shadow-sm group-hover:bg-[#721422] transition-colors">
            RR
          </span>
          <span className="font-display font-bold text-sm tracking-tight text-[#1b1b1f] dark:text-[#fbf8fe] group-hover:text-[#8b1e2b] transition-colors">
            {config.author}
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-[#574141] dark:text-zinc-400 hover:text-[#8b1e2b] dark:hover:text-[#ff9d9f] transition-colors tracking-tight"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions & Contact Button */}
        <div className="flex items-center gap-3">
          <FunnyThemeToggle className="w-5 h-5 hidden sm:flex text-[#574141] hover:text-[#8b1e2b] transition-colors" />

          <Link href="#contact" className="hidden sm:inline-flex">
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] border border-[#8b1e2b]/30 hover:border-[#8b1e2b] bg-transparent hover:bg-[#f3e8e8] dark:hover:bg-[#2a0e13] text-[#8b1e2b] dark:text-[#ff9d9f] text-xs font-mono font-semibold tracking-wide transition-all shadow-xs">
              <span>CONTACT / CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[4px] text-[#1b1b1f] dark:text-white hover:bg-[#f0edf2] dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf8fe] dark:bg-[#1b1b1f] border-b border-[#e4e1e7] dark:border-zinc-800 px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#1b1b1f] dark:text-zinc-200 hover:text-[#8b1e2b] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#e4e1e7] dark:border-zinc-800 flex items-center justify-between">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-semibold text-[#8b1e2b] dark:text-[#ff9d9f]"
            >
              CONTACT / CV →
            </Link>
            <FunnyThemeToggle className="w-5 h-5 text-[#574141]" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

