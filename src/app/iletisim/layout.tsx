import type { Metadata } from "next";

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "EphorTech ile iletişime geçin. Merkez ofis: Ataşehir/İstanbul. Teknik servis: Avcılar/İstanbul. Telefon: 0850 335 0860. E-posta: info@ephortech.com.",
  keywords: [
    "EphorTech iletişim",
    "teknik servis telefon",
    "elektronik cihaz onarım iletişim",
    "0850 335 0860",
    "Ataşehir teknoloji servisi",
    "İstanbul teknik servis",
  ],
  alternates: { canonical: `${siteUrl}/iletisim` },
  openGraph: {
    title: "İletişim | EphorTech Teknoloji Servis",
    description:
      "EphorTech ile iletişime geçin. Telefon: 0850 335 0860. E-posta: info@ephortech.com. Hafta içi 08:30-22:00.",
    url: `${siteUrl}/iletisim`,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | EphorTech",
    description:
      "EphorTech ile iletişime geçin. Telefon: 0850 335 0860. Hafta içi 08:30-22:00, Cumartesi 10:00-15:00.",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "EphorTech İletişim",
    description: "EphorTech ile iletişime geçin.",
    url: `${siteUrl}/iletisim`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: "EphorTech Teknoloji Servis",
      telephone: "+90-850-335-0860",
      email: "info@ephortech.com",
      address: [
        {
          "@type": "PostalAddress",
          name: "Merkez Ofis",
          streetAddress:
            "Barbaros Mh. Mor Sümbül Sk. No:5/A Deluxia Palace K:17/474",
          addressLocality: "Ataşehir",
          addressRegion: "İstanbul",
          postalCode: "34746",
          addressCountry: "TR",
        },
        {
          "@type": "PostalAddress",
          name: "Teknik Servis",
          streetAddress:
            "Cihangir Mah. E5 Yan Yol Üzeri Türksan Center A Blok No: 291 2L",
          addressLocality: "Avcılar",
          addressRegion: "İstanbul",
          postalCode: "34310",
          addressCountry: "TR",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:30",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "15:00",
        },
      ],
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
        name: "İletişim",
        item: `${siteUrl}/iletisim`,
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
