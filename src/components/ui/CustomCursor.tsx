"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for the outer ring
  const springX = useSpring(mouseX, { stiffness: 450, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 30, mass: 0.5 });

  useEffect(() => {
    // Only run on desktop with fine pointers
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check cursor data attribute or interactive elements
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        setHoverType(cursorTarget.getAttribute("data-cursor"));
        setIsPointer(true);
      } else {
        const interactive = target?.closest("a, button, input, [role='button']");
        setHoverType(null);
        setIsPointer(!!interactive);
      }
    };

    const onMouseLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
      setHoverType(null);
      setIsPointer(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  // Determine cursor text & dimensions
  let label = "";
  let size = isPointer ? 48 : 28;
  if (hoverType === "project") {
    label = "VIEW";
    size = 68;
  } else if (hoverType === "link") {
    label = "OPEN";
    size = 52;
  } else if (hoverType === "talk") {
    label = "TALK";
    size = 58;
  }

  return (
    <>
      {/* Central micro-dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full pointer-events-none z-[100] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Outer spring ring with dynamic hover expansion and label */}
      <motion.div
        className="fixed top-0 left-0 border border-accent/60 rounded-full pointer-events-none z-[99] hidden md:flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          width: size,
          height: size,
          borderColor: hoverType ? "rgba(56, 189, 248, 0.8)" : "rgba(56, 189, 248, 0.35)",
          backgroundColor: hoverType ? "rgba(56, 189, 248, 0.08)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest text-accent font-semibold uppercase"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
