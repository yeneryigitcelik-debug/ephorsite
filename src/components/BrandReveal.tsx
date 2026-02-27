"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const BrandReveal3DScene = dynamic(() => import("./BrandReveal3DScene"), {
  ssr: false,
  loading: () => null,
});

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
  const scrollRef = useRef(0);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Bridge scroll -> ref (no re-renders)
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      scrollRef.current = v;
    });
    return unsub;
  }, [scrollYProgress]);

  // WebGL check
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    setHasWebGL(!!gl);
  }, []);

  // Reduced motion check
  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const use3D = hasWebGL && !reducedMotion;

  // Scroll-driven transforms for HTML overlays
  const titleOpacity = useTransform(scrollYProgress, [0.02, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.02, 0.15], [40, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const statOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  // Fallback grid transforms (only used when 3D is off)
  const gridOpacity = useTransform(scrollYProgress, [0.4, 0.62], [0, 1]);
  const gridScale = useTransform(scrollYProgress, [0.4, 0.62], [0.92, 1]);
  const gridY = useTransform(scrollYProgress, [0.4, 0.62], [60, 0]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "200vh" }}>
      <div className="section-divider" />

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Ambient bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[8%] w-[500px] h-[500px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.03] to-transparent rounded-full" />
          <div className="absolute bottom-[15%] left-[5%] w-[400px] h-[400px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />
        </div>

        {/* 3D Canvas */}
        {use3D && (
          <div className="absolute inset-0 z-0">
            <BrandReveal3DScene scrollRef={scrollRef} />
          </div>
        )}

        {/* HTML Overlays */}
        <div className="relative z-10 h-full flex flex-col items-center px-6 lg:px-8">
          {/* Top spacing */}
          <div className="pt-16 md:pt-20" />

          {/* Title block */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-center mb-4"
          >
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
            className="text-center text-lg text-[var(--text-secondary)] max-w-2xl"
          >
            Türkiye&apos;nin önde gelen markalarıyla iş birliği yaparak
            müşterilerimize en kaliteli hizmeti sunuyoruz.
          </motion.p>

          {/* Spacer for 3D content */}
          <div className="flex-1" />

          {/* 2D Fallback grid (shown when WebGL off or reduced motion) */}
          {!use3D && (
            <motion.div
              style={{ opacity: gridOpacity, scale: gridScale, y: gridY }}
              className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8"
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
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-transparent group-hover:border-[var(--brand-blue)]/30 rounded-tl-xl transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-transparent group-hover:border-[var(--brand-blue)]/30 rounded-br-xl transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Bottom stat line */}
          <motion.div
            style={{ opacity: statOpacity }}
            className="mb-10 flex items-center justify-center gap-6 text-sm text-[var(--text-muted)]"
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
