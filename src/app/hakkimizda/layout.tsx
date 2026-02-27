import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "EphorTech hakkında bilgi edinin. 30 yıllık deneyim ve öncü ekibimizle Türkiye genelinde kurumlara ve markalara modern teknoloji servisleri sunuyoruz.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | EphorTech",
    description:
      "30 yıllık deneyim ve öncü ekibimizle kurumlara ve markalara modern teknoloji servisleri sunuyoruz.",
    url: "/hakkimizda",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
