"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollTrackerProps {}

const ScrollTracker = ({}: ScrollTrackerProps) => {
  const { scrollYProgress } = useScroll(); // Tracks scroll progress (0 to 1)
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Maps scroll progress to height

  return (
    <div className="bg-[#333] h-96 w-[2px] relative overflow-hidden">
      <motion.div
        style={{ height }}
        className="absolute w-full top-0 left-0 bg-primary"
      ></motion.div>
    </div>
  );
};

export default ScrollTracker;
