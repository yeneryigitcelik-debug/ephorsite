import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "EphorTech'te kariyer fırsatları. Teknolojiye tutkulu, yenilikçi ekibimize katılın. Özgeçmişinizi göndererek başvurun.",
  alternates: { canonical: "/kariyer" },
  openGraph: {
    title: "Kariyer | EphorTech",
    description:
      "EphorTech'te kariyer fırsatları. Yenilikçi ekibimize katılın.",
    url: "/kariyer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
