"use client";

import React from "react";
import { ArrowUpRight, Code2 } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  techStack: string[];
  live?: string;
  github: string;
  points: [string, string];
}

const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: "duco",
    title: "Duco: Custom Merch E-Commerce Platform",
    category: "ECOMMERCE & CANVAS",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    live: "https://duco-frontend-git-main-rajeev-thes-projects.vercel.app/",
    github: "https://github.com/rajeev-the",
    points: [
      "Built an in-browser interactive customizer with real-time SVG manipulation, live print preview, and automated vector pricing calculations.",
      "Engineered multi-user order workflow with OTP authentication, Razorpay gateway, and an administrative dashboard controlling 80%+ of core operations.",
    ],
  },
  {
    id: "rental-app",
    title: "Rental Marketplace Platform",
    category: "MOBILE & CLOUD",
    techStack: ["Flutter", "Node.js", "MongoDB", "AWS S3", "Redis"],
    live: "http://yachin-deploy.vercel.app/",
    github: "https://github.com/rajeev-the",
    points: [
      "Developed a cross-platform mobile rental marketplace in Flutter with real-time equipment catalog, booking schedules, and passwordless Gmail OTP verification.",
      "Architected Redis message queues for background worker processing and integrated AWS S3 presigned URLs for scalable direct media uploads.",
    ],
  },
  {
    id: "file-conversion",
    title: "Event-Driven File Conversion Platform",
    category: "MICROSERVICES & QUEUES",
    techStack: ["Java", "Spring Boot", "RabbitMQ", "Docker", "MySQL"],
    github: "https://github.com/rajeev-the",
    points: [
      "Architected an asynchronous event-driven media processing pipeline using RabbitMQ to decouple ingest producers from conversion workers, eliminating burst traffic bottlenecks.",
      "Built robust RESTful endpoints with Spring Data JPA and ImageMagick for automatic file transformation, ensuring job status persistence and fault-tolerant retry handling.",
    ],
  },
];

export const CardOtherProjects = () => {
  return (
    <div className="w-full rounded-xl bg-black/30 backdrop-blur-md border border-white/[0.14] hover:border-white/30 transition-all overflow-hidden shadow-2xl">
      {/* Top Header Inside Card */}
      <div className="px-4 py-2.5 sm:px-5 sm:py-3 border-b border-white/[0.08] flex items-center justify-between">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
          {"OTHER NOTABLE PROJECTS"}
        </span>
      </div>

      {/* Directory Format: Full-Width Frosted Glass List */}
      <div className="divide-y divide-white/[0.08]">
        {OTHER_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="p-3.5 sm:p-4 hover:bg-white/[0.04] transition-colors flex flex-col gap-2.5"
          >
            {/* Project Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-display text-sm font-bold text-white">
                  {proj.title}
                </h4>
                <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-300 border border-white/[0.12] uppercase">
                  {proj.category}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs shrink-0">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-2.5 sm:py-1 rounded bg-white hover:bg-zinc-200 text-black font-semibold transition-all text-xs shadow-sm"
                  >
                    <span>{"Live App"}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-2.5 sm:py-1 rounded border border-white/20 hover:border-white/40 text-zinc-200 hover:text-white bg-white/[0.06] transition-colors text-xs font-medium"
                >
                  <Code2 className="w-3 h-3" />
                  <span>{"Code"}</span>
                </a>
              </div>
            </div>

            {/* Tech Stack Row */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
              <span className="text-zinc-400 font-bold uppercase tracking-wider mr-1">
                {"Stack //"}
              </span>
              {proj.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.10] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Technical Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-2 text-zinc-200 font-sans text-xs sm:text-[13px] leading-relaxed">
                <span className="text-cyan-400 font-bold select-none">•</span>
                <span>{proj.points[0]}</span>
              </div>
              <div className="flex items-start gap-2 text-zinc-200 font-sans text-xs sm:text-[13px] leading-relaxed">
                <span className="text-cyan-400 font-bold select-none">•</span>
                <span>{proj.points[1]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOtherProjects;
