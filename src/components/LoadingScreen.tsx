"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  "Initializing Mission Control...",
  "Calibrating Navigation Systems...",
  "Loading Portfolio Data...",
  "Establishing Orbit...",
  "Launching.",
];

export default function LoadingScreen() {
  const [visible, setVisible]   = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx]   = useState(0);

  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 60 }).map(() => ({
      width:  `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      top:    `${Math.random() * 100}%`,
      left:   `${Math.random() * 100}%`,
      opacity: Math.random() * 0.6 + 0.2,
      animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 2}s`,
    })));

    // Progress bar
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 40);

    // Step messages
    const stepInterval = setInterval(() => {
      setStepIdx((i) => (i < steps.length - 1 ? i + 1 : i));
    }, 400);

    // Hide after ~2.5s
    const timeout = setTimeout(() => setVisible(false), 2600);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "radial-gradient(ellipse at center, #0f0a2e 0%, #050811 100%)" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Stars bg */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((style, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={style}
              />
            ))}
          </div>

          {/* Orbital rings */}
          <div className="relative flex items-center justify-center mb-10">
            <motion.div
              className="w-24 h-24 rounded-full border border-cosmic-purple/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute w-3 h-3 rounded-full bg-nebula-cyan -top-1.5 left-1/2 -translate-x-1/2"
                style={{ boxShadow: "0 0 8px #22D3EE" }}
              />
            </motion.div>
            <motion.div
              className="absolute w-16 h-16 rounded-full border border-electric-indigo/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute w-2 h-2 rounded-full bg-violet -top-1 left-1/2 -translate-x-1/2"
                style={{ boxShadow: "0 0 6px #A855F7" }}
              />
            </motion.div>
            {/* Center dot */}
            <div
              className="absolute w-6 h-6 rounded-full bg-cosmic-purple"
              style={{ boxShadow: "0 0 20px rgba(108,63,197,0.8)" }}
            />
          </div>

          {/* Title */}
          <motion.h1
            className="font-display text-2xl font-bold gradient-text mb-2 tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            SAMSON VINCENT JULIUS
          </motion.h1>

          {/* Step message */}
          <motion.p
            key={stepIdx}
            className="font-mono text-sm text-moon-gray mb-8"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {steps[stepIdx]}
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-px bg-white/10 relative rounded-full overflow-hidden">
            <motion.div
              className="h-full loader-bar rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-mono text-xs text-moon-gray/50 mt-2">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
