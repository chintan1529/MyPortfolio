"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundGradient = useMotionTemplate`radial-gradient(circle 800px at ${springX}px ${springY}px, rgba(167, 139, 250, 0.15), transparent 80%)`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      
      {/* Awwwards-style Interactive Background */}
      <div className="absolute inset-0 bg-[#030303] -z-20 pointer-events-none" />
      
      {/* Dynamic Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />
      
      {/* Interactive Spotlight */}
      <motion.div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: backgroundGradient }}
      />
      
      {/* Ambient static glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      {/* CSS Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-screen pointer-events-none -z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />
      
      <div className="max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white uppercase drop-shadow-2xl">
            Chintan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-dark drop-shadow-none">
              Chhajed
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 max-w-2xl"
        >
          <p className="text-xl md:text-3xl text-white/90 font-medium font-display tracking-tight drop-shadow-md">
            {personalInfo.role}
          </p>
          <p className="mt-4 text-lg md:text-xl text-white/60 leading-relaxed drop-shadow-sm">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Selected Work</span>
            <div className="absolute inset-0 bg-accent transform scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 rounded-full hover:border-accent hover:text-accent transition-all duration-300 font-medium bg-black/20 backdrop-blur-sm"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24"
      >
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
