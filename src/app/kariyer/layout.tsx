import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "EphorTech'te kariyer fırsatları. Teknoloji tutkusu olan, yenilikçi ekibimize katılın. Özgeçmişinizi info@ephortech.com adresine göndererek başvurun.",
  keywords: [
    "EphorTech kariyer",
    "teknik servis iş ilanı",
    "teknoloji servisi kariyer",
    "İstanbul teknik servis iş başvurusu",
    "elektronik onarım iş fırsatı",
  ],
  alternates: { canonical: `${siteUrl}/kariyer` },
  openGraph: {
    title: "Kariyer Fırsatları | EphorTech Teknoloji Servis",
    description:
      "Yenilikçi ekibimize katılın. Teknoloji dünyasında iz bırakma fırsatını yakalayın.",
    url: `${siteUrl}/kariyer`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kariyer | EphorTech - Ekibimize Katılın",
    description:
      "EphorTech'te kariyer fırsatları. Teknolojiye tutkulu ekibimize katılın.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EphorTech Kariyer",
    description: "EphorTech'te kariyer fırsatları.",
    url: `${siteUrl}/kariyer`,
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
        name: "Kariyer",
        item: `${siteUrl}/kariyer`,
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
