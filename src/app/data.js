import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const projects = [
  {
    title: "Cloud Drive",
    type: "Web Development",
    description: "An easy to host, fully secure and private, self-hostable cloud drive, which turns any machine into a powerful, fully featured private cloud storage with features like video streaming, file transfer via download links/torrents by using the underlying filesystem.",
    tools: ["Spring Boot", "Java", "Flask", "Python"],
    demoLink: "#",
    sourceCode: "#"
  },
  {
    title: "AI Based Resume Scanner",
    type: "Web Development",
    description: "A tool that parses resumes and matches them against job descriptions using NLP techniques to provide a compatibility score.",
    tools: ["Python", "Flask", "OpenAI API"],
    demoLink: "#",
    sourceCode: "#"
  }
];

export const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2023",
    link: "#"
  }
];

export const blogs = [
  {
    title: "Understanding React Server Components",
    summary: "A deep dive into how RSCs work and why they are the future of React development.",
    date: "Oct 2024",
    link: "#"
  },
  {
    title: "Optimizing Next.js Performance",
    summary: "Tips and tricks to make your Next.js applications fly.",
    date: "Sep 2024",
    link: "#"
  }
];

export const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://linkedin.com"
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com"
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com"
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:hello@example.com"
  }
];
