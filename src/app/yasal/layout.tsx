import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Yasal Bilgiler",
  description:
    "EphorTech gizlilik politikası, çerez politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması hakkında detaylı bilgi.",
  alternates: { canonical: "/yasal" },
  openGraph: {
    title: "Yasal Bilgiler | EphorTech",
    description:
      "EphorTech gizlilik politikası, çerez politikası ve KVKK aydınlatma metni.",
    url: "/yasal",
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
      name: "Yasal Bilgiler",
      item: `${siteUrl}/yasal`,
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
