"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

const posts: Record<string, BlogPost> = {
  "sigorta-kapsaminda-cihaz-onarim-sureci": {
    slug: "sigorta-kapsaminda-cihaz-onarim-sureci",
    title: "Sigorta Kapsamında Cihaz Onarım Süreci Nasıl İşler?",
    category: "Sigorta",
    date: "20 Şub 2026",
    readTime: "5 dk",
    content: [
      "Sigorta poliçeniz kapsamında elektronik cihazlarınız arızalandığında, onarım sürecinin nasıl işlediğini bilmek hem zamandan tasarruf etmenizi hem de haklarınızı korumanızı sağlar. EphorTech olarak 30 yılı aşkın deneyimimizle bu süreci sizin için en kolay hale getiriyoruz.",

      "## Adım 1: Hasar Bildirimi",
      "Cihazınızda bir arıza veya hasar meydana geldiğinde ilk yapmanız gereken sigorta firmanıza hasar bildirimi yapmaktır. Bu bildirimi sigorta firmanızın çağrı merkezi, web sitesi veya mobil uygulaması üzerinden gerçekleştirebilirsiniz. Bildirimin ardından dosyanız oluşturulur ve EphorTech'e yönlendirilir.",

      "## Adım 2: EphorTech İletişimi",
      "Dosyanız bize ulaştıktan sonra çağrı merkezimiz sizinle iletişime geçer. Bu görüşmede arızanın detayları, cihaz bilgileri ve size en uygun servis noktası belirlenir. Türkiye genelinde 81 ilde bulunan 1.000'e yakın servis noktamız sayesinde size en yakın lokasyondan hizmet sunulur.",

      "## Adım 3: Cihaz Teslimi ve Ekspertiz",
      "Cihazınızı belirlenen servis noktasına teslim ettiğinizde, uzman teknisyenlerimiz detaylı bir ekspertiz raporu hazırlar. Bu raporda arızanın nedeni, onarım için gereken parçalar ve tahmini süre yer alır. Rapor sigorta firmasına iletilir ve onay süreci başlar.",

      "## Adım 4: Onarım Süreci",
      "Sigorta firmasından onay alındıktan sonra onarım süreci başlar. EphorTech'in profesyonel yazılım altyapısı sayesinde onarımın her aşamasını anlık olarak takip edebilirsiniz. Çağrı merkezimizi arayarak veya sigorta firmanız üzerinden süreciniz hakkında bilgi alabilirsiniz.",

      "## Adım 5: Teslim ve Garanti",
      "Onarım tamamlandığında cihazınız test edilir ve size teslim edilir. EphorTech olarak tüm onarımlarımıza 1 yıl garanti veriyoruz. Bu garanti süresinde aynı arızanın tekrarlanması durumunda ücretsiz onarım hizmeti sunulmaktadır.",

      "## Poliçe Kapsamında Nelere Dikkat Etmelisiniz?",
      "Sigorta poliçenizin kapsamını iyi bilmeniz önemlidir. Poliçe türüne göre kapsanan cihazlar, hasar türleri ve teminat limitleri farklılık gösterebilir. Düşme, kırılma, su hasarı ve elektrik arızası gibi durumlar genellikle poliçe kapsamında yer alır, ancak kasıtlı hasar ve kozmetik sorunlar kapsam dışı kalabilir.",

      "EphorTech olarak 50'den fazla sigorta firmasıyla entegre çalışıyoruz ve sürecin her aşamasında yanınızdayız. Sorularınız için 0850 335 0860 numaralı çağrı merkezimizden bize ulaşabilirsiniz.",
    ],
  },
  "beyaz-esya-bakim-rehberi": {
    slug: "beyaz-esya-bakim-rehberi",
    title: "Beyaz Eşyalarınızın Ömrünü Uzatmanın 10 Yolu",
    category: "Bakım Rehberi",
    date: "15 Şub 2026",
    readTime: "4 dk",
    content: [
      "Beyaz eşyalar evlerimizin vazgeçilmez parçalarıdır ve doğru bakım ile ömürleri yıllar boyunca uzatılabilir. EphorTech uzmanlarının önerileriyle cihazlarınızı en verimli şekilde kullanabilirsiniz.",

      "## 1. Buzdolabınızı Düzenli Temizleyin",
      "Buzdolabınızın arka tarafındaki kondenser bobinlerini yılda en az iki kez temizleyin. Toz biriken bobinler, buzdolabının daha fazla enerji harcamasına ve motorun aşırı çalışmasına neden olur. Ayrıca iç kısımda biriken buzları düzenli olarak çözün.",

      "## 2. Çamaşır Makinesinin Lastiklerini Kontrol Edin",
      "Kapak lastiği zamanla kirlenir ve küf oluşabilir. Her yıkama sonrası kapağı açık bırakarak hava sirkülasyonu sağlayın. Ayda bir kez boş yıkama ile sirke veya özel temizleyici kullanarak lastiği ve tamburu temizleyin.",

      "## 3. Bulaşık Makinesi Filtresini Ayda Bir Temizleyin",
      "Bulaşık makinesinin alt kısmındaki filtrede yemek artıkları birikir. Bu durum hem koku yapar hem de makinenin verimini düşürür. Filtreyi ayda bir çıkarıp sıcak su ve sabunla yıkayın.",

      "## 4. Fırınınızın Kapak Contasını İhmal Etmeyin",
      "Fırın kapağının contası zamanla sertleşir ve ısı kaçağına neden olur. Contayı düzenli olarak nemli bezle silin ve çatlak oluşup oluşmadığını kontrol edin. Hasarlı contaları değiştirmek enerji tasarrufu sağlar.",

      "## 5. Klima Filtrelerini Mevsimlik Değiştirin",
      "Klima filtreleri her sezon başında temizlenmeli veya değiştirilmelidir. Kirli filtreler hem enerji tüketimini artırır hem de sağlığa zararlı partikülleri havaya yayar.",

      "## 6. Elektrikli Süpürgenin Filtresini Yıkayın",
      "HEPA filtreli süpürgelerin filtresini ayda bir yıkayıp kurutarak kullanın. Tıkanan filtre emme gücünü düşürür ve motora zarar verir.",

      "## 7. Çamaşır Kurutma Makinesinin Tüy Filtresini Her Kullanımda Temizleyin",
      "Kurutma makinesinin tüy filtresi her kullanımdan sonra temizlenmelidir. Biriken tüyler hava akışını engeller ve yangın riski oluşturabilir.",

      "## 8. Su Arıtma Cihazı Filtrelerini Zamanında Değiştirin",
      "Su arıtma cihazlarının filtre değişim sürelerine mutlaka uyun. Süresi geçmiş filtreler suyun kalitesini düşürür ve cihaza zarar verebilir.",

      "## 9. Ankastre Cihazlarda Havalandırma Boşluğu Bırakın",
      "Ankastre cihazların etrafında yeterli havalandırma boşluğu olduğundan emin olun. Sıkışık yerleşim, cihazların aşırı ısınmasına ve erken arızalanmasına yol açar.",

      "## 10. Profesyonel Bakım Yaptırın",
      "Yılda bir kez EphorTech yetkili servislerinden profesyonel bakım hizmeti alın. Uzman teknisyenler gözle görülemeyen sorunları tespit ederek büyük arızaların önüne geçer. Bakım hizmetlerimiz hakkında bilgi almak için 0850 335 0860'ı arayabilirsiniz.",
    ],
  },
  "kurumsal-cihaz-yonetimi": {
    slug: "kurumsal-cihaz-yonetimi",
    title: "Kurumsal Firmalar İçin Cihaz Yönetimi Çözümleri",
    category: "Kurumsal",
    date: "8 Şub 2026",
    readTime: "6 dk",
    content: [
      "Büyük ölçekli firmalarda yüzlerce, hatta binlerce elektronik cihazın yönetimi ciddi bir operasyonel zorluk oluşturur. EphorTech, kurumsal firmalar için özel geliştirdiği çözümlerle bu süreci kolaylaştırır.",

      "## Kurumsal Cihaz Parkı Yönetiminde Karşılaşılan Zorluklar",
      "Ofis ekipmanları, bilgisayarlar, yazıcılar, klimalar ve diğer elektronik cihazlar düzenli bakım ve onarım gerektirir. Birden fazla lokasyonda faaliyet gösteren firmalar için bu süreç çok daha karmaşık hale gelir. Farklı tedarikçilerle çalışmak, garanti takibi ve maliyet kontrolü gibi konular önemli sorunlar yaratır.",

      "## EphorTech Kurumsal Çözümleri",
      "EphorTech olarak 200'den fazla kurumsal müşterimize sunduğumuz çözümler şunlardır:",

      "**Tek Noktadan Yönetim:** Tüm cihazlarınızın bakım, onarım ve garanti süreçlerini tek bir platform üzerinden yönetin. Özel geliştirdiğimiz yazılım altyapısıyla her cihazın durumunu anlık takip edebilirsiniz.",

      "**SLA (Hizmet Seviyesi Anlaşması):** Firmanızın ihtiyaçlarına özel SLA anlaşmaları hazırlıyoruz. Belirlenen müdahale süreleri, öncelik seviyeleri ve raporlama standartları ile hizmet kalitemizi garanti altına alıyoruz.",

      "**Öncelikli Servis:** Kurumsal müşterilerimize öncelikli servis hizmeti sunuyoruz. Kritik cihaz arızalarında en kısa sürede müdahale ederek iş sürekliliğinizi koruyoruz.",

      "## Maliyet Optimizasyonu",
      "Kurumsal müşterilerimize sunduğumuz toplu bakım paketleri ile cihaz başına maliyeti önemli ölçüde düşürüyoruz. Düzenli bakım programları sayesinde büyük arızaların önüne geçerek uzun vadede tasarruf sağlıyoruz. Detaylı maliyet raporlarıyla IT bütçenizi daha verimli yönetmenize yardımcı oluyoruz.",

      "## Raporlama ve Analiz",
      "Özel raporlama panelimizle cihaz bazında arıza istatistikleri, ortalama onarım süreleri, maliyet analizleri ve garanti takibi gibi verilere kolayca ulaşabilirsiniz. Bu veriler yeni cihaz alım kararlarınızda da size rehberlik eder.",

      "Kurumsal çözümlerimiz hakkında detaylı bilgi almak ve firmanıza özel teklif hazırlatmak için 0850 335 0860 numaralı hattımızdan bize ulaşabilirsiniz.",
    ],
  },
  "garanti-sureci-rehberi": {
    slug: "garanti-sureci-rehberi",
    title: "Garanti Süreci Hakkında Bilmeniz Gereken Her Şey",
    category: "Rehber",
    date: "1 Şub 2026",
    readTime: "3 dk",
    content: [
      "EphorTech olarak yaptığımız her onarıma 1 yıl garanti veriyoruz. Bu yazıda garanti süreciniz hakkında bilmeniz gereken her şeyi açıklıyoruz.",

      "## 1 Yıl Onarım Garantisi Nedir?",
      "EphorTech tarafından gerçekleştirilen her onarım işlemi, teslim tarihinden itibaren 1 yıl süreyle garanti kapsamındadır. Bu garanti, onarım yapılan arızanın tekrarlanması durumunda ücretsiz olarak yeniden onarım yapılacağını taahhüt eder.",

      "## Garanti Kapsamına Neler Girer?",
      "Garanti kapsamında değerlendirilen durumlar şunlardır: Onarım yapılan arızanın aynı sebepten tekrarlanması, değiştirilen parçanın fabrikasyon hatası nedeniyle arızalanması ve onarım sırasında yapılan işlemin kalite standardına uygun olmaması durumları garanti kapsamındadır.",

      "## Garanti Dışı Durumlar",
      "Şu durumlar garanti kapsamı dışında kalır: Kullanıcı hatası veya fiziksel darbe sonucu oluşan arızalar, onarım yapılan kısım dışındaki farklı bir arıza, cihaz üzerinde yetkisiz müdahale yapılması ve doğal afet, su baskını veya yıldırım gibi doğal sebeplerden kaynaklanan hasarlar.",

      "## Garanti Süreciniz Nasıl İşler?",
      "Garanti kapsamında bir sorun yaşamanız durumunda 0850 335 0860 numaralı çağrı merkezimizi aramanız yeterlidir. Onarım dosya numaranız ve garanti belgenizle başvurunuzu yapabilirsiniz. Teknik ekibimiz durumu değerlendirip garanti kapsamında olup olmadığını belirler ve uygunsa ücretsiz onarım süreci başlatılır.",

      "## Garanti Belgenizi Saklayın",
      "Onarım sonrası size verilen garanti belgesi ve onarım raporu önemli belgelerdir. Bu belgeleri 1 yıl boyunca saklamanızı öneriyoruz. Garanti başvurularında bu belgeler sürecinizi hızlandıracaktır.",

      "Garanti sürecinizle ilgili tüm sorularınız için çağrı merkezimiz hafta içi 08:30-18:00 saatleri arasında hizmetinizdedir.",
    ],
  },
  "konut-projesi-teknik-servis": {
    slug: "konut-projesi-teknik-servis",
    title: "Konut Projelerinde Teknik Servis Hizmetlerinin Önemi",
    category: "Konut Projeleri",
    date: "25 Oca 2026",
    readTime: "5 dk",
    content: [
      "Yeni konut projeleri teslim edildiğinde, dairelerdeki beyaz eşya ve elektronik cihazların kurulumu, garanti yönetimi ve satış sonrası destek kritik süreçlerdir. EphorTech, konut projeleri için uçtan uca teknik servis çözümleri sunmaktadır.",

      "## Konut Projelerinde Teknik Servisin Rolü",
      "Müteahhit firmalar ve konut projeleri geliştiricileri, satış sürecinde alıcılara sundukları beyaz eşya paketlerinin sorunsuz kurulumunu ve sonrasında kaliteli servis desteğini garanti etmek ister. Bu noktada EphorTech devreye girerek tüm süreci profesyonel şekilde yönetir.",

      "## Anahtar Teslim Kurulum Hizmeti",
      "EphorTech, konut projelerinde toplu cihaz kurulumu gerçekleştirir. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, kombi ve klima gibi tüm beyaz eşyaların montajı uzman ekiplerimiz tarafından yapılır. Her daire için kurulum raporu hazırlanır ve cihazlar test edilir.",

      "## Kampanya Paketleri",
      "Konut projeleri için özel kampanya paketleri sunuyoruz. Bu paketler toplu alım avantajı ile uygun fiyatlı cihaz tedariği, profesyonel kurulum hizmeti, uzatılmış garanti seçenekleri ve satış sonrası teknik destek gibi kapsamlı çözümler içerir.",

      "## Satış Sonrası Destek",
      "Konut sakinleri için özel bir destek hattı oluşturuyoruz. Daire sahibi herhangi bir cihaz arızası yaşadığında tek bir numaradan bize ulaşabilir. 81 ildeki servis ağımızla en kısa sürede müdahale ederiz.",

      "## Müteahhit Firma Avantajları",
      "Konut projelerinde EphorTech ile çalışmanın müteahhit firmalar için pek çok avantajı vardır. Tek muhatap olarak tüm cihaz süreçlerinin yönetimi, toplu fiyat avantajı, proje bazlı özel raporlama ve müşteri memnuniyetinin artması bunlardan bazılarıdır.",

      "150'den fazla konut projesinde hizmet vermiş deneyimimizle projenize değer katmak istiyoruz. Detaylı bilgi ve teklif için 0850 335 0860 numarasından bize ulaşın.",
    ],
  },
  "cagri-merkezi-hizmetleri": {
    slug: "cagri-merkezi-hizmetleri",
    title: "7/24 Çağrı Merkezi ile Müşteri Deneyimini İyileştirme",
    category: "Hizmetler",
    date: "18 Oca 2026",
    readTime: "4 dk",
    content: [
      "Teknik servis hizmetlerinde müşteri deneyiminin en kritik noktası iletişimdir. EphorTech'in profesyonel çağrı merkezi altyapısı, müşterilerinizle olan iletişimi en üst düzeye taşır.",

      "## Çağrı Merkezi Hizmetlerimiz",
      "EphorTech çağrı merkezi, sigorta firmaları ve kurumsal müşterilerimiz adına hasar ihbar kabul, arıza bildirim yönetimi, süreç takip ve bilgilendirme ile müşteri memnuniyet aramaları gibi hizmetler sunmaktadır.",

      "## Profesyonel Ekip",
      "Çağrı merkezi ekibimiz, teknik servis süreçleri konusunda eğitimli ve deneyimli personelden oluşur. Müşterilerinize sadece bilgi vermekle kalmaz, aynı zamanda teknik yönlendirme de yapabilirler. Bu sayede ilk aramada çözüm oranımız sektör ortalamasının üzerindedir.",

      "## Entegre Yazılım Altyapısı",
      "Çağrı merkezi altyapımız, servis yönetim yazılımımızla tam entegredir. Bu sayede çağrı merkezi temsilcimiz, arayan müşterinin dosya durumunu, cihaz bilgilerini ve geçmiş işlemlerini anında görebilir. Müşterinin kendini tekrar etmesine gerek kalmaz.",

      "## Raporlama ve Kalite Kontrol",
      "Tüm çağrılar kayıt altına alınır ve düzenli kalite kontrol değerlendirmelerine tabi tutulur. Müşterilerimize sunduğumuz raporlarda çağrı sayıları, ortalama bekleme süreleri, ilk çağrıda çözüm oranları ve müşteri memnuniyet skorları yer alır.",

      "## Sigorta Firmaları İçin Özel Çözümler",
      "Sigorta firmaları için özel olarak tasarlanmış çağrı merkezi süreçlerimiz bulunmaktadır. Hasar ihbar kabulünden dosya açılışına, ekspertiz koordinasyonundan onarım takibine kadar tüm süreçler entegre şekilde yönetilir.",

      "## Maliyet Avantajı",
      "Kendi çağrı merkezinizi kurmak ve yönetmek yerine EphorTech'in hazır altyapısını kullanarak hem maliyetlerinizi düşürebilir hem de profesyonel bir hizmet sunabilirsiniz. Çağrı hacminize göre esnek fiyatlandırma modelleri sunuyoruz.",

      "Çağrı merkezi hizmetlerimiz hakkında detaylı bilgi almak için 0850 335 0860'ı arayabilir veya info@ephortech.com adresine e-posta gönderebilirsiniz.",
    ],
  },
};

