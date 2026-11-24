"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "Dart", "C / C++", "SQL"],
  },
  {
    title: "FRAMEWORKS & SYSTEMS",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express",
      "Flutter",
      "Electron",
      "React",
      "Next.js",
      "Django",
    ],
  },
  {
    title: "CLOUD & INFRASTRUCTURE",
    skills: [
      "AWS (S3, Lambda)",
      "Docker",
      "RabbitMQ",
      "Redis",
      "Linux",
      "Git / GitHub",
      "CI / CD",
    ],
  },
  {
    title: "DATABASES & STORAGE",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "AWS S3 Storage",
      "Redis Cache",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="skills"
          eyebrow="01 // TECHNICAL COMPETENCIES"
          title="Skills"
          desc="Core languages, backend microservices, mobile systems, databases & cloud infrastructure."
        />

        {/* 4 Clean Editorial Cards in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#8b1e2b]/30 dark:hover:border-[#8b1e2b]/50 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.06)] flex flex-col justify-between"
            >
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#574141] dark:text-zinc-400 mb-4 pb-2 border-b border-black/[0.06] dark:border-white/[0.06]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-[4px] bg-[#f3e8e8] dark:bg-[#2a0e13] text-[#721422] dark:text-[#ff9e98] border border-[#8b1e2b]/15 hover:border-[#8b1e2b]/40 hover:bg-[#ffdada] dark:hover:bg-[#3d151c] transition-colors select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
