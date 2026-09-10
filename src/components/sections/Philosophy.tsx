"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  const statement = [
    "I",
    "DON'T",
    "JUST",
    "INTEGRATE",
    "AI",
    "MODELS.",
    "I",
    "ENGINEER",
    "SYSTEMS",
    "AROUND",
    "THEM.",
  ];

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Index */}
        <div className="flex items-center gap-3 mb-12 text-xs font-mono text-accent tracking-widest uppercase">
          <span>02</span>
          <span className="w-8 h-[1px] bg-accent/30" />
          <span>ENGINEERING PHILOSOPHY</span>
        </div>

        {/* Large Editorial Typography Statement */}
        <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white/40 uppercase">
          {statement.map((word, i) => {
            const isHighlight =
              word === "ENGINEER" || word === "SYSTEMS" || word === "AROUND" || word === "THEM.";
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0.25, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`inline-block mr-4 md:mr-6 transition-colors duration-300 ${
                  isHighlight ? "text-white" : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        {/* Supporting Editorial Paragraph */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/[0.08] pt-12">
          <div className="md:col-span-4 text-xs font-mono text-white/40 uppercase tracking-widest">
            SCOPE &middot; ARCHITECTURE &middot; EXECUTION
          </div>

          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-white/85 font-light leading-relaxed font-sans">
              I build end-to-end intelligent systems spanning retrieval, machine learning,
              computer vision, backend engineering, and full-stack product development.
            </p>
            <p className="mt-6 text-sm md:text-base text-white/50 leading-relaxed font-sans">
              Trained weights are only as effective as the data pipelines feeding them, the index
              architectures retrieving their context, and the distributed interfaces delivering them
              to real users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