const categoryColors: Record<string, string> = {
  Sigorta: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/20",
  "Bakım Rehberi": "from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/20",
  Kurumsal: "from-violet-500/20 to-violet-600/20 text-violet-400 border-violet-500/20",
  Rehber: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/20",
  "Konut Projeleri": "from-rose-500/20 to-rose-600/20 text-rose-400 border-rose-500/20",
  Hizmetler: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/20",
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <CursorGlow />
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <AnimatedSection className="text-center">
            <h1 className="font-[var(--font-syne)] text-4xl font-extrabold text-white mb-4">
              Yazı Bulunamadı
            </h1>
            <p className="text-[var(--text-secondary)] mb-8">
              Aradığınız blog yazısı mevcut değil.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] rounded-full hover:shadow-lg hover:shadow-[var(--brand-blue)]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Blog&apos;a Dön
            </Link>
          </AnimatedSection>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CursorGlow />
      <Navbar />
      <WhatsAppButton />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors mb-8 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Tüm Yazılar
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border ${categoryColors[post.category] || ""}`}>
                  {post.category}
                </span>
                <span className="text-sm text-[var(--text-muted)]">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                <span className="text-sm text-[var(--text-muted)]">{post.readTime} okuma</span>
              </div>

              <h1 className="font-[var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {post.title}
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="relative pb-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection delay={0.2}>
              <article className="prose prose-invert prose-lg max-w-none">
                {post.content.map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-[var(--font-syne)] text-2xl font-bold text-white mt-12 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("**")) {
                    const parts = paragraph.match(/^\*\*(.+?)\*\*(.*)$/);
                    if (parts) {
                      return (
                        <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                          <strong className="text-white font-semibold">{parts[1]}</strong>
                          {parts[2]}
                        </p>
                      );
                    }
                  }
                  return (
                    <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </article>
            </AnimatedSection>

            {/* Bottom CTA */}
            <AnimatedSection delay={0.3}>
              <div className="mt-16 p-8 md:p-12 rounded-3xl border border-[var(--brand-blue)]/15 bg-gradient-to-br from-[var(--brand-blue)]/[0.04] to-transparent">
                <h3 className="font-[var(--font-syne)] text-xl md:text-2xl font-bold text-white mb-3">
                  Daha fazla bilgi almak ister misiniz?
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  EphorTech uzman ekibi sorularınızı yanıtlamak için hazır.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] rounded-full hover:shadow-lg hover:shadow-[var(--brand-blue)]/20 transition-all duration-300"
                  >
                    İletişime Geç
                  </Link>
                  <a
                    href="tel:08503350860"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--brand-blue)] border border-[var(--brand-blue)]/20 rounded-full hover:bg-[var(--brand-blue)]/10 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    0850 335 0860
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Back link */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] hover:text-[var(--brand-blue-light)] transition-colors group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Tüm Yazılara Dön
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
