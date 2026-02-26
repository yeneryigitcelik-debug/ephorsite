"use client";

const topItems = [
  "Sigorta Çözümleri",
  "Kurumsal Hizmetler",
  "Marka Desteği",
  "Konut Projeleri",
  "81 İlde Hizmet",
  "30+ Yıl Deneyim",
  "1 Yıl Garanti",
  "Modern Servis",
];

const bottomItems = [
  "Profesyonel Onarım",
  "Hasar Yönetimi",
  "Çağrı Merkezi",
  "Teknik Destek",
  "Sovtaj Hizmetleri",
  "Raporlama",
  "Servis Yönetimi",
  "7/24 Destek",
];

export default function Marquee() {
  return (
    <div className="relative py-10 overflow-hidden border-y border-white/[0.03] bg-[var(--bg-secondary)]/60">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10" />

      {/* Top row - scrolls left */}
      <div className="mb-4">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...topItems, ...topItems, ...topItems, ...topItems].map((item, i) => (
            <span
              key={`t-${i}`}
              className="flex items-center gap-5 mx-6 text-lg font-[var(--font-syne)] font-bold text-white/[0.06] hover:text-white/20 transition-colors duration-500 select-none"
            >
              {item}
              <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)]/15 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls right */}
      <div>
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems].map((item, i) => (
            <span
              key={`b-${i}`}
              className="flex items-center gap-5 mx-6 text-lg font-[var(--font-syne)] font-bold text-white/[0.04] hover:text-white/15 transition-colors duration-500 select-none"
            >
              {item}
              <svg className="w-3 h-3 text-[var(--brand-blue)]/10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
