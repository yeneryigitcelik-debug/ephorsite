import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "Yasal Bilgiler",
  description:
    "EphorTech gizlilik politikası, çerez politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması ve haklarınız hakkında detaylı bilgi.",
  keywords: [
    "EphorTech gizlilik politikası",
    "çerez politikası",
    "KVKK aydınlatma metni",
    "kişisel verilerin korunması",
    "EphorTech yasal bilgiler",
  ],
  alternates: { canonical: `${siteUrl}/yasal` },
  openGraph: {
    title: "Yasal Bilgiler | EphorTech",
    description:
      "EphorTech gizlilik politikası, çerez politikası ve KVKK aydınlatma metni.",
    url: `${siteUrl}/yasal`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary",
    title: "Yasal Bilgiler | EphorTech",
    description:
      "Gizlilik politikası, çerez politikası ve KVKK aydınlatma metni.",
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
