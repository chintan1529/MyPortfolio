"use client";

import { experience } from "@/lib/data";

export default function Experience() {
  const exp = experience[0];

  return (
    <section id="experience" className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-4">
              <span>05</span>
              <span className="w-8 h-[1px] bg-accent/30" />
              <span>EXPERIENCE</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              INDUSTRY &middot; INTERNSHIP
            </h2>
          </div>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            HANDS-ON HOSTED ML WORKFLOWS
          </p>
        </div>

        {/* Editorial Timeline Entry */}
        <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/[0.08] pb-8 mb-8">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                {exp.period}
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-1">
                {exp.organization}
              </h3>
              <p className="text-base sm:text-lg font-mono text-white/70 mt-2">
                {exp.role}
              </p>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono text-accent tracking-wider uppercase shrink-0">
              VIRTUAL INTERNSHIP
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-4xl">
            {exp.description}
          </p>

          <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-white/40 mr-2 uppercase">TECHNOLOGIES &amp; PLATFORMS:</span>
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-white/80 bg-white/5 border border-white/10 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
