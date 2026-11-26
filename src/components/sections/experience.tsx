"use client";

import React from "react";
import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="experience"
          eyebrow="02 // TRACK RECORD"
          title="Experience"
          desc="Professional software engineering roles, enterprise client engagements & systems development."
        />

        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="p-6 md:p-8 rounded-2xl bg-[#232328] border border-white/[0.08] hover:border-[#8b1e2b]/50 transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.15)]"
            >
              {/* Header: Title, Company, and Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#fbf8fe] text-balance">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-sm font-semibold text-[#ff9d9f]">
                    @{exp.company}
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400 shrink-0">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>

              {/* Bullet Descriptions */}
              <ul className="space-y-2.5 text-sm text-zinc-300 leading-normal mb-5 text-pretty">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#ff9d9f] font-mono text-xs mt-0.5 shrink-0">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Monospace Tech Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.04]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#ff9d9f]/70 mr-1">
                  {"TECH //"}
                </span>
                {exp.skills.map((skillName) => {
                  const skill = SKILLS[skillName as SkillNames];
                  const label = skill?.label || skillName;
                  return (
                    <span
                      key={skillName}
                      className="font-mono text-xs font-medium px-2 py-0.5 rounded-md bg-[#1b1b1f] text-zinc-300 border border-white/[0.08] hover:border-[#8b1e2b]/40 transition-colors"
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
