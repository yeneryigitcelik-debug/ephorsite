"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  { name: "Samsung", category: "Elektronik" },
  { name: "Apple", category: "Teknoloji" },
  { name: "Huawei", category: "Teknoloji" },
  { name: "Xiaomi", category: "Elektronik" },
  { name: "Oppo", category: "Elektronik" },
  { name: "LG", category: "Elektronik" },
  { name: "Sony", category: "Elektronik" },
  { name: "Philips", category: "Elektronik" },
  { name: "Vestel", category: "Elektronik" },
  { name: "HP", category: "Bilişim" },
  { name: "Lenovo", category: "Bilişim" },
  { name: "Dell", category: "Bilişim" },
  { name: "Asus", category: "Bilişim" },
  { name: "Bosch", category: "Beyaz Eşya" },
  { name: "Siemens", category: "Beyaz Eşya" },
  { name: "Arçelik", category: "Beyaz Eşya" },
  { name: "Beko", category: "Beyaz Eşya" },
  { name: "Casper", category: "Bilişim" },
];

const row1 = brands.slice(0, 9);
const row2 = brands.slice(9, 18);

function BrandPill({ brand, index }: { brand: typeof brands[0]; index: number }) {
  return (
    <div
      className="group relative flex-shrink-0 flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-[var(--brand-blue)]/30 hover:bg-[var(--brand-blue)]/[0.08] transition-all duration-500 cursor-default select-none"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-full bg-radial-[at_center] from-[var(--brand-blue)]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Brand icon placeholder - first letter */}
      <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[var(--brand-blue)]/20 to-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/10 flex items-center justify-center group-hover:border-[var(--brand-blue)]/30 group-hover:from-[var(--brand-blue)]/30 group-hover:to-[var(--brand-blue)]/10 transition-all duration-500">
        <span className="text-sm font-bold text-[var(--brand-blue-light)] group-hover:text-white transition-colors duration-300">
          {brand.name[0]}
        </span>
      </div>

      <div className="relative z-10 flex flex-col">
        <span className="font-[var(--font-syne)] text-sm sm:text-[15px] font-semibold text-[var(--text-secondary)] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
          {brand.name}
        </span>
      </div>

      {/* Shine sweep */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof brands;
  direction?: "left" | "right";
  speed?: number;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden brand-marquee-mask">
      <div
        className={`flex gap-3 sm:gap-4 ${direction === "left" ? "animate-brand-scroll-left" : "animate-brand-scroll-right"}`}
        style={{ ["--brand-scroll-speed" as string]: `${speed}s` }}
      >
        {repeated.map((brand, i) => (
          <BrandPill key={`${brand.name}-${i}`} brand={brand} index={i % items.length} />
        ))}
      </div>
    </div>
  );
}

export default function BrandReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "100+", label: "Marka" },
    { value: "81", label: "İlde Servis" },
    { value: "30+", label: "Yıl Deneyim" },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="section-divider" />

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.03] to-transparent rounded-full" />
        <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 px-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-5">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            İş Ortaklarımız
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Çalıştığımız{" "}
            <span className="gradient-text">Markalar</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen markalarıyla iş birliği yaparak
            müşterilerimize en kaliteli hizmeti sunuyoruz.
          </p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-3 sm:space-y-4"
        >
          <MarqueeRow items={row1} direction="left" speed={35} />
          <MarqueeRow items={row2} direction="right" speed={40} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 px-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.05] bg-white/[0.02]"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] shadow-[0_0_8px_rgba(107,159,202,0.5)]" />
              <span className="font-[var(--font-syne)] text-lg sm:text-xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-[var(--text-muted)]">{stat.label}</span>
              {i < stats.length - 1 && (
                <span className="hidden sm:block w-px h-4 bg-white/10 ml-2 sm:ml-4" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
