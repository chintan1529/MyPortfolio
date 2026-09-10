"use client";

import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Index */}
        <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-12">
          <span>06</span>
          <span className="w-8 h-[1px] bg-accent/30" />
          <span>ABOUT</span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white uppercase max-w-5xl">
          ENGINEERING AT THE INTERSECTION OF AI AND PRODUCT.
        </h2>

        {/* Information Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/[0.08] pt-12">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                ACADEMIC FOUNDATION
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-2">
                {personalInfo.education.institution}
              </h3>
              <p className="text-sm font-mono text-white/70 mt-1">
                {personalInfo.education.degree}
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] inline-block">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                CUMULATIVE GPA
              </span>
              <div className="font-display font-bold text-4xl sm:text-5xl text-accent mt-1">
                {personalInfo.education.cgpa}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              CORE SPECIALIZATIONS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {personalInfo.focusAreas.map((area, idx) => (
                <div
                  key={area}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                >
                  <span className="font-display font-medium text-base sm:text-lg text-white">
                    {area}
                  </span>
                  <span className="text-xs font-mono text-accent/60">0{idx + 1}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm sm:text-base text-white/60 font-light leading-relaxed">
              Based in Ahmedabad / India. Focused on transforming exploratory AI research and
              deep learning architectures into reliable, scalable software applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
