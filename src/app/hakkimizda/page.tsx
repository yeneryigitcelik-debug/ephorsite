"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";

export default function Hakkimizda() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Hakkımızda
              </span>
              <h1 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
                <TextReveal>EphorTech</TextReveal>{" "}
                <TextReveal delay={0.2}>
                  <span className="gradient-text">Hakkımızda</span>
                </TextReveal>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <AnimatedSection>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  EphorTech, klasik teknik servis anlayışını modern teknoloji çözümlerine dönüştüren yenilikçi bir teknoloji servis sağlayıcısıdır. 30 yıllık deneyimimiz ve öncü ekibimizle, Türkiye&apos;nin dört bir yanında geniş operasyon gücümüzle kurumlara ve markalara teknoloji servisleri sunuyoruz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Elektronik cihazlarınızda yüksek standartlarda hizmet vererek, onarımlarımızda 1 yıl garanti sunarak güveninizi kazanıyoruz. Kurumsal müşterilerimize değer katan bu garantili hizmetimizle, kaliteyi ön planda tutuyoruz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Türkiye&apos;nin ilk teknoloji servis sağlayıcılarından biri olmanın gururunu yaşıyor ve hizmet çeşitliliğimizi ülke genelinde sunarak, müşterilerimize farklı ve kaliteli hizmet deneyimleri yaşatıyoruz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.45}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Teknoloji ve yeniliklerin sürekli değiştiği bu sektörde, sorunlarınızı çözen bir ekip olarak hizmet kalitemizi ve müşteri memnuniyetini en yüksek seviyede tutarak siz kurumsal müşterilerimiz için sürekli olarak gelişmeye devam edeceğiz.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden">
                <Image src="/images/slider-devices.png" alt="EphorTech Cihazlar" width={1200} height={500} className="w-full h-[200px] sm:h-[250px] md:h-[400px] object-cover" quality={85} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <p className="font-[var(--font-syne)] text-2xl md:text-3xl font-bold text-white max-w-2xl">
                    Modern teknoloji ile <span className="gradient-text">güvenilir servis</span> bir arada.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: "30+", label: "Yıllık Deneyim" },
                { value: "81", label: "İlde Hizmet" },
                { value: "500+", label: "Yetkili Servis" },
                { value: "1 Yıl", label: "Garanti" },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.12} className="text-center">
                  <span className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text">{stat.value}</span>
                  <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mt-2 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
