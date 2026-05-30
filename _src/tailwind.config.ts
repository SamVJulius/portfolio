import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-black":     "#050811",
        "deep-navy":       "#080f1f",
        "cosmic-purple":   "#6C3FC5",
        "electric-indigo": "#4F46E5",
        "nebula-cyan":     "#22D3EE",
        "aurora-teal":     "#0EA5E9",
        "star-white":      "#F1F5F9",
        "moon-gray":       "#94A3B8",
        "gold-accent":     "#F59E0B",
        violet:            "#A855F7",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial":    "radial-gradient(var(--tw-gradient-stops))",
        "space-gradient":
          "radial-gradient(ellipse at top, #0f0a2e 0%, #050811 60%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(108,63,197,0.3) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(108,63,197,0.1) 0%, rgba(34,211,238,0.05) 100%)",
      },
      animation: {
        "spin-slow":   "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        float:         "float 5s ease-in-out infinite",
        shimmer:       "shimmer 2.5s linear infinite",
        twinkle:       "twinkle 3s ease-in-out infinite",
        "pulse-ring":  "pulseRing 2s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%":       { opacity: "1",   transform: "scale(1.3)" },
        },
        pulseRing: {
          "0%":   { transform: "scale(1)",   opacity: "0.6" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(108,63,197,0.4), 0 0 60px rgba(108,63,197,0.2)",
        "glow-cyan":   "0 0 20px rgba(34,211,238,0.4), 0 0 60px rgba(34,211,238,0.2)",
        "glow-card":   "0 8px 32px rgba(108,63,197,0.15), inset 0 0 32px rgba(108,63,197,0.05)",
        "card-hover":  "0 20px 60px rgba(108,63,197,0.25), 0 0 100px rgba(108,63,197,0.1)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
