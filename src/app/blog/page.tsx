"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const allPosts = [
  {
    slug: "sigorta-kapsaminda-cihaz-onarim-sureci",
    title: "Sigorta Kapsamında Cihaz Onarım Süreci Nasıl İşler?",
    excerpt:
      "Sigorta poliçeniz kapsamında cihazınız arızalandığında yapmanız gereken adımları ve sürecin nasıl işlediğini detaylı olarak anlattık.",
    category: "Sigorta",
    date: "20 Şub 2026",
    readTime: "5 dk",
    featured: true,
  },
  {
    slug: "beyaz-esya-bakim-rehberi",
    title: "Beyaz Eşyalarınızın Ömrünü Uzatmanın 10 Yolu",
    excerpt:
      "Düzenli bakım ve doğru kullanım ile beyaz eşyalarınızın ömrünü yıllar boyunca uzatabilirsiniz. İşte uzmanlarımızdan ipuçları.",
    category: "Bakım Rehberi",
    date: "15 Şub 2026",
    readTime: "4 dk",
    featured: false,
  },
  {
    slug: "kurumsal-cihaz-yonetimi",
    title: "Kurumsal Firmalar İçin Cihaz Yönetimi Çözümleri",
    excerpt:
      "Büyük ölçekli firmalarda cihaz parkının yönetimi, bakım planlaması ve maliyet optimizasyonu için profesyonel öneriler.",
    category: "Kurumsal",
    date: "8 Şub 2026",
    readTime: "6 dk",
    featured: false,
  },
  {
    slug: "garanti-sureci-rehberi",
    title: "Garanti Süreci Hakkında Bilmeniz Gereken Her Şey",
    excerpt:
      "EphorTech'in 1 yıllık onarım garantisi kapsamında haklarınız, süreç takibi ve garanti sonrası destek hakkında bilgiler.",
    category: "Rehber",
    date: "1 Şub 2026",
    readTime: "3 dk",
    featured: false,
  },
  {
    slug: "konut-projesi-teknik-servis",
    title: "Konut Projelerinde Teknik Servis Hizmetlerinin Önemi",
    excerpt:
      "Yeni konut projelerinde anahtar teslim cihaz kurulumundan kampanya paketlerine kadar teknik servis hizmetlerinin rolü.",
    category: "Konut Projeleri",
    date: "25 Oca 2026",
    readTime: "5 dk",
    featured: false,
  },
  {
    slug: "cagri-merkezi-hizmetleri",
    title: "7/24 Çağrı Merkezi ile Müşteri Deneyimini İyileştirme",
    excerpt:
      "Profesyonel çağrı merkezi desteğinin müşteri memnuniyetine etkisi ve EphorTech'in çağrı merkezi altyapısı hakkında.",
    category: "Hizmetler",
    date: "18 Oca 2026",
    readTime: "4 dk",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Sigorta: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/20",
  "Bakım Rehberi": "from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/20",
  Kurumsal: "from-violet-500/20 to-violet-600/20 text-violet-400 border-violet-500/20",
  Rehber: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/20",
  "Konut Projeleri": "from-rose-500/20 to-rose-600/20 text-rose-400 border-rose-500/20",
  Hizmetler: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/20",
};

export default function BlogPage() {
  const featured = allPosts.find((p) => p.featured);
  const rest = allPosts.filter((p) => !p.featured);

  return (
    <>
      <CursorGlow />
      <Navbar />
      <WhatsAppButton />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
                Blog
              </span>
              <h1 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Güncel{" "}
                <span className="gradient-text">Blog Yazıları</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Teknik servis, sigorta süreçleri ve cihaz bakımı hakkında faydalı içerikler.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="relative pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <AnimatedSection>
                <Link href={`/blog/${featured.slug}`}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)] hover:border-[var(--brand-blue)]/20 transition-all duration-500 p-8 md:p-12"
                  >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.04] to-transparent rounded-full" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--brand-blue)]/20 text-[var(--brand-blue-light)] border border-[var(--brand-blue)]/20">
                          Öne Çıkan
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border ${categoryColors[featured.category]}`}>
                          {featured.category}
                        </span>
                      </div>
                      <h2 className="font-[var(--font-syne)] text-2xl md:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-[var(--brand-blue-light)] transition-colors duration-300 mb-4">
                        {featured.title}
                      </h2>
                      <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span>{featured.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                        <span>{featured.readTime} okuma</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Post Grid */}
        <section className="relative pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`}>
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="group h-full gradient-border p-6 md:p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-5">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border ${categoryColors[post.category] || "text-[var(--brand-blue)]"}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">{post.readTime}</span>
                      </div>
                      <h3 className="font-[var(--font-syne)] text-lg font-bold text-white group-hover:text-[var(--brand-blue-light)] transition-colors duration-300 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-blue)] group-hover:gap-2 transition-all duration-300">
                          Devamını Oku
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </motion.article>
                  </Link>
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
