import type { Metadata, Viewport } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://ephortech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EphorTech | Yeni Nesil Teknoloji Servisi",
    template: "%s | EphorTech",
  },
  description:
    "30 yıllık deneyim ve 81 ilde hizmet ağıyla klasik teknik servis anlayışını modern çözümlere dönüştüren yeni nesil teknoloji servisi. Sigorta firmaları, markalar ve kurumlara özel elektronik cihaz servis hizmetleri.",
  keywords: [
    "EphorTech",
    "teknoloji servisi",
    "elektronik cihaz onarım",
    "teknik servis",
    "kurumsal teknoloji çözümleri",
    "sigorta teknik servis",
    "cihaz garanti hizmeti",
    "uzatılmış garanti",
    "elektronik cihaz tamiri",
    "81 il servis",
  ],
  authors: [{ name: "EphorTech", url: siteUrl }],
  creator: "EphorTech",
  publisher: "EphorTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "EphorTech | Yeni Nesil Teknoloji Servisi",
    description:
      "30 yıllık deneyim ve 81 ilde hizmet ağıyla klasik teknik servis anlayışını modern çözümlere dönüştüren yeni nesil teknoloji servisi.",
    url: siteUrl,
    siteName: "EphorTech",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/slider-devices.png",
        width: 1200,
        height: 630,
        alt: "EphorTech - Yeni Nesil Teknoloji Servisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EphorTech | Yeni Nesil Teknoloji Servisi",
    description:
      "30 yıllık deneyim ve 81 ilde hizmet. Sigorta firmaları, markalar ve kurumlara özel teknoloji servis çözümleri.",
    images: ["/images/slider-devices.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6B9FCA",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "EphorTech",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Ephortech-Logo-v1-1536x309.png`,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+90-850-335-0860",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: "Turkish",
        },
      ],
      email: "info@ephortech.com",
      sameAs: [
        "https://www.instagram.com/ephortech/",
        "https://www.youtube.com/@EphorTech",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "EphorTech Teknoloji Servis",
      image: `${siteUrl}/Ephortech-Logo-v1-1536x309.png`,
      url: siteUrl,
      telephone: "+90-850-335-0860",
      email: "info@ephortech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Barbaros Mh. Mor Sümbül Sk. No:5/A Deluxia Palace K:17/474",
        addressLocality: "Ataşehir",
        addressRegion: "İstanbul",
        postalCode: "34746",
        addressCountry: "TR",
      },
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
      areaServed: {
        "@type": "Country",
        name: "Turkey",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "EphorTech",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "tr-TR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} antialiased grain`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
