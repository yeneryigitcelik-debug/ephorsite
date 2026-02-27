"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";

const sections = [
  { id: "gizlilik-politikasi", label: "Gizlilik Politikası" },
  { id: "cerez-politikasi", label: "Çerez Politikası" },
  { id: "kvkk", label: "KVKK" },
];

export default function Yasal() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sections.some((s) => s.id === hash)) {
      setActive(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Yasal Bilgiler
              </span>
              <h1 className="font-[var(--font-syne)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
                <TextReveal>Yasal</TextReveal>{" "}
                <TextReveal delay={0.2}>
                  <span className="gradient-text">Bilgiler</span>
                </TextReveal>
              </h1>
              <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl">
                EphorTech olarak kişisel verilerinizin korunmasına büyük önem veriyoruz. Bu sayfada gizlilik politikamız, çerez politikamız ve KVKK kapsamındaki haklarınız hakkında bilgi bulabilirsiniz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="sticky top-0 z-30 bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="flex gap-1 py-3 overflow-x-auto">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    active === s.id
                      ? "bg-[var(--brand-blue)]/10 text-[var(--brand-blue-light)] border border-[var(--brand-blue)]/20"
                      : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-white/[0.03]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gizlilik Politikası */}
        <section id="gizlilik-politikasi" className="py-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-white mb-10">
                Gizlilik Politikası
              </h2>
            </AnimatedSection>
            <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-white mb-3">1. Genel Bilgilendirme</h3>
                <p>
                  EphorTech Teknoloji Servis A.Ş. (&quot;EphorTech&quot;) olarak, web sitemizi ziyaret eden ve hizmetlerimizden yararlanan kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, hangi kişisel verilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h3 className="text-xl font-semibold text-white mb-3">2. Toplanan Veriler</h3>
                <p className="mb-3">
                  Hizmetlerimiz kapsamında aşağıdaki kişisel veriler toplanabilmektedir:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon numarası)</li>
                  <li>Firma/kurum bilgileri</li>
                  <li>Cihaz ve teknik servis talep bilgileri</li>
                  <li>IP adresi, tarayıcı türü ve ziyaret verileri</li>
                  <li>İletişim formları aracılığıyla ilettiğiniz mesajlar</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-xl font-semibold text-white mb-3">3. Verilerin Kullanım Amaçları</h3>
                <p className="mb-3">Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Teknik servis hizmetlerinin sağlanması ve takibi</li>
                  <li>Müşteri taleplerinin karşılanması ve iletişim</li>
                  <li>Hizmet kalitesinin iyileştirilmesi</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>İstatistiksel analizler ve raporlama</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <h3 className="text-xl font-semibold text-white mb-3">4. Verilerin Korunması</h3>
                <p>
                  EphorTech, kişisel verilerinizi yetkisiz erişim, kayıp veya kötüye kullanıma karşı korumak amacıyla teknik ve idari güvenlik önlemleri uygulamaktadır. Verileriniz, SSL şifreleme ile korunan güvenli sunucularda saklanmaktadır.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3 className="text-xl font-semibold text-white mb-3">5. Verilerin Paylaşılması</h3>
                <p>
                  Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz. Hizmet sunumu kapsamında iş ortaklarımız ile paylaşılması gereken durumlarda, veri güvenliğini sağlamak amacıyla gerekli sözleşmesel önlemler alınmaktadır.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <h3 className="text-xl font-semibold text-white mb-3">6. İletişim</h3>
                <p>
                  Gizlilik politikamız hakkında sorularınız için{" "}
                  <a href="mailto:info@ephortech.com" className="text-[var(--brand-blue)] hover:underline">
                    info@ephortech.com
                  </a>{" "}
                  adresinden bize ulaşabilirsiniz.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Çerez Politikası */}
        <section id="cerez-politikasi" className="py-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-white mb-10">
                Çerez Politikası
              </h2>
            </AnimatedSection>
            <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-white mb-3">1. Çerez Nedir?</h3>
                <p>
                  Çerezler (cookies), web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin daha verimli çalışmasını sağlamak ve kullanıcı deneyimini iyileştirmek amacıyla kullanılmaktadır.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h3 className="text-xl font-semibold text-white mb-3">2. Kullandığımız Çerez Türleri</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">Zorunlu Çerezler</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Web sitesinin temel işlevlerinin çalışması için gerekli olan çerezlerdir. Bu çerezler olmadan site düzgün çalışamaz.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">Performans Çerezleri</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Ziyaretçilerin siteyi nasıl kullandığına dair anonim bilgiler toplar. Site performansını iyileştirmek amacıyla kullanılır.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">İşlevsellik Çerezleri</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Dil tercihi gibi seçimlerinizi hatırlayarak kişiselleştirilmiş bir deneyim sunar.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">Analitik Çerezler</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Ziyaretçi istatistiklerini toplamak ve site kullanımını analiz etmek amacıyla Google Analytics gibi araçlar tarafından kullanılır.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-xl font-semibold text-white mb-3">3. Çerez Yönetimi</h3>
                <p>
                  Tarayıcı ayarlarınızı değiştirerek çerezleri kabul etmeyi reddedebilir veya çerez gönderildiğinde uyarı almayı tercih edebilirsiniz. Ancak bazı çerezleri devre dışı bırakmanız durumunda web sitemizin belirli özelliklerinin düzgün çalışmayabileceğini hatırlatmak isteriz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <h3 className="text-xl font-semibold text-white mb-3">4. Üçüncü Taraf Çerezleri</h3>
                <p>
                  Web sitemizde Google Analytics gibi üçüncü taraf hizmet sağlayıcılara ait çerezler kullanılabilmektedir. Bu çerezler, ilgili üçüncü tarafların gizlilik politikalarına tabidir. EphorTech, üçüncü taraf çerezlerin içeriği ve kullanımı üzerinde doğrudan kontrol sahibi değildir.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* KVKK */}
        <section id="kvkk" className="py-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-white mb-10">
                KVKK Aydınlatma Metni
              </h2>
            </AnimatedSection>
            <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-white mb-3">1. Veri Sorumlusu</h3>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, EphorTech Teknoloji Servis A.Ş. veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda işlemektedir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h3 className="text-xl font-semibold text-white mb-3">2. Kişisel Verilerin İşlenme Amaçları</h3>
                <p className="mb-3">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Teknik servis hizmetlerinin yürütülmesi</li>
                  <li>Sözleşme süreçlerinin yerine getirilmesi</li>
                  <li>Müşteri ilişkileri yönetimi</li>
                  <li>İnsan kaynakları süreçlerinin planlanması</li>
                  <li>Yasal düzenlemelere uyum sağlanması</li>
                  <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-xl font-semibold text-white mb-3">3. Kişisel Verilerin Aktarılması</h3>
                <p>
                  Toplanan kişisel veriler; KVKK&apos;nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak, hizmet sunumu kapsamında iş ortaklarımıza, yasal yükümlülükler çerçevesinde kamu kurum ve kuruluşlarına aktarılabilmektedir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <h3 className="text-xl font-semibold text-white mb-3">4. Veri Toplama Yöntemleri ve Hukuki Sebep</h3>
                <p>
                  Kişisel verileriniz; web sitemiz, iletişim formları, e-posta, telefon ve fiziksel ortamlar aracılığıyla toplanmaktadır. Bu veriler, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere dayanılarak (açık rıza, sözleşmenin ifası, yasal yükümlülük, meşru menfaat) işlenmektedir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3 className="text-xl font-semibold text-white mb-3">5. İlgili Kişinin Hakları</h3>
                <p className="mb-3">KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                  <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                  <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                  <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                  <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <h3 className="text-xl font-semibold text-white mb-3">6. Başvuru Yöntemi</h3>
                <p>
                  Yukarıda belirtilen haklarınızı kullanmak için{" "}
                  <a href="mailto:info@ephortech.com" className="text-[var(--brand-blue)] hover:underline">
                    info@ephortech.com
                  </a>{" "}
                  adresine yazılı olarak veya Kişisel Verileri Koruma Kurulu tarafından belirlenen diğer yöntemlerle başvuruda bulunabilirsiniz. Başvurularınız en geç 30 gün içinde değerlendirilecektir.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
