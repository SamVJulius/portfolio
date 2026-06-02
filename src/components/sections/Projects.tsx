"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Github } from "@/components/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="section">
      <div className="grid-lines" />
      <div className="nebula-bg w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(108,63,197,0.07) 0%, transparent 100%)" }} />

      <div className="container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <p className="section-label">05 · Projects</p>
          <h2 className="section-title">
            Command <span className="gradient-text">Center</span>
          </h2>
          <p className="max-w-xl mb-12 text-base" style={{ color: "#94A3B8" }}>
            Production-grade systems, experimental prototypes, and community platforms — each a mission launched.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="glass glass-hover flex flex-col h-full cursor-default"
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderColor: hovered === project.id ? `${project.color}66` : "rgba(108,63,197,0.2)",
                boxShadow:   hovered === project.id ? `0 0 30px ${project.color}22, 0 20px 40px rgba(0,0,0,0.3)` : undefined,
                padding: "10px"
              }}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${project.color}18`, border: `1px solid ${project.color}44` }}
                  >
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded-full font-mono text-[0.65rem]"
                      style={{
                        background: project.status === "Production" ? "rgba(34,197,94,0.1)" :
                          project.status === "Deployed" ? "rgba(34,211,238,0.1)" : "rgba(108,63,197,0.1)",
                        color: project.status === "Production" ? "#4ade80" :
                          project.status === "Deployed" ? "#22D3EE" : "#A855F7",
                        border: `1px solid ${project.status === "Production" ? "rgba(74,222,128,0.3)" :
                          project.status === "Deployed" ? "rgba(34,211,238,0.3)" : "rgba(168,85,247,0.3)"}`,
                          padding: "2px 6px"
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="mb-1">
                  <span
                    className="font-mono text-[0.65rem] uppercase tracking-widest"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base mb-1" style={{ color: "#F1F5F9" }}>
                  {project.name}
                </h3>
                <p className="font-mono text-xs mb-3" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  {project.description}
                </p>
              </div>

              {/* Highlights (revealed on hover) */}
              <AnimatePresence>
                {hovered === project.id && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="pt-3 border-t" style={{ borderColor: `${project.color}33` }}>
                      <p className="font-mono text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: project.color }}>
                        Key Features
                      </p>
                      <ul className="space-y-1.5">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs" style={{ color: "#94A3B8" }}>
                            <ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tech + Links */}
              <div className="mt-auto p-6 pt-4 border-t" style={{ borderColor: "rgba(108,63,197,0.1)" }}>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full font-mono text-[0.65rem]"
                      style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}33`, padding: "2px 6px" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: "#94A3B8", padding: "4px 8px", borderRadius: "6px", background: "rgba(148,163,184,0.08)" }}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="text-center"
          style={{ marginTop: "40px" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://github.com/SamVJulius`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105"
            style={{ border: "1px solid rgba(108,63,197,0.35)", color: "#A855F7", background: "rgba(108,63,197,0.08)", padding: "8px 16px" }}
          >
            <Github size={16} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
