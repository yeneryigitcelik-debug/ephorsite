"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";

export default function SigortaFirmalari() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue-dark)] to-[var(--brand-blue)] opacity-[0.06]" />
            <div className="absolute inset-0 bg-[var(--bg-primary)]/90" />
            <motion.div
              animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[var(--brand-blue-dark)] to-[var(--brand-blue)] opacity-[0.04] blur-[100px]"
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
                  Sigorta Çözümleri
                </motion.span>

                <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                  <TextReveal>Sigorta Firmalarına</TextReveal>{" "}
                  <TextReveal delay={0.2}><span className="gradient-text">Hizmetlerimiz</span></TextReveal>
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="mt-10 flex flex-wrap gap-4">
                  <Link href="/iletisim" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)]" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                    <Image src="/images/sigorta.png" alt="Sigorta Hizmetleri" width={500} height={340} className="w-full h-auto object-cover" quality={85} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 to-transparent" />
                  </div>
                </motion.div>
                {/* Floating accent */}
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

        {/* Çağrı Merkezi Hizmetleri */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection direction="left">
                <div className="sticky top-32">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                    01
                  </span>
                  <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold mb-6">
                    Çağrı Merkezi <span className="gradient-text">Hizmetleri</span>
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                    Sigorta firmalarının konut poliçelerinde ve ticari poliçelerinde bulunan elektronik cihaz teminatları kapsamında, sigortalı müşteriler arıza/hasar durumlarında sigorta firmalarına hasar ihbarında bulunabilirler. Dosya atamaları yapılan ve tarafımızca hizmet verilen sigorta firmalarının müşterileri arızalı/hasarlı elektronik cihazlarının servis hizmeti sürecinde cihaz durumları ile ilgili çağrı merkezimizi arayarak bilgi alabilirler.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="gradient-border p-8 rounded-2xl">
                  <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mb-4">Arıza Ve Hasar Servis Çağrı Merkezi Hizmetleri</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Sigorta Firmalarının Konut ve Ticari poliçelerinde bulunan Elektronik Cihaz Teminatları Kapsamında Tüm Türkiye&apos;de 81 il de arıza/hasar dahilinde servis hizmetleri 1 yıl garantili olarak verilir.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Konut & Ticari Poliçe Teminatları */}
        <section className="py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                02
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold">
                Konut Poliçesi & <span className="gradient-text">Ticari Poliçe Teminatları</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>
                  </div>
                  <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mb-4">Konut Poliçesi Teminatına Bağlı Elektronik Cihazlar</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Mobil Cihazlar, Tv, Beyaz Eşya Grubu, Ankastre Eşyalar, Klima, Kombi ve Küçük Elektrikli Ev Aletleri.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                  </div>
                  <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mb-4">Ticari Poliçe Teminatına Bağlı Elektronik Cihazlar</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Mobil Cihazlar, Tv, Beyaz Eşya Grubu, Ankastre Eşyalar, Klima, Kombi, Küçük Elektrikli Ev Aletleri, Notebook, Masaüstü Bilgisayarlar, Sunucular, Monitörler, Yazıcılar, Cnc Cihazları Anakartları ve Medikal Cihaz Anakartlar.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Servis Yönetim Hizmetleri */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection direction="left">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                  03
                </span>
                <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold mb-6">
                  Servis Yönetim <span className="gradient-text">Hizmetleri</span>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  Sigorta firmalarının müşterilerinin elektronik cihazlarında arıza/hasar durumunda EphorTech Teknoloji Servisi olarak anlaşmalı olduğumuz 1.000&apos;e yakın yetkili servislerimiz, EphorTech Teknoloji Servis merkezimizde ki teknik ekibimizle sahip olduğumuz özel servis yazılımımız ile profesyonel yönetimi yapılır.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                  04
                </span>
                <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold mb-6">
                  Raporlama <span className="gradient-text">Hizmetleri</span>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  Sigorta firmalarına verilen tüm hizmetlerin tüm süreçleri anlık olarak sigorta firma yöneticilerine raporlanır. Yöneticilerin isteği dahilinde özel raporlar uzman ekibimiz tarafından yazılımımızda oluşturularak, süreklilik içerisinde sistemimiz üzerinden otomatik iletilmesi sağlanır. EphorTech Teknoloji Servis yazılımına sigorta sektörünün kullandığı tüm yazılımlara entegre olabilecek şekilde altyapı yatırımı yapılmıştır.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-radial-[at_center] from-[var(--brand-blue)]/[0.04] to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="relative gradient-border p-12 md:p-16 rounded-3xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[var(--brand-blue-dark)] to-[var(--brand-blue)] opacity-[0.06] rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold mb-6">
                    Projeleriniz İçin{" "}<span className="gradient-text">Yanınızdayız</span>
                  </h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">Sigorta çözümlerimiz hakkında detaylı bilgi almak ve size özel teklif için hemen iletişime geçin.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/iletisim" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)]" />
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
