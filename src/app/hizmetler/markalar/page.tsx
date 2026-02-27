import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markalar | ePhortech",
  description: "Ofis ve personel elektronik cihazlarında arıza ve hasar çözümleri. Profesyonel teknik servis.",
};

export default function Markalar() {
  return (
    <ServicePageTemplate
      title="Marka Çözümleri"
      subtitle="Markalar İçin"
      description="Ofis ve personel elektronik cihazlarında arıza ve hasar çözümleri. Markanızın itibarını koruyacak profesyonel teknik servis hizmetleri sunuyoruz."
      longDescription={`Markaların teknoloji altyapısını güçlendiren ve çalışan verimliliğini artıran profesyonel çözümler sunuyoruz.

Ofis ekipmanlarından çalışan cihazlarına kadar geniş bir yelpazede arıza ve hasar çözümleri sağlıyoruz. Markanızın itibarını koruyacak kalitede, hızlı ve etkili teknik servis hizmetleri ile teknoloji sorunlarını minimize ediyoruz.

Marka bazlı özel anlaşmalarla, teknoloji yönetimi süreçlerinizi basitleştiriyor ve maliyetlerinizi optimize ediyoruz.`}
      gradient="from-[var(--brand-blue)] to-[var(--brand-blue-light)]"
      features={[
        { title: "Marka Uyumu", description: "Markanızın kalite standartlarına uygun servis hizmeti.", icon: "🏷️" },
        { title: "Cihaz Yönetimi", description: "Tüm elektronik cihaz parkurunuzun profesyonel yönetimi.", icon: "📱" },
        { title: "Hasar Çözümleri", description: "Arıza ve hasar durumlarında hızlı ve etkili müdahale.", icon: "🔨" },
        { title: "Maliyet Optimizasyonu", description: "Teknoloji servis maliyetlerinizi optimize eden paketler.", icon: "💰" },
        { title: "Detaylı Raporlama", description: "Cihaz durumu ve servis geçmişi hakkında detaylı raporlar.", icon: "📈" },
        { title: "Envanter Takibi", description: "Elektronik cihaz envanterinizin profesyonel takibi.", icon: "🗂️" },
      ]}
      stats={[
        { value: "50+", label: "Marka Partneri" },
        { value: "10K+", label: "Cihaz Yönetimi" },
        { value: "2 Saat", label: "Müdahale" },
        { value: "%97", label: "Çözüm Oranı" },
      ]}
    />
  );
}
