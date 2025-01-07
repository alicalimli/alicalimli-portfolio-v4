"use client";

import React, { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "newsletter-section",
    label: "Newsletter",
    top: "-top-4",
    highlightOn: 0,
  },
  {
    id: "projects-section",
    label: "Projects",
    top: "top-[13%]",
    highlightOn: 0.13,
  },
  {
    id: "tect-stack-section",
    label: "Tech Stack & Blogs",
    top: "top-[53%]",
    highlightOn: 0.53,
  },
  {
    id: "featured-tweets-section",
    label: "Tweets",
    top: "top-[70%]",
    highlightOn: 0.7,
  },
  {
    id: "contact-section",
    label: "Get In Touch",
    top: "top-[94%]",
    highlightOn: 0.94,
  },
];

interface ScrollTrackerProps {}

const ScrollTracker = ({}: ScrollTrackerProps) => {
  const [mainScrollProgress, setMainScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  console.log(mainScrollProgress);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setMainScrollProgress(latest);
  });

  return (
    <div className="bg-[#333] h-full w-[2px] relative ">
      <motion.div
        style={{ height }}
        className="absolute w-full top-0 left-0 bg-primary"
      ></motion.div>

      {sections.map((s) => {
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(
              ` absolute left-1/2 -translate-x-1/2 ${s.top} rounded-full`
            )}
          >
            <div
              className={cn(
                "size-3 duration-500 rounded-full  relative",
                mainScrollProgress >= s.highlightOn ? "bg-primary" : "bg-[#333]"
              )}
            >
              <div
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border rounded-full duration-300",
                  mainScrollProgress >= s.highlightOn
                    ? "border-primary scale-[1.2] w-[190%] h-[190%]"
                    : "border-[#333] w-[180%] h-[180%]"
                )}
              ></div>

              <p
                className={cn(
                  "absolute text-xs duration-500  left-[1.7rem] top-1/2 -translate-y-1/2 whitespace-nowrap ",
                  mainScrollProgress >= s.highlightOn
                    ? "text-blue-400 translate-x-1"
                    : "text-white/70 translate-x-0"
                )}
              >
                {s.label}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ScrollTracker;
