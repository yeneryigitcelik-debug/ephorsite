import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Sigorta Firmalarına Hizmetlerimiz",
  description:
    "Sigorta firmaları için çağrı merkezi, servis yönetim ve raporlama hizmetleri. Konut ve ticari poliçe kapsamında 81 ilde 1 yıl garantili elektronik cihaz onarımı.",
  keywords: [
    "sigorta teknik servis",
    "konut poliçesi cihaz teminatı",
    "ticari poliçe elektronik cihaz",
    "sigorta hasar onarım",
    "sigorta firması servis çözümü",
    "elektronik cihaz sigorta",
    "81 il sigorta servis",
  ],
  alternates: { canonical: `${siteUrl}/sigorta-firmalari` },
  openGraph: {
    title: "Sigorta Firmalarına Teknoloji Servis Çözümleri | EphorTech",
    description:
      "Konut ve ticari poliçe kapsamında 81 ilde 1 yıl garantili elektronik cihaz servis hizmeti. Çağrı merkezi ve raporlama entegrasyonu.",
    url: `${siteUrl}/sigorta-firmalari`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigorta Firmaları İçin Servis Çözümleri | EphorTech",
    description:
      "81 ilde 1 yıl garantili servis. Çağrı merkezi, servis yönetim ve raporlama hizmetleri.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sigorta Firmaları Teknik Servis Hizmetleri",
    description:
      "Sigorta firmalarının konut ve ticari poliçelerinde bulunan elektronik cihaz teminatları kapsamında 81 ilde 1 yıl garantili servis hizmeti.",
    provider: {
      "@type": "Organization",
      name: "EphorTech",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    serviceType: "Elektronik Cihaz Teknik Servis",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sigorta Servis Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Çağrı Merkezi Hizmetleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Servis Yönetim Hizmetleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Raporlama Hizmetleri",
          },
        },
      ],
    },
    url: `${siteUrl}/sigorta-firmalari`,
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
        name: "Sigorta Firmalarına Hizmetlerimiz",
        item: `${siteUrl}/sigorta-firmalari`,
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
