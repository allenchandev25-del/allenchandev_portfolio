"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for the cursor ring
  const cursorX = useSpring(-1000, { stiffness: 250, damping: 20 });
  const cursorY = useSpring(-1000, { stiffness: 250, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16); // Center the 32px ring
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest(".group")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Subtle Glow Spotlight that follows the mouse instantly */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`,
        }}
      />
      
      {/* Light mode specific glow (darker/colored) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 dark:hidden"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.03), transparent 40%)`,
        }}
      />

      {/* Cyber/Tech Outer Cursor Ring - trailing spring animation */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-8 w-8 rounded-full border border-neutral-900/40 dark:border-white/40 hidden md:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          opacity: mousePosition.x === -1000 ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
      
      {/* Tiny inner dot sticking to pointer */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 dark:bg-white hidden md:block mix-blend-difference transition-transform"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isHovering ? 0 : 1})`,
          opacity: mousePosition.x === -1000 ? 0 : 1,
        }}
      />
    </>
  );
};
