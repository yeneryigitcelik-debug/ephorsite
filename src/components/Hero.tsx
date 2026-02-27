"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), { ssr: false });

const slides = [
  {
    image: "/images/slider-devices.png",
    title: "Teknolojiyi",
    titleAccent: "Yeniden Tanımlıyoruz",
    subtitle:
      "Klasik teknik servis anlayışını modern çözümlere dönüştüren yeni nesil teknoloji servisi.",
    badge: "Yeni Nesil Teknoloji",
  },
  {
    image: "/images/servis.png",
    title: "Profesyonel",
    titleAccent: "Onarım Hizmetleri",
    subtitle:
      "Tüm elektronik cihazlarınız için 1 yıl garantili profesyonel onarım ve bakım hizmetleri.",
    badge: "1 Yıl Garanti",
  },
  {
    image: "/images/cagri-merkezi.png",
    title: "Kesintisiz",
    titleAccent: "Destek Hattı",
    subtitle:
      "Kurumsal müşterilerimize özel çağrı merkezi ile hızlı ve etkili çözümler sunuyoruz.",
    badge: "7/24 Destek",
  },
  {
    image: "/images/ariza-hasar.png",
    title: "81 İlde",
    titleAccent: "Yanınızdayız",
    subtitle:
      "Türkiye genelinde kesintisiz operasyonel kapasite ile her noktada aynı kalitede hizmet.",
    badge: "Türkiye Geneli",
  },
];

const SLIDE_DURATION = 6000;

const imageVariants = [
  { initial: { scale: 1.15, x: 20 }, animate: { scale: 1.05, x: -10 } },
  { initial: { scale: 1.2, y: 15 }, animate: { scale: 1.05, y: -10 } },
  { initial: { scale: 1.1, x: -15 }, animate: { scale: 1.15, x: 10 } },
  { initial: { scale: 1.2, y: -10 }, animate: { scale: 1.05, y: 5 } },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, started]);

  return (
    <span className="font-[var(--font-syne)] text-4xl md:text-5xl font-extrabold gradient-text tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
    progressRef.current = 0;
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    progressRef.current = 0;
    setProgress(0);

    timerRef.current = setInterval(() => {
      progressRef.current += 100 / (SLIDE_DURATION / 50);

      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
      } else {
        setProgress(progressRef.current);
      }
    }, 50);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, current]);

  const slide = slides[current];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-start overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* === BACKGROUND IMAGE LAYER === */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-[-20px] z-0"
        >
          {/* Ken Burns animated image */}
          <motion.div
            initial={imageVariants[current].initial}
            animate={imageVariants[current].animate}
            transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover image-enhance"
              priority={current === 0}
              quality={90}
              sizes="100vw"
            />
          </motion.div>

          {/* Dark overlays - layered for depth */}
          <div className="absolute inset-0 bg-[var(--bg-primary)]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/50" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--brand-blue)]/[0.03] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Grid overlay - fine grid */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,159,202,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(107,159,202,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3D Particle Network */}
      <ParticleNetwork />

      {/* === CONTENT === */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[85px] lg:pt-[5px] pb-20 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content - spans 7 cols */}
          <div className="lg:col-span-7">
            {/* Animated badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current}`}
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-blue)] opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-blue)]" />
                  </span>
                  {slide.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Animated heading */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                className="font-[var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {slide.title}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block gradient-text"
                >
                  {slide.titleAccent}
                </motion.span>
              </motion.h1>
            </AnimatePresence>

            {/* Animated subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 max-w-xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/iletisim"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden magnetic-btn"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)]" />
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </span>
                <span className="relative z-10 flex items-center gap-2">
                  İletişime Geç!
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="tel:08503350860"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white hover:bg-white/[0.03] transition-all duration-500"
              >
                <svg className="w-5 h-5 transition-colors duration-300 group-hover:text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0850 335 0860
              </Link>
            </motion.div>
          </div>

          {/* Right - Slide thumbnails */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-5 hidden lg:flex flex-col gap-3"
          >
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`group relative flex items-center gap-4 p-3.5 rounded-xl text-left transition-all duration-500 ${
                  i === current
                    ? "bg-white/[0.05] border border-[var(--brand-blue)]/20 shadow-lg shadow-[var(--brand-blue)]/5"
                    : "bg-transparent border border-transparent hover:bg-white/[0.03] hover:border-white/5"
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-500 ${
                    i === current
                      ? "ring-2 ring-[var(--brand-blue)]/40 shadow-lg shadow-[var(--brand-blue)]/10"
                      : "opacity-40 group-hover:opacity-70 grayscale group-hover:grayscale-0"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover image-enhance"
                    quality={75}
                    sizes="80px"
                  />
                  {i !== current && (
                    <div className="absolute inset-0 bg-[var(--bg-primary)]/40" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold truncate transition-colors duration-300 ${
                      i === current ? "text-white" : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                    }`}
                  >
                    {s.title} {s.titleAccent}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] truncate mt-0.5">
                    {s.badge}
                  </p>
                </div>

                {/* Progress bar for active slide */}
                {i === current && (
                  <div className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.05, ease: "linear" }}
                    />
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Stats - Enhanced with glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: 30, suffix: "+", label: "Yıllık Deneyim", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: 81, suffix: "", label: "İlde Hizmet", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: 1, suffix: "", label: "Yıl Garanti", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { value: 500, suffix: "+", label: "Kurumsal Müşteri", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.15 }}
                className="stat-card group relative flex flex-col items-center gap-3 py-6 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm hover:bg-white/[0.04] hover:border-[var(--brand-blue)]/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue)]/[0.08] border border-[var(--brand-blue)]/10 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-[var(--brand-blue)]/[0.12] transition-all duration-500">
                  <svg className="w-5 h-5 text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <span className="text-xs text-[var(--text-muted)] font-medium tracking-widest uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile slide indicators */}
        <div className="flex lg:hidden justify-center gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-500"
              style={{ width: i === current ? 48 : 16 }}
            >
              <div className="absolute inset-0 bg-white/10 rounded-full" />
              {i === current && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium">Keşfet</span>
          <div className="w-5 h-9 rounded-full border border-[var(--brand-blue)]/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-[var(--brand-blue)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
