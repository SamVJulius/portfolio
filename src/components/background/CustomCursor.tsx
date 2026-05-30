"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const posRef   = useRef({ x: 0, y: 0 });
  const ringPos  = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    // Laggy ring follows cursor with lerp
    let rafId: number;
    function animate() {
      rafId = requestAnimationFrame(animate);
      const { x, y } = posRef.current;
      dot.style.transform  = `translate(${x - 4}px, ${y - 4}px)`;
      ringPos.current.x += (x - ringPos.current.x) * 0.12;
      ringPos.current.y += (y - ringPos.current.y) * 0.12;
      ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;
    }
    animate();

    // Hover effects
    const interactables = "a, button, [data-cursor]";
    const onEnter = () => { ring.style.transform += " scale(1.8)"; ring.style.borderColor = "#22D3EE"; };
    const onLeave = () => { ring.style.borderColor = "#6C3FC5"; };
    document.querySelectorAll(interactables).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 rounded-full bg-nebula-cyan z-[9999] pointer-events-none"
        style={{ boxShadow: "0 0 8px #22D3EE, 0 0 16px rgba(34,211,238,0.5)" }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 w-9 h-9 rounded-full border border-cosmic-purple z-[9998] pointer-events-none"
        style={{ transition: "border-color 0.2s ease, width 0.2s ease, height 0.2s ease" }}
      />
    </>
  );
}
