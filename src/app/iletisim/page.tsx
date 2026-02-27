"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";

const contactInfo = [
  {
    label: "Merkez Ofis",
    value: "Barbaros Mh. Mor Sümbül Sk. No:5/A Deluxia Palace K:17 / 474 ATAŞEHİR / İSTANBUL",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Teknik Servis",
    value: "Cihangir Mah. E5 Yan Yol Üzeri Türksan Center A Blok No: 291 2L Avcılar / İstanbul 34310",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "E-Posta",
    value: "info@ephortech.com",
    href: "mailto:info@ephortech.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Müşteri Hizmetleri",
    value: "0850 335 0860",
    href: "tel:08503350860",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Çalışma Saatleri",
    value: "Hafta içi: 08:30 – 22:00 | Cumartesi: 10:00 – 15:00",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Iletisim() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                İletişim
              </span>
              <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <TextReveal>İletişim</TextReveal>{" "}
                <TextReveal delay={0.2}>
                  <span className="gradient-text">Bilgilerimiz</span>
                </TextReveal>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 max-w-xl text-xl text-[var(--text-secondary)]"
              >
                Size en uygun çözümü sunmak için hazırız.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <AnimatedSection delay={0.1} className="lg:col-span-3 gradient-border p-8 md:p-10 rounded-2xl">
                <h2 className="font-[var(--font-syne)] text-2xl font-bold mb-8">Mesaj Gönderin</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">İsim</label>
                      <input type="text" placeholder="Adınız" className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-white/5 text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:ring-1 focus:ring-[var(--brand-blue)]/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                      <input type="email" placeholder="ornek@sirket.com" className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-white/5 text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:ring-1 focus:ring-[var(--brand-blue)]/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Mesajınız</label>
                    <textarea rows={6} placeholder="Mesajınızı buraya yazabilirsiniz..." className="w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-white/5 text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:ring-1 focus:ring-[var(--brand-blue)]/20 transition-all resize-none" />
                  </div>
                  <button type="submit" className="group relative w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold overflow-hidden magnetic-btn">
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-105" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Gönder
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </form>
              </AnimatedSection>

              {/* Info */}
              <div className="lg:col-span-2 space-y-4">
                {contactInfo.map((item, i) => (
                  <AnimatedSection key={item.label} delay={0.3 + i * 0.1} direction="right">
                    <div className="group gradient-border p-6 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <span className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.label}</span>
                          {item.href ? (
                            <a href={item.href} className="text-[var(--text-secondary)] hover:text-white transition-colors">{item.value}</a>
                          ) : (
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Ofis Görselleri */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatedSection delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image src="/images/cagri-merkezi.png" alt="Çağrı Merkezi" width={400} height={250} className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" quality={85} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent rounded-2xl" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-semibold text-white/90">Çağrı Merkezi</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image src="/images/servis.png" alt="Teknik Servis" width={400} height={250} className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" quality={85} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent rounded-2xl" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-semibold text-white/90">Teknik Servis</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image src="/images/slider-devices.png" alt="Cihazlar" width={400} height={250} className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" quality={85} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent rounded-2xl" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-semibold text-white/90">Cihazlar</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
