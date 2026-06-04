"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { nav, personal } from "@/data/portfolio";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen,     setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Detect active section
      const sections = nav.map((n) => n.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-4 left-25 right-25 z-50 transition-all duration-300 rounded-full"
        style={{
          background: scrolled ? "rgba(5,8,17,0.05)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "5px solid rgba(108,63,197,0.15)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container flex items-center justify-between h-20 ">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-2xl tracking-tight size-lg flex items-center gap-1">
            <span className="gradient-text">SVJ</span>
            <span className="text-moon-gray font-light">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-medium font-medium transition-colors duration-200 rounded-lg"
                  style={{ color: isActive ? "#22D3EE" : "#94A3B8" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute -inset-5 rounded-full"
                      style={{ background: "rgba(34,211,238,0.08)" }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personal.resume}
              download
              className="flex items-center gap-2 px-6 py-4 rounded-lg text-lg font-medium transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #6c3fc5, #4F46E5)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                padding: "10px 20px",
                borderRadius: "9999px",
              }}
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-moon-gray"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-20"
            style={{ background: "rgba(5,8,17,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-star-white hover:text-nebula-cyan transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={personal.resume}
                download
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
                style={{ background: "linear-gradient(135deg, #6C3FC5, #22D3EE)", padding : "10px 20px", borderRadius: "9999px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: nav.length * 0.06 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
