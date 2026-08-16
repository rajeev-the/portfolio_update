"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Sparkles,
  Wrench,
  Cloud,
  Terminal,
  Cpu,
  Workflow,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaWindows,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiFlutter,
  SiDart,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiDjango,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiAdobephotoshop,
  SiAndroidstudio,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRabbitmq,
} from "react-icons/si";

interface SkillItem {
  name: string;
  sub?: string;
  icon: React.ReactNode;
}

interface BentoCard {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  icon: React.ReactNode;
  gradient: string;
  borderGlow: string;
  colSpan: string;
  skills: SkillItem[];
}

const BENTO_CARDS: BentoCard[] = [
  // FULL WIDTH HERO: LANGUAGES & PARADIGMS
  {
    id: "languages",
    title: "Programming Languages & Paradigms",
    tagline: "Strongly typed foundations, object-oriented design patterns & algorithms",
    badge: "Core Engineering Foundations",
    icon: <Code2 className="size-5 text-violet-400" />,
    gradient: "from-violet-600/25 via-indigo-600/10 to-transparent",
    borderGlow: "hover:border-violet-500/60 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.35)]",
    colSpan: "col-span-12",
    skills: [
      { name: "Java", sub: "Enterprise & OOP", icon: <FaJava className="size-4 text-[#ea2d2e]" /> },
      { name: "JavaScript", sub: "Web Standard ES6+", icon: <SiJavascript className="size-4 text-[#f7df1e]" /> },
      { name: "TypeScript", sub: "Static Types", icon: <SiTypescript className="size-4 text-[#3178c6]" /> },
      { name: "Dart", sub: "Client-Side OOP", icon: <SiDart className="size-4 text-[#0175c2]" /> },
      { name: "Python", sub: "Backend & ML", icon: <FaPython className="size-4 text-[#3776ab]" /> },
      { name: "C (basic)", sub: "Systems Logic", icon: <span className="font-mono text-xs text-cyan-400 font-bold">C</span> },
      { name: "C++ (basic)", sub: "DSA Foundations", icon: <SiCplusplus className="size-4 text-[#00599c]" /> },
      { name: "Object-Oriented Programming (OOP)", sub: "System Design", icon: <Terminal className="size-4 text-violet-400" /> },
    ],
  },
  // ROW 2: BACKEND & FRONTEND
  {
    id: "backend",
    title: "Backend Development",
    tagline: "Event-driven microservices, asynchronous queues & RESTful APIs",
    badge: "Scalable Systems",
    icon: <Server className="size-5 text-cyan-400" />,
    gradient: "from-cyan-500/20 via-blue-500/5 to-transparent",
    borderGlow: "hover:border-cyan-400/50 hover:shadow-[0_0_35px_-10px_rgba(6,182,212,0.35)]",
    colSpan: "col-span-12 lg:col-span-6",
    skills: [
      { name: "Spring Boot", sub: "Java Microservices", icon: <SiSpringboot className="size-4 text-[#6db33f]" /> },
      { name: "RabbitMQ", sub: "Message Broker", icon: <SiRabbitmq className="size-4 text-[#ff6600]" /> },
      { name: "Node.js", sub: "Async Runtime", icon: <FaNodeJs className="size-4 text-[#68a063]" /> },
      { name: "REST API", sub: "High-Throughput APIs", icon: <Workflow className="size-4 text-amber-400" /> },
      { name: "Django", sub: "Python Framework", icon: <SiDjango className="size-4 text-emerald-400" /> },
      { name: "Docker", sub: "Containerized Services", icon: <FaDocker className="size-4 text-[#2496ed]" /> },
    ],
  },
  {
    id: "frontend",
    title: "Frontend (Web & Mobile)",
    tagline: "Cross-platform mobile applications & reactive web interfaces",
    badge: "Cross-Platform UI",
    icon: <Smartphone className="size-5 text-indigo-400" />,
    gradient: "from-indigo-500/20 via-violet-500/5 to-transparent",
    borderGlow: "hover:border-indigo-400/50 hover:shadow-[0_0_35px_-10px_rgba(99,102,241,0.35)]",
    colSpan: "col-span-12 lg:col-span-6",
    skills: [
      { name: "Flutter", sub: "Mobile (iOS / Android)", icon: <SiFlutter className="size-4 text-[#02569b]" /> },
      { name: "React.js", sub: "Web UI Library", icon: <FaReact className="size-4 text-[#61dafb]" /> },
      { name: "Tailwind CSS", sub: "Utility-First CSS", icon: <SiTailwindcss className="size-4 text-[#38bdf8]" /> },
      { name: "HTML5", sub: "Semantic Markup", icon: <SiHtml5 className="size-4 text-[#e34f26]" /> },
      { name: "CSS", sub: "Styling & Responsive Layout", icon: <SiCss3 className="size-4 text-[#1572b6]" /> },
    ],
  },
  // ROW 3: DATABASES & AI/TOOLS
  {
    id: "database-cloud",
    title: "Databases & Cloud Infrastructure",
    tagline: "Relational modeling, document storage, caching & AWS pipelines",
    badge: "Storage & DevOps",
    icon: <Database className="size-5 text-emerald-400" />,
    gradient: "from-emerald-500/20 via-teal-500/5 to-transparent",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-[0_0_35px_-10px_rgba(16,185,129,0.35)]",
    colSpan: "col-span-12 lg:col-span-6",
    skills: [
      { name: "MySQL", sub: "Relational Schema", icon: <SiMysql className="size-4 text-[#4479a1]" /> },
      { name: "MongoDB", sub: "Document NoSQL", icon: <SiMongodb className="size-4 text-[#47a248]" /> },
      { name: "Redis", sub: "In-Memory Caching", icon: <SiRedis className="size-4 text-[#dc382d]" /> },
      { name: "AWS (EC2, S3)", sub: "Cloud Compute & Media", icon: <FaAws className="size-4 text-[#ff9900]" /> },
      { name: "Firebase", sub: "Realtime Sync", icon: <SiFirebase className="size-4 text-[#ffca28]" /> },
      { name: "CI/CD basics", sub: "Deployment Pipelines", icon: <Cloud className="size-4 text-sky-400" /> },
    ],
  },
  {
    id: "ai-tools",
    title: "AI & Engineering Tooling",
    tagline: "Machine learning, generative models, developer tools & design suites",
    badge: "AI & Developer Stack",
    icon: <Sparkles className="size-5 text-fuchsia-400" />,
    gradient: "from-fuchsia-500/20 via-pink-500/5 to-transparent",
    borderGlow: "hover:border-fuchsia-500/50 hover:shadow-[0_0_35px_-10px_rgba(217,70,239,0.35)]",
    colSpan: "col-span-12 lg:col-span-6",
    skills: [
      { name: "Generative AI", sub: "LLMs & Agentic AI", icon: <Sparkles className="size-4 text-fuchsia-400" /> },
      { name: "Machine Learning", sub: "Neural Foundations", icon: <Cpu className="size-4 text-cyan-400" /> },
      { name: "Android Studio", sub: "Mobile Development IDE", icon: <SiAndroidstudio className="size-4 text-[#3ddc84]" /> },
      { name: "Git", sub: "Version Control", icon: <FaGitAlt className="size-4 text-[#f05032]" /> },
      { name: "Linux", sub: "Shell & Workstation", icon: <FaLinux className="size-4 text-white" /> },
      { name: "Windows", sub: "Operating System", icon: <FaWindows className="size-4 text-[#0078d6]" /> },
      { name: "Figma", sub: "UI/UX Prototyping", icon: <FaFigma className="size-4 text-[#f24e1e]" /> },
      { name: "Adobe Photoshop", sub: "Asset Creation", icon: <SiAdobephotoshop className="size-4 text-[#31a8ff]" /> },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full py-20 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[650px] h-[650px] bg-violet-600/10 rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <SectionHeader
        id="skills"
        title="Technical Stack & Architecture"
        desc="Core languages, backend microservices, mobile systems, databases & AI tooling"
        className="static mb-12"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pointer-events-auto">
        {/* Bento Grid with Full-Width Languages Hero + 2x2 Domain Cards */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {BENTO_CARDS.map((card) => (
            <div
              key={card.id}
              className={cn(
                card.colSpan,
                "group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden",
                "bg-zinc-950/80 border border-violet-500/20 backdrop-blur-2xl",
                "transition-all duration-500 hover:-translate-y-1",
                card.borderGlow
              )}
            >
              {/* Glowing Top Ambient Arc */}
              <div
                className={cn(
                  "pointer-events-none absolute -top-16 -left-16 -right-16 h-40 bg-gradient-to-b opacity-40 group-hover:opacity-80 transition-opacity blur-2xl",
                  card.gradient
                )}
              />

              {/* Card Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-xl text-foreground tracking-tight group-hover:text-cyan-400 transition-colors">
                        {card.title}
                      </h3>
                      <span className="text-[11px] font-mono text-violet-400">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
                    {card.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-sans pl-1 mt-1">
                  {card.tagline}
                </p>
              </div>

              {/* Skills Interactive Badges Grid */}
              <div
                className={cn(
                  "relative z-10 grid gap-3",
                  card.id === "languages"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2"
                )}
              >
                {card.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-violet-400/50 hover:bg-zinc-900/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_-3px_rgba(139,92,246,0.3)]"
                  >
                    <div className="size-8 rounded-xl bg-zinc-950 flex items-center justify-center shrink-0 border border-zinc-800">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                        {skill.name}
                      </span>
                      {skill.sub && (
                        <span className="text-[10px] text-zinc-500 font-mono truncate">
                          {skill.sub}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
