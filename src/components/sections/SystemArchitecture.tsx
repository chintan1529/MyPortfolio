"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Search, Layers, Server, Monitor, User } from "lucide-react";

interface PipelineStage {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  tech: string[];
}

const STAGES: PipelineStage[] = [
  {
    id: "data",
    name: "DATA",
    subtitle: "INGESTION & SPATIAL",
    icon: Database,
    description: "Multi-modal ingestion pipelines, PostGIS geospatial indexes, and vector embeddings generation.",
    tech: ["PostgreSQL", "PostGIS", "Sentence Transformers", "Pandas"],
  },
  {
    id: "model",
    name: "MODEL",
    subtitle: "INFERENCE & COMPRESSION",
    icon: Cpu,
    description: "Fine-tuned vision models, structural sparsity pruning, and local quantized LLMs.",
    tech: ["PyTorch", "YOLOv8", "Quantization", "Hugging Face"],
  },
  {
    id: "retrieval",
    name: "RETRIEVAL",
    subtitle: "HYBRID INDEXING",
    icon: Search,
    description: "Dual-path FAISS dense vector search combined with BM25 lexical search and Reciprocal Rank Fusion.",
    tech: ["FAISS", "BM25", "Reciprocal Rank Fusion", "Cross-Encoder"],
  },
  {
    id: "orchestration",
    name: "ORCHESTRATION",
    subtitle: "AGENTIC REASONING",
    icon: Layers,
    description: "Context boundaries, prompt verification, multi-step tool use, and grounded hallucination mitigation.",
    tech: ["Provider-Agnostic LLMs", "RAG Pipelines", "Ollama", "OpenAI"],
  },
  {
    id: "backend",
    name: "BACKEND",
    subtitle: "HIGH-CONCURRENCY APIS",
    icon: Server,
    description: "Asynchronous REST endpoints, Server-Sent Events (SSE) streaming, and database transaction safety.",
    tech: ["FastAPI", "Next.js Route Handlers", "Supabase", "Docker"],
  },
  {
    id: "interface",
    name: "INTERFACE",
    subtitle: "LOW-LATENCY CLIENT",
    icon: Monitor,
    description: "Fluid, accessible, micro-animated client interfaces with real-time telematics and state synchronization.",
    tech: ["React 19", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    id: "user",
    name: "USER",
    subtitle: "HUMAN EXPERIENCE",
    icon: User,
    description: "Frictionless human-machine interaction where complex intelligence feels completely effortless.",
    tech: ["Accessibility", "Real-Time Telemetry", "Responsive UX"],
  },
];

export default function SystemArchitecture() {
  const [activeStage, setActiveStage] = useState<PipelineStage>(STAGES[2]);

  return (
    <section id="systems" className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-4">
              <span>03</span>
              <span className="w-8 h-[1px] bg-accent/30" />
              <span>SYSTEMS ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              THE SYSTEMS I BUILD
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-1">
              FROM MODEL TO PRODUCT
            </p>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              An interactive map of how I engineer end-to-end intelligence: converting raw data into
              production-grade human interfaces.
            </p>
          </div>
        </div>

        {/* Interactive Pipeline Track */}
        <div className="relative mb-12 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm overflow-x-auto scrollbar-none">
          {/* Animated Connecting Bus Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 -translate-y-1/2 z-0 pointer-events-none">
            {/* Travelling pulse particle */}
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-8 h-[2px] bg-accent shadow-[0_0_12px_#38bdf8]"
            />
          </div>

          {/* Pipeline Nodes */}
          <div className="flex items-center justify-between min-w-[760px] relative z-10 gap-3">
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  data-cursor="link"
                  className={`group relative flex flex-col items-center p-3 md:p-4 rounded-2xl transition-all duration-300 ${
                    isSelected
                      ? "bg-white/10 border border-accent/60 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                      : "bg-[#050505] border border-white/[0.08] hover:border-white/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-accent text-black"
                        : "bg-white/5 text-white/70 group-hover:text-accent group-hover:bg-accent/10"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <span className="mt-3 text-xs font-display font-bold tracking-wider text-white">
                    {stage.name}
                  </span>

                  <span className="mt-0.5 text-[9px] font-mono text-white/40 tracking-wider">
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08]"
        >
          <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                STAGE &middot; {activeStage.subtitle}
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white mt-1">
                {activeStage.name}
              </h3>
            </div>

            <p className="text-sm font-mono text-white/40 mt-4">
              Click any stage above to inspect system responsibilities.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between">
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
              {activeStage.description}
            </p>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-white/40 mr-2 uppercase">Engineered With:</span>
              {activeStage.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 border border-accent/25 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
