"use client";

import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const PROJECT_META: Record<string, { tag: string; brief: string }> = {
  finixbooks: {
    tag: "ERP // v1.0",
    brief:
      "Enterprise double-entry ledger ERP with integer-paise precision, append-only financial records, balanced ledger validation (Debits = Credits), and bidirectional Electron Tally sync.",
  },
  duco: {
    tag: "ECOMMERCE // v1.2",
    brief:
      "Multi-user custom merchandise and apparel design platform with interactive 3D tools, real-time order analytics, payment gateway, and comprehensive admin dashboard.",
  },
  "rental-app": {
    tag: "MOBILE // v1.0",
    brief:
      "Full-stack cross-platform rental marketplace built with Flutter and Node.js, featuring AWS S3 cloud media storage, Redis background queue workers, and Gmail OTP verification.",
  },
  "event-driven-file-conversion": {
    tag: "DISTRIBUTED // v1.0",
    brief:
      "Event-driven file and media conversion pipeline powered by Java, Spring Boot, RabbitMQ, and Docker, decoupling producers from worker services for fault-tolerant media processing.",
  },
};

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="projects"
          eyebrow="03 // SELECTED WORK"
          title="Projects"
          desc="Production-grade financial ledger engines, e-commerce platforms, mobile applications & distributed microservices."
        />

        {/* 2x2 Grid of Atelier Crimson Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const meta = PROJECT_META[project.id] || {
    tag: "ENGINEERING // v1.0",
    brief: project.category,
  };

  return (
    <div className="group rounded-lg bg-[#ffffff] dark:bg-[#232328] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#8b1e2b]/35 dark:hover:border-[#8b1e2b]/60 transition-all p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.08)]">
      <div>
        {/* Top Rail: Monospace Tag & Direct Visit Arrow */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-black/[0.06] dark:border-white/[0.06]">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#8b7171] dark:text-zinc-400">
            {meta.tag}
          </span>
          <div className="flex items-center gap-2">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                title="Live Demo"
                className="text-[#8b1e2b] dark:text-[#ff9d9f] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#1b1b1f] dark:text-[#fbf8fe] group-hover:text-[#8b1e2b] dark:group-hover:text-[#ff9d9f] transition-colors mb-3">
          {project.title}
        </h3>

        {/* Architecture Brief */}
        <p className="font-sans text-sm text-[#574141] dark:text-zinc-300 leading-relaxed mb-6">
          {meta.brief}
        </p>

        {/* Screenshot Preview */}
        {project.src && (
          <div className="relative w-full h-44 sm:h-52 rounded-[6px] overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-[#f0edf2] dark:bg-[#1b1b1f] mb-6 shadow-inner">
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-300"
            />
          </div>
        )}
      </div>

      {/* Bottom Rail: Tech Stack Chips & Action Trigger */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.skills.frontend.concat(project.skills.backend).slice(0, 5).map((skill) => (
            <span
              key={skill.title}
              className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-[3px] bg-[#f3e8e8] dark:bg-[#2a0e13] text-[#721422] dark:text-[#ff9e98] border border-[#8b1e2b]/15"
            >
              {skill.title}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#8b1e2b] dark:text-[#ff9d9f] hover:underline"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#574141] dark:text-zinc-400 hover:text-[#8b1e2b] dark:hover:text-white transition-colors"
              >
                <Code2 className="w-3 h-3" />
                <span>Code</span>
              </a>
            )}
          </div>

          {/* Dialog trigger for in-depth architectural breakdown */}
          <ResponsiveDialog>
            <ResponsiveDialogTrigger asChild>
              <button className="text-xs font-mono text-[#8b7171] hover:text-[#8b1e2b] transition-colors underline-offset-4 hover:underline">
                Details →
              </button>
            </ResponsiveDialogTrigger>
            <ResponsiveDialogContent className="max-w-3xl bg-[#fbf8fe] dark:bg-[#1b1b1f] border border-[#8b1e2b]/25 text-[#1b1b1f] dark:text-zinc-100 p-6 md:p-8 rounded-xl shadow-2xl">
              <div className="pb-4 mb-6 border-b border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs uppercase text-[#8b1e2b] font-semibold">
                    {meta.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#1b1b1f] dark:text-white mt-1">
                    {project.title}
                  </h3>
                </div>
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[4px] bg-[#8b1e2b] text-white text-xs font-mono font-semibold hover:bg-[#721422] transition-colors"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <ScrollArea className="max-h-[60vh] pr-4">
                <div className="space-y-6">
                  {project.src && (
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-zinc-950">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="font-sans text-sm md:text-base leading-relaxed text-[#574141] dark:text-zinc-300">
                    {project.content}
                  </div>
                </div>
              </ScrollArea>
            </ResponsiveDialogContent>
          </ResponsiveDialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
