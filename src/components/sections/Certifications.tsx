"use client";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award, Plus } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

// Constellation star positions (relative %)
const starPositions = [
  { x: 15, y: 20 }, { x: 35, y: 10 }, { x: 55, y: 25 },
  { x: 75, y: 12 }, { x: 88, y: 35 }, { x: 70, y: 60 },
  { x: 50, y: 75 }, { x: 25, y: 65 }, { x: 10, y: 45 },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="grid-lines" />
      <div
        className="nebula-bg w-80 h-80 top-1/2 left-1/4"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
        >
          <p className="section-label">07 · Certifications</p>
          <h2 className="section-title">
            Achievement <span className="gradient-text">Constellation</span>
          </h2>
          <p className="max-w-xl mb-12 text-base" style={{ color: "#94A3B8" }}>
            Every certification a star in the map — connect the dots of continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="glass glass-hover p-6 text-center flex flex-col items-center"
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                borderColor: cert.placeholder ? "rgba(108,63,197,0.15)" : "rgba(168,85,247,0.4)",
                borderStyle:  cert.placeholder ? "dashed" : "solid",
                padding: cert.placeholder ? "2.5rem 1.5rem" : "1.5rem",
              }}
            >
              {cert.placeholder ? (
                <>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(108,63,197,0.1)", border: "1px dashed rgba(108,63,197,0.3)" }}
                  >
                    <Plus size={24} style={{ color: "#6C3FC5" }} />
                  </div>
                  <p className="font-display font-semibold text-sm mb-1" style={{ color: "#94A3B8" }}>
                    Coming Soon
                  </p>
                  <p className="font-mono text-xs" style={{ color: "rgba(148,163,184,0.5)" }}>
                    Certification placeholder
                  </p>
                </>
              ) : (
                <>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)", boxShadow: "0 0 20px rgba(168,85,247,0.2)" }}
                  >
                    <Award size={24} style={{ color: "#A855F7" }} />
                  </div>
                  <h3 className="font-display font-bold text-base mb-1" style={{ color: "#F1F5F9", padding: "0.25rem" }}>
                    {cert.name}
                  </h3>
                  <p className="font-mono text-xs mb-2" style={{ color: "#A855F7", padding: "0.25rem" }}>
                    {cert.issuer}
                  </p>
                  <span
                    className="px-3 py-0.5 rounded-full font-mono text-xs"
                    style={{ background: "rgba(168,85,247,0.1)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.25)", padding: "0.25rem 0.75rem" }}
                  >
                    {cert.year}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Constellation visual */}
        <motion.div
          className="relative w-full h-48 rounded-2xl overflow-hidden"
          style={{ background: "rgba(5,8,17,0.8)", border: "1px solid rgba(108,63,197,0.15)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* SVG constellation lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6C3FC5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {starPositions.slice(0, -1).map((pos, i) => {
              const next = starPositions[i + 1];
              return (
                <motion.line
                  key={i}
                  x1={`${pos.x}%`} y1={`${pos.y}%`}
                  x2={`${next.x}%`} y2={`${next.y}%`}
                  stroke="url(#lineGrad)" strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                />
              );
            })}
          </svg>
          {/* Star nodes */}
          {starPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 200 }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: i < certifications.filter(c => !c.placeholder).length ? "#A855F7" : "rgba(108,63,197,0.3)",
                  boxShadow: i < certifications.filter(c => !c.placeholder).length ? "0 0 10px #A855F7" : "none",
                  border: "1px solid rgba(168,85,247,0.5)",
                }}
              />
            </motion.div>
          ))}
          {/* Label */}
          <div className="absolute bottom-4 right-4">
            <p className="font-mono text-xs" style={{ color: "rgba(148,163,184,0.4)" }}>
              Achievement Constellation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
