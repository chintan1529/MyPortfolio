"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-accent/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent/20 blur-[120px] rounded-t-full pointer-events-none -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Let's build <br />the future.
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-10 py-5 bg-foreground text-background font-medium text-lg rounded-full hover:scale-105 active:scale-95 transition-transform hover:shadow-[0_0_40px_rgba(167,139,250,0.4)]"
            >
              Say Hello
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 border border-white/20 rounded-full font-medium text-lg hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
