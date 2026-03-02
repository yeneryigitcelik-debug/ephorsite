"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function Kurumlar() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue-deeper)] to-[var(--brand-blue-dark)] opacity-[0.06]" />
            <div className="absolute inset-0 bg-[var(--bg-primary)]/90" />
            <motion.div
              animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[var(--brand-blue-deeper)] to-[var(--brand-blue-dark)] opacity-[0.04] blur-[100px]"
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
                  Kurumsal Çözümler
                </motion.span>

                <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl">
                  <TextReveal>Kurumlara</TextReveal>{" "}
                  <TextReveal delay={0.2}><span className="gradient-text">Hizmetlerimiz</span></TextReveal>
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="mt-10 flex flex-wrap gap-4">
                  <Link href="/iletisim" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-deeper)] to-[var(--brand-blue-dark)]" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-2">Teklif Alın <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                  </Link>
                  <a href="tel:08503350860" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    0850 335 0860
                  </a>
                </motion.div>
              </div>

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
                    <Image src="/images/kurumlar.png" alt="Kurumsal Hizmetler" width={500} height={340} className="w-full h-auto object-cover" quality={85} />
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

        {/* Servis Hizmetleri */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                01
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold mb-6">
                Servis <span className="gradient-text">Hizmetleri</span>
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                Firmaların ofis içinde ve personellerinin kullandıkları elektronik cihazlara arıza/hasar durumunda tüm Türkiye&apos;de anlaşmalı olduğumuz 500&apos;e yakın yetkili servislerimizle garanti dahili veya garanti harici oluşan tüm teknik arızalarda ya da kullanıcı hasarlarında servis hizmeti verilir.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Hizmet Verilen Elektronik Cihazlar */}
        <section className="py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                02
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold">
                Hizmet Verilen <span className="gradient-text">Elektronik Cihazlar</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
                  </div>
                  <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mb-4">Ofis Tipi Cihazlar</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Mobil Cihazlar, Notebook, Masaüstü Bilgisayarlar, Sunucular, Monitörler, Yazıcılar, Tv, Beyaz Eşya Grubu ve Ankastre Eşyalar.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.36M5.5 4.5l1.8 6.3M11.42 15.17l5.1-3.36M18.5 4.5l-1.8 6.3M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" /></svg>
                  </div>
                  <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mb-4">Sanayi Tipi Cihazlar</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Isıtma ve Soğutma Sistemleri, Cnc Cihazları Anakartları ve Medikal Cihaz Anakartlar v.b.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Elektronik Cihaz Kampanya Hizmet Paketleri */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                03
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold">
                Elektronik Cihaz Kampanya <span className="gradient-text">Hizmet Paketleri</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              <StaggerItem>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-4">Uzatılmış Garanti Hizmet Paketi</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    Markaların müşterilerinin kullandığı tarafımızdan belirlenen yaştaki elektronik cihazlara, üretici firma tarafından verilen teknik arızalara karşı garanti hizmetinin süresi sonunda veya garanti süresi bitmiş elektronik cihazlara 1 yıl, 2 yıl ve 3 yıl olmak üzere uzatılarak teknik arızalara karşı garanti altına alınmış olur.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-4">Koruma Hizmet Paketi</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    Markaların müşterilerinin kullandığı tarafımızdan belirlenen yaştaki elektronik cihazlara, üretici firma tarafından verilen teknik arızalara karşı garanti süresini 1 yıl, 2 yıl ve 3 yıl olmak üzere uzattığınızda kullanıcı hasarlarına (kırılma, sıvı teması gibi) karşı koruma altına alınmış olur.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-4">Uzatılmış Garanti & Koruma Hizmet Paketi</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    Mobil Cihazlar, Notebook, Masaüstü Bilgisayarlar, Tv, Monitör, Klima ve Beyaz Eşya Grubu.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-radial-[at_center] from-[var(--brand-blue)]/[0.04] to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="relative gradient-border p-12 md:p-16 rounded-3xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[var(--brand-blue-deeper)] to-[var(--brand-blue-dark)] opacity-[0.06] rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold mb-6">Projeleriniz İçin{" "}<span className="gradient-text">Yanınızdayız</span></h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">Kurumsal çözümlerimiz hakkında detaylı bilgi almak ve size özel teklif için hemen iletişime geçin.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/iletisim" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-deeper)] to-[var(--brand-blue-dark)]" />
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
