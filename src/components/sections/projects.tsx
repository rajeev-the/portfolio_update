"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { ArrowUpRight, Code2 } from "lucide-react";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const PROJECT_META: Record<string, { tag: string; brief: string }> = {
  finixbooks: {
    tag: "FLAGSHIP ERP // v1.0",
    brief:
      "Enterprise double-entry ledger ERP with integer-paise precision and bidirectional Electron Tally sync.",
  },
  duco: {
    tag: "ECOMMERCE // v1.2",
    brief:
      "Multi-user custom apparel design platform with interactive 3D tools and real-time order analytics.",
  },
  "rental-app": {
    tag: "MOBILE // v1.0",
    brief:
      "Cross-platform rental marketplace built with Flutter, Node.js, AWS S3 storage, and Redis queues.",
  },
  "event-driven-file-conversion": {
    tag: "DISTRIBUTED // v1.0",
    brief:
      "Fault-tolerant media conversion pipeline powered by Java, Spring Boot, RabbitMQ, and Docker.",
  },
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeader
          id="projects"
          eyebrow="01 // SELECTED PROJECTS"
          title="Projects"
          desc="Production-grade financial ledger engines, e-commerce platforms, mobile applications & distributed microservices."
        />

        {/* 2x2 Grid of Atelier Crimson Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Single Controlled Dialog - 0 SlotClone hydration mismatch */}
        <Dialog
          open={activeProject !== null}
          onOpenChange={(open) => {
            if (!open) setActiveProject(null);
          }}
        >
          {activeProject && (
            <DialogContent className="max-w-3xl bg-[#1b1b1f] border border-[#8b1e2b]/40 text-zinc-100 p-6 md:p-8 rounded-xl shadow-2xl">
              <div className="pb-4 mb-6 border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs uppercase text-[#ff9d9f] font-semibold">
                    {PROJECT_META[activeProject.id]?.tag || "ENGINEERING // v1.0"}
                  </span>
                  <DialogTitle className="font-display text-2xl font-bold tracking-tight text-white mt-1">
                    {activeProject.title}
                  </DialogTitle>
                </div>
                {activeProject.live && activeProject.live !== "#" && (
                  <a
                    href={activeProject.live}
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
                  {activeProject.src && (
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-white/10 bg-zinc-950">
                      <img
                        src={activeProject.src}
                        alt={activeProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="font-sans text-sm md:text-base leading-relaxed text-zinc-300">
                    {activeProject.content}
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: () => void;
}) => {
  const meta = PROJECT_META[project.id] || {
    tag: "ENGINEERING // v1.0",
    brief: project.category,
  };

  const skillsList = Array.from(
    new Map(
      project.skills.frontend
        .concat(project.skills.backend)
        .map((s) => [s.title, s])
    ).values()
  ).slice(0, 5);

  return (
    <div className="group rounded-lg bg-[#232328] border border-white/[0.08] hover:border-[#8b1e2b]/60 transition-all p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(139,30,43,0.15)]">
      <div>
        {/* Top Rail: Monospace Tag & Direct Visit Arrow */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/[0.06]">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            {meta.tag}
          </span>
          <div className="flex items-center gap-2">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                title="Live Demo"
                className="text-[#ff9d9f] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#fbf8fe] group-hover:text-[#ff9d9f] transition-colors mb-3">
          {project.title}
        </h3>

        {/* Architecture Brief */}
        <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6">
          {meta.brief}
        </p>

        {/* Screenshot Preview */}
        {project.src && (
          <div className="relative w-full h-44 sm:h-52 rounded-[6px] overflow-hidden border border-white/[0.08] bg-[#1b1b1f] mb-6 shadow-inner">
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
          {skillsList.map((skill) => (
            <span
              key={`${project.id}-${skill.title}`}
              className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-[3px] bg-[#2a0e13] text-[#ff9e98] border border-[#8b1e2b]/25"
            >
              {skill.title}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#ff9d9f] hover:underline"
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
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <Code2 className="w-3 h-3" />
                <span>Code</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onOpenDetails}
            className="text-xs font-mono text-zinc-400 hover:text-[#ff9d9f] transition-colors underline-offset-4 hover:underline"
          >
            {"Details →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
