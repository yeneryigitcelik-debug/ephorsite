"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection, { StaggerContainer, StaggerItem, TextReveal } from "./AnimatedSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: Feature[];
  gradient: string;
  stats: { value: string; label: string }[];
  heroImage?: string;
}

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (!inView || !numericPart) {
      if (!numericPart) setDisplay(value);
      return;
    }
    const target = parseInt(numericPart);
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplay(`${prefix}${target}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${prefix}${Math.floor(start)}${suffix}`);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, numericPart, prefix, suffix]);

  return (
    <span ref={ref} className="font-[var(--font-syne)] text-4xl md:text-5xl font-extrabold gradient-text">
      {display}
    </span>
  );
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  longDescription,
  features,
  gradient,
  stats,
  heroImage,
}: ServicePageProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const descParagraphs = longDescription.split("\n\n");

  return (
    <>
      <Navbar />
      <main>
        {/* ===== HERO - Full bleed with parallax ===== */}
        <section ref={heroRef} className="relative min-h-[85vh] flex items-end overflow-hidden">
          {/* Parallax background image */}
          {heroImage && (
            <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[var(--bg-primary)]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/90 to-transparent" />
            </motion.div>
          )}

          {!heroImage && <div className="hero-gradient" />}

          {/* Grid */}
          <div
            className="absolute inset-0 z-[1] opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(107,159,202,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(107,159,202,0.15) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Decorative line */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--brand-blue)]/10 to-transparent hidden lg:block z-[2]" />

          <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-40 pb-24 w-full">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors mb-10 group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tüm Hizmetler
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
              {subtitle}
            </motion.span>

            {/* Title */}
            <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-4xl">
              <TextReveal delay={0.2}>
                {title.split(" ").slice(0, -1).join(" ")}
              </TextReveal>{" "}
              <TextReveal delay={0.35}>
                <span className="gradient-text">{title.split(" ").slice(-1)}</span>
              </TextReveal>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="max-w-2xl text-xl text-[var(--text-secondary)] leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Hero CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/iletisim"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-transform duration-300 group-hover:scale-105`} />
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Teklif Alın
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:08503350860"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0850 335 0860
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <svg className="w-5 h-5 text-[var(--brand-blue)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== ANIMATED STATS BAR ===== */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
          {/* Decorative gradient line at top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/10 to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.12} className="relative text-center group">
                  {/* Divider between stats */}
                  {i > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
                  )}
                  <Counter value={stat.value} />
                  <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mt-2 font-medium">
                    {stat.label}
                  </div>
                  {/* Hover glow */}
                  <div className="absolute -inset-4 bg-[var(--brand-blue)]/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DETAILED DESCRIPTION WITH SIDE IMAGE ===== */}
        <section className="py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left text - 5 cols */}
              <AnimatedSection direction="left" className="lg:col-span-5">
                <div className="sticky top-32">
                  <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                    Neden <span className="gradient-text">ePhortech?</span>
                  </h2>

                  <div className="space-y-6">
                    {descParagraphs.map((p, i) => (
                      <AnimatedSection key={i} delay={0.15 * (i + 1)}>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                          {p}
                        </p>
                      </AnimatedSection>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-10"
                  >
                    <Link
                      href="/iletisim"
                      className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden"
                    >
                      <span className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-transform duration-300 group-hover:scale-105`} />
                      <span className="relative z-10 flex items-center gap-2">
                        Teklif Alın
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* Right features - 7 cols, numbered list style */}
              <div className="lg:col-span-7">
                <div className="relative">
                  {/* Connecting line */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-blue)]/20 via-[var(--brand-blue)]/10 to-transparent hidden md:block" />

                  <div className="space-y-6">
                    {features.map((feat, i) => (
                      <AnimatedSection key={feat.title} delay={i * 0.1} direction="right">
                        <div className="group relative flex gap-6 p-6 rounded-2xl hover:bg-[var(--bg-card)]/60 transition-all duration-500">
                          {/* Number dot */}
                          <div className="relative flex-shrink-0">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card-hover)] border border-white/5 flex items-center justify-center group-hover:border-[var(--brand-blue)]/20 group-hover:shadow-lg group-hover:shadow-[var(--brand-blue)]/5 transition-all duration-500">
                              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feat.icon}</span>
                            </div>
                            {/* Connecting dot on the line */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[18px] w-2 h-2 rounded-full bg-[var(--brand-blue)]/30 hidden md:block group-hover:bg-[var(--brand-blue)] group-hover:shadow-md group-hover:shadow-[var(--brand-blue)]/40 transition-all duration-300" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-[var(--font-syne)] text-lg font-bold text-white group-hover:text-[var(--brand-blue-light)] transition-colors duration-300">
                                {feat.title}
                              </h3>
                              <span className="text-xs text-[var(--text-muted)] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                              {feat.description}
                            </p>
                          </div>

                          {/* Hover arrow */}
                          <div className="flex-shrink-0 self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <svg className="w-5 h-5 text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>

                          {/* Background highlight */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS / HOW IT WORKS ===== */}
        <section className="py-24 bg-[var(--bg-secondary)] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Süreç
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold">
                Nasıl <span className="gradient-text">Çalışıyoruz?</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/15 to-transparent hidden md:block" />

              {[
                { step: "01", title: "İletişim", desc: "İhtiyaçlarınızı dinliyor, size en uygun çözümü belirliyoruz.", icon: "📞" },
                { step: "02", title: "Analiz & Çözüm", desc: "Uzman ekibimiz hızlı analiz yapıp profesyonel müdahale sağlıyor.", icon: "🔍" },
                { step: "03", title: "Teslim & Garanti", desc: "Tamamlanan işi garantili olarak teslim ediyoruz.", icon: "✅" },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.2}>
                  <div className="group relative text-center">
                    {/* Step circle */}
                    <div className="relative mx-auto w-32 h-32 mb-8">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--brand-blue)]/10 group-hover:border-[var(--brand-blue)]/30 transition-colors duration-500 animate-rotate-slow" style={{ animationDuration: "20s" }} />
                      <div className="absolute inset-3 rounded-full bg-[var(--bg-card)] border border-white/5 group-hover:border-[var(--brand-blue)]/20 flex items-center justify-center transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[var(--brand-blue)]/10">
                        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-blue-dark)] to-[var(--brand-blue)] flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-[var(--brand-blue)]/20">
                        {item.step}
                      </div>
                    </div>

                    <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-xs mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="relative py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-radial-[at_center] from-[var(--brand-blue)]/[0.04] to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="relative gradient-border p-12 md:p-16 rounded-3xl overflow-hidden">
                {/* Inner glow */}
                <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${gradient} opacity-[0.06] rounded-full blur-3xl`} />
                <div className={`absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br ${gradient} opacity-[0.04] rounded-full blur-3xl`} />

                <div className="relative z-10">
                  <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold mb-6">
                    Projeleriniz İçin{" "}
                    <span className="gradient-text">Yanınızdayız</span>
                  </h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
                    Kurumsal çözümlerimiz hakkında detaylı bilgi almak ve size özel teklif için hemen iletişime geçin.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/iletisim"
                      className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden"
                    >
                      <span className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-transform duration-300 group-hover:scale-105`} />
                      <span className="relative z-10 flex items-center gap-2">
                        İletişime Geçin
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <a
                      href="tel:08503350860"
                      className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      0850 335 0860
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
