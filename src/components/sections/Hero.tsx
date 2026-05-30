"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { personal, roles, stats } from "@/data/portfolio";
import { Download, Mail, ArrowDown } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import Image from "next/image";

function TypewriterRoles() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1600);
      return () => clearTimeout(t);
    }
    const current = roles[idx];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPause(true);
        setDeleting(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % roles.length);
      }
    }
  }, [displayed, deleting, idx, pause]);

  return (
    <span className="gradient-text-cyan font-display font-semibold">
      {displayed}
      <span className="cursor-blink" style={{ color: "#22D3EE" }}>|</span>
    </span>
  );
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current * 10) / 10);
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{Number.isInteger(target) ? Math.round(count) : count.toFixed(1)}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Grid decoration */}
      <div className="grid-lines" />

      {/* Horizon glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(108,63,197,0.6), rgba(34,211,238,0.4), transparent)" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)] py-16">

          {/* ── Left: Text ── */}
          <div>
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs" style={{ color: "#22D3EE" }}>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-display font-bold leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-star-white">Samson</span>
              <br />
              <span className="gradient-text">Vincent Julius</span>
            </motion.h1>

            {/* Dynamic role */}
            <motion.div
              className="text-xl md:text-2xl mb-6 h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TypewriterRoles />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "#94A3B8" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={personal.resume}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #6C3FC5, #4F46E5)",
                  boxShadow: "0 0 30px rgba(108,63,197,0.4)",
                }}
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid rgba(34,211,238,0.4)",
                  color: "#22D3EE",
                  background: "rgba(34,211,238,0.06)",
                }}
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid rgba(108,63,197,0.3)",
                  color: "#F1F5F9",
                  background: "rgba(108,63,197,0.08)",
                }}
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="font-mono text-xs" style={{ color: "#94A3B8" }}>Find me on</span>
              <div className="flex gap-3">
                {[
                  { href: personal.github, Icon: Github, label: "GitHub" },
                  { href: personal.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${personal.email}`, Icon: Mail, label: "Email" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{
                      border: "1px solid rgba(108,63,197,0.25)",
                      color: "#94A3B8",
                      background: "rgba(8,15,31,0.5)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#22D3EE")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Headshot + stats ── */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Headshot frame */}
            <div className="relative">
              {/* Orbital rings */}
              <motion.div
                className="absolute inset-[-30px] rounded-full"
                style={{ border: "1px dashed rgba(108,63,197,0.3)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute w-3 h-3 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ background: "#6C3FC5", boxShadow: "0 0 10px #6C3FC5" }} />
              </motion.div>
              <motion.div
                className="absolute inset-[-55px] rounded-full"
                style={{ border: "1px dashed rgba(34,211,238,0.2)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute w-2 h-2 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ background: "#22D3EE", boxShadow: "0 0 8px #22D3EE" }} />
              </motion.div>

              {/* Photo container */}
              <div
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  border: "2px solid rgba(108,63,197,0.5)",
                  boxShadow: "0 0 40px rgba(108,63,197,0.3), 0 0 80px rgba(108,63,197,0.15), inset 0 0 40px rgba(108,63,197,0.1)",
                  background: "linear-gradient(135deg, rgba(108,63,197,0.3), rgba(34,211,238,0.1))",
                }}
              >
                <Image
                  src="/headshot.jpg"
                  alt="Samson Vincent Julius"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="glass p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="font-display font-bold text-2xl gradient-text">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-xs mt-1" style={{ color: "#94A3B8" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-xs" style={{ color: "#94A3B8" }}>Scroll</span>
        <ArrowDown size={14} style={{ color: "#6C3FC5" }} />
      </motion.div>
    </section>
  );
}
