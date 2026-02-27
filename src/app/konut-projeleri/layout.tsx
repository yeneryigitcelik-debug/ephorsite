import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konut Proje Hizmetlerimiz",
  description:
    "Türkiye genelinde seçkin konut projelerinde yer alan elektronik cihazlara özel uzatılmış garanti ve koruma hizmet paketleri.",
  alternates: { canonical: "/konut-projeleri" },
  openGraph: {
    title: "Konut Proje Hizmetlerimiz | EphorTech",
    description:
      "Konut projelerine özel elektronik cihaz uzatılmış garanti ve koruma hizmet paketleri.",
    url: "/konut-projeleri",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
