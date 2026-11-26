"use client";

import React from "react";
import { FaAws } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const SKILL_GROUPS = [
  {
    label: "Languages //",
    skills: ["Java (OOP)", "TypeScript", "Python", "SQL", "Dart", "JavaScript"],
  },
  {
    label: "Backend & APIs //",
    skills: ["Spring Boot", "Node.js", "Express", "Django", "Microservices"],
  },
  {
    label: "Databases & Caching //",
    skills: ["PostgreSQL (ACID)", "MongoDB", "Redis (In-Memory Cache)"],
  },
  {
    label: "Deployment & Cloud DevOps //",
    skills: ["AWS Deployment", "Docker Containers", "CI/CD GitHub Actions", "Linux POSIX", "Nginx"],
    hasAwsCert: true,
  },
];

export const CardAwsSkills = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full min-w-0 overflow-hidden p-4 sm:p-5 rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 transition-all shadow-2xl">
      <div className="min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-white/[0.08]">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            {"CORE SKILLS & AWS"}
          </span>
          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-300 border border-white/[0.12] shrink-0">
            {"TECH STACK"}
          </span>
        </div>

        {/* Core Skills & Deployment Matrix */}
        <div className="space-y-2 font-mono text-xs">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="p-2 sm:p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-200 border border-white/[0.10] hover:bg-white/[0.12] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AWS Cloud Practitioner Certification */}
      <div className="pt-2 mt-2 border-t border-white/[0.08]">
        <div className="p-2 sm:p-2.5 rounded-lg bg-amber-500/[0.08] border border-amber-500/20 backdrop-blur-md flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <FaAws className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-display text-xs font-bold text-amber-300">
                  {"AWS Certified Cloud Practitioner"}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>
          <span className="font-mono text-[11px] font-bold text-amber-400 shrink-0">
            {"2026"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardAwsSkills;
