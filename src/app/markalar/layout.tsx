import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Markalara Hizmetlerimiz",
  description:
    "Markalar için uzatılmış garanti ve koruma hizmet paketleri. Elektronik cihaz kampanyalarıyla müşteri sadakatini artırın. 1-3 yıl garanti uzatma seçenekleri.",
  keywords: [
    "uzatılmış garanti hizmeti",
    "elektronik cihaz koruma paketi",
    "marka garanti uzatma",
    "elektronik cihaz kampanya paketi",
    "müşteri sadakat çözümü",
    "cihaz garanti hizmeti",
  ],
  alternates: { canonical: `${siteUrl}/markalar` },
  openGraph: {
    title: "Markalar İçin Uzatılmış Garanti ve Koruma Paketleri | EphorTech",
    description:
      "Elektronik cihaz kampanya hizmet paketleriyle satış cirosunu ve müşteri sadakatini artırın. 1-3 yıl garanti uzatma.",
    url: `${siteUrl}/markalar`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markalara Hizmetlerimiz | EphorTech",
    description:
      "Uzatılmış garanti ve koruma hizmet paketleri. Kampanyalarla müşteri sadakatini artırın.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Markalar İçin Uzatılmış Garanti ve Koruma Hizmetleri",
    description:
      "Markaların müşterilerine sunduğu uzatılmış garanti, koruma ve kampanya hizmet paketleri.",
    provider: {
      "@type": "Organization",
      name: "EphorTech",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    serviceType: "Uzatılmış Garanti ve Koruma Paketi",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marka Hizmet Paketleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Uzatılmış Garanti Hizmet Paketi",
            description:
              "Garanti süresi biten cihazlara 1, 2 veya 3 yıl uzatılmış garanti.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Koruma Hizmet Paketi",
            description:
              "Kırılma, sıvı teması gibi kullanıcı hasarlarına karşı koruma.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Uzatılmış Garanti & Koruma Hizmet Paketi",
            description: "Garanti uzatma ve hasar koruma bir arada.",
          },
        },
      ],
    },
    url: `${siteUrl}/markalar`,
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
        name: "Markalara Hizmetlerimiz",
        item: `${siteUrl}/markalar`,
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
