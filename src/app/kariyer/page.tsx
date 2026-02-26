"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem, TextReveal } from "@/components/AnimatedSection";

const benefits = [
  { title: "Kariyer Gelişimi", description: "Sürekli eğitim ve gelişim fırsatları.", icon: "📈" },
  { title: "Takım Ruhu", description: "Destekleyici ve işbirlikçi çalışma ortamı.", icon: "🤝" },
  { title: "Teknoloji", description: "En güncel teknolojilerle çalışma imkanı.", icon: "💻" },
  { title: "Esnek Çalışma", description: "Modern ve esnek çalışma koşulları.", icon: "🏡" },
];

export default function Kariyer() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Kariyer
              </span>
              <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <TextReveal>Ekibimize</TextReveal>{" "}
                <TextReveal delay={0.2}><span className="gradient-text">Katılın</span></TextReveal>
              </h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 max-w-2xl text-xl text-[var(--text-secondary)]">
                Teknoloji tutkusuyla büyüyen ekibimizde yerinizi alın.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold">
                Neden <span className="gradient-text">ePhortech?</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {benefits.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 text-center h-full">
                    <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{b.icon}</span>
                    <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-3">{b.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Open positions */}
        <section className="py-32 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold">Açık Pozisyonlar</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="gradient-border p-12 rounded-2xl text-center">
                <p className="text-[var(--text-secondary)] text-lg mb-6">
                  Şu anda açık pozisyonlarımız için özgeçmişinizi bize gönderebilirsiniz.
                </p>
                <a
                  href="mailto:info@ephortech.com?subject=Kariyer Başvurusu"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Başvuru Gönder
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
