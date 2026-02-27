"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    number: "01",
    title: "30 Yıllık Deneyim",
    description:
      "Sektörde 30 yılı aşkın tecrübemizle, her türlü elektronik cihaz arızasında güvenilir ve kalıcı çözümler sunuyoruz.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "02",
    title: "81 İlde Hizmet Ağı",
    description:
      "Türkiye genelinde 1.000'e yakın yetkili servis noktamızla, nerede olursanız olun aynı kalitede hizmet alırsınız.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "03",
    title: "1 Yıl Onarım Garantisi",
    description:
      "Tüm onarım hizmetlerimiz 1 yıl garanti kapsamındadır. Kalitemize güveniyoruz, siz de güvenin.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    number: "04",
    title: "Profesyonel Yazılım Altyapısı",
    description:
      "Özel geliştirdiğimiz servis yönetim yazılımımızla tüm süreçleri anlık takip eder, şeffaf raporlama sunarız.",
    icon: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
  },
  {
    number: "05",
    title: "Çağrı Merkezi Desteği",
    description:
      "Uzman çağrı merkezi ekibimizle cihaz durumunuz hakkında anlık bilgi alabilir, sürecinizi takip edebilirsiniz.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    number: "06",
    title: "Sigorta & Marka Entegrasyonu",
    description:
      "Sigorta firmaları ve markalarla tam entegrasyon. Poliçe kapsamında otomatik dosya atama ve raporlama.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
];

export default function WhyEphorTech() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Neden Biz?
          </span>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Neden{" "}
            <span className="gradient-text">EphorTech?</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Klasik teknik servis anlayışını modern çözümlere dönüştüren yeni nesil yaklaşımımızla fark yaratıyoruz.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.number} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group gradient-border p-8 rounded-2xl h-full hover:bg-[var(--bg-card-hover)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-[var(--brand-blue)]/40 tracking-widest">{f.number}</span>
                </div>

                <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
