"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";
import Breadcrumb from "@/components/Breadcrumb";

const sections = [
  { id: "gizlilik-politikasi", label: "Gizlilik Politikasi" },
  { id: "cerez-politikasi", label: "Cerez Politikasi" },
  { id: "kvkk", label: "KVKK" },
];

export default function YasalContent() {
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
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
            <Breadcrumb items={[{ label: "Anasayfa", href: "/" }, { label: "Yasal Bilgiler" }]} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Yasal Bilgiler
              </span>
              <h1 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
                <TextReveal>Yasal</TextReveal>{" "}
                <TextReveal delay={0.2}>
                  <span className="gradient-text">Bilgiler</span>
                </TextReveal>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl">
                EphorTech olarak kisisel verilerinizin korunmasina buyuk onem veriyoruz. Bu sayfada gizlilik politikamiz, cerez politikamiz ve KVKK kapsamindaki haklariniz hakkinda bilgi bulabilirsiniz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="sticky top-0 z-30 bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

        {/* Gizlilik Politikasi */}
        <section id="gizlilik-politikasi" className="py-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-white mb-10">
                Gizlilik Politikasi
              </h2>
            </AnimatedSection>
            <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-white mb-3">1. Genel Bilgilendirme</h3>
                <p>
                  EphorTech Teknoloji Servis A.S. (&quot;EphorTech&quot;) olarak, web sitemizi ziyaret eden ve hizmetlerimizden yararlanan kullanicilarimizin gizliligini korumaya taahhut ediyoruz. Bu Gizlilik Politikasi, hangi kisisel verilerin toplandigini, nasil kullanildigini ve korundugunuacikmaktadir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h3 className="text-xl font-semibold text-white mb-3">2. Toplanan Veriler</h3>
                <p className="mb-3">
                  Hizmetlerimiz kapsaminda asagidaki kisisel veriler toplanabilmektedir:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Ad, soyad ve iletisim bilgileri (e-posta, telefon numarasi)</li>
                  <li>Firma/kurum bilgileri</li>
                  <li>Cihaz ve teknik servis talep bilgileri</li>
                  <li>IP adresi, tarayici turu ve ziyaret verileri</li>
                  <li>Iletisim formlari araciligiyla ilettiginiz mesajlar</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-xl font-semibold text-white mb-3">3. Verilerin Kullanim Amaclari</h3>
                <p className="mb-3">Toplanan kisisel veriler asagidaki amaclarla kullanilmaktadir:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Teknik servis hizmetlerinin saglanmasi ve takibi</li>
                  <li>Musteri taleplerinin karsilanmasi ve iletisim</li>
                  <li>Hizmet kalitesinin iyilestirilmesi</li>
                  <li>Yasal yukumluluklerin yerine getirilmesi</li>
                  <li>Istatistiksel analizler ve raporlama</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <h3 className="text-xl font-semibold text-white mb-3">4. Verilerin Korunmasi</h3>
                <p>
                  EphorTech, kisisel verilerinizi yetkisiz erisim, kayip veya kotuye kullanimakarsi korumak amaciyla teknik ve idari guvenlik onlemleri uygulamaktadir. Verileriniz, SSL sifreleme ile korunan guvenli sunucularda saklanmaktadir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3 className="text-xl font-semibold text-white mb-3">5. Verilerin Paylasilmasi</h3>
                <p>
                  Kisisel verileriniz, yasal zorunluluklar disinda ucuncu kisilerle paylasilmaz. Hizmet sunumu kapsaminda is ortaklarimiz ile paylasilmasi gereken durumlarda, veri guvenligini saglamak amaciyla gerekli sozlesmesel onlemler alinmaktadir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <h3 className="text-xl font-semibold text-white mb-3">6. Iletisim</h3>
                <p>
                  Gizlilik politikamiz hakkinda sorulariniz icin{" "}
                  <a href="mailto:info@ephortech.com" className="text-[var(--brand-blue)] hover:underline">
                    info@ephortech.com
                  </a>{" "}
                  adresinden bize ulasabilirsiniz.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Cerez Politikasi */}
        <section id="cerez-politikasi" className="py-24 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-bold text-white mb-10">
                Cerez Politikasi
              </h2>
            </AnimatedSection>
            <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-white mb-3">1. Cerez Nedir?</h3>
                <p>
                  Cerezler (cookies), web sitemizi ziyaret ettiginizde tarayiciniz araciligiyla cihaziniza kaydedilen kucuk metin dosyalaridir. Bu dosyalar, web sitesinin daha verimli calismasini saglamak ve kullanici deneyimini iyilestirmek amaciyla kullanilmaktadir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h3 className="text-xl font-semibold text-white mb-3">2. Kullandigimiz Cerez Turleri</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">Zorunlu Cerezler</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Web sitesinin temel islevlerinin calismasi icin gerekli olan cerezlerdir. Bu cerezler olmadan site duzgun calisamaz.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">Performans Cerezleri</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Ziyaretcilerin siteyi nasil kullandigina dair anonim bilgiler toplar. Site performansini iyilestirmek amaciyla kullanilir.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">Islevsellik Cerezleri</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Dil tercihi gibi secimlerinizi hatirlayarak kisisellestirilmis bir deneyim sunar.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-semibold text-white mb-1">Analitik Cerezler</h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Ziyaretci istatistiklerini toplamak ve site kullanimini analiz etmek amaciyla Google Analytics gibi araclar tarafindan kullanilir.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-xl font-semibold text-white mb-3">3. Cerez Yonetimi</h3>
                <p>
                  Tarayici ayarlarinizi degistirerek cerezleri kabul etmeyi reddedebilir veya cerez gonderildiginde uyari almayi tercih edebilirsiniz. Ancak bazi cerezleri devre disi birakmaniz durumunda web sitemizin belirli ozelliklerinin duzgun calismayabilecegini hatirlatmak isteriz.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <h3 className="text-xl font-semibold text-white mb-3">4. Ucuncu Taraf Cerezleri</h3>
                <p>
                  Web sitemizde Google Analytics gibi ucuncu taraf hizmet saglayicilara ait cerezler kullanilabilmektedir. Bu cerezler, ilgili ucuncu taraflarin gizlilik politikalarina tabidir. EphorTech, ucuncu taraf cerezlerin icerigi ve kullanimi uzerinde dogrudan kontrol sahibi degildir.
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
                KVKK Aydinlatma Metni
              </h2>
            </AnimatedSection>
            <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-white mb-3">1. Veri Sorumlusu</h3>
                <p>
                  6698 sayili Kisisel Verilerin Korunmasi Kanunu (&quot;KVKK&quot;) kapsaminda, EphorTech Teknoloji Servis A.S. veri sorumlusu sifatiyla kisisel verilerinizi asagida aciklanan amaclar dogrultusunda islemektedir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h3 className="text-xl font-semibold text-white mb-3">2. Kisisel Verilerin Islenme Amaclari</h3>
                <p className="mb-3">Kisisel verileriniz asagidaki amaclarla islenmektedir:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Teknik servis hizmetlerinin yurutulmesi</li>
                  <li>Sozlesme sureclerinin yerine getirilmesi</li>
                  <li>Musteri iliskileri yonetimi</li>
                  <li>Insan kaynaklari sureclerinin planlanmasi</li>
                  <li>Yasal duzenlemelere uyum saglanmasi</li>
                  <li>Bilgi guvenligi sureclerinin yurutulmesi</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-xl font-semibold text-white mb-3">3. Kisisel Verilerin Aktarilmasi</h3>
                <p>
                  Toplanan kisisel veriler; KVKK&apos;nin 8. ve 9. maddelerinde belirtilen sartlara uygun olarak, hizmet sunumu kapsaminda is ortaklarimiza, yasal yukumlulukler cercevesinde kamu kurum ve kuruluslarina aktarilabilmektedir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <h3 className="text-xl font-semibold text-white mb-3">4. Veri Toplama Yontemleri ve Hukuki Sebep</h3>
                <p>
                  Kisisel verileriniz; web sitemiz, iletisim formlari, e-posta, telefon ve fiziksel ortamlar araciligiyla toplanmaktadir. Bu veriler, KVKK&apos;nin 5. ve 6. maddelerinde belirtilen hukuki sebeplere dayanilarak (acik riza, sozlesmenin ifasi, yasal yukumluluk, mesru menfaat) islenmektedir.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3 className="text-xl font-semibold text-white mb-3">5. Ilgili Kisinin Haklari</h3>
                <p className="mb-3">KVKK&apos;nin 11. maddesi uyarinca asagidaki haklara sahipsiniz:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 text-[var(--text-muted)]">
                  <li>Kisisel verilerinizin islenip islenmedigini ogrenme</li>
                  <li>Kisisel verileriniz islenmisse buna iliskin bilgi talep etme</li>
                  <li>Kisisel verilerin islenme amacini ve bunlarin amacina uygun kullanilip kullanilmadigini ogrenme</li>
                  <li>Yurt icinde veya yurt disinda kisisel verilerinizin aktarildigi ucuncu kisileri bilme</li>
                  <li>Kisisel verilerinizin eksik veya yanlis islenmis olmasi halinde bunlarin duzeltilmesini isteme</li>
                  <li>KVKK&apos;nin 7. maddesinde ongorulen sartlar cercevesinde kisisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                  <li>Islenen verilerin munhasiran otomatik sistemler vasitasiyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya cikmasina itiraz etme</li>
                  <li>Kisisel verilerinizin kanuna aykiri olarak islenmesi sebebiyle zarara ugramaniz halinde zararin giderilmesini talep etme</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <h3 className="text-xl font-semibold text-white mb-3">6. Basvuru Yontemi</h3>
                <p>
                  Yukarida belirtilen haklarinizi kullanmak icin{" "}
                  <a href="mailto:info@ephortech.com" className="text-[var(--brand-blue)] hover:underline">
                    info@ephortech.com
                  </a>{" "}
                  adresine yazili olarak veya Kisisel Verileri Koruma Kurulu tarafindan belirlenen diger yontemlerle basvuruda bulunabilirsiniz. Basvurulariniz en gec 30 gun icinde degerlendirilecektir.
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
