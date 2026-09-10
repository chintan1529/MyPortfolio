import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import SystemArchitecture from "@/components/sections/SystemArchitecture";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050505] text-[#FAFAFA] overflow-hidden">
      {/* 01: Hero with dual video / Three.js fallback */}
      <Hero />

      {/* 02: Large Editorial Philosophy Statement */}
      <Philosophy />

      {/* 03: The Systems I Build — From Model to Product */}
      <SystemArchitecture />

      {/* 04: Flagship & Specialized Projects (NHS, Vectoria, RecoverIQ, etc.) */}
      <Projects />

      {/* 05: Industry & Internship Experience */}
      <Experience />

      {/* 06: About & Academic Credentials */}
      <About />

      {/* 07: Technical Capabilities & Domains */}
      <Skills />

      {/* 08: Achievements & Certifications */}
      <Achievements />

      {/* 09: Contact with Magnetic CTA */}
      <Contact />

      {/* 10: Minimalist Footer */}
      <Footer />
    </main>
  );
}
