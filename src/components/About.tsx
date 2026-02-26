"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import AnimatedSection from "./AnimatedSection";

const AboutScene3D = dynamic(
  () => import("./Scene3D").then((mod) => ({ default: mod.AboutScene3D })),
  { ssr: false }
);

const features = [
  {
    title: "1 Yıl Garanti",
    description: "Tüm onarımlarımıza 1 yıl garanti.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  {
    title: "81 İlde Hizmet",
    description: "Türkiye genelinde kesintisiz kapasite.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: "from-[var(--brand-blue)]/20 to-[var(--brand-blue-dark)]/10",
    borderColor: "border-[var(--brand-blue)]/15",
    iconColor: "text-[var(--brand-blue)]",
  },
  {
    title: "Hızlı Müdahale",
    description: "Profesyonel ekiple hızlı çözümler.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    title: "Kurumsal Kalite",
    description: "Farklı ve kaliteli hizmet deneyimi.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/15",
    iconColor: "text-purple-400",
  },
];

export default function About() {
  const featRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-radial-[at_center] from-[var(--brand-blue-deeper)]/[0.03] to-transparent rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - 3D Globe + Floating badges */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* 3D Globe */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.04]">
                <AboutScene3D />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-4 -right-4 glass-card-deep px-5 py-3 rounded-xl shadow-xl animate-float-gentle z-10"
              >
                <span className="font-[var(--font-syne)] text-lg font-bold gradient-text">30+</span>
                <span className="text-xs text-[var(--text-muted)] block">Yıl Deneyim</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-4 -left-4 glass-card-deep px-5 py-3 rounded-xl shadow-xl animate-float-gentle z-10"
                style={{ animationDelay: "2s" }}
              >
                <span className="font-[var(--font-syne)] text-lg font-bold gradient-text">81 İl</span>
                <span className="text-xs text-[var(--text-muted)] block">Kapsama Alanı</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 -right-6 glass-card-deep px-4 py-3 rounded-xl shadow-xl animate-float hidden lg:block z-10"
                style={{ animationDelay: "4s" }}
              >
                <span className="font-[var(--font-syne)] text-lg font-bold text-emerald-400">%98</span>
                <span className="text-xs text-[var(--text-muted)] block">Memnuniyet</span>
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-14 h-14 z-10">
                <div className="w-full h-[2px] bg-gradient-to-r from-[var(--brand-blue)]/40 to-transparent" />
                <div className="w-[2px] h-full bg-gradient-to-b from-[var(--brand-blue)]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 z-10">
                <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-l from-[var(--brand-blue-dark)]/40 to-transparent" />
                <div className="absolute right-0 w-[2px] h-full bg-gradient-to-t from-[var(--brand-blue-dark)]/40 to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              Hakkımızda
            </span>
            <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Türkiye&apos;nin Öncü{" "}
              <span className="gradient-text">Teknoloji Servisi</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              EphorTech, 30 yılı aşkın sektör deneyimiyle Türkiye&apos;nin öncü
              teknoloji servis sağlayıcılarından biridir. Klasik teknik servis
              anlayışını modern çözümlerle yeniden tanımlıyoruz.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Kurumsal müşterilerimize farklı ve kaliteli hizmet deneyimi sunma
              taahhüdümüzle, hizmet kalitemizi sürekli geliştiriyoruz.
            </p>

            <Link
              href="/hakkimizda"
              className="group inline-flex items-center gap-2 text-[var(--brand-blue)] font-semibold hover:gap-3 transition-all duration-300 mb-10"
            >
              Daha Fazla Bilgi
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div ref={featRef} className="grid grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                  animate={featInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-4 rounded-xl bg-[var(--bg-card)] border border-white/[0.04] hover:border-[var(--brand-blue)]/20 hover:bg-[var(--bg-card-hover)] transition-all duration-500 hover-lift"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.color} border ${feat.borderColor} flex items-center justify-center ${feat.iconColor} mb-3 group-hover:scale-110 transition-transform duration-500`}>
                    {feat.icon}
                  </div>
                  <h4 className="font-[var(--font-syne)] font-bold text-sm text-white mb-1">{feat.title}</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
