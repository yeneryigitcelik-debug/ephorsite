import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Konut Proje Hizmetlerimiz",
  description:
    "Türkiye genelinde seçkin konut projelerindeki elektronik cihazlara özel uzatılmış garanti ve koruma hizmet paketleri. Projeye özel kampanya çözümleri.",
  keywords: [
    "konut projesi teknik servis",
    "konut projesi garanti paketi",
    "elektronik cihaz kurulum",
    "konut projesi kampanya",
    "beyaz eşya garanti uzatma",
    "konut projesi hizmet paketi",
  ],
  alternates: { canonical: `${siteUrl}/konut-projeleri` },
  openGraph: {
    title: "Konut Projelerine Özel Teknik Servis Hizmetleri | EphorTech",
    description:
      "Seçkin konut projelerindeki cihazlara uzatılmış garanti ve koruma paketleri. Projeye özel kampanya çözümleri.",
    url: `${siteUrl}/konut-projeleri`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konut Proje Hizmetlerimiz | EphorTech",
    description:
      "Konut projelerine özel elektronik cihaz garanti ve koruma paketleri.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Konut Projeleri Teknik Servis Hizmetleri",
    description:
      "Konut projelerinde anahtar teslim cihaz kurulumu, uzatılmış garanti ve koruma hizmet paketleri.",
    provider: {
      "@type": "Organization",
      name: "EphorTech",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    serviceType: "Konut Projesi Cihaz Kurulum ve Garanti",
    url: `${siteUrl}/konut-projeleri`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Konut Proje Hizmetlerimiz",
        item: `${siteUrl}/konut-projeleri`,
      },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
