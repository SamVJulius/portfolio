"use client";
import { personal } from "@/data/portfolio";
import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(108,63,197,0.15)", background: "rgba(5,8,17,0.9)" }}>
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-display font-bold gradient-text">SVJ.</span>
          <p className="text-xs mt-1" style={{ color: "#94A3B8" }}>
            Samson Vincent Julius · Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-1 text-xs" style={{ color: "#94A3B8" }}>
          <span>Built with</span>
          <Heart size={12} className="mx-1 text-red-400 fill-red-400" />
          <span>Next.js · Framer Motion · Three.js</span>
        </div>

        <div className="flex items-center gap-3">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all hover:text-nebula-cyan"
            style={{ color: "#94A3B8", border: "1px solid rgba(108,63,197,0.2)" }}
            aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all hover:text-nebula-cyan"
            style={{ color: "#94A3B8", border: "1px solid rgba(108,63,197,0.2)" }}
            aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${personal.email}`}
            className="p-2 rounded-lg transition-all hover:text-nebula-cyan"
            style={{ color: "#94A3B8", border: "1px solid rgba(108,63,197,0.2)" }}
            aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
