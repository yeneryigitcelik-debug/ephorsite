"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const posts = [
  {
    slug: "sigorta-kapsaminda-cihaz-onarim-sureci",
    title: "Sigorta Kapsamında Cihaz Onarım Süreci Nasıl İşler?",
    excerpt:
      "Sigorta poliçeniz kapsamında cihazınız arızalandığında yapmanız gereken adımları ve sürecin nasıl işlediğini detaylı olarak anlattık.",
    category: "Sigorta",
    date: "20 Şub 2026",
    readTime: "5 dk",
  },
  {
    slug: "beyaz-esya-bakim-rehberi",
    title: "Beyaz Eşyalarınızın Ömrünü Uzatmanın 10 Yolu",
    excerpt:
      "Düzenli bakım ve doğru kullanım ile beyaz eşyalarınızın ömrünü yıllar boyunca uzatabilirsiniz. İşte uzmanlarımızdan ipuçları.",
    category: "Bakım Rehberi",
    date: "15 Şub 2026",
    readTime: "4 dk",
  },
  {
    slug: "kurumsal-cihaz-yonetimi",
    title: "Kurumsal Firmalar İçin Cihaz Yönetimi Çözümleri",
    excerpt:
      "Büyük ölçekli firmalarda cihaz parkının yönetimi, bakım planlaması ve maliyet optimizasyonu için profesyonel öneriler.",
    category: "Kurumsal",
    date: "8 Şub 2026",
    readTime: "6 dk",
  },
];

const categoryColors: Record<string, string> = {
  Sigorta: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/20",
  "Bakım Rehberi": "from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/20",
  Kurumsal: "from-violet-500/20 to-violet-600/20 text-violet-400 border-violet-500/20",
};

export default function BlogPreview() {
  return (
    <section id="blog" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
              Blog
            </span>
            <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Güncel{" "}
              <span className="gradient-text">Yazılar</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:text-[var(--brand-blue-light)] transition-colors group"
            >
              Tüm Yazılar
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group h-full gradient-border p-4 sm:p-6 md:p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 flex flex-col"
                >
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border ${categoryColors[post.category] || "text-[var(--brand-blue)]"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[var(--font-syne)] text-lg font-bold text-white group-hover:text-[var(--brand-blue-light)] transition-colors duration-300 mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
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
  );
}
