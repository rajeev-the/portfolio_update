const config = {
  title: "Rajeev Ranjan | Software Developer",
  description: {
    long: "Software Developer with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and scalable software development. Experienced in building backend services using Java, Spring Boot, Node.js, and AWS, with hands-on experience in asynchronous systems, REST APIs, and cloud-based applications.",
    short:
      "Software Developer specializing in Java, Spring Boot, Node.js, Flutter, Electron, AWS, and scalable enterprise systems.",
  },
  keywords: [
    "Rajeev Ranjan",
    "portfolio",
    "software developer",
    "backend developer",
    "Full Stack Developer",
    "FinixBooks",
    "ERP",
    "Java",
    "Spring Boot",
    "Flutter",
    "Electron",
    "RabbitMQ",
    "Docker",
    "React",
    "Node.js",
    "AWS",
    "Data Structures",
    "Algorithms",
  ],
  author: "Rajeev Ranjan",
  email: "rajeevranjan9560807144@gmail.com",
  phone: "+91-9310650163",
  site: "https://rajeevranjan.dev",

  // for github stars button & leetcode stats
  githubUsername: "rajeev-the",
  githubRepo: "portfolio",
  leetcodeUsername: "rajeevranjan_8860",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/rajeev-ranjan-97b51923b/",
    github: "https://github.com/rajeev-the",
    leetcode: "https://leetcode.com/u/rajeevranjan_8860/",
    geeksforgeeks: "https://www.geeksforgeeks.org/",
  },
};
export { config };
