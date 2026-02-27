"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import AnimatedSection from "./AnimatedSection";

const ContactEnvelope3D = dynamic(() => import("./ContactEnvelope3D"), { ssr: false });

const contactInfo = [
  {
    label: "Telefon",
    value: "0850 335 0860",
    href: "tel:08503350860",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "from-emerald-500/15 to-emerald-600/10",
    borderColor: "border-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  {
    label: "E-posta",
    value: "info@ephortech.com",
    href: "mailto:info@ephortech.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "from-[var(--brand-blue)]/15 to-[var(--brand-blue-dark)]/10",
    borderColor: "border-[var(--brand-blue)]/15",
    iconColor: "text-[var(--brand-blue)]",
  },
  {
    label: "Merkez Ofis",
    value: "Barbaros Mh. Mor Sümbül Sk. No:5/A Deluxia Palace K:17/474 Ataşehir / İstanbul",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: "from-amber-500/15 to-amber-600/10",
    borderColor: "border-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    label: "Teknik Servis",
    value: "Cihangir Mah. E5 Yan Yol Üzeri Türksan Center A Blok No:291 2L Avcılar / İstanbul",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.648-3.014A.75.75 0 016 11.49v-5.82a.75.75 0 01.372-.645l5.648-3.014a.75.75 0 01.756 0l5.648 3.014a.75.75 0 01.372.645v5.82a.75.75 0 01-.372.645l-5.648 3.014a.75.75 0 01-.756 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.106 7.027L12 10.98l6.894-3.953M12 21.485V10.98" />
      </svg>
    ),
    color: "from-purple-500/15 to-purple-600/10",
    borderColor: "border-purple-500/15",
    iconColor: "text-purple-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="section-divider" />
      {/* 3D Envelope */}
      <ContactEnvelope3D />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.025] to-transparent rounded-full" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            İletişim
          </span>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Bizimle{" "}
            <span className="gradient-text">İletişime Geçin</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
            Kurumsal çözümlerimiz hakkında bilgi almak için bize ulaşın.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <div className="bento-card p-8 md:p-10">
              <h3 className="font-[var(--font-syne)] text-xl font-bold mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-blue)]/15 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/15 flex items-center justify-center text-[var(--brand-blue)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
                Mesaj Gönderin
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--brand-blue)] transition-colors duration-300">Ad Soyad</label>
                    <div className="input-focus-ring rounded-xl">
                      <input
                        type="text"
                        placeholder="Adınız Soyadınız"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-white/[0.06] text-white placeholder-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--brand-blue)]/40 focus:bg-[var(--bg-secondary)]/80 transition-all duration-400"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--brand-blue)] transition-colors duration-300">E-posta</label>
                    <div className="input-focus-ring rounded-xl">
                      <input
                        type="email"
                        placeholder="ornek@sirket.com"
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-white/[0.06] text-white placeholder-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--brand-blue)]/40 focus:bg-[var(--bg-secondary)]/80 transition-all duration-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--brand-blue)] transition-colors duration-300">Konu</label>
                  <div className="input-focus-ring rounded-xl">
                    <select
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-white/[0.06] text-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:bg-[var(--bg-secondary)]/80 transition-all duration-400 appearance-none cursor-pointer"
                    >
                      <option value="">Konu Seçiniz</option>
                      <option value="sigorta">Sigorta Firmaları</option>
                      <option value="kurum">Kurumsal Hizmetler</option>
                      <option value="marka">Marka Çözümleri</option>
                      <option value="konut">Konut Projeleri</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--brand-blue)] transition-colors duration-300">Mesajınız</label>
                  <div className="input-focus-ring rounded-xl">
                    <textarea
                      rows={5}
                      placeholder="Mesajınızı buraya yazabilirsiniz..."
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-white/[0.06] text-white placeholder-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--brand-blue)]/40 focus:bg-[var(--bg-secondary)]/80 transition-all duration-400 resize-none"
                    />
                  </div>
                </div>
                <button type="submit" className="group relative w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold overflow-hidden magnetic-btn">
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-100" />
                  </span>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Gönder
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.label} delay={0.4 + i * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group bento-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex items-center justify-center ${item.iconColor} group-hover:scale-110 group-hover:border-[var(--brand-blue)]/30 transition-all duration-500`}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-300">{item.value}</a>
                      ) : (
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.8} direction="right">
              <div className="bento-card p-6">
                <span className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-4">Sosyal Medya</span>
                <div className="flex gap-3">
                  <a href="https://instagram.com/ephortech" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/15 flex items-center justify-center text-[var(--brand-blue)] hover:scale-110 hover:bg-[var(--brand-blue)]/10 hover:border-[var(--brand-blue)]/30 transition-all duration-500">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://youtube.com/@EphorTech" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/15 flex items-center justify-center text-[var(--brand-blue)] hover:scale-110 hover:bg-[var(--brand-blue)]/10 hover:border-[var(--brand-blue)]/30 transition-all duration-500">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://linkedin.com/company/ephortech" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/15 flex items-center justify-center text-[var(--brand-blue)] hover:scale-110 hover:bg-[var(--brand-blue)]/10 hover:border-[var(--brand-blue)]/30 transition-all duration-500">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
