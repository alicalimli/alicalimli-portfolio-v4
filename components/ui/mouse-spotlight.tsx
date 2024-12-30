"use client";

import { useState, useEffect } from "react";

const MouseSpotlight = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Set the mouse position as CSS properties on the body
      document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    // Attach the mousemove event listener to the body
    document.body.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run this once on mount

  return (
    <div className="spotlight-container">
      <div className="spotlight"></div>
    </div>
  );
};

export default MouseSpotlight;
