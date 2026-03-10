import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konut Projeleri | ePhortech",
  description: "Seçkin konut projelerine özel elektronik cihaz hizmetleri. Premium hizmet paketleri.",
  alternates: { canonical: "https://ephortech.com/konut-projeleri" },
};

export default function KonutProjeleri() {
  return (
    <ServicePageTemplate
      title="Konut Projeleri"
      subtitle="Premium Hizmet"
      description="Seçkin konut projelerine özel elektronik cihaz hizmetleri. Rezidans ve lüks konut projelerine özel olarak tasarlanmış premium hizmet paketleri."
      longDescription={`Türkiye'nin en prestijli konut projelerine özel olarak tasarlanmış premium teknoloji servis hizmetleri sunuyoruz.

Rezidans, villa ve lüks konut projelerinde yaşayan sakinlerin teknoloji ihtiyaçlarına yönelik kapsamlı çözümler üretiyoruz. Akıllı ev sistemlerinden kişisel elektronik cihazlara kadar geniş bir yelpazede, konut sakinlerinin yaşam kalitesini artıran hizmetler sunuyoruz.

Konut projesi yönetimleriyle işbirliği yaparak, sakinlere kesintisiz ve üst düzey teknoloji destek hizmeti sağlıyoruz.`}
      gradient="from-[#3A7BAD] to-[#5B93BE]"
      features={[
        { title: "Premium Destek", description: "Lüks konut standartlarında kişiselleştirilmiş hizmet.", icon: "👑" },
        { title: "Akıllı Ev", description: "Akıllı ev sistemlerinin kurulum ve bakım hizmetleri.", icon: "🏠" },
        { title: "Kapı Hizmeti", description: "Konut projesine özel yerinde teknik destek.", icon: "🚪" },
        { title: "Konsiyerj Servis", description: "7/24 teknoloji konsiyerj destek hattı.", icon: "🎯" },
        { title: "Cihaz Kurulumu", description: "Yeni cihazların profesyonel kurulum ve konfigürasyonu.", icon: "⚙️" },
        { title: "Yaşam Kalitesi", description: "Teknoloji ile sakinlerin yaşam kalitesini artırma.", icon: "✨" },
      ]}
      stats={[
        { value: "100+", label: "Konut Projesi" },
        { value: "7/24", label: "Destek" },
        { value: "Premium", label: "Hizmet" },
        { value: "%100", label: "Memnuniyet" },
      ]}
    />
  );
}
