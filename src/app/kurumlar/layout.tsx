import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Kurumlara Hizmetlerimiz",
  description:
    "Kurumlar için ofis ve sanayi tipi elektronik cihaz servis hizmetleri. 500+ yetkili servis noktasıyla garanti dahili ve harici onarım, uzatılmış garanti paketleri.",
  keywords: [
    "kurumsal teknoloji servisi",
    "ofis cihaz onarım",
    "kurumsal elektronik cihaz yönetimi",
    "notebook onarım kurumsal",
    "sunucu onarım",
    "kurumsal garanti paketi",
    "sanayi cihaz tamiri",
  ],
  alternates: { canonical: `${siteUrl}/kurumlar` },
  openGraph: {
    title: "Kurumsal Teknoloji Servis Çözümleri | EphorTech",
    description:
      "500+ yetkili servis ağıyla ofis ve sanayi tipi cihazlara garanti dahili/harici onarım. Uzatılmış garanti paketleri.",
    url: `${siteUrl}/kurumlar`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumlara Hizmetlerimiz | EphorTech",
    description:
      "Ofis ve sanayi tipi cihazlara profesyonel servis. 500+ yetkili servis noktası.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kurumsal Elektronik Cihaz Servis Hizmetleri",
    description:
      "Firmaların ofis ve sanayi tipi elektronik cihazlarına garanti dahili/harici onarım, uzatılmış garanti ve koruma hizmetleri.",
    provider: {
      "@type": "Organization",
      name: "EphorTech",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    serviceType: "Kurumsal Cihaz Yönetimi ve Onarım",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kurumsal Servis Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ofis Tipi Cihaz Servisi",
            description:
              "Notebook, masaüstü bilgisayar, sunucu, monitör, yazıcı onarımı.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanayi Tipi Cihaz Servisi",
            description:
              "CNC cihazları, medikal cihaz anakartları, ısıtma-soğutma sistemleri.",
          },
        },
      ],
    },
    url: `${siteUrl}/kurumlar`,
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
        name: "Kurumlara Hizmetlerimiz",
        item: `${siteUrl}/kurumlar`,
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
