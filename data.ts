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
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

export const featuredTweets = [
  {
    id: "1681551950326939650",
    source: "https://x.com/alicalimli_dev/status/1681551950326939650",
  },
  {
    id: "1715979202661392881",
    source: "https://x.com/alicalimli_dev/status/1715979202661392881",
  },
  {
    id: "1739552586041061459",
    source: "https://x.com/alicalimli_dev/status/1739552586041061459",
  },
  {
    id: "1731927377314295864",
    source: "https://x.com/alicalimli_dev/status/1731927377314295864",
  },
  {
    id: "1684088694414938113",
    source: "https://x.com/alicalimli_dev/status/1684088694414938113",
  },
];

export const socialLinks = [
  {
    tooltip: "@alicalimli_dev on Twitter/X",
    Icon: XLogo,
    link: "https://twitter.com/alicalimli_dev",
  },
  {
    Icon: LinkedinLogo,
    tooltip: "@alicalimli on LinkedIn",
    link: "https://www.linkedin.com/in/alicalimli/",
  },
  {
    Icon: GithubLogo,
    tooltip: "@alicalimli on Github",
    link: "https://github.com/alicalimli",
  },
  {
    Icon: Envelope,
    tooltip: "alicalimli76@gmail.com",
    link: "mailto:@alicalimli76@gmail.com",
  },
];

export const opprojects: ItemProps[] = [
  {
    title: "ACMessenger",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Facmessenger.webp?alt=media&token=fdc201e4-bf18-493a-b9ab-58d41149741b",
    description:
      "A real-time chat app using React and Firebase. I've built this project to explore state management with Redux Toolkit and deepen my knowledge with React and its libaries. TailwindCSS and Framer motion was used to provide a fluid User Experience.",

    cta: "Experience ACMessenger",
    role: "Lead Designer & Full Stack Developer",
    link: "https://ac-messenger-p.web.app/",
    sourceCode: "https://github.com/alicalimli/ac-messenger",
    twitter: "https://x.com/alicalimli_dev/status/1592072460006219776",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Framer Motion",
      "Firebase",
      "TailwindCSS",
      "Redux Toolkit",
    ],
    twitterTP: "Over 190+ Reviews on Twitter/X",
  },
  {
    title: "MovieMatrix",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fmoviematrix.webp?alt=media&token=f7ed9cfc-639e-4836-acae-4fe355082803",
    sourceCode: "https://github.com/alicalimli/movie-matrix-app/",
    twitter: "https://x.com/alicalimli_dev/status/1530437661990830080",
    description:
      "A platform to explore shows and movies built with vanilla JavaScript and MVC pattern, using TMDB API to show the latest movies in an easy-to-use format.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://moviematrix.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    twitterTP: "Over 180+ Reviews on Twitter/X",
  },
  {
    title: "Portfolio Website v2",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Faliv2-portfolio.webp?alt=media&token=e1d1e208-bf90-4556-b80e-4932656cbc07",
    sourceCode: "https://github.com/alicalimli/alicalimli-portfolio/",
    description:
      "A modern, minimalist portfolio website built with Next.js and TypeScript to showcase my latest projects and professional journey in web development.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://v2.alicalimli.com/",
    technologies: ["NextJS", "Typescript", "TailwindCSS", "Framer Motion"],
    twitter: "https://x.com/alicalimli_dev/status/1642513563741831168",
    twitterTP: "Over 40+ Reviews on Twitter/X",
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
    isRoute: true,
    cta: "Read",
    id: "1",
  },
  {
    title: "You have to code or build SOMETHING",
    description: "As a Developer, this is how you level up.",
    isRoute: true,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fnewsletter-banner.webp?alt=media&token=8689ca29-04ad-410e-a9e9-552a3c7fbe7c",
    cta: "Read",
    id: "2",
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
