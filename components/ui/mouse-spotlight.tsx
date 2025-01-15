"use client";

import { useState, useEffect } from "react";

const MouseSpotlight = () => {
  const [mousePos, setMousePos] = useState({ x: "0px", y: "0px" });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePos({
        x: `${e.clientX}px`,
        y: `${e.clientY}px`,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            1200px circle at ${mousePos.x} ${mousePos.y},
            rgba(255, 255, 255, 0.03),
            transparent 60%
          )`,
        }}
      />
    </div>
  );
};

export default MouseSpotlight;
