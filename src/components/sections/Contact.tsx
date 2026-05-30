"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import { Mail, Download, Send, Terminal, CheckCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "#22D3EE",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "samson-vincent-julius",
    href: personal.linkedin,
    color: "#4F46E5",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "SamVJulius",
    href: personal.github,
    color: "#A855F7",
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send delay (wire up your preferred email API here)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="grid-lines" />
      <div
        className="nebula-bg w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(108,63,197,0.1) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label justify-center">08 · Contact</p>
          <h2 className="section-title">
            Mission <span className="gradient-text">Control</span>
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#94A3B8" }}>
            Ready to collaborate, discuss opportunities, or just geek out about distributed systems?
            Open a channel — I respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ── Left: Info ── */}
          <motion.div
            className="space-y-6"
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Terminal status */}
            <div
              className="rounded-xl p-5 font-mono text-sm"
              style={{ background: "rgba(5,8,17,0.9)", border: "1px solid rgba(108,63,197,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <Terminal size={12} className="ml-2" style={{ color: "#94A3B8" }} />
                <span className="text-xs" style={{ color: "#94A3B8" }}>mission-control.sh</span>
              </div>
              <div className="space-y-1.5" style={{ color: "#94A3B8" }}>
                <p><span style={{ color: "#22D3EE" }}>$ </span>status</p>
                <p style={{ color: "#4ade80" }}>● online · Available for opportunities</p>
                <p><span style={{ color: "#22D3EE" }}>$ </span>location</p>
                <p>{personal.location}</p>
                <p><span style={{ color: "#22D3EE" }}>$ </span>response_time</p>
                <p style={{ color: "#4ade80" }}>{"< 24 hours"}</p>
                <p><span style={{ color: "#22D3EE" }}>$ </span>open_to</p>
                <p>["SDE roles", "Backend", "Blockchain", "Internships"]</p>
                <p className="flex items-center gap-1">
                  <span style={{ color: "#22D3EE" }}>$ </span>
                  <span className="cursor-blink">_</span>
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contacts.map(({ Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] group"
                  style={{ background: "rgba(8,15,31,0.7)", border: `1px solid ${color}22` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}66`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${color}18`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}22`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}44` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs mb-0.5" style={{ color: "#94A3B8" }}>{label}</p>
                    <p className="font-medium text-sm" style={{ color: "#F1F5F9" }}>{value}</p>
                  </div>
                </a>
              ))}

              {/* Resume download */}
              <a
                href={personal.resume}
                download
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(108,63,197,0.15), rgba(34,211,238,0.08))",
                  border: "1px solid rgba(108,63,197,0.35)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(108,63,197,0.2)", border: "1px solid rgba(108,63,197,0.5)" }}
                >
                  <Download size={18} style={{ color: "#A855F7" }} />
                </div>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: "#94A3B8" }}>Resume</p>
                  <p className="font-medium text-sm" style={{ color: "#F1F5F9" }}>Download Resume PDF</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass p-6 md:p-8 h-full">
              <h3 className="font-display font-semibold text-lg mb-6" style={{ color: "#F1F5F9" }}>
                Send a Transmission
              </h3>

              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-64 text-center gap-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <CheckCircle size={48} style={{ color: "#4ade80" }} />
                  <h4 className="font-display font-bold text-xl" style={{ color: "#F1F5F9" }}>
                    Message Received!
                  </h4>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: "#22D3EE" }}>
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="terminal-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: "#22D3EE" }}>
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="terminal-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: "#22D3EE" }}>
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity, project, or just say hello..."
                      className="terminal-input resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all"
                    style={{
                      background: loading
                        ? "rgba(108,63,197,0.5)"
                        : "linear-gradient(135deg, #6C3FC5, #4F46E5)",
                      boxShadow: "0 0 30px rgba(108,63,197,0.3)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                  >
                    {loading ? (
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <Send size={15} />
                        Send Transmission
                      </>
                    )}
                  </motion.button>

                  <p className="font-mono text-xs text-center" style={{ color: "#94A3B8" }}>
                    Or email directly:{" "}
                    <a href={`mailto:${personal.email}`} style={{ color: "#22D3EE" }}>
                      {personal.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
