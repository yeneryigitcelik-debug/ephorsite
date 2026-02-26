"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    // Lerp animation for smooth following
    const animate = () => {
      const lerp = 0.08;
      posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

      if (glowRef.current) {
        glowRef.current.style.left = `${posRef.current.x}px`;
        glowRef.current.style.top = `${posRef.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <div
      ref={glowRef}
      className="cursor-glow hidden md:block"
      style={{
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
