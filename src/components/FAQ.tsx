"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "EphorTech hangi hizmetleri sunuyor?",
    answer:
      "EphorTech; sigorta firmaları, kurumsal şirketler, markalar ve konut projeleri için kapsamlı teknik servis hizmetleri sunmaktadır. Arıza/hasar onarım, çağrı merkezi hizmetleri, servis yönetim yazılımı ve detaylı raporlama çözümlerimizle hizmet veriyoruz.",
  },
  {
    question: "Türkiye'nin neresinde hizmet veriyorsunuz?",
    answer:
      "81 ilde 1.000'e yakın yetkili servis noktamızla Türkiye genelinde hizmet vermekteyiz. Nerede olursanız olun, aynı kalitede ve standartlarda teknik servis desteği alabilirsiniz.",
  },
  {
    question: "Onarım sonrası garanti süresi ne kadar?",
    answer:
      "Tüm onarım hizmetlerimiz 1 yıl garanti kapsamındadır. Garanti süresince aynı arızanın tekrarlanması durumunda ücretsiz onarım hizmeti sunulmaktadır.",
  },
  {
    question: "Sigorta kapsamında onarım nasıl gerçekleşiyor?",
    answer:
      "Sigorta firmanız üzerinden dosya açıldıktan sonra, EphorTech çağrı merkezi sizinle iletişime geçer. Cihazınız en yakın yetkili servis noktasına yönlendirilir ve poliçe kapsamında onarımınız gerçekleştirilir. Tüm süreç şeffaf bir şekilde takip edilebilir.",
  },
  {
    question: "Hangi cihaz türlerinde hizmet veriyorsunuz?",
    answer:
      "Beyaz eşya, küçük ev aletleri, televizyon, bilgisayar, cep telefonu, klima ve kombi dahil olmak üzere geniş bir yelpazede elektronik cihaz onarım hizmeti sunmaktayız.",
  },
  {
    question: "Kurumsal firmalar için özel çözümleriniz var mı?",
    answer:
      "Evet, kurumsal firmalar için özel SLA anlaşmaları, öncelikli servis, özel raporlama paneli ve toplu cihaz yönetim çözümleri sunmaktayız. 200+ kurumsal müşterimize özel hizmet paketleri sağlıyoruz.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        className={`group relative rounded-2xl border transition-all duration-500 ${
          open
            ? "border-[var(--brand-blue)]/20 bg-white/[0.03]"
            : "border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08]"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-xs font-bold text-[var(--brand-blue)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-[var(--font-syne)] text-base md:text-lg font-bold text-white group-hover:text-[var(--brand-blue-light)] transition-colors duration-300">
              {faq.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--brand-blue)] group-hover:border-[var(--brand-blue)]/20 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
}

export default function FAQ() {
  return (
    <section id="sss" className="relative py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-radial-[at_center] from-[var(--brand-blue)]/[0.02] to-transparent rounded-full" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 pt-20">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/[0.06] text-sm font-medium text-[var(--brand-blue-light)] mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            SSS
          </span>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Sıkça Sorulan{" "}
            <span className="gradient-text">Sorular</span>
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Merak ettiğiniz her şeyin yanıtını burada bulabilirsiniz.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
