"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "EphorTech ile çalışmaya başladığımızdan beri teknik servis süreçlerimiz çok daha hızlı ve profesyonel ilerliyor. 81 ildeki kapsama alanları büyük avantaj.",
    name: "Ahmet Yılmaz",
    title: "Operasyon Müdürü",
    company: "Anadolu Sigorta",
  },
  {
    text: "Kurumsal müşterilerimize sunduğumuz hizmet kalitesi EphorTech sayesinde büyük ölçüde arttı. Profesyonel ekip ve hızlı çözüm süreçleri.",
    name: "Elif Demir",
    title: "Satış Direktörü",
    company: "Allianz Partners",
  },
  {
    text: "30 yıllık deneyimleri ve geniş servis ağları ile sektörün en güvenilir çözüm ortağı. Garanti süreçleri de son derece şeffaf.",
    name: "Murat Kaya",
    title: "BT Direktörü",
    company: "Sompo Sigorta",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            Müşteri Yorumları
          </span>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Müşterilerimiz{" "}
            <span className="gradient-text">Ne Diyor?</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="testimonial-card p-8 h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[var(--brand-blue)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-blue-dark)] to-[var(--brand-blue)] flex items-center justify-center text-white text-xs font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{t.title}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
