"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  const [openMission, setOpenMission] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="grid-lines" />
      <div className="nebula-bg w-96 h-96 -bottom-20 -left-20"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <p className="section-label">04 · Experience</p>
          <h2 className="section-title">
            Mission <span className="gradient-text">Log</span>
          </h2>
          <p className="max-w-xl mb-12 text-base" style={{ color: "#94A3B8" }}>
            Field operations and engineering deployments — real production systems, real impact.
          </p>
        </motion.div>

        {experience.map((exp, ei) => (
          <motion.div
            key={exp.id}
            className="glass p-6 md:p-8 animated-border mb-8"
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: ei * 0.1 }}
            style={{ borderColor: "rgba(108,63,197,0.2)", padding: "15px" }}
          >
            {/* Company header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: "rgba(108,63,197,0.2)", border: "1px solid rgba(108,63,197,0.4)" }}>
                    🚀
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl" style={{ color: "#F1F5F9" }}>{exp.company}</h3>
                    <p className="font-mono text-xs mt-0.5" style={{ color: "#22D3EE" }}>{exp.focus}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-3 py-1 rounded-full font-display font-semibold text-sm"
                  style={{ background: "rgba(108,63,197,0.2)", color: "#A855F7", border: "1px solid rgba(108,63,197,0.35)", padding: "5px 12px" }}>
                  {exp.role}
                </span>
                <span className="px-3 py-1 rounded-full font-mono text-xs"
                  style={{ background: "rgba(34,211,238,0.08)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.2)", padding: "5px 12px"  }}>
                  {exp.duration}
                </span>
                <span className="px-3 py-1 rounded-full font-mono text-xs"
                  style={{ background: "rgba(8,15,31,0.8)", color: "#94A3B8", border: "1px solid rgba(108,63,197,0.2)", padding: "5px 12px" }}>
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Mission accordion items */}
            <div className="space-y-3">
              {exp.missions.map((mission, mi) => (
                <div
                  key={mission.category}
                  className="rounded-xl overflow-hidden"
                  style={{ border: `1px solid ${openMission === mi ? mission.color + "55" : "rgba(108,63,197,0.2)"}`, padding: "5px 12px" }}
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left transition-all"
                    style={{ background: openMission === mi ? `${mission.color}10` : "rgba(8,15,31,0.5)" }}
                    onClick={() => setOpenMission(openMission === mi ? null : mi)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{mission.icon}</span>
                      <span className="font-display font-semibold text-sm" style={{ color: openMission === mi ? mission.color : "#F1F5F9" }}>
                        {mission.category}
                      </span>
                    </div>
                    <motion.div animate={{ rotate: openMission === mi ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} style={{ color: mission.color }} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openMission === mi && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="px-5 pb-5 pt-2 space-y-2.5">
                          {mission.bullets.map((b, bi) => (
                            <motion.li
                              key={bi}
                              className="flex gap-2 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: bi * 0.06 }}
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: mission.color }} />
                              <span style={{ color: "#94A3B8",  }}>{b}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(108,63,197,0.15)" }}>
              <p className="font-mono text-xs mb-3" style={{ color: "#94A3B8", padding: "5px 12px" }}>Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
