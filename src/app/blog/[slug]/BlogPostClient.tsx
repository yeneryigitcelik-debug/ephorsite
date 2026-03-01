"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { BlogPost } from "@/lib/blog-data";

const categoryColors: Record<string, string> = {
  Sigorta: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/20",
  "Bakım Rehberi": "from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/20",
  Kurumsal: "from-violet-500/20 to-violet-600/20 text-violet-400 border-violet-500/20",
  Rehber: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/20",
  "Konut Projeleri": "from-rose-500/20 to-rose-600/20 text-rose-400 border-rose-500/20",
  Hizmetler: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/20",
};

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <WhatsAppButton />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors mb-8 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Tüm Yazılar
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border ${categoryColors[post.category] || ""}`}>
                  {post.category}
                </span>
                <span className="text-sm text-[var(--text-muted)]">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                <span className="text-sm text-[var(--text-muted)]">{post.readTime} okuma</span>
              </div>

              <h1 className="font-[var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {post.title}
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="relative pb-20 sm:pb-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.2}>
              <article className="prose prose-invert prose-lg max-w-none">
                {post.content.map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-[var(--font-syne)] text-xl sm:text-2xl font-bold text-white mt-10 sm:mt-12 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("**")) {
                    const parts = paragraph.match(/^\*\*(.+?)\*\*(.*)$/);
                    if (parts) {
                      return (
                        <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                          <strong className="text-white font-semibold">{parts[1]}</strong>
                          {parts[2]}
                        </p>
                      );
                    }
                  }
                  return (
                    <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </article>
            </AnimatedSection>

            {/* Bottom CTA */}
            <AnimatedSection delay={0.3}>
              <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 rounded-3xl border border-[var(--brand-blue)]/15 bg-gradient-to-br from-[var(--brand-blue)]/[0.04] to-transparent">
                <h3 className="font-[var(--font-syne)] text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                  Daha fazla bilgi almak ister misiniz?
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-6">
                  EphorTech uzman ekibi sorularınızı yanıtlamak için hazır.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] rounded-full hover:shadow-lg hover:shadow-[var(--brand-blue)]/20 transition-all duration-300"
                  >
                    İletişime Geç
                  </Link>
                  <a
                    href="tel:08503350860"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--brand-blue)] border border-[var(--brand-blue)]/20 rounded-full hover:bg-[var(--brand-blue)]/10 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    0850 335 0860
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Back link */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:text-[var(--brand-blue-light)] transition-colors group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Tüm Yazılara Dön
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
