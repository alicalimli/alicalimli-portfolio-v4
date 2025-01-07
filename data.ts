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
    id: "1684088694414938113",
    source: "https://x.com/alicalimli_dev/status/1684088694414938113",
  },
  {
    id: "1698222391824896487",
    source: "https://x.com/alicalimli_dev/status/1698222391824896487",
  },

  {
    id: "1685901442257936384",
    source: "https://x.com/alicalimli_dev/status/1685901442257936384",
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
    id: "1718517019660689685",
    source: "https://x.com/alicalimli_dev/status/1718517019660689685",
  },
  {
    id: "1690612219728609281",
    source: "https://x.com/alicalimli_dev/status/1690612219728609281",
  },
  {
    id: "1700895465032548598",
    source: "https://x.com/alicalimli_dev/status/1700895465032548598",
  },
  {
    id: "1653286060238012419",
    source: "https://x.com/alicalimli_dev/status/1653286060238012419",
  },

  {
    id: "1718878763293831329",
    source: "https://x.com/alicalimli_dev/status/1718878763293831329",
  },
  {
    id: "1729032781894688904",
    source: "https://x.com/alicalimli_dev/status/1729032781894688904",
  },
  {
    id: "1750066021355118986",
    source: "https://x.com/alicalimli_dev/status/1750066021355118986",
  },
  {
    id: "1763587528572141881",
    source: "https://x.com/alicalimli_dev/status/1763587528572141881",
  },
  {
    id: "1751598502956999116",
    source: "https://x.com/alicalimli_dev/status/1751598502956999116",
  },
  {
    id: "1692061757861196009",
    source: "https://x.com/alicalimli_dev/status/1692061757861196009",
  },
  {
    id: "1735909696232370204",
    source: "https://x.com/alicalimli_dev/status/1735909696232370204",
  },
  {
    id: "1682639405838925825",
    source: "https://x.com/alicalimli_dev/status/1682639405838925825",
  },
];

export const techBlogsData = [
  {
    title: "Windows 10 Calendar Hover Effect: A Step By Step Tutorial",
    description:
      "Learn how to achieve this awesome windows 10 calendar like border hover effect that you can use in your website",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fwin-calendar.webp?alt=media&token=180be5d4-ba61-4b6e-8fe8-b611a5a1acb1",
    link: "https://blog.alicalimli.com/windows-10-calendar-hover-effect-a-step-by-step-tutorial",
    cta: "read now",
  },
  {
    title: "Windows 10 Setting Hover Effect: A Step By Step Tutorial",
    description:
      "Learn how to create this windows 10 settings hover effect that you can use in your website with HTML, CSS and JavaScript",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fwin-settings.webp?alt=media&token=9dff6dea-82dc-4771-867e-35099cf7eec5",
    link: "https://blog.alicalimli.com/windows-10-setting-hover-effect-a-step-by-step-tutorial",
    cta: "read now",
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

export const projects: ItemProps[] = [
  {
    title: "SRSWTI",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fsrswti-home.webp?alt=media&token=612beab7-c08a-488a-827f-f0b28bad7588",
    description:
      "Led front-end development of a global knowledge and inference platform with multiple integrated applications. Architected and maintained core features that enable seamless knowledge sharing and inference capabilities across organizations.",
    cta: "Visit Website",
    role: "Full Stack Development",
    link: "https://ac-messenger-p.web.app/",
  },
  {
    title: "MagicNotes",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fmagicnotes%20(1).webp?alt=media&token=51ea4c23-39e4-45b2-aeba-3b0451ceb033",
    description:
      "Developed an AI-powered note-taking platform from concept to deployment. Implemented real-time text processing and seamless integration with large language models for automated note generation.",
    cta: "Visit Website",
    role: "Full Stack Development",
    link: "https://www.magicnotes.app/",
  },
  {
    title: "WebDevVisuals",
    description:
      "Built and launched a developer education platform focused on practical tips and front-end development techniques through visual tutorials. Led end-to-end development from concept to launch, including a custom admin dashboard that streamlined content management.",
    cta: "Learn more",
    role: "Full Stack Development",
    link: "https://www.webdevvisuals.com/",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fwebdevvisuals.webp?alt=media&token=2bd3e819-1333-464a-8db1-491675d8d416",
  },
  {
    title: "ACMessenger",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Facmessenger.webp?alt=media&token=fdc201e4-bf18-493a-b9ab-58d41149741b",
    description:
      "Dveloped an interactive real-time chat application featuring instant messaging and seamless user interactions. Engineered smooth animations and real-time updates, gained positive reviews for its polished user interface and user experience.",

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
      "Built a user-friendly movie discovery platform using MVC architecture that helps users explore and find their next favorite shows. Implemented responsive design and advanced filtering features, receiving positive user reviews for its intuitive interface.",
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
      "Designed and developed a minimalist portfolio showcasing my professional journey with smooth animations and optimal performance.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://v2.alicalimli.com/",
    technologies: ["NextJS", "Typescript", "TailwindCSS", "Framer Motion"],
    twitter: "https://x.com/alicalimli_dev/status/1642513563741831168",
    twitterTP: "Over 40+ Reviews on Twitter/X",
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
