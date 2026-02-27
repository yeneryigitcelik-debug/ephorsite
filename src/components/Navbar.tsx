"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Sigorta Firmaları", href: "/sigorta-firmalari" },
  { name: "Kurumlar", href: "/kurumlar" },
  { name: "Markalar", href: "/markalar" },
  { name: "Konut Projeleri", href: "/konut-projeleri" },
  { name: "Kariyer", href: "/kariyer" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Hakkımızda", href: "/hakkimizda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[var(--bg-secondary)] border-b border-white/[0.04] relative z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-[var(--text-muted)]">
            {/* Left - Contact */}
            <div className="flex items-center gap-5">
              <a href="mailto:info@ephortech.com" className="flex items-center gap-1.5 hover:text-[var(--brand-blue)] transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@ephortech.com
              </a>
              <a href="tel:08503350860" className="flex items-center gap-1.5 hover:text-[var(--brand-blue)] transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0850 335 0860
              </a>
            </div>

            {/* Right - Social + Address */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-[10px] text-[var(--text-muted)]/60">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                </svg>
                <span className="truncate max-w-[200px]">Ataşehir / İstanbul</span>
              </div>
              <div className="w-px h-4 bg-white/[0.06]" />
              <div className="flex items-center gap-2">
                <a href="https://www.instagram.com/ephortech/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-blue)] transition-colors" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.youtube.com/@EphorTech" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-blue)] transition-colors" aria-label="YouTube">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed lg:sticky top-0 left-0 right-0 z-50 ${
          scrolled
            ? "glass-card shadow-lg shadow-black/20"
            : "bg-[var(--bg-primary)]/80 backdrop-blur-sm lg:bg-transparent"
        }`}
        style={{
          transition: "background 500ms ease, box-shadow 500ms ease, backdrop-filter 500ms ease, -webkit-backdrop-filter 500ms ease",
          willChange: "background, box-shadow",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative flex items-center">
              <Image
                src="/Ephortech-Logo-v1-1536x309.png"
                alt="EphorTech"
                width={160}
                height={32}
                className="h-8 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-[13px] font-medium text-[var(--text-secondary)] hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.03] whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:08503350860"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors"
              >
                0850 335 0860
              </Link>
              <Link
                href="/iletisim"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] rounded-full hover:shadow-lg hover:shadow-[var(--brand-blue)]/20 transition-all duration-300"
              >
                İletişime Geç
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-[2px] bg-white origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-[2px] bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-[2px] bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-[var(--font-syne)] font-bold text-white hover:text-[var(--brand-blue)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] rounded-full"
                >
                  İletişime Geç
                </Link>
              </motion.div>
              {/* Mobile contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex flex-col items-center gap-3 text-sm text-[var(--text-muted)]"
              >
                <a href="tel:08503350860" className="hover:text-[var(--brand-blue)] transition-colors">0850 335 0860</a>
                <a href="mailto:info@ephortech.com" className="hover:text-[var(--brand-blue)] transition-colors">info@ephortech.com</a>
                <div className="flex gap-3 mt-2">
                  <a href="https://www.instagram.com/ephortech/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center hover:text-[var(--brand-blue)] transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/@EphorTech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center hover:text-[var(--brand-blue)] transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
