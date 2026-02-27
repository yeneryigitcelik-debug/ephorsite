"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function Markalar() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-[0.06]" />
            <div className="absolute inset-0 bg-[var(--bg-primary)]/90" />
            <motion.div
              animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-[0.04] blur-[100px]"
            />
          </div>
          <div className="absolute inset-0 z-[1] opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(107,159,202,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(107,159,202,0.15) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-40 pb-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors mb-10 group">
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Anasayfa
                  </Link>
                </motion.div>

                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-8">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
                  Markalar İçin
                </motion.span>

                <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                  <TextReveal>Markalara</TextReveal>{" "}
                  <TextReveal delay={0.2}><span className="gradient-text">Hizmetlerimiz</span></TextReveal>
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="mt-10 flex flex-wrap gap-4">
                  <Link href="/iletisim" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]" />
                    <span className="relative z-10 flex items-center gap-2">Teklif Alın <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                  </Link>
                  <a href="tel:08503350860" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    0850 335 0860
                  </a>
                </motion.div>
              </div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block relative"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[var(--brand-blue)]/10 border border-white/[0.06]">
                    <Image src="/images/markalar.png" alt="Marka Hizmetleri" width={500} height={340} className="w-full h-auto object-cover" quality={85} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 to-transparent" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/20 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/10 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-3 -right-3 w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand-blue)]/15 to-transparent border border-[var(--brand-blue)]/10 backdrop-blur-sm"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hizmet Paketleri */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold">
                Elektronik Cihaz Kampanya <span className="gradient-text">Hizmet Paketleri</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              <StaggerItem>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                    🛡️
                  </div>
                  <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-4">Uzatılmış Garanti Hizmet Paketi</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    Markaların müşterilerinin kullandığı tarafımızdan belirlenen yaştaki elektronik cihazlara, üretici firma tarafından verilen teknik arızalara karşı garanti hizmetinin süresi sonunda veya garanti süresi bitmiş elektronik cihazlara 1 yıl, 2 yıl ve 3 yıl olmak üzere uzatılarak teknik arızalara karşı garanti altına alınmış olur.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                    🔒
                  </div>
                  <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-4">Koruma Hizmet Paketi</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    Markaların müşterilerinin kullandığı tarafımızdan belirlenen yaştaki elektronik cihazlara, üretici firma tarafından verilen teknik arızalara karşı garanti süresini 1 yıl, 2 yıl ve 3 yıl olmak üzere uzattığınızda kullanıcı hasarlarına (kırılma, sıvı teması gibi) karşı koruma altına alınmış olur.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                    ✨
                  </div>
                  <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-4">Uzatılmış Garanti & Koruma Hizmet Paketi</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    Mobil Cihazlar, Notebook, Masaüstü Bilgisayarlar, Tv, Monitör, Klima ve Beyaz Eşya Grubu.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <AnimatedSection delay={0.5} className="mt-16">
              <div className="gradient-border p-8 md:p-10 rounded-2xl text-center">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
                  Markaların müşterilerine kullandıkları elektronik cihazlarla ilgili hizmet paketlerimizi yapacakları kampanyalarla hediye ederek satış cirolarını, yeni müşteri sayılarını ve müşteri sadakatlerini arttırabilirler.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-radial-[at_center] from-[var(--brand-blue)]/[0.04] to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="relative gradient-border p-12 md:p-16 rounded-3xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-[0.06] rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold mb-6">Projeleriniz İçin{" "}<span className="gradient-text">Yanınızdayız</span></h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">Marka çözümlerimiz hakkında detaylı bilgi almak ve size özel teklif için hemen iletişime geçin.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/iletisim" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]" />
                      <span className="relative z-10 flex items-center gap-2">İletişime Geçin <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                    </Link>
                    <a href="tel:08503350860" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
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
