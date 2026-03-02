import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "EphorTech'te kariyer fırsatları. Teknolojiye tutkulu, yenilikçi ekibimize katılın. Özgeçmişinizi göndererek başvurun.",
  alternates: { canonical: "/kariyer" },
  openGraph: {
    title: "Kariyer | EphorTech",
    description:
      "EphorTech'te kariyer fırsatları. Yenilikçi ekibimize katılın.",
    url: "/kariyer",
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
      name: "Kariyer",
      item: `${siteUrl}/kariyer`,
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
