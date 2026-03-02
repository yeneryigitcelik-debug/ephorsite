import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Konut Proje Hizmetlerimiz",
  description:
    "Türkiye genelinde seçkin konut projelerinde yer alan elektronik cihazlara özel uzatılmış garanti ve koruma hizmet paketleri.",
  alternates: { canonical: "/konut-projeleri" },
  openGraph: {
    title: "Konut Proje Hizmetlerimiz | EphorTech",
    description:
      "Konut projelerine özel elektronik cihaz uzatılmış garanti ve koruma hizmet paketleri.",
    url: "/konut-projeleri",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Konut Projeleri Teknik Servis Hizmetleri",
  description:
    "Konut projelerinde anahtar teslim cihaz kurulumu, uzatılmış garanti ve koruma hizmet paketleri. Toplu kurulum ve kampanya çözümleri.",
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
      name: "Konut Proje Hizmetlerimiz",
      item: `${siteUrl}/konut-projeleri`,
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
