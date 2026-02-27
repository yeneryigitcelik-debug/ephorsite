"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";

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
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              <AnimatedSection>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  EphorTech&apos;te, teknolojiye olan tutkumuzu ve yenilikçi bakış açımızı paylaşacak yetenekli bireyleri arıyoruz. Sektörün öncüsü olan ekibimize katılarak, modern teknoloji çözümleri sunma misyonumuza katkıda bulunabilir, kariyerinizi bir adım öteye taşıyabilirsiniz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  İlgi alanlarınıza ve yeteneklerinize uygun pozisyonlarda siz de bizimle birlikte büyüyebilir ve gelişebilirsiniz. Yaratıcı, dinamik ve ileri görüşlü bir ekibin parçası olarak, teknoloji dünyasında iz bırakma fırsatını yakalayın.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  EphorTech, herkesin eşit fırsatlara sahip olduğu bir işyeri sunar ve yeteneklerinizi en iyi şekilde değerlendirmenizi sağlar. Bizimle çalışmak isterseniz, başvurularınızı bekliyoruz!
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Visual */}
        <section className="pb-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden group">
                <Image src="/images/servis.png" alt="EphorTech Ekibi" width={800} height={350} className="w-full h-56 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" quality={85} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent rounded-2xl" />
                <div className="absolute bottom-5 left-6">
                  <span className="font-[var(--font-syne)] text-lg font-bold text-white">Teknoloji tutkumuzu paylaşın</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CV Upload CTA */}
        <section className="py-32 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="gradient-border p-12 md:p-16 rounded-2xl">
                <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold mb-6">
                  Başvurunuzu <span className="gradient-text">Gönderin</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-xl mx-auto">
                  Özgeçmişinizi bize göndererek kariyer fırsatlarından haberdar olun.
                </p>

                {/* File upload area */}
                <div className="max-w-md mx-auto mb-8">
                  <label className="group flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-dashed border-white/10 hover:border-[var(--brand-blue)]/30 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold mb-1">Özgeçmiş Dosyanızı Gönderin</p>
                      <p className="text-sm text-[var(--text-muted)]">PDF, DOC veya DOCX dosyası yükleyin</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </label>
                </div>

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
