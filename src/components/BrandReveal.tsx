"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const brands = [
  "Samsung",
  "Apple",
  "Huawei",
  "Xiaomi",
  "Oppo",
  "LG",
  "Sony",
  "Philips",
  "Vestel",
  "HP",
  "Lenovo",
  "Dell",
  "Asus",
  "Bosch",
  "Siemens",
  "Arçelik",
  "Beko",
  "Casper",
];

export default function BrandReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ── Phase 1 (0–0.2): section enters, title fades in, device floats ── */
  /* ── Phase 2 (0.2–0.55): device rotates 3-D & shrinks ── */
  /* ── Phase 3 (0.4–0.65): brands grid fades in ── */

  // Device
  const deviceScale = useTransform(scrollYProgress, [0, 0.2, 0.55], [1.05, 1, 0.45]);
  const deviceRotateX = useTransform(scrollYProgress, [0.2, 0.55], [0, 55]);
  const deviceY = useTransform(scrollYProgress, [0.2, 0.55], [0, -100]);
  const deviceOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  // Glow behind device
  const glowScale = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 1.3, 0.6]);
  const glowOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0.6, 0]);

  // Title
  const titleOpacity = useTransform(scrollYProgress, [0.02, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.02, 0.15], [40, 0]);

  // Subtitle
  const subOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  // Brand grid
  const gridOpacity = useTransform(scrollYProgress, [0.4, 0.62], [0, 1]);
  const gridScale = useTransform(scrollYProgress, [0.4, 0.62], [0.92, 1]);
  const gridY = useTransform(scrollYProgress, [0.4, 0.62], [60, 0]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "175vh" }}>
      <div className="section-divider" />

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[8%] w-[500px] h-[500px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.03] to-transparent rounded-full" />
          <div className="absolute bottom-[15%] left-[5%] w-[400px] h-[400px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full">
          {/* Title block */}
          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              İş Ortaklarımız
            </span>
            <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Çalıştığımız{" "}
              <span className="gradient-text">Markalar</span>
            </h2>
          </motion.div>

          <motion.p
            style={{ opacity: subOpacity }}
            className="text-center text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
          >
            Türkiye&apos;nin önde gelen markalarıyla iş birliği yaparak
            müşterilerimize en kaliteli hizmeti sunuyoruz.
          </motion.p>

          {/* Overlap zone — device on top, brands behind */}
          <div className="relative" style={{ minHeight: "340px" }}>
            {/* ── Device image (3-D rotating) ── */}
            <motion.div
              style={{
                scale: deviceScale,
                rotateX: deviceRotateX,
                y: deviceY,
                opacity: deviceOpacity,
                transformPerspective: 1200,
              }}
              className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="relative">
                <Image
                  src="/images/slider-devices.png"
                  alt="Elektronik Cihazlar"
                  width={560}
                  height={410}
                  className="w-full max-w-md md:max-w-lg h-auto object-contain drop-shadow-2xl"
                  quality={85}
                />
                {/* Animated glow */}
                <motion.div
                  style={{ scale: glowScale, opacity: glowOpacity }}
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--brand-blue)]/20 to-[var(--brand-blue-dark)]/10 rounded-[40px] blur-[80px] scale-125"
                />
              </div>
            </motion.div>

            {/* ── Brand grid ── */}
            <motion.div
              style={{ opacity: gridOpacity, scale: gridScale, y: gridY }}
              className="relative z-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
            >
              {brands.map((brand, i) => (
                <motion.div
                  key={brand}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex items-center justify-center py-5 px-3 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:border-[var(--brand-blue)]/20 hover:bg-[var(--brand-blue)]/[0.05] transition-all duration-500 backdrop-blur-sm cursor-default"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <span className="font-[var(--font-syne)] text-sm md:text-base font-semibold text-[var(--text-muted)] group-hover:text-white transition-colors duration-300">
                    {brand}
                  </span>
                  {/* Corner accent on hover */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-transparent group-hover:border-[var(--brand-blue)]/30 rounded-tl-xl transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-transparent group-hover:border-[var(--brand-blue)]/30 rounded-br-xl transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom stat line */}
          <motion.div
            style={{ opacity: gridOpacity }}
            className="mt-8 flex items-center justify-center gap-6 text-sm text-[var(--text-muted)]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
              100+ Marka
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
              81 İlde Servis
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
              30+ Yıl Deneyim
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
