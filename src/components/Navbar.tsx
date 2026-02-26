"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Hizmetler", href: "/#services" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Kariyer", href: "/kariyer" },
  { name: "İletişim", href: "/iletisim" },
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
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? "glass-card shadow-lg shadow-black/20"
            : "bg-transparent"
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
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.03]"
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
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-[var(--font-syne)] font-bold text-white hover:text-[var(--brand-blue)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] rounded-full"
                >
                  İletişime Geç
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
