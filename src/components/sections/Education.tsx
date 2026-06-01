"use client";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="grid-lines" />
      <div className="nebula-bg w-80 h-80 bottom-0 left-0"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <p className="section-label">02 · Education</p>
          <h2 className="section-title">
            Academic <span className="gradient-text">Trajectory</span>
          </h2>
          <p className="max-w-xl mb-16 text-lg" style={{ color: "#94A3B8" }}>
            Every milestone a launchpad — building the foundation for engineering excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-12 md:left-5/4 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, #6C3FC5 10%, #22D3EE 80%, transparent)", transform: "translateX(-50%)" }} />

          <div className="space-y-12">
            {education.map((edu, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={edu.id}
                  className="relative flex items-center justify-center md:justify-between w-full"
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-12 md:left-5/4 -translate-x-1/2 z-10">
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full"
                      style={{ background: "rgba(5,8,17,0.95)", border: "2px solid #6C3FC5", boxShadow: "0 0 20px rgba(108,63,197,0.5)" }}>
                      <span className="text-xl">{edu.icon}</span>
                      <span className="absolute inset-0 rounded-full animate-ping opacity-20"
                        style={{ background: "#6C3FC5" }} />
                    </div>
                    {/* Year label */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap mt-2 hidden md:block">
                      <span className="font-mono text-sm" style={{ color: "#22D3EE" }}>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`w-full pl-24 md:pl-0 md:w-4/4 ${isLeft ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"}`}>
                    <div
                      className="glass glass-hover p-6 cursor-default"
                      style={{ borderColor: edu.type === "university" ? "rgba(108,63,197,0.3)" : "rgba(34,211,238,0.2)", padding: "12px"  }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display font-bold text-xl" style={{ color: "#F1F5F9" }}>{edu.degree}</h3>
                          <p className="font-mono text-sm mt-1" style={{ color: "#22D3EE" }}>{edu.short}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span
                            className="inline-flex font-display font-bold text-sm px-3 py-1 rounded-full"
                            style={{
                              background: edu.type === "university" ? "rgba(108,63,197,0.2)" : "rgba(34,211,238,0.1)",
                              color:      edu.type === "university" ? "#A855F7" : "#22D3EE",
                              border: `1px solid ${edu.type === "university" ? "rgba(108,63,197,0.3)" : "rgba(34,211,238,0.25)"}`,
                              padding: "5px 10px",
                            }}
                          >
                            {edu.score}
                          </span>
                          <div className="font-mono text-xs mt-2 md:hidden" style={{ color: "#94A3B8" }}>{edu.duration}</div>
                        </div>
                      </div>

                      <p className="text-sm mb-4 leading-relaxed" style={{ color: "#94A3B8" }}>{edu.highlight}</p>

                      {/* Coursework chips */}
                      {edu.coursework && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "rgba(108,63,197,0.15)" }}>
                          {edu.coursework.map((c) => (
                            <span key={c} className="tech-badge px-2 py-1 text-xs">{c}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
