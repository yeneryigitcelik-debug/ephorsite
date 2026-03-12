"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";
import Breadcrumb from "@/components/Breadcrumb";

const timelineItems = [
  { year: "1994", title: "Kurulus", description: "Teknik servis sektorunde ilk adimlarimizi attik." },
  { year: "2010", title: "Kurumsal Buyume", description: "Kurumsal yapilanma ile buyuk olcekli projelere imza attik." },
  { year: "2018", title: "EphorTech Markasi", description: "Yeni nesil teknoloji servis markamiz EphorTech dogdu." },
  { year: "2023", title: "81 Il Kapsama", description: "Turkiye genelinde 81 ilde hizmet agimizi tamamladik." },
  { year: "2025", title: "Dijital Donusum", description: "Dijital altyapi ve otomasyon sistemleriyle gelecege haziriz." },
];

export default function HakkimizdaContent() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
            <Breadcrumb items={[{ label: "Anasayfa", href: "/" }, { label: "Hakkimizda" }]} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Hakkimizda
              </span>
              <h1 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
                <TextReveal>EphorTech</TextReveal>{" "}
                <TextReveal delay={0.2}>
                  <span className="gradient-text">Hakkimizda</span>
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
                  EphorTech, klasik teknik servis anlayisini modern teknoloji cozumlerine donusturen yenilikci bir teknoloji servis saglayicisidir. 30 yillik deneyimimiz ve oncu ekibimizle, Turkiye&apos;nin dort bir yaninda genis operasyon gucumuzle kurumlara ve markalara teknoloji servisleri sunuyoruz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Elektronik cihazlarinizda yuksek standartlarda hizmet vererek, onarimlarimizda 1 yil garanti sunarak guveninizi kazaniyoruz. Kurumsal musterilerimize deger katan bu garantili hizmetimizle, kaliteyi on planda tutuyoruz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Turkiye&apos;nin ilk teknoloji servis saglayicilarindan biri olmanin gururunu yasiyor ve hizmet cesitliligimizi ulke genelinde sunarak, musterilerimize farkli ve kaliteli hizmet deneyimleri yasatiyoruz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.45}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Teknoloji ve yeniliklerin surekli degistigi bu sektorde, sorunlarinizi cozen bir ekip olarak hizmet kalitemizi ve musteri memnuniyetini en yuksek seviyede tutarak siz kurumsal musterilerimiz icin surekli olarak gelismeye devam edecegiz.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold">
                Misyon, Vizyon & <span className="gradient-text">Degerlerimiz</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Misyonumuz",
                  desc: "Teknoloji servis sektorunde en yuksek standartlarda, guvenilir ve hizli cozumler sunarak kurumsal musterilerimizin is sureclerini kesintisiz desteklemek.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                },
                {
                  title: "Vizyonumuz",
                  desc: "Turkiye'nin en buyuk ve en guvenilir teknoloji servis agiyla, sektorde dijital donusumun oncu markasi olmak.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Degerlerimiz",
                  desc: "Guvenilirlik, musteri odaklilik, yenilikcilik, seffaflik ve surekli gelisim temel degerlerimizi olusturmaktadir.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
              ].map((card, i) => (
                <AnimatedSection key={card.title} delay={i * 0.15}>
                  <div className="gradient-border p-8 rounded-2xl h-full hover:bg-[var(--bg-card-hover)] transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/15 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] mb-6">
                      {card.icon}
                    </div>
                    <h3 className="font-[var(--font-syne)] text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{card.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
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
                    Modern teknoloji ile <span className="gradient-text">guvenilir servis</span> bir arada.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Tarihce
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold">
                Yolculugumuz
              </h2>
            </AnimatedSection>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-blue)]/30 via-[var(--brand-blue)]/15 to-transparent md:-translate-x-px" />

              <div className="space-y-12">
                {timelineItems.map((item, i) => (
                  <AnimatedSection key={item.year} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
                    <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      {/* Dot on line */}
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--brand-blue)] shadow-lg shadow-[var(--brand-blue)]/30 -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10" />

                      {/* Card */}
                      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                        <div className="gradient-border p-6 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300">
                          <span className="font-[var(--font-syne)] text-2xl font-extrabold gradient-text">{item.year}</span>
                          <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mt-2 mb-2">{item.title}</h3>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: "30+", label: "Yillik Deneyim" },
                { value: "81", label: "Ilde Hizmet" },
                { value: "500+", label: "Yetkili Servis" },
                { value: "1 Yil", label: "Garanti" },
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
