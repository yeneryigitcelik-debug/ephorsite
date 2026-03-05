"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase("hold"), 800);
    const exitTimer = setTimeout(() => setPhase("exit"), 2200);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--bg-primary)]"
        >
          {/* Animated background effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Radial glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            >
              <div className="w-full h-full rounded-full bg-radial-[at_center] from-[var(--brand-blue)]/[0.08] via-[var(--brand-blue)]/[0.03] to-transparent" />
            </motion.div>

            {/* Orbiting particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0], rotate: 360 }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: 0,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: 200 + i * 80,
                  height: 200 + i * 80,
                  marginLeft: -(100 + i * 40),
                  marginTop: -(100 + i * 40),
                }}
              >
                <div
                  className="absolute w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] shadow-[0_0_12px_rgba(107,159,202,0.6)]"
                  style={{ top: 0, left: "50%" }}
                />
              </motion.div>
            ))}

            {/* Grid overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.02 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(107,159,202,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(107,159,202,0.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow behind logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.4, 0.2], scale: [0.5, 1.2, 1] }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 -m-8 rounded-full bg-radial-[at_center] from-[var(--brand-blue)]/20 to-transparent blur-2xl"
              />
              <Image
                src="/logo-white.png"
                alt="ePhortech"
                width={280}
                height={56}
                priority
                className="relative z-10 w-[220px] sm:w-[280px] h-auto"
              />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <motion.span
                className="text-sm sm:text-base font-medium tracking-[0.15em] uppercase text-[var(--text-muted)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Teknik Servis Yönetimi
              </motion.span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 w-48 sm:w-56 h-[2px] rounded-full bg-white/[0.06] overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-[var(--brand-blue-dark)] via-[var(--brand-blue)] to-[var(--brand-blue-light)]"
              />
            </motion.div>

            {/* Subtle loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex items-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-1 rounded-full bg-[var(--brand-blue)]"
                />
              ))}
            </motion.div>
          </div>

          {/* Exit animation - curtain effect */}
          {phase === "exit" && (
            <>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[var(--bg-primary)] origin-bottom z-20"
                style={{ transformOrigin: "bottom" }}
              />
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[var(--bg-primary)] origin-top z-30"
                style={{ transformOrigin: "top" }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
