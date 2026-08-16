import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiThreedotjs,
  SiSpringboot,
  SiRabbitmq,
  SiMysql,
  SiSpring,
  SiFlutter,
  SiDjango,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  redis: brand("Redis", "redis-mono.svg"),
  aws: {
    title: "AWS S3",
    bg: "black",
    fg: "white",
    icon: <FaAws className="size-4 text-[#ff9900]" />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter className="size-4 text-[#02569b]" />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava className="size-4 text-[#ea2d2e]" />,
  },
  springBoot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot className="size-4 text-[#6db33f]" />,
  },
  rabbitMQ: {
    title: "RabbitMQ",
    bg: "black",
    fg: "white",
    icon: <SiRabbitmq className="size-4 text-[#ff6600]" />,
  },
  springDataJpa: {
    title: "Spring Data JPA",
    bg: "black",
    fg: "white",
    icon: <SiSpring className="size-4 text-[#6db33f]" />,
  },
  mySQL: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql className="size-4 text-[#4479a1]" />,
  },
  imageMagick: {
    title: "ImageMagick",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">IM</span>,
  },
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

const projects: Project[] = [
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
            Multi-user e-commerce panel with interactive design tools &amp; real-time order analytics.
          </TypographyP>
          <TypographyP className="font-mono">
            Developed a multi-user e-commerce panel with an integrated design tool, secure OTP authentication, a payment gateway, and separate workflows for bulk and single orders.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Real-Time Analytics &amp; Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built an advanced order analytics module for real-time insights into sales trends, payments, and user activity, enhancing business intelligence and system scalability.
          </p>

          <TypographyH3 className="my-4 mt-8">Comprehensive Admin Operations</TypographyH3>
          <p className="font-mono mb-2">
            Engineered a comprehensive admin dashboard that centralized control over 80% of the website’s core functionalities, streamlining operational management and customer fulfillment.
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
            Full-stack cross-platform rental marketplace with cloud media storage &amp; async queue workers.
          </TypographyP>
          <TypographyP className="font-mono">
            Developed a full-stack rental platform using Flutter and Node.js with MongoDB, enabling users to list, browse, and rent items with real-time availability.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">AWS S3 Cloud Storage &amp; Secure OTP Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Integrated AWS S3 for scalable media storage and implemented Gmail OTP-based authentication, ensuring secure and efficient handling of user data and images.
          </p>

          <TypographyH3 className="my-4 mt-8">Asynchronous Redis Worker Processing</TypographyH3>
          <p className="font-mono mb-2">
            Built an asynchronous processing system using Redis as a message queue and worker processes, enabling scalable background task execution and improving system performance.
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
      frontend: [
        PROJECT_SKILLS.docker,
      ],
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
            Scalable asynchronous file and media conversion platform powered by RabbitMQ &amp; Spring Boot.
          </TypographyP>
          <TypographyP className="font-mono">
            Built an event-driven file conversion platform using Java, Spring Boot, RabbitMQ, and Docker, enabling asynchronous processing of image conversion requests through scalable worker services.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Asynchronous Event-Driven Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built an event-driven file conversion platform using Java, Spring Boot, RabbitMQ, and Docker, enabling asynchronous processing of image conversion requests through scalable worker services. Decoupled conversion producers from workers to ensure fault isolation and high throughput.
          </p>

          <TypographyH3 className="my-4 mt-8">RESTful APIs &amp; Fault-Tolerant Media Processing</TypographyH3>
          <p className="font-mono mb-2">
            Developed RESTful APIs for file upload, metadata management, and conversion status tracking, integrating ImageMagick with Spring Data JPA and MySQL for reliable, fault-tolerant file processing.
          </p>
        </div>
      );
    },
  },
];

export default projects;
