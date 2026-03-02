import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "EphorTech blog: Teknik servis, sigorta süreçleri, cihaz bakımı, garanti rehberi ve kurumsal çözümler hakkında güncel yazılar ve faydalı içerikler.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | EphorTech",
    description:
      "Teknik servis, sigorta süreçleri, cihaz bakımı ve kurumsal çözümler hakkında faydalı içerikler.",
    url: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
