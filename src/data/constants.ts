// Skill Definitions & Work Experience Data
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  LINUX = "linux",
  DOCKER = "docker",
  AWS = "aws",
  JAVA = "java",
  SPRINGBOOT = "springboot",
  DART = "dart",
  FLUTTER = "flutter",
  GENAI = "genai",
  ELECTRON = "electron",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Core modern ECMAScript for interactive frontends & backend runtimes.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Strict static typing and enterprise software architecture.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "Semantic, accessible document structure.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "Modern responsive layouts and design systems.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-driven user interfaces and state management.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "Reactive frontend development.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Server-side rendering, streaming SSR, and edge architecture.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first design systems and sleek typography.",
    color: "#06b6d4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "High-throughput asynchronous backend event loops.",
    color: "#339933",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Fast RESTful APIs and middleware pipelines.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "ACID-compliant relational database management.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Document-oriented storage for flexible, high-volume schemas.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control and branch workflows.",
    color: "#f05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "CI/CD actions, code review, and project management.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Consistent code formatting.",
    color: "#f7b93e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Package management and dependency resolution.",
    color: "#cb3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Realtime database and cloud messaging.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 18,
    name: "linux",
    label: "Linux",
    shortDescription: "POSIX shell environments, daemons, and system admin.",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 19,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization, reproducible microservices & compose.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.AWS]: {
    id: 20,
    name: "aws",
    label: "AWS",
    shortDescription: "S3 cloud storage, Lambda serverless, and IAM policies.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.JAVA]: {
    id: 21,
    name: "java",
    label: "Java",
    shortDescription: "Object-oriented systems, memory safety, and concurrency.",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 22,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "Enterprise microservices, JPA transactions, and REST APIs.",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.DART]: {
    id: 23,
    name: "dart",
    label: "Dart",
    shortDescription: "AOT-compiled client development.",
    color: "#0175c2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 24,
    name: "flutter",
    label: "Flutter",
    shortDescription: "Multi-platform responsive UI for iOS, Android & Desktop.",
    color: "#02569b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  [SkillNames.GENAI]: {
    id: 25,
    name: "genai",
    label: "GenAI & LLMs",
    shortDescription: "Integrating LLM embeddings and AI completions.",
    color: "#8b1e2b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.ELECTRON]: {
    id: 26,
    name: "electron",
    label: "Electron",
    shortDescription: "Cross-platform desktop native applications & OS bridge.",
    color: "#47848f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2026",
    endDate: "Oct 2026",
    title: "Software Developer Intern",
    company: "AventIQ",
    description: [
      "Engineered backend RESTful APIs and microservice workflows using Node.js and Express.",
      "Built cross-platform client features for mobile and desktop applications using Flutter and Electron.",
      "Integrated AWS S3 cloud media pipelines and AWS Lambda serverless handlers for scalable processing.",
    ],
    skills: [
      SkillNames.NODEJS,
      SkillNames.FLUTTER,
      SkillNames.ELECTRON,
      SkillNames.AWS,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "Mar 2025",
    endDate: "Sep 2025",
    title: "Full Stack Developer",
    company: "Webdesino",
    description: [
      "Designed and developed full-stack web applications using React, Node.js, and Django.",
      "Shipped production platforms with payment gateways, real-time analytics dashboards, and secure OTP auth.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.TS,
      SkillNames.JS,
      SkillNames.TAILWIND,
      SkillNames.DOCKER,
    ],
  },
];
