import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumlara Hizmetlerimiz",
  description:
    "Kurumlar için ofis ve sanayi tipi elektronik cihaz servis hizmetleri. 1.000'e yakın yetkili servis ağıyla garanti dahili ve harici onarım çözümleri.",
  alternates: { canonical: "/kurumlar" },
  openGraph: {
    title: "Kurumlara Hizmetlerimiz | EphorTech",
    description:
      "Kurumlar için elektronik cihaz servis hizmetleri. 1.000'e yakın yetkili servis ağıyla garanti dahili ve harici onarım.",
    url: "/kurumlar",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
