"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isFlagship = index === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between p-8 md:p-10 lg:p-12 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] transition-colors hover:bg-white/[0.06] ${
        isFlagship ? 'md:col-span-2' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <h3 className={`font-display font-bold text-foreground leading-tight ${isFlagship ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
            {project.title}
          </h3>
          <div className="flex gap-3 shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all hover:scale-110 active:scale-95" aria-label="GitHub Repository">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center hover:bg-white transition-all hover:scale-110 active:scale-95" aria-label="Live Demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            )}
          </div>
        </div>
        <p className={`text-foreground/70 mb-10 ${isFlagship ? 'text-lg md:text-xl max-w-3xl' : 'text-base md:text-lg'} leading-relaxed font-light`}>
          {project.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {project.stack.map((tech: string, i: number) => (
          <span key={i} className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full border border-foreground/10 text-foreground/80 bg-foreground/5 ${isFlagship && i < 3 ? 'text-accent border-accent/30 bg-accent/10' : ''}`}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Selected Work
          </h2>
          <p className="text-foreground/60 font-mono text-sm uppercase tracking-widest pb-2">
            Architecture / Intelligence / Experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-foreground/60 mb-6">Want to see more research and experiments?</p>
          <a 
            href="https://github.com/chintan1529" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors font-medium"
          >
            View Full Archive on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
