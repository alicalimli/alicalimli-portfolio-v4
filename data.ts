import {
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ItemProps } from "./components/item-card/ItemCard";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export const socialLinks = [
  {
    tooltip: "X (formerly Twitter)",
    Icon: FaSquareXTwitter,
    link: "https://twitter.com/alicalimli_dev",
  },
  {
    Icon: FaLinkedin,
    tooltip: "LinkedIn",
    link: "https://www.linkedin.com/in/alicalimli/",
  },
  {
    Icon: FaGithub,
    tooltip: "Github",
    link: "https://github.com/alicalimli",
  },
  {
    Icon: IoIosMail,
    tooltip: "Email",
    link: "mailto:@alicalimli76@gmail.com",
  },
];

export const opprojects: ItemProps[] = [
  {
    title: "ACMessenger",
    thumbnail: "/projects/acmessenger.png",
    description:
      "A Fullstack Chatapp that I've built to learn more about React and its popular libraries like redux, and also learn to use Firebase.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://ac-messenger-p.web.app/",
    sourceCode: "https://github.com/alicalimli/ac-messenger",
    technologies: [
      "ReactJS",
      "Typescript",
      "Firebase",
      "TailwindCSS",
      "Redux Toolkit",
    ],
  },
  {
    title: "MovieMatrix",
    thumbnail: "/projects/moviematrix.png",
    sourceCode: "https://github.com/alicalimli/movie-matrix-app/",
    description:
      "A Vanilla JS Project that I have built to deepen my knowledge about HTML, CSS and JavaScript and practice consuming API’s as well.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://moviematrix.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const projects: ItemProps[] = [
  {
    title: "SRSWTI",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fsrswti-home.webp?alt=media&token=612beab7-c08a-488a-827f-f0b28bad7588",
    description:
      "A Fullstack Chatapp that I've built to learn more about React and its popular libraries like redux, and also learn to use Firebase.",
    cta: "Visit Website",
    role: "Full Stack Development",
    link: "https://ac-messenger-p.web.app/",
  },
  {
    title: "MagicNotes",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fmagicnotes%20(1).webp?alt=media&token=51ea4c23-39e4-45b2-aeba-3b0451ceb033",
    description:
      "A Vanilla JS Project that I have built to deepen my knowledge about HTML, CSS and JavaScript and practice consuming API’s as well.",
    cta: "Visit Website",
    role: "Full Stack Development",
    link: "https://moviematrix.netlify.app/",
  },
  {
    title: "WebDevVisuals",
    description:
      "A platform to learn tips & tricks that would take your web dev skills to the next level all in one place.",
    cta: "Learn more",
    role: "Full Stack Development",
    link: "https://www.webdevvisuals.com/",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fwebdevvisuals.webp?alt=media&token=2bd3e819-1333-464a-8db1-491675d8d416",
  },
];

export const recentIssues: ItemProps[] = [
  {
    title: "The Easiest Way to Build your Online Presence",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fnewsletter-banner.webp?alt=media&token=8689ca29-04ad-410e-a9e9-552a3c7fbe7c",
    description: "I started building mine by doing this.",
    link: "/easiest-way-build-an-online-presence",
    isRoute: true,
    cta: "Read",
  },
  {
    title: "You have to code or build SOMETHING",
    description: "As a Developer, this is how you level up.",
    link: "/you-have-to-code-or-build-something",
    isRoute: true,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fnewsletter-banner.webp?alt=media&token=8689ca29-04ad-410e-a9e9-552a3c7fbe7c",
    cta: "Read",
  },
];

export const products: ItemProps[] = [
  {
    title: "WebDevVisuals",
    description:
      "A platform to learn tips & tricks that would take your web dev skills to the next level all in one place.",
    cta: "Learn more",
    link: "https://www.webdevvisuals.com/",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fnewsletter-banner.webp?alt=media&token=8689ca29-04ad-410e-a9e9-552a3c7fbe7c",
  },
  {
    title: "Essential Tips & Tricks (Free)",
    description:
      "Essential tips and tricks that would level up your website and your visitor's user experience.",
    badge: "Join The Waitlist",
    cta: "Join The Waitlist",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fnewsletter-banner.webp?alt=media&token=8689ca29-04ad-410e-a9e9-552a3c7fbe7c",
  },
];

export const techStack = [
  {
    name: "React",
    Icon: SiReact,
    tooltip: "JavaScript Framework",
  },
  {
    name: "Figma",
    Icon: SiFigma,
    tooltip: "Designing User Interfaces",
  },
  {
    name: "Redux Toolkit",
    Icon: SiRedux,
    tooltip: "State Management",
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
    tooltip: "CSS Framework",
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
    tooltip: "JavaScript Extension",
  },
  {
    name: "Supabase",
    Icon: SiSupabase,
    tooltip: "Application Backend",
  },
  {
    name: "Framer Motion",
    Icon: TbBrandFramerMotion,
    tooltip: "Complex Animations & Transitions",
  },
];
