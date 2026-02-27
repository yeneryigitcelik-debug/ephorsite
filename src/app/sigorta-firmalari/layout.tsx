import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sigorta Firmalarına Hizmetlerimiz",
  description:
    "Sigorta firmaları için çağrı merkezi, servis yönetim ve raporlama hizmetleri. Konut ve ticari poliçe kapsamında 81 ilde 1 yıl garantili elektronik cihaz servis hizmeti.",
  alternates: { canonical: "/sigorta-firmalari" },
  openGraph: {
    title: "Sigorta Firmalarına Hizmetlerimiz | EphorTech",
    description:
      "Sigorta firmaları için çağrı merkezi, servis yönetim ve raporlama hizmetleri. 81 ilde 1 yıl garantili servis.",
    url: "/sigorta-firmalari",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
