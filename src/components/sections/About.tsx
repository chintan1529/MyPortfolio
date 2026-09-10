"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-4xl md:text-6xl font-bold mb-16 tracking-tight"
        >
          Intelligence, <br className="md:hidden" />Designed.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 text-xl md:text-3xl leading-snug text-foreground/80 font-light"
          >
            <p className="mb-8">
              I engineer systems that bridge the gap between complex AI models and seamless human experiences. 
              I don't just build backends or interfaces; I build complete products.
            </p>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
              Currently at {personalInfo.education}, my work spans from architecting real-time computer vision 
              pipelines achieving 85–95% accuracy, to developing scalable platforms that connect communities and optimize sustainability. 
              I believe that the most powerful intelligence is the kind that feels effortless to use.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-4"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
              <h3 className="text-4xl font-display font-bold text-accent mb-1">85-95%</h3>
              <p className="text-sm text-foreground/60 font-mono uppercase tracking-wider">CV Model Accuracy</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
              <h3 className="text-4xl font-display font-bold text-accent mb-1">10+</h3>
              <p className="text-sm text-foreground/60 font-mono uppercase tracking-wider">Major Projects</p>
            </div>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 backdrop-blur-sm">
              <h3 className="text-lg font-display font-bold mb-3 text-accent">Currently open for</h3>
              <ul className="text-sm text-foreground/80 space-y-2">
                {personalInfo.openFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 opacity-60">▹</span> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
