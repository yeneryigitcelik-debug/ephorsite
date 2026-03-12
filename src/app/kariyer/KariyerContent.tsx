"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";
import Breadcrumb from "@/components/Breadcrumb";

export default function KariyerContent() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
            <Breadcrumb items={[{ label: "Anasayfa", href: "/" }, { label: "Kariyer" }]} />
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Kariyer
              </span>
              <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <TextReveal>Ekibimize</TextReveal>{" "}
                <TextReveal delay={0.2}><span className="gradient-text">Katilin</span></TextReveal>
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
                  EphorTech&apos;te, teknolojiye olan tutkumuzu ve yenilikci bakis acimizi paylasacak yetenekli bireyleri ariyoruz. Sektorun oncusu olan ekibimize katilarak, modern teknoloji cozumleri sunma misyonumuza katkida bulunabilir, kariyerinizi bir adim oteye tasiyabilirsiniz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Ilgi alanlariniza ve yeteneklerinize uygun pozisyonlarda siz de bizimle birlikte buyuyebilir ve gelisebilirsiniz. Yaratici, dinamik ve ileri goruslu bir ekibin parcasi olarak, teknoloji dunyasinda iz birakma firsatini yakalayin.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  EphorTech, herkesin esit firsatlara sahip oldugu bir isyeri sunar ve yeteneklerinizi en iyi sekilde degerlendirmenizi saglar. Bizimle calismak isterseniz, basvurularinizi bekliyoruz!
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
                  <span className="font-[var(--font-syne)] text-lg font-bold text-white">Teknoloji tutkumuzu paylasin</span>
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
                  Basvurunuzu <span className="gradient-text">Gonderin</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-xl mx-auto">
                  Ozgecmisinizi bize gondererek kariyer firsatlarindan haberdar olun.
                </p>

                {/* File upload area */}
                <div className="max-w-md mx-auto mb-4">
                  <label className="group flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-dashed border-white/10 hover:border-[var(--brand-blue)]/30 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold mb-1">Ozgecmis Dosyanizi Gonderin</p>
                      <p className="text-sm text-[var(--text-muted)]">PDF, DOC veya DOCX dosyasi yukleyin</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  </label>
                </div>

                {/* Show selected file name */}
                {fileName && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 flex items-center justify-center gap-2 text-sm text-[var(--brand-blue-light)]"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
                    {fileName}
                  </motion.div>
                )}

                <p className="text-xs text-[var(--text-muted)] mb-8">
                  Dosyanizi e-posta ekine eklemeyi unutmayin.
                </p>

                <a
                  href={`mailto:info@ephortech.com?subject=${encodeURIComponent("Kariyer Basvurusu" + (fileName ? ` - ${fileName}` : ""))}&body=${encodeURIComponent("Merhaba,\n\nKariyer basvurumu gonderiyorum. Ozgecmisimi ekte bulabilirsiniz.\n\nSaygilarimla")}`}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Basvuru Gonder
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
