"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Ephortech-Logo-v1-1536x309.png"
                alt="EphorTech"
                width={140}
                height={28}
                className="h-7 w-auto brightness-0 invert opacity-80"
              />
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              Mevcut klasik teknik servis anlayışını modern servis çözümlerine dönüştüren yeni nesil bir teknoloji servisi.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/ephortech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)]/20 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com/@EphorTech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)]/20 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://linkedin.com/company/ephortech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)]/20 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[var(--font-syne)] font-bold text-white mb-4">Hizmetler</h4>
            <ul className="space-y-3">
              {["Sigorta Firmaları", "Kurumlar", "Markalar", "Konut Projeleri"].map((l) => (
                <li key={l}>
                  <Link href="/#services" className="text-sm text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors duration-300">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-syne)] font-bold text-white mb-4">Şirket</h4>
            <ul className="space-y-3">
              {[
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Kariyer", href: "/kariyer" },
                { name: "İletişim", href: "/iletisim" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors duration-300">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-syne)] font-bold text-white mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li>
                <a href="tel:08503350860" className="hover:text-[var(--brand-blue)] transition-colors">0850 335 0860</a>
              </li>
              <li>
                <a href="mailto:info@ephortech.com" className="hover:text-[var(--brand-blue)] transition-colors">info@ephortech.com</a>
              </li>
              <li className="leading-relaxed">Barbaros Mh. Mor Sümbül Sk. No:5/A Deluxia Palace K:17/474 Ataşehir / İstanbul</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">&copy; 2025 EphorTech. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-xs text-[var(--text-muted)]">
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">KVKK</Link>
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
