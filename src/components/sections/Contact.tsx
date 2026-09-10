"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-36 md:py-52 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-accent/[0.07] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Index */}
        <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-12">
          <span>09</span>
          <span className="w-8 h-[1px] bg-accent/30" />
          <span>INITIATE CONTACT</span>
        </div>

        {/* Massive Typographic Headline */}
        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.88] tracking-tighter text-white uppercase">
          LET&apos;S BUILD
          <br />
          SOMETHING
          <br />
          <span className="text-white/40 hover:text-white transition-colors duration-500">
            INTELLIGENT.
          </span>
        </h2>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-white/[0.08] pt-12">
          {/* Opportunities Status */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              CURRENT STATUS
            </span>
            <p className="font-display text-xl sm:text-2xl text-white mt-2">
              OPEN TO OPPORTUNITIES
            </p>
            <p className="text-sm font-mono text-white/50 mt-1 uppercase tracking-wider">
              AI / ML &middot; GENAI / RAG &middot; SOFTWARE ENGINEERING
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-black hover:bg-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-black hover:bg-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                data-cursor="talk"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-black hover:bg-accent transition-colors"
                aria-label="Direct Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Magnetic Main CTA */}
          <div className="md:col-span-7 flex flex-col justify-between items-start md:items-end">
            <p className="text-sm sm:text-base text-white/60 font-light max-w-md md:text-right leading-relaxed mb-8">
              Whether you are architecting a novel retrieval system, looking for an AI/ML engineer,
              or exploring research collaborations—reach out directly.
            </p>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              data-cursor="talk"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-4 px-8 sm:px-12 py-5 sm:py-6 rounded-full bg-white text-black font-mono text-sm sm:text-base uppercase tracking-widest font-bold overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">
                START A CONVERSATION &rarr;
              </span>
              <div className="absolute inset-0 bg-accent transform scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
            </motion.a>

            <div className="mt-4 text-xs font-mono text-white/40 tracking-wider">
              {personalInfo.email}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
