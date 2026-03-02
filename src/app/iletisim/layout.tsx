import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "EphorTech ile iletişime geçin. Merkez ofis: Ataşehir/İstanbul. Teknik servis: Avcılar/İstanbul. Telefon: 0850 335 0860. E-posta: info@ephortech.com.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | EphorTech",
    description:
      "EphorTech ile iletişime geçin. Telefon: 0850 335 0860. E-posta: info@ephortech.com.",
    url: "/iletisim",
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
      name: "İletişim",
      item: `${siteUrl}/iletisim`,
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
