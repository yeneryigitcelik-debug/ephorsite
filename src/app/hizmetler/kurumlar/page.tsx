import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumlar | ePhortech",
  description: "Markaların müşterilerine özel elektronik cihaz hizmet paketleri. Kurumsal düzeyde teknik destek.",
  alternates: { canonical: "https://ephortech.com/kurumlar" },
};

export default function Kurumlar() {
  return (
    <ServicePageTemplate
      title="Kurumsal Hizmetler"
      subtitle="Kurumsal Çözümler"
      description="Markaların müşterilerine özel elektronik cihaz hizmet paketleri. Kurumsal düzeyde teknik destek ve bakım hizmetleri ile iş sürekliliğinizi garanti altına alıyoruz."
      longDescription={`Kurumsal müşterilerimize özel tasarlanmış hizmet paketlerimizle, elektronik cihaz yönetimini kolaylaştırıyoruz.

İşletmenizin ihtiyaçlarına göre özelleştirilen bakım ve onarım planlarımız, beklenmedik arızaları minimize ederek iş sürekliliğinizi korur. Periyodik bakım programlarımız sayesinde cihazlarınızın ömrünü uzatıyoruz.

Kurumsal anlaşma kapsamında öncelikli destek, yerinde servis ve yedek cihaz hizmetleri sunarak, çalışanlarınızın hiçbir zaman teknoloji sorunuyla baş başa kalmamasını sağlıyoruz.`}
      gradient="from-[var(--brand-blue-deeper)] to-[var(--brand-blue-dark)]"
      features={[
        { title: "Özel Paketler", description: "İşletmenize özel tasarlanmış esnek hizmet paketleri.", icon: "📦" },
        { title: "Periyodik Bakım", description: "Düzenli bakım programlarıyla arıza riskini minimize edin.", icon: "🔧" },
        { title: "Yerinde Servis", description: "Ofisinize gelerek yerinde teknik destek hizmeti.", icon: "🏢" },
        { title: "Öncelikli Destek", description: "Kurumsal anlaşma kapsamında öncelikli müdahale.", icon: "⭐" },
        { title: "Yedek Cihaz", description: "Onarım sürecinde yedek cihaz tahsisi.", icon: "💻" },
        { title: "SLA Garantisi", description: "Hizmet seviyesi anlaşması ile garantili yanıt süreleri.", icon: "📝" },
      ]}
      stats={[
        { value: "500+", label: "Kurumsal Müşteri" },
        { value: "30+", label: "Yıl Deneyim" },
        { value: "4 Saat", label: "Yanıt Süresi" },
        { value: "%99", label: "Uptime" },
      ]}
    />
  );
}
