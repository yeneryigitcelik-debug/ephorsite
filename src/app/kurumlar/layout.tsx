import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Kurumlara Hizmetlerimiz",
  description:
    "Kurumlar için ofis ve sanayi tipi elektronik cihaz servis hizmetleri. 500'e yakın yetkili servis ağıyla garanti dahili ve harici onarım çözümleri.",
  alternates: { canonical: "/kurumlar" },
  openGraph: {
    title: "Kurumlara Hizmetlerimiz | EphorTech",
    description:
      "Kurumlar için elektronik cihaz servis hizmetleri. 500'e yakın yetkili servis ağıyla garanti dahili ve harici onarım.",
    url: "/kurumlar",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kurumsal Elektronik Cihaz Servis Hizmetleri",
  description:
    "Kurumlar için ofis ve sanayi tipi elektronik cihaz servis hizmetleri. 500'e yakın yetkili servis ağıyla garanti dahili ve harici onarım çözümleri.",
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
  url: `${siteUrl}/kurumlar`,
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
      name: "Kurumlara Hizmetlerimiz",
      item: `${siteUrl}/kurumlar`,
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
