"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const partners = [
  {
    name: "Türkiye Sigorta",
    logo: "/calistigimizfirmalar/ts-slogansiz-1-e1728740452484-1024x146.png",
    url: "https://www.turkiyesigorta.com.tr",
    width: 180,
    height: 50,
  },
  {
    name: "Eureko Sigorta",
    logo: "/calistigimizfirmalar/eureko-logo.svg",
    url: "https://www.eurekosigorta.com.tr",
    width: 180,
    height: 50,
  },
  {
    name: "Mapfre Sigorta",
    logo: "/calistigimizfirmalar/mapfre-sigorta-logo.png",
    url: "https://www.mapfre.com.tr",
    width: 180,
    height: 50,
  },
  {
    name: "Nexus",
    logo: "/calistigimizfirmalar/nexus-logo-master.png",
    url: "https://www.nexussigorta.com",
    width: 160,
    height: 50,
  },
];

function LogoCard({ partner, index }: { partner: typeof partners[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group"
    >
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-[var(--brand-blue)]/25 hover:bg-white/[0.05] transition-all duration-500 min-h-[120px] sm:min-h-[140px] cursor-pointer overflow-hidden"
      >
        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-radial-[at_center] from-[var(--brand-blue)]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-transparent group-hover:border-[var(--brand-blue)]/25 rounded-tl-2xl transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-transparent group-hover:border-[var(--brand-blue)]/25 rounded-br-2xl transition-all duration-500" />

        {/* Logo container */}
        <div className="relative z-10 bg-white rounded-xl px-5 py-3 sm:px-6 sm:py-4 group-hover:shadow-lg group-hover:shadow-[var(--brand-blue)]/10 transition-all duration-500">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Company name */}
        <span className="relative z-10 mt-3 text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--brand-blue-light)] transition-colors duration-300 flex items-center gap-1.5">
          {partner.name}
          <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </span>

        {/* Shine sweep */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>
      </a>
    </motion.div>
  );
}

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="referanslar" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="section-divider" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-5 sm:mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Referanslarımız
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Çalıştığımız{" "}
            <span className="gradient-text">Firmalar</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen sigorta firmaları ve kurumsal markalarıyla güvenilir çözüm ortaklığı.
          </p>
        </AnimatedSection>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <LogoCard key={partner.name} partner={partner} index={i} />
          ))}
        </div>

        {/* Bottom CTA text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-sm text-[var(--text-muted)]">
            ve <span className="text-[var(--brand-blue)] font-semibold">10+</span> sigorta firması ile çalışmaktayız
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-16 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/15 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
