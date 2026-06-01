"use client";
import { motion } from "framer-motion";
import { personal, stats } from "@/data/portfolio";
import { MapPin, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid-lines" />

      {/* Nebula blobs */}
      <div className="nebula-bg w-96 h-96 -top-20 -right-20"
        style={{ background: "radial-gradient(circle, rgba(108,63,197,0.1) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
        >
          <p className="section-label">01 · About</p>
          <h2 className="section-title">
            The <span className="gradient-text">Mission Brief</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 mt-10">
          {/* Story — 3 cols */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
              My journey through the cosmos of technology began with a curiosity for systems
              that <span style={{ color: "#F1F5F9" }}>scale</span>. As a Computer Science
              undergraduate at JUIT, I didn't wait for graduation to venture into the field —
              I launched myself into a real-world internship at{" "}
              <span style={{ color: "#22D3EE" }}>Antier Solutions</span>, where I worked on
              enterprise blockchain infrastructure and distributed backend systems.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>
              At Antier, I built cross-chain communication systems using the{" "}
              <span style={{ color: "#A855F7" }}>Cosmos SDK</span> and IBC protocol, engineered
              Hyperledger Fabric solutions for supply-chain traceability, and developed
              Golang microservices with authentication, message queuing, and layered
              service architecture.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>
              Beyond code, I led the{" "}
              <span style={{ color: "#F59E0B" }}>IEEE JUIT Student Branch</span> as Vice
              Chairperson — managing a 25-member team, organizing 30+ technical events, and
              driving community growth across the university. I believe the best engineers
              are also communicators, collaborators, and leaders.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { Icon: MapPin,   text: personal.location,  href: "#" },
                { Icon: Mail,     text: personal.email,     href: `mailto:${personal.email}` },
                { Icon: Github,   text: "SamVJulius",       href: personal.github },
                { Icon: Linkedin, text: "LinkedIn",         href: personal.linkedin },
              ].map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all hover:scale-105"
                  style={{ background: "rgba(108,63,197,0.1)", border: "1px solid rgba(108,63,197,0.25)", color: "#94A3B8", padding: "4px 12px" }}
                >
                  <Icon size={12} style={{ color: "#22D3EE" }} />
                  {text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats sidebar — 2 cols */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Interests */}
            <div className="glass p-6 mt-6 lg:mt-0">
              <h3 className="font-display font-semibold text-lg mb-4" style={{ color: "#22D3EE", padding: "15px", borderBottom: "1px solid rgba(34,211,238,0.2)" }}>
                Core Interests
              </h3>
              <div className="space-y-2 flex flex-col gap-2">
                {[
                  "Backend Engineering",
                  "Distributed Systems",
                  "Blockchain Infrastructure",
                  "Scalable System Design",
                  "API Development",
                  "AI / ML",
                  "Cloud-Native Architectures",
                ].map((interest) => (
                  <div key={interest} className="flex items-center gap-2 left-border" style={{  padding: "2px 0 2px 8px" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#6C3FC5" }} />
                    <span className="text-sm" style={{ color: "#94A3B8" }}>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best-fit roles */}
            <div className="glass p-6 mt-6 lg:mt-0">
              <h3 className="font-display font-semibold text-lg mb-4" style={{ color: "#22D3EE", padding: "15px", borderBottom: "1px solid rgba(34,211,238,0.2)" }}>
                Target Roles
              </h3>
              <div className="flex flex-wrap gap-2" style={{  padding: "5px 0 5px 8px" }}>
                {[
                  "SDE", "Backend Engineer", "Golang Developer",
                  "Java Developer", "Platform Engineer", "Blockchain Engineer",
                ].map((role) => (
                  <span key={role} className="tech-badge">{role}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
