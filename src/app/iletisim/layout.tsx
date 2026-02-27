import type { Metadata } from "next";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
