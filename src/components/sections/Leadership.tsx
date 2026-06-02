"use client";
import { motion } from "framer-motion";
import { leadership } from "@/data/portfolio";
import { Users, Calendar, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="grid-lines" />
      <div
        className="nebula-bg w-96 h-96 top-0 right-0"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
        >
          <p className="section-label">06 · Leadership</p>
          <h2 className="section-title">
            Command <span className="gradient-text">Badges</span>
          </h2>
          <p className="max-w-xl mb-12 text-base" style={{ color: "#94A3B8" }}>
            Leading from the front — building teams, running events, and driving technical communities.
          </p>
        </motion.div>

        {leadership.map((lead, i) => (
          <motion.div
            key={lead.id}
            className="glass glass-hover p-6 md:p-8 mb-8"
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ borderColor: `${lead.color}44`, padding: "1.5rem", background: `rgba(5,8,17,0.6)` }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${lead.color}18`,
                    border: `2px solid ${lead.color}55`,
                    boxShadow: `0 0 20px ${lead.color}22`,
                  }}
                >
                  {lead.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl" style={{ color: "#F1F5F9" }}>
                    {lead.role}
                  </h3>
                  <p className="font-mono text-sm mt-0.5" style={{ color: lead.color }}>
                    {lead.organization}
                  </p>
                </div>
              </div>

              {/* Stats pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Users,    value: lead.impact.members, label: "Members Led" },
                  { Icon: Calendar, value: lead.impact.events,  label: "Events Run" },
                  { Icon: Star,     value: lead.impact.role,    label: "Role Type"  },
                ].map(({ Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{ background: `${lead.color}12`, border: `1px solid ${lead.color}33`, padding: "0.5rem 1rem" }}
                  >
                    <Icon size={14} style={{ color: lead.color }} />
                    <div>
                      <div className="font-display font-bold text-sm" style={{ color: lead.color }}>{value}</div>
                      <div className="font-mono text-[0.6rem]" style={{ color: "#94A3B8" }}>{label}</div>
                    </div>
                  </div>
                ))}
                <div
                  className="flex items-center px-4 py-2 rounded-xl"
                  style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)", padding: "0.5rem 1rem" }}
                >
                  <span className="font-mono text-xs" style={{ color: "#22D3EE" }}>{lead.duration}</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(5,8,17,0.6)", border: `1px solid ${lead.color}22`, padding : "1.5rem" }}
            >
              <p
                className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: lead.color }}
              >
                Mission Accomplishments
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {lead.achievements.map((ach, ai) => (
                  <motion.div
                    key={ai}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ai * 0.07 }}
                  >
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: lead.color, boxShadow: `0 0 6px ${lead.color}` }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{ach}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* IEEE logo / tagline */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs" style={{ color: "#94A3B8" }}>
            Member of the world&apos;s largest technical professional organisation
          </p>
          <p className="font-display font-bold text-lg mt-1" style={{ color: "rgba(245,158,11,0.7)" }}>
            IEEE — Institute of Electrical and Electronics Engineers
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
