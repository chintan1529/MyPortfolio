"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "SYSTEMS", href: "#systems" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["work", "systems", "about", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none px-6 md:px-12 py-5 md:py-6`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand mark */}
          <a
            href="#"
            className="pointer-events-auto group flex items-center gap-2 text-xs font-mono tracking-widest text-white/80 hover:text-white uppercase"
            data-cursor="link"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="font-display font-bold text-sm tracking-tight text-white">CHINTAN</span>
            <span className="hidden sm:inline text-white/40">/ AI ENGINEER</span>
          </a>

          {/* Desktop floating pill navigation */}
          <nav
            className={`pointer-events-auto hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/80"
                : "bg-white/[0.02] border border-white/[0.05]"
            }`}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  data-cursor="link"
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider rounded-full transition-colors ${
                    isActive
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Status & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <a
              href="#contact"
              data-cursor="talk"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-accent border border-accent/25 hover:border-accent hover:bg-accent/10 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              AVAILABLE
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl font-bold tracking-tight text-white/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-8 border-t border-white/10 mt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block px-6 py-3 rounded-full bg-accent text-black font-medium font-display text-sm tracking-wide"
                >
                  START A CONVERSATION →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
