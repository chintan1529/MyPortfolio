"use client";

import { achievementsData } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-4">
              <span>08</span>
              <span className="w-8 h-[1px] bg-accent/30" />
              <span>HONORS &amp; CERTIFICATIONS</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              ACHIEVEMENTS
            </h2>
          </div>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            ACADEMIC EXCELLENCE &middot; HACKATHONS &middot; CREDENTIALS
          </p>
        </div>

        {/* Large Typographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/[0.08] pb-16">
          {/* CGPA */}
          <div className="border-b md:border-b-0 md:border-r border-white/[0.08] pb-8 md:pb-0 md:pr-8">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              ACADEMIC STANDING
            </span>
            <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white mt-2">
              {achievementsData.cgpa}
            </div>
            <p className="text-xs font-mono text-white/50 mt-2 uppercase tracking-wider">
              CGPA / 10.0 &middot; SRM UNIVERSITY
            </p>
          </div>

          {/* Hackathons */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                COMPETITIVE RECOGNITION
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {achievementsData.hackathons.map((h) => (
                  <div key={h.event} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {h.title}
                    </div>
                    <div className="text-sm font-mono text-accent mt-1">
                      {h.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verified Industry Certifications */}
        <div className="mt-14">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
            VERIFIED INDUSTRY CERTIFICATIONS
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievementsData.certifications.map((cert) => (
              <div
                key={cert}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="font-display text-sm sm:text-base text-white/90">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
