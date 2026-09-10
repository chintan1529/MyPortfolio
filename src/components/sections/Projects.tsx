"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { flagshipProjects, secondaryProjects } from "@/lib/data";

export default function Projects() {
  const nhs = flagshipProjects[0];
  const vectoria = flagshipProjects[1];

  // Interactive pipeline state for Vectoria
  const [activePipelineStep, setActivePipelineStep] = useState(2);

  const PIPELINE_STEPS = [
    { name: "USER QUERY", detail: "Natural language query ingestion & intent routing" },
    { name: "INTENT ROUTING", detail: "Query classification & domain-specific index targeting" },
    { name: "DENSE + BM25", detail: "Parallel FAISS vector search + BM25 inverted lexical index" },
    { name: "RANK FUSION (RRF)", detail: "Reciprocal Rank Fusion score-invariant candidate merging" },
    { name: "CROSS-ENCODER", detail: "Deep transformer reranker scoring context density" },
    { name: "GROUNDED CONTEXT", detail: "Strict boundary context assembly with source citations" },
    { name: "LLM ORCHESTRATION", detail: "Local Ollama / OpenAI streaming inference with guards" },
    { name: "VERIFIED RESPONSE", detail: "Grounded, hallucination-mitigated response delivered" },
  ];

  return (
    <section id="work" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-32">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-4">
              <span>04</span>
              <span className="w-8 h-[1px] bg-accent/30" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
              ENGINEERED SYSTEMS
            </h2>
          </div>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest max-w-sm md:text-right">
            FLAGSHIP CASE STUDIES &middot; PRODUCTION ARCHITECTURES &middot; REAL CODE
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FLAGSHIP 01: NEIGHBORHOOD SUSTAINABILITY HUB                             */}
        {/* ========================================================================= */}
        <div className="relative mb-36 p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] overflow-hidden">
          {/* Subtle ambient cyan glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

          {/* Top metadata badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/25 rounded-md">
                PROJECT {nhs.number}
              </span>
              <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                {nhs.category}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {nhs.live && (
                <a
                  href={nhs.live}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="project"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-accent transition-colors"
                >
                  <span>LIVE PLATFORM</span>
                  <ExternalLink size={14} />
                </a>
              )}
              <a
                href={nhs.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-accent hover:text-accent font-mono text-xs transition-colors"
              >
                <span>GITHUB REPO</span>
                <GithubIcon size={14} />
              </a>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div className="max-w-4xl">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
              {nhs.subtitle}
            </p>
            <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tighter leading-[0.95] uppercase">
              {nhs.title}
            </h3>
            <p className="mt-8 text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-3xl">
              {nhs.description}
            </p>
          </div>

          {/* Technical Engineering Scope Grid (Verified metrics, not fake business claims) */}
          <div className="mt-14 pt-12 border-t border-white/[0.08]">
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
              VERIFIED ENGINEERING SCOPE
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {nhs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-5 rounded-2xl bg-[#050505] border border-white/[0.06] hover:border-accent/40 transition-colors"
                >
                  <div className="font-display font-bold text-2xl sm:text-3xl text-accent">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs font-mono text-white font-medium">
                    {m.label}
                  </div>
                  {m.detail && (
                    <div className="mt-1 text-[10px] font-mono text-white/40 leading-snug">
                      {m.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Layers Breakdown */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {nhs.architecture.map((layer, i) => (
              <div
                key={layer.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-xs font-mono text-accent mb-2">
                  <span>LAYER 0{i + 1}</span>
                  <span className="w-4 h-[1px] bg-accent/30" />
                  <span className="text-white font-semibold font-display">{layer.title}</span>
                </div>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-white/40 mr-2 uppercase">STACK:</span>
            {nhs.stack.map((s) => (
              <span
                key={s}
                className="px-3.5 py-1 text-xs font-mono text-white/80 bg-white/5 border border-white/10 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FLAGSHIP 02: VECTORIA (RETRIEVAL & GENAI PIPELINE)                       */}
        {/* ========================================================================= */}
        <div className="relative mb-36 p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] overflow-hidden">
          {/* Subtle ambient cyan glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

          {/* Top metadata badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/25 rounded-md">
                PROJECT {vectoria.number}
              </span>
              <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                {vectoria.category}
              </span>
            </div>

            <a
              href={vectoria.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-accent hover:text-accent font-mono text-xs transition-colors"
            >
              <span>GITHUB REPO</span>
              <GithubIcon size={14} />
            </a>
          </div>

          {/* Title & Subtitle */}
          <div className="max-w-4xl">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
              {vectoria.subtitle}
            </p>
            <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tighter leading-[0.95] uppercase">
              {vectoria.title}
            </h3>
            <p className="mt-8 text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-3xl">
              {vectoria.description}
            </p>
          </div>

          {/* SIGNATURE INTERACTIVE RETRIEVAL PIPELINE VISUALIZATION */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#050505] border border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-mono text-accent uppercase tracking-widest">
                  INTERACTIVE RETRIEVAL PIPELINE
                </p>
                <p className="text-xs font-mono text-white/40 mt-1">
                  Click any stage to simulate real-time query vector flow & ranking
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>STEP {activePipelineStep + 1} OF {PIPELINE_STEPS.length}</span>
              </div>
            </div>

            {/* Pipeline Stage Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
              {PIPELINE_STEPS.map((step, idx) => {
                const isActive = activePipelineStep === idx;
                return (
                  <button
                    key={step.name}
                    onClick={() => setActivePipelineStep(idx)}
                    data-cursor="link"
                    className={`p-3 rounded-xl text-left transition-all duration-200 ${
                      isActive
                        ? "bg-accent/15 border border-accent shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                        : "bg-white/[0.02] border border-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    <div className="text-[9px] font-mono text-white/40">0{idx + 1}</div>
                    <div className="mt-1 text-xs font-display font-bold text-white tracking-tight">
                      {step.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pipeline Detail Output Box */}
            <motion.div
              key={activePipelineStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  ACTIVE STAGE DETAIL
                </span>
                <p className="text-base text-white/90 font-mono mt-1">
                  &gt; {PIPELINE_STEPS[activePipelineStep].detail}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() =>
                    setActivePipelineStep((prev) => (prev > 0 ? prev - 1 : PIPELINE_STEPS.length - 1))
                  }
                  className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs font-mono text-white/80"
                >
                  &larr; PREV
                </button>
                <button
                  onClick={() =>
                    setActivePipelineStep((prev) => (prev < PIPELINE_STEPS.length - 1 ? prev + 1 : 0))
                  }
                  className="px-3 py-1 rounded bg-accent/20 hover:bg-accent/30 text-xs font-mono text-accent"
                >
                  NEXT &rarr;
                </button>
              </div>
            </motion.div>
          </div>

          {/* Benchmark Evaluation Metric Framework */}
          {vectoria.evaluation && (
            <div className="mt-12 pt-8 border-t border-white/[0.08]">
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
                RETRIEVAL BENCHMARK EVALUATION FRAMEWORK
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {vectoria.evaluation.map((metric) => (
                  <div
                    key={metric}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
                  >
                    <span className="text-xs font-mono text-white/80">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-white/40 mr-2 uppercase">STACK:</span>
            {vectoria.stack.map((s) => (
              <span
                key={s}
                className="px-3.5 py-1 text-xs font-mono text-white/80 bg-white/5 border border-white/10 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECONDARY PROJECTS (03 - 06): SOPHISTICATED EDITORIAL SHOWCASE             */}
        {/* ========================================================================= */}
        <div className="pt-8">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-12">
            <div>
              <p className="text-xs font-mono text-accent uppercase tracking-widest">
                MORE SPECIALIZED WORK
              </p>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
                SYSTEMS &middot; REINFORCEMENT &middot; VISION
              </h3>
            </div>
            <a
              href="https://github.com/chintan1529"
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-accent uppercase tracking-wider transition-colors"
            >
              <span>FULL GITHUB ARCHIVE</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* 2x2 Grid of Secondary Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((p) => (
              <div
                key={p.title}
                className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-accent font-bold">
                      PROJECT {p.number}
                    </span>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="p-2.5 rounded-full bg-white/5 text-white/70 hover:text-black hover:bg-accent transition-all duration-200"
                      aria-label={`${p.title} GitHub`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>

                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-accent transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs font-mono text-white/40 mt-1 uppercase">
                    {p.tagline}
                  </p>

                  <p className="mt-5 text-sm text-white/70 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-[10px] font-mono text-white/60 bg-white/5 border border-white/[0.08] rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
