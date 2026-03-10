import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "30 yıllık deneyim, 81 ilde 500+ yetkili servis noktası ve 1 yıl onarım garantisiyle Türkiye'nin öncü teknoloji servis sağlayıcısı EphorTech hakkında bilgi alın.",
  keywords: [
    "EphorTech hakkında",
    "teknoloji servisi",
    "elektronik cihaz onarım",
    "teknik servis şirketi",
    "30 yıllık deneyim",
    "81 il servis ağı",
    "yetkili servis noktası",
  ],
  alternates: { canonical: `${siteUrl}/hakkimizda` },
  openGraph: {
    title: "EphorTech Hakkında | 30 Yıllık Teknoloji Servis Deneyimi",
    description:
      "81 ilde 500+ yetkili servis noktasıyla elektronik cihaz servis hizmeti sunan EphorTech hakkında detaylı bilgi.",
    url: `${siteUrl}/hakkimizda`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "EphorTech Hakkında | Yeni Nesil Teknoloji Servisi",
    description:
      "30 yıllık deneyim ve 81 ilde hizmet ağıyla Türkiye'nin öncü teknoloji servis sağlayıcısı.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "EphorTech Hakkında",
    description:
      "30 yıllık deneyim ve 81 ilde kesintisiz hizmet ağıyla Türkiye'nin öncü teknoloji servis sağlayıcısı.",
    url: `${siteUrl}/hakkimizda`,
    mainEntity: {
      "@type": "Organization",
      name: "EphorTech",
      url: siteUrl,
    },
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
        name: "Hakkımızda",
        item: `${siteUrl}/hakkimizda`,
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
