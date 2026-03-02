import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "EphorTech hakkında bilgi edinin. 30 yıllık deneyim ve öncü ekibimizle Türkiye genelinde kurumlara ve markalara modern teknoloji servisleri sunuyoruz.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | EphorTech",
    description:
      "30 yıllık deneyim ve öncü ekibimizle kurumlara ve markalara modern teknoloji servisleri sunuyoruz.",
    url: "/hakkimizda",
  },
};

const breadcrumbSchema = {
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
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
