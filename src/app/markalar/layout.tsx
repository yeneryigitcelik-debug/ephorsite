import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Markalara Hizmetlerimiz",
  description:
    "Markalar için uzatılmış garanti ve koruma hizmet paketleri. Elektronik cihaz kampanyalarıyla satış cirosunu ve müşteri sadakatini artırın.",
  alternates: { canonical: "/markalar" },
  openGraph: {
    title: "Markalara Hizmetlerimiz | EphorTech",
    description:
      "Markalar için uzatılmış garanti ve koruma hizmet paketleri. Kampanyalarla müşteri sadakatini artırın.",
    url: "/markalar",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Markalar İçin Uzatılmış Garanti ve Koruma Hizmetleri",
  description:
    "Markalar için uzatılmış garanti ve koruma hizmet paketleri. Elektronik cihaz kampanyalarıyla satış cirosunu ve müşteri sadakatini artırın.",
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
  url: `${siteUrl}/markalar`,
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
      name: "Markalara Hizmetlerimiz",
      item: `${siteUrl}/markalar`,
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
