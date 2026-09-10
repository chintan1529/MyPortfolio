"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-white/[0.08] bg-[#050505] text-xs font-mono text-white/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-white font-bold tracking-wider">CHINTAN CHHAJED</span>
          <span className="mx-2 text-white/20">|</span>
          <span className="text-white/60">AI ENGINEER</span>
        </div>

        <div className="flex items-center gap-6 tracking-wider uppercase">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            data-cursor="talk"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-white/30">
          &copy; {new Date().getFullYear()} CHINTAN CHHAJED
        </div>
      </div>
    </footer>
  );
}
