import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "EphorTech blog: Teknik servis, sigorta süreçleri, cihaz bakım rehberi, garanti süreci ve kurumsal çözümler hakkında güncel yazılar ve uzman önerileri.",
  keywords: [
    "teknik servis blog",
    "elektronik cihaz bakım",
    "sigorta onarım süreci",
    "garanti rehberi",
    "cihaz bakım ipuçları",
    "kurumsal teknoloji çözümleri",
  ],
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "Blog | EphorTech - Teknik Servis ve Cihaz Bakım Rehberi",
    description:
      "Teknik servis, sigorta süreçleri, cihaz bakımı ve kurumsal çözümler hakkında uzman içerikler.",
    url: `${siteUrl}/blog`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | EphorTech",
    description:
      "Teknik servis, cihaz bakımı ve kurumsal çözümler hakkında faydalı içerikler.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EphorTech Blog",
    description:
      "Teknik servis, sigorta süreçleri, cihaz bakımı ve kurumsal çözümler hakkında blog yazıları.",
    url: `${siteUrl}/blog`,
    mainEntity: {
      "@type": "ItemList",
      name: "Blog Yazıları",
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
        name: "Blog",
        item: `${siteUrl}/blog`,
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
