"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "Sigorta Sektörü", count: "50+" },
  { name: "Kurumsal Firma", count: "200+" },
  { name: "Marka", count: "100+" },
  { name: "Konut Projesi", count: "150+" },
];

export default function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)]/50 to-[var(--bg-primary)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)] font-medium">
            500+ Kurumsal Müşteri Güveniyle
          </p>
        </motion.div>

        {/* Partner stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center gap-2 sm:gap-3 p-5 sm:p-6 md:p-8 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-[var(--brand-blue)]/10 hover:bg-white/[0.03] transition-all duration-500"
            >
              {/* Decorative circle */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/[0.08] to-transparent border border-[var(--brand-blue)]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                <span className="font-[var(--font-syne)] text-xl font-extrabold gradient-text">{partner.count}</span>
              </div>
              <span className="text-sm text-[var(--text-muted)] font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/15 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
