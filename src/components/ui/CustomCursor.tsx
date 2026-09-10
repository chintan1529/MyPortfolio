"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use MotionValues for 0-lag hardware-accelerated updates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for the smooth trailing ring
  const cursorXSpring = useSpring(cursorX, { stiffness: 400, damping: 28, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 400, damping: 28, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Inner sharp dot (0 lag) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[100] hidden md:block shadow-[0_0_10px_rgba(167,139,250,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : (isVisible ? 1 : 0),
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-accent/60 rounded-full pointer-events-none z-[99] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(167, 139, 250, 0.15)" : "transparent",
          borderColor: isHovering ? "rgba(167, 139, 250, 1)" : "rgba(167, 139, 250, 0.6)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
