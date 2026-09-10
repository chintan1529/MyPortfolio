"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NeuralCanvas from "@/components/ui/NeuralCanvas";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [videoAvailable, setVideoAvailable] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Detect prefers-reduced-motion on mount to avoid hydration mismatch
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Autoplay gracefully handled if browser policy restricts
        });
      }
    }
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-28 pb-12 overflow-hidden bg-[#050505]">
      {/* ========================================================================= */}
      {/* BACKGROUND LAYER (Full-viewport video with dark overlay)                 */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {videoAvailable ? (
          <video
            ref={videoRef}
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/hero-poster.webp"
            onError={() => setVideoAvailable(false)}
            className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 contrast-110"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          /* Three.js Neural Network fallback ONLY if video cannot be loaded */
          <NeuralCanvas />
        )}

        {/* Dark Cinematic Gradient & Radial Contrast Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/75 via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 z-10 bg-radial from-transparent via-[#050505]/40 to-[#050505]" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-10 bg-grid-pattern opacity-25" />
      </div>

      {/* ========================================================================= */}
      {/* HERO CONTENT (Z-Index 20: Positioned strictly ABOVE overlay & video)       */}
      {/* ========================================================================= */}

      {/* Top Metadata Row */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-white/80">{personalInfo.status}</span>
          <span className="hidden md:inline text-white/30">— {personalInfo.statusSub}</span>
        </div>

        <div className="text-xs font-mono text-white/40 tracking-widest uppercase">
          {personalInfo.meta}
        </div>
      </motion.div>

      {/* Hero Central Typography Composition */}
      <div className="relative z-20 my-auto py-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="select-none"
        >
          {/* Main Name Headlines */}
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] leading-[0.82] tracking-tighter text-white uppercase drop-shadow-2xl">
            CHINTAN
            <br />
            <span className="text-white/90">CHHAJED</span>
          </h1>

          {/* Subheading & Core Specialization */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-white/95 font-medium tracking-tight">
                AI ENGINEER &middot; BUILDING INTELLIGENT SYSTEMS
              </p>
              <p className="mt-2 text-sm sm:text-base font-mono text-white/50 tracking-wide">
                Retrieval Architectures &middot; Machine Learning &middot; Full-Stack Systems
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="#work"
                data-cursor="project"
                className="group relative px-7 py-3.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 transition-colors group-hover:text-black">
                  EXPLORE WORK &darr;
                </span>
                <div className="absolute inset-0 bg-accent transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />
              </a>

              <a
                href="#contact"
                data-cursor="talk"
                className="px-6 py-3.5 border border-white/20 text-white hover:border-accent hover:text-accent font-mono text-xs uppercase tracking-widest rounded-full transition-all duration-300 bg-white/[0.02] backdrop-blur-sm"
              >
                LET&apos;S TALK &rarr;
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Metadata & Scroll Prompt */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-20 flex items-center justify-between text-xs font-mono text-white/40 tracking-widest border-t border-white/[0.08] pt-4 uppercase"
      >
        <div className="flex items-center gap-4">
          <span>01 / 07</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline">AUTONOMOUS &middot; RETRIEVAL &middot; CIVIC AI</span>
        </div>

        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <span className="animate-bounce">&darr;</span>
        </div>
      </motion.div>
    </section>
  );
}
