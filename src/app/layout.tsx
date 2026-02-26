import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EphorTech | Yeni Nesil Teknoloji Servisi",
  description:
    "Mevcut klasik teknik servis anlayışını modern servis çözümlerine dönüştüren yeni nesil bir teknoloji servisi. 30 yıllık deneyim, 81 ilde hizmet.",
  keywords: [
    "EphorTech",
    "teknoloji servisi",
    "elektronik cihaz",
    "teknik servis",
    "kurumsal teknoloji",
  ],
  openGraph: {
    title: "EphorTech | Yeni Nesil Teknoloji Servisi",
    description:
      "Mevcut klasik teknik servis anlayışını modern servis çözümlerine dönüştüren yeni nesil bir teknoloji servisi.",
    url: "https://ephortech.com",
    siteName: "EphorTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${syne.variable} ${outfit.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
