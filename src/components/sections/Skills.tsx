"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const skillCategories = [
  { key: "aiMl", label: "AI & Machine Learning" },
  { key: "frontend", label: "Frontend Architecture" },
  { key: "backend", label: "Backend & Systems" },
  { key: "dataDb", label: "Data & Storage" },
  { key: "toolsCloud", label: "DevOps & Cloud" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Capabilities
          </h2>
          <p className="text-foreground/60 font-mono text-sm uppercase tracking-widest pb-2 max-w-sm md:text-right">
            Technologies I use to build scalable, intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills[category.key as keyof typeof skills].map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-accent/20 hover:border-accent/40 hover:text-accent transition-all cursor-default font-medium text-sm md:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
