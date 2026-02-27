import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yasal Bilgiler",
  description:
    "EphorTech gizlilik politikası, çerez politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması hakkında detaylı bilgi.",
  alternates: { canonical: "/yasal" },
  openGraph: {
    title: "Yasal Bilgiler | EphorTech",
    description:
      "EphorTech gizlilik politikası, çerez politikası ve KVKK aydınlatma metni.",
    url: "/yasal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
