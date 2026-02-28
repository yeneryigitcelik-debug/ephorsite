"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const FloatingDevices = dynamic(() => import("./FloatingDevices"), { ssr: false });

const services = [
  {
    title: "Kurumlar",
    slug: "kurumlar",
    description:
      "Markaların müşterilerine kullandıkları elektronik cihazlarla ilgili hizmet paketleri",
    image: "/images/kurumlar.png",
    gradient: "from-[#2E5A80] to-[#4A82AF]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    highlight: "200+ Kurumsal Müşteri",
  },
  {
    title: "Sigorta Firmaları",
    slug: "sigorta-firmalari",
    description:
      "Sigorta firmalarının konut ve ticari poliçeleri kapsamında sunulan elektronik cihaz teminatları, Türkiye genelinde 81 ilde geçerlidir ve elektronik cihazlarınızı güvence altına almanızı sağlar.",
    image: "/images/sigorta.png",
    gradient: "from-[#4A82AF] to-[#6B9FCA]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    highlight: "50+ Sigorta Şirketi",
  },
  {
    title: "Markalar",
    slug: "markalar",
    description:
      "Firmaların ofis içinde ve personellerinin kullandıkları elektronik cihazlarda arıza veya hasar meydana geldiğinde hızlı ve etkin çözümler, iş akışını kesintiye uğratmadan devam etmelerini sağlar.",
    image: "/images/markalar.png",
    gradient: "from-[#6B9FCA] to-[#8BB8DA]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    highlight: "100+ Marka İşbirliği",
  },
  {
    title: "Konut Projeleri",
    slug: "konut-projeleri",
    description:
      "Türkiye'nin her yerinde seçkin konut projelerinde yer alan elektronik cihazlara projeye özel hizmetler sunulur.",
    image: "/images/konut.png",
    gradient: "from-[#3A7BAD] to-[#5B93BE]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    highlight: "150+ Konut Projesi",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* 3D Floating Devices */}
      <FloatingDevices />
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.025] to-transparent rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <AnimatedSection className="text-center mb-10 sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Hizmetlerimiz
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            EphorTech{" "}
            <span className="gradient-text">Teknoloji Servisi</span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Hali hazırda var olan teknik servis anlayışını, modern servis çözümlerine dönüştüren yeni nesil bir teknoloji servisidir.
          </p>
        </AnimatedSection>

        {/* Bento Grid Layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5" staggerDelay={0.15}>
          {services.map((service, i) => (
            <StaggerItem key={service.slug} className="flex">
              <Link
                href={`/${service.slug}`}
                className="group relative bento-card block overflow-hidden flex flex-col w-full"
              >
                {/* Hover glow */}
                <div className={`absolute -inset-px rounded-[1.5rem] bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 blur-xl`} />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Image area */}
                  <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 image-enhance"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/30 to-transparent" />

                    {/* Number badge */}
                    <span className="absolute top-4 right-4 font-[var(--font-syne)] text-5xl font-extrabold text-white/[0.04] group-hover:text-[var(--brand-blue)]/[0.1] transition-colors duration-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Highlight badge */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
                      {service.highlight}
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-4 pt-4 sm:p-6 sm:pt-5 flex flex-col flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white/90 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--brand-blue)]/20`}>
                        {service.icon}
                      </div>
                      <h3 className="font-[var(--font-syne)] text-xl font-bold text-white group-hover:text-[var(--brand-blue-light)] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-5 flex-1">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] transition-colors duration-300">
                        <span>Daha Fazla Bilgi</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>

                      {/* Arrow circle */}
                      <div className="w-10 h-10 rounded-full border border-white/5 group-hover:border-[var(--brand-blue)]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                        <svg className="w-4 h-4 text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
