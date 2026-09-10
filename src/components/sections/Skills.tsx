"use client";

import { useState } from "react";
import { skillsData } from "@/lib/data";

export default function Skills() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const groups = Object.entries(skillsData);

  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-4">
              <span>07</span>
              <span className="w-8 h-[1px] bg-accent/30" />
              <span>CAPABILITIES</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              TECHNICAL STACK
            </h2>
          </div>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            FOUR SPECIALIZED ENGINEERING DOMAINS
          </p>
        </div>

        {/* 4 Interactive Category Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map(([key, group], idx) => {
            const isHovered = hoveredGroup === key;
            return (
              <div
                key={key}
                onMouseEnter={() => setHoveredGroup(key)}
                onMouseLeave={() => setHoveredGroup(null)}
                className={`p-8 sm:p-10 rounded-3xl transition-all duration-300 ${
                  isHovered
                    ? "bg-white/[0.04] border border-accent/40 shadow-[0_0_30px_rgba(56,189,248,0.1)]"
                    : "bg-white/[0.02] border border-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-white/40">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-colors duration-200 ${
                        isHovered
                          ? "bg-accent/10 border border-accent/30 text-white"
                          : "bg-white/5 border border-white/10 text-white/80"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
