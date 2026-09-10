"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fast ~700ms duration to never block visitors
    const timer = setTimeout(() => {
      setVisible(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col justify-between p-8 md:p-14 pointer-events-none select-none"
        >
          <div className="flex justify-between items-center text-xs font-mono text-white/40 uppercase tracking-widest">
            <span>CHINTAN CHHAJED</span>
            <span>01 / 01</span>
          </div>

          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-display text-2xl md:text-4xl text-white font-medium tracking-tight"
            >
              INTELLIGENT SYSTEMS ARCHITECTURE
            </motion.p>
            <p className="mt-2 text-xs md:text-sm font-mono text-accent uppercase tracking-widest">
              AI · ML · RAG · SYSTEMS
            </p>
          </div>

          <div className="flex justify-between items-end text-xs font-mono text-white/30 uppercase tracking-widest">
            <span>INITIALIZING ENVIRONMENT</span>
            <span className="text-accent animate-pulse">● LIVE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
