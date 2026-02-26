"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem, TextReveal } from "@/components/AnimatedSection";

const timeline = [
  { year: "1994", title: "Kuruluş", description: "Teknoloji servis sektöründe ilk adımlarımızı attık." },
  { year: "2005", title: "Büyüme", description: "Kurumsal müşteri portföyümüzü genişlettik." },
  { year: "2015", title: "Dijital Dönüşüm", description: "Modern servis altyapımızı kurduk." },
  { year: "2020", title: "81 İle Ulaşım", description: "Türkiye genelinde tam kapsama alanına ulaştık." },
  { year: "2024", title: "Yeni Nesil", description: "ePhortech markasıyla yeni nesil teknoloji servisi." },
];

const values = [
  { title: "Kalite", description: "Her hizmetimizde en yüksek kalite standartlarını uyguluyoruz.", icon: "💎" },
  { title: "Güvenilirlik", description: "30 yıllık deneyimimizle sektörde güven inşa ettik.", icon: "🤝" },
  { title: "İnovasyon", description: "Teknolojiyi takip ederek sürekli kendimizi geliştiriyoruz.", icon: "🚀" },
  { title: "Müşteri Odaklılık", description: "Her çözümümüzü müşteri ihtiyaçlarına göre şekillendiriyoruz.", icon: "🎯" },
];

export default function Hakkimizda() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Hakkımızda
              </span>
              <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
                <TextReveal>30 Yılı Aşkın</TextReveal>{" "}
                <TextReveal delay={0.2}>
                  <span className="gradient-text">Deneyim</span>
                </TextReveal>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 max-w-2xl text-xl text-[var(--text-secondary)] leading-relaxed"
              >
                Türkiye&apos;nin öncü teknoloji servis sağlayıcısı olarak, klasik teknik
                servis anlayışını modern çözümlerle yeniden tanımlıyoruz.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold mb-6">
                  Hikayemiz
                </h2>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    EphorTech, teknoloji servis sektöründe 30 yılı aşkın deneyimiyle
                    Türkiye&apos;nin lider kuruluşlarından biridir.
                  </p>
                  <p>
                    Kurulduğumuz günden bu yana, teknik servis anlayışını sürekli
                    geliştirerek modern çözümlere dönüştürme vizyonuyla hareket ediyoruz.
                    Bugün 81 ilde operasyonel kapasitemizle hem kurumsal müşterilere
                    hem de bireylere hizmet veriyoruz.
                  </p>
                  <p>
                    Tüm onarımlarımıza 1 yıl garanti sunarak, müşterilerimize güven
                    vermeye devam ediyoruz. Farklı ve kaliteli hizmet deneyimi sunma
                    taahhüdümüz, bizi sektörde ayıran en önemli özelliğimizdir.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)] border border-white/5 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/servis.png"
                      alt="ePhortech Servis"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <Image
                        src="/logo-white.png"
                        alt="ePhortech"
                        width={160}
                        height={32}
                        className="h-8 w-auto mb-2"
                      />
                      <p className="text-[var(--text-muted)] text-sm italic">
                        &ldquo;Yeni nesil teknoloji servisi&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--brand-blue-dark)] to-[var(--brand-blue)] flex items-center justify-center shadow-xl shadow-[var(--brand-blue)]/20">
                    <span className="font-[var(--font-syne)] text-2xl font-extrabold text-white">30+</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-20">
              <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold">
                Yolculuğumuz
              </h2>
            </AnimatedSection>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--brand-blue)]/20 to-transparent hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <AnimatedSection
                    key={item.year}
                    delay={i * 0.15}
                    direction={i % 2 === 0 ? "left" : "right"}
                  >
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <span className="font-[var(--font-syne)] text-3xl font-extrabold gradient-text">{item.year}</span>
                        <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mt-2">{item.title}</h3>
                        <p className="text-[var(--text-secondary)] mt-2">{item.description}</p>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-[var(--brand-blue)] border-4 border-[var(--bg-secondary)] shadow-lg shadow-[var(--brand-blue)]/30 flex-shrink-0 z-10" />
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[var(--font-syne)] text-3xl md:text-5xl font-extrabold">
                Değerlerimiz
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="group gradient-border p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 text-center h-full">
                    <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{v.icon}</span>
                    <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-3">{v.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
