"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[9998] w-12 h-12 rounded-full bg-[var(--bg-card)] border border-white/10 hover:border-[var(--brand-blue)]/30 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-blue)] shadow-lg shadow-black/20 hover:shadow-[var(--brand-blue)]/10 transition-all duration-300 backdrop-blur-sm"
          aria-label="Sayfa basina don"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
