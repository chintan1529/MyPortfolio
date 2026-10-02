"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AwsIcon } from "@/components/ui/Icons";
import { achievementsData } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent tracking-widest uppercase mb-4">
              <span>08</span>
              <span className="w-8 h-[1px] bg-accent/30" />
              <span>HONORS &amp; CERTIFICATIONS</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              ACHIEVEMENTS
            </h2>
          </div>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            ACADEMIC EXCELLENCE &middot; HACKATHONS &middot; CREDENTIALS
          </p>
        </div>

        {/* Large Typographic Grid: Academic Standing & Competitive Recognition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/[0.08] pb-16">
          {/* CGPA */}
          <div className="border-b md:border-b-0 md:border-r border-white/[0.08] pb-8 md:pb-0 md:pr-8">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              ACADEMIC STANDING
            </span>
            <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white mt-2">
              {achievementsData.cgpa}
            </div>
            <p className="text-xs font-mono text-white/50 mt-2 uppercase tracking-wider">
              CGPA / 10.0 &middot; SRM UNIVERSITY
            </p>
          </div>

          {/* Hackathons */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                COMPETITIVE RECOGNITION
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {achievementsData.hackathons.map((h) => (
                  <div key={h.event} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {h.title}
                    </div>
                    <div className="text-sm font-mono text-accent mt-1">
                      {h.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured AWS Certifications Showcase */}
        <div className="mt-16 pt-4 border-b border-white/[0.08] pb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono text-accent uppercase tracking-widest">
                VALIDATED CLOUD &amp; AI ACCREDITATIONS
              </p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                AWS CERTIFICATIONS
              </h3>
            </div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              ISSUED BY AMAZON WEB SERVICES
            </span>
          </div>

          {/* Side-by-side cards on desktop, stacked on mobile/tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.awsCertifications.map((cert) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Index & AWS Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-mono text-accent font-bold tracking-widest">
                      {cert.number}
                    </span>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                      <AwsIcon size={16} className="text-accent" />
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-white">
                        {cert.badgeCode}
                      </span>
                    </div>
                  </div>

                  {/* Certification Name */}
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-accent transition-colors leading-tight">
                    {cert.name}
                  </h4>

                  {/* Issuing Organization */}
                  <p className="text-xs font-mono text-white/50 uppercase tracking-widest mt-2">
                    {cert.issuer}
                  </p>

                  {/* Validity Info */}
                  <div className="mt-6 flex flex-col gap-1.5 text-xs font-mono text-white/60">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>Expires: {cert.expirationDate}</span>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-white/40 break-all">
                    Credential ID: <span className="text-white/60">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Verification Action Link */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    aria-label={`Verify ${cert.name} credential on AWS`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-white/90 hover:text-black hover:bg-accent hover:border-accent font-mono text-xs uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Industry Certifications */}
        <div className="mt-14">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
            ADDITIONAL ACCREDITATIONS &amp; CREDENTIALS
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievementsData.certifications.map((cert) => (
              <div
                key={cert}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 hover:border-white/20 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="font-display text-sm sm:text-base text-white/90">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
