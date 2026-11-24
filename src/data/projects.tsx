// Fix: Remove duplicate docker skill from frontend array
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

// Types
export type Skill = {
  title: string;
  bg?: string;
  fg?: string;
  icon?: React.ReactNode;
};

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    aria-label={title}
    className="inline-block w-4 h-4 bg-current"
    style={{
      maskImage: `url(${src})`,
      maskRepeat: "no-repeat",
      maskSize: "contain",
      maskPosition: "center",
      WebkitMaskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      WebkitMaskPosition: "center",
    }}
  />
);

const brand = (
  title: string,
  svgName: string,
  classes?: { bg?: string; fg?: string }
): Skill => ({
  title,
  icon: <MaskIcon src={`/assets/icons/brands/${svgName}`} title={title} />,
  ...classes,
});

export const PROJECT_SKILLS = {
  react: brand("React", "react.svg"),
  ts: brand("TypeScript", "typescript.svg"),
  js: brand("JavaScript", "javascript.svg"),
  node: brand("Node.js", "nodejs.svg"),
  express: brand("Express", "express.svg"),
  mongo: brand("MongoDB", "mongodb.svg"),
  flutter: brand("Flutter", "flutter.svg"),
  electron: brand("Electron", "electron.svg"),
  tailwind: brand("Tailwind", "tailwind.svg"),
  aws: brand("AWS", "aws.svg"),
  redis: brand("Redis", "redis.svg"),
  java: brand("Java", "java.svg"),
  springBoot: brand("Spring Boot", "springboot.svg"),
  rabbitMQ: brand("RabbitMQ", "rabbitmq.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  springDataJpa: brand("Spring Data JPA", "springboot.svg"),
  mySQL: brand("MySQL", "mysql.svg"),
  imageMagick: brand("ImageMagick", "imagemagick.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const TypographyP = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p className={cn("text-sm sm:text-base leading-relaxed text-zinc-300 mb-4", className)}>
    {children}
  </p>
);

const TypographyH3 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h3 className={cn("font-display text-lg font-bold text-white mb-2", className)}>
    {children}
  </h3>
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => (
  <div className="flex flex-wrap items-center gap-3 my-4">
    {live && live !== "#" && (
      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#8b1e2b] text-white text-xs font-mono font-semibold hover:bg-[#721422] transition-colors"
      >
        <span>Live Demo</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    )}
    {repo && repo !== "#" && (
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-xs font-mono font-semibold transition-colors"
      >
        <span>Repository</span>
        <Github className="w-3.5 h-3.5" />
      </a>
    )}
  </div>
);

const projects: Project[] = [
  {
    id: "finixbooks",
    category: "Enterprise ERP & Ledger Engine",
    title: "FinixBooks: Enterprise Financial Ledger & Tally Sync",
    src: "/assets/projects-screenshots/finixbooks-preview.svg",
    screenshots: ["finixbooks-preview.svg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.electron,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://finixbooks.vercel.app/",
    github: "https://github.com/rajeev-the",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {"Enterprise double-entry ledger ERP with integer-paise precision & bidirectional Tally sync."}
          </TypographyP>
          <TypographyP className="font-mono">
            {"Designed a server-authoritative ERP architecture with a unified MongoDB voucher schema for 8+ transaction types, append-only financial records, and integer-paise precision for accurate monetary calculations."}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">{"Transactional Posting Engine & Balanced Ledger"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Built a high-integrity transactional posting engine with balanced ledger validation (Debits = Credits), automated GST splits (CGST, SGST, IGST), atomic voucher sequencing, idempotency checks, multi-tenant data isolation, and role-based access control (RBAC)."}
          </p>

          <TypographyH3 className="my-4 mt-8">{"Electron Tally Bridge & Flutter Client Suite"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Engineered an Electron-based bidirectional Tally sync bridge and a companion cross-platform Flutter ERP app featuring 38+ operational screens, real-time financial reporting, AR/AP aging analysis, and OCR-assisted invoice processing with strict server-side validation."}
          </p>
        </div>
      );
    },
  },
  {
    id: "duco",
    category: "E-Commerce & Custom Design",
    title: "Duco: Custom T-Shirt Design Platform",
    src: "/assets/projects-screenshots/duco-preview.svg",
    screenshots: ["duco-preview.svg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://duco-frontend-git-main-rajeev-thes-projects.vercel.app/",
    github: "https://github.com/rajeev-the",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {"Multi-user e-commerce panel with interactive design tools & real-time order analytics."}
          </TypographyP>
          <TypographyP className="font-mono">
            {"Developed a multi-user e-commerce panel with an integrated design tool, secure OTP authentication, a payment gateway, and separate workflows for bulk and single orders."}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">{"Real-Time Analytics & Architecture"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Built an advanced order analytics module for real-time insights into sales trends, payments, and user activity, enhancing business intelligence and system scalability."}
          </p>

          <TypographyH3 className="my-4 mt-8">{"Comprehensive Admin Operations"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Engineered a comprehensive admin dashboard that centralized control over 80% of the website’s core functionalities, streamlining operational management and customer fulfillment."}
          </p>
        </div>
      );
    },
  },
  {
    id: "rental-app",
    category: "Mobile & Cloud Application",
    title: "Rental Application Platform",
    src: "/assets/projects-screenshots/rental-preview.svg",
    screenshots: ["rental-preview.svg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "http://yachin-deploy.vercel.app/",
    github: "https://github.com/rajeev-the",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {"Full-stack cross-platform rental marketplace with cloud media storage & async queue workers."}
          </TypographyP>
          <TypographyP className="font-mono">
            {"Developed a full-stack rental platform using Flutter and Node.js with MongoDB, enabling users to list, browse, and rent items with real-time availability."}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">{"AWS S3 Cloud Storage & Secure OTP Authentication"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Integrated AWS S3 for scalable media storage and implemented Gmail OTP-based authentication, ensuring secure and efficient handling of user data and images."}
          </p>

          <TypographyH3 className="my-4 mt-8">{"Asynchronous Redis Worker Processing"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Built an asynchronous processing system using Redis as a message queue and worker processes, enabling scalable background task execution and improving system performance."}
          </p>
        </div>
      );
    },
  },
  {
    id: "event-driven-file-conversion",
    category: "Microservices & Distributed Systems",
    title: "Event-Driven File Conversion Platform",
    src: "/assets/projects-screenshots/file-conversion-preview.svg",
    screenshots: ["file-conversion-preview.svg"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springBoot,
        PROJECT_SKILLS.rabbitMQ,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.springDataJpa,
        PROJECT_SKILLS.mySQL,
        PROJECT_SKILLS.imageMagick,
      ],
    },
    live: "#",
    github: "https://github.com/rajeev-the",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {"Scalable asynchronous file and media conversion platform powered by RabbitMQ & Spring Boot."}
          </TypographyP>
          <TypographyP className="font-mono">
            {"Built an event-driven file conversion platform using Java, Spring Boot, RabbitMQ, and Docker, enabling asynchronous processing of image conversion requests through scalable worker services."}
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">{"Asynchronous Event-Driven Architecture"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Built an event-driven file conversion platform using Java, Spring Boot, RabbitMQ, and Docker, enabling asynchronous processing of image conversion requests through scalable worker services. Decoupled conversion producers from workers to ensure fault isolation and high throughput."}
          </p>

          <TypographyH3 className="my-4 mt-8">{"RESTful APIs & Fault-Tolerant Media Processing"}</TypographyH3>
          <p className="font-mono mb-2 text-zinc-300">
            {"Developed RESTful APIs for file upload, metadata management, and conversion status tracking, integrating ImageMagick with Spring Data JPA and MySQL for reliable, fault-tolerant file processing."}
          </p>
        </div>
      );
    },
  },
];

export default projects;
