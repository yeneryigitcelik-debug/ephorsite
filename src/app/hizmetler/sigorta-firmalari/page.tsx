import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sigorta Firmaları | ePhortech",
  description: "Konut ve ticari poliçe kapsamında elektronik cihaz teminatları. 81 ilde kesintisiz servis ağı.",
  alternates: { canonical: "https://ephortech.com/sigorta-firmalari" },
};

export default function SigortaFirmalari() {
  return (
    <ServicePageTemplate
      title="Sigorta Firmaları"
      subtitle="Sigorta Çözümleri"
      description="Konut ve ticari poliçe kapsamında elektronik cihaz teminatları. 81 ilde kesintisiz servis ağımızla sigorta firmalarına güvenilir çözümler sunuyoruz."
      longDescription={`Sigorta sektörüne özel geliştirdiğimiz çözümlerimizle, poliçe kapsamındaki elektronik cihaz hasarlarında hızlı ve profesyonel müdahale sağlıyoruz.

Konut sigortası ve ticari sigorta poliçeleri kapsamında, müşterilerinizin elektronik cihaz arızalarını en kısa sürede çözüme kavuşturuyoruz. 81 ilde kesintisiz operasyonel kapasitemizle, Türkiye'nin her noktasında aynı kalitede hizmet sunuyoruz.

Sigorta firmalarıyla entegre çalışan altyapımız sayesinde, hasar bildiriminden onarım sürecine kadar tüm aşamalar şeffaf ve takip edilebilir şekilde yönetilmektedir.`}
      gradient="from-[var(--brand-blue-dark)] to-[var(--brand-blue)]"
      features={[
        { title: "81 İl Kapsama", description: "Türkiye genelinde kesintisiz servis ağı ile tüm poliçe sahiplerine ulaşıyoruz.", icon: "🗺️" },
        { title: "Hızlı Müdahale", description: "Hasar bildirimi sonrası en kısa sürede profesyonel müdahale.", icon: "⚡" },
        { title: "Şeffaf Süreç", description: "Hasar bildiriminden onarıma kadar tüm süreç takip edilebilir.", icon: "📊" },
        { title: "1 Yıl Garanti", description: "Tüm onarımlarımız 1 yıl garantimiz kapsamındadır.", icon: "🛡️" },
        { title: "Entegre Sistem", description: "Sigorta firması altyapılarıyla uyumlu entegre çözümler.", icon: "🔗" },
        { title: "Raporlama", description: "Detaylı hasar ve onarım raporları ile tam şeffaflık.", icon: "📋" },
      ]}
      stats={[
        { value: "81", label: "İlde Hizmet" },
        { value: "24/7", label: "Destek" },
        { value: "1 Yıl", label: "Garanti" },
        { value: "%98", label: "Memnuniyet" },
      ]}
    />
  );
}
