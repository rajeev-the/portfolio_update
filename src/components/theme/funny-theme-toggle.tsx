"use client";

import React from "react";
import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FunnyThemeToggle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-1 rounded-[4px] bg-[#2a0e13] border border-[#8b1e2b]/30 text-[#ff9d9f] text-[11px] font-mono select-none",
        className
      )}
      title="Atelier Crimson Dark Canvas"
    >
      <Moon className="w-3 h-3 text-[#ff9d9f]" />
      <span className="hidden sm:inline">DARK</span>
    </div>
  );
}
