"use client";

import React, { useEffect, useState } from "react";
import DashboardHero from "./dashboard-hero";
import CardFeaturedProject from "./card-featured-project";
import CardAwsSkills from "./card-aws-skills";
import CardExperience from "./card-experience";
import CardOtherProjects from "./card-other-projects";
import CardCompetitiveProgramming from "./card-competitive-programming";
import CardContact from "./card-contact";
import CardFaq from "./card-faq";

type SectionId =
  | "featured"
  | "skills"
  | "experience"
  | "projects"
  | "cp"
  | "contact"
  | "faq";

export const RetroDashboard = () => {
  const [focused, setFocused] = useState<SectionId | null>(null);
  const [hovered, setHovered] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!focused) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFocused(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [focused]);

  const handleSectionClick = (id: SectionId, e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest("a, button, input, textarea, select")) return;
    e.stopPropagation();
    setFocused((prev) => (prev === id ? null : id));
  };

  const activeId = focused ?? hovered;

  const sectionProps = (id: SectionId, extra = "") => {
    const base = `transition-all duration-200 ease-out cursor-pointer rounded-xl ${extra}`;
    let stateClass = base;

    if (activeId) {
      if (activeId === id) {
        stateClass = focused
          ? `${base} opacity-100 scale-[1.015] ring-1 ring-white/35 shadow-[0_0_30px_rgba(255,255,255,0.08)] relative z-20`
          : `${base} opacity-100 scale-[1.012] ring-1 ring-white/25 shadow-[0_0_24px_rgba(255,255,255,0.06)] relative z-10`;
      } else {
        stateClass = focused
          ? `${base} opacity-45 scale-[0.99]`
          : `${base} opacity-65 scale-[0.995]`;
      }
    }

    return {
      className: stateClass,
      onClick: (e: React.MouseEvent<HTMLDivElement>) => handleSectionClick(id, e),
      onPointerEnter: (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "touch") setHovered(id);
      },
      onPointerLeave: (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "touch") setHovered((prev) => (prev === id ? null : prev));
      },
    };
  };

  return (
    <div
      onClick={() => focused && setFocused(null)}
      className="w-full flex flex-col max-w-[1360px] mx-auto px-3 sm:px-6 py-3 sm:py-6 gap-3 sm:gap-4 overflow-x-hidden"
    >
      {/* 1. Header */}
      <div
        className={
          focused
            ? "opacity-50 transition-all duration-200"
            : hovered
              ? "opacity-75 transition-all duration-200"
              : "transition-all duration-200"
        }
      >
        <DashboardHero />
      </div>

      {/* 2. Top Fold: Featured Project + (Skills | Experience) */}
      <div className="flex flex-col gap-3 sm:gap-3.5">
        <div {...sectionProps("featured")}>
          <CardFeaturedProject />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 items-stretch">
          <div {...sectionProps("skills", "h-full")}>
            <CardAwsSkills />
          </div>
          <div {...sectionProps("experience", "h-full")}>
            <CardExperience />
          </div>
        </div>
      </div>

      {/* 3. Other Notable Projects */}
      <div {...sectionProps("projects")}>
        <CardOtherProjects />
      </div>

      {/* 4. Competitive Programming + Direct Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 items-stretch">
        <div {...sectionProps("cp", "h-full")}>
          <CardCompetitiveProgramming />
        </div>
        <div {...sectionProps("contact", "h-full")}>
          <CardContact />
        </div>
      </div>

      {/* 5. Technical & Engineering FAQ */}
      <div {...sectionProps("faq")}>
        <CardFaq />
      </div>

      {/* 6. Apple Frosted Glass Bottom Footer */}
      <footer
        className={`w-full px-4 py-3 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-wider transition-all duration-200 ${
          focused ? "opacity-45" : hovered ? "opacity-70" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">{"RAJEEV RANJAN"}</span>
          <span className="text-zinc-600">{"//"}</span>
          <span>{"SOFTWARE ENGINEER"}</span>
        </div>
        <div className="text-zinc-500">
          <span>{"NEW DELHI, IN • AVAILABLE GLOBALLY"}</span>
        </div>
      </footer>

      {/* Floating Focus Reset Pill */}
      {focused && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setFocused(null);
          }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white font-mono text-[11px] uppercase tracking-wider shadow-2xl hover:bg-black transition-all"
        >
          {"Focus Mode • Click or Press ESC to Reset"}
        </button>
      )}
    </div>
  );
};

export default RetroDashboard;
