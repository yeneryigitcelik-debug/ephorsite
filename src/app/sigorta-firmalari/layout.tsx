import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Sigorta Firmalarına Hizmetlerimiz",
  description:
    "Sigorta firmaları için çağrı merkezi, servis yönetim ve raporlama hizmetleri. Konut ve ticari poliçe kapsamında 81 ilde 1 yıl garantili elektronik cihaz servis hizmeti.",
  alternates: { canonical: "/sigorta-firmalari" },
  openGraph: {
    title: "Sigorta Firmalarına Hizmetlerimiz | EphorTech",
    description:
      "Sigorta firmaları için çağrı merkezi, servis yönetim ve raporlama hizmetleri. 81 ilde 1 yıl garantili servis.",
    url: "/sigorta-firmalari",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sigorta Firmaları Teknik Servis Hizmetleri",
  description:
    "Sigorta firmaları için çağrı merkezi, servis yönetim ve raporlama hizmetleri. 81 ilde 1 yıl garantili elektronik cihaz servis hizmeti.",
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
  url: `${siteUrl}/sigorta-firmalari`,
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
      name: "Sigorta Firmalarına Hizmetlerimiz",
      item: `${siteUrl}/sigorta-firmalari`,
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
