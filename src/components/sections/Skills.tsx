"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "#F1F5F9" }}>{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, #22D3EE)` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section">
      <div className="grid-lines" />
      <div className="nebula-bg w-96 h-96 top-1/2 right-0 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <p className="section-label">03 · Skills</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="max-w-xl mb-10 text-base" style={{ color: "#94A3B8" }}>
            A diverse toolkit spanning backend systems, blockchain infrastructure, databases, and frontend development.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillGroups.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background:   active === i ? group.color : "rgba(8,15,31,0.8)",
                color:        active === i ? "#fff" : "#94A3B8",
                border:       `1px solid ${active === i ? group.color : "rgba(108,63,197,0.25)"}`,
                boxShadow:    active === i ? `0 0 20px ${group.color}44` : "none",
              }}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Skill panel */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Bar chart */}
          <motion.div
            key={active}
            className="glass p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display font-semibold mb-6" style={{ color: skillGroups[active].color }}>
              {skillGroups[active].label}
            </h3>
            <div className="space-y-4">
              {skillGroups[active].skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skillGroups[active].color}
                  delay={i * 0.06}
                />
              ))}
            </div>
          </motion.div>

          {/* All skills overview grid */}
          <div className="space-y-4">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                className={`glass p-4 cursor-pointer transition-all duration-200 ${active === gi ? "glass-hover" : ""}`}
                onClick={() => setActive(gi)}
                style={{ borderColor: active === gi ? `${group.color}88` : "rgba(108,63,197,0.15)" }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                  <span className="font-display font-semibold text-sm" style={{ color: "#F1F5F9" }}>
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-2 py-0.5 rounded-full font-mono text-[0.65rem]"
                      style={{ background: `${group.color}18`, color: group.color, border: `1px solid ${group.color}33` }}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating skill bubbles decoration */}
        <motion.div
          className="mt-16 relative h-32 hidden lg:block overflow-hidden rounded-2xl"
          style={{ background: "rgba(8,15,31,0.5)", border: "1px solid rgba(108,63,197,0.1)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center justify-around px-8">
            {["Java", "Golang", "Spring Boot", "Cosmos SDK", "Hyperledger", "PostgreSQL", "Redis", "React"].map((t, i) => (
              <motion.span
                key={t}
                className="tech-badge text-xs"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
