import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markalara Hizmetlerimiz",
  description:
    "Markalar için uzatılmış garanti ve koruma hizmet paketleri. Elektronik cihaz kampanyalarıyla satış cirosunu ve müşteri sadakatini artırın.",
  alternates: { canonical: "/markalar" },
  openGraph: {
    title: "Markalara Hizmetlerimiz | EphorTech",
    description:
      "Markalar için uzatılmış garanti ve koruma hizmet paketleri. Kampanyalarla müşteri sadakatini artırın.",
    url: "/markalar",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
