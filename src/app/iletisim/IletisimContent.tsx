"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { TextReveal } from "@/components/AnimatedSection";
import Breadcrumb from "@/components/Breadcrumb";

const contactInfo = [
  {
    label: "Merkez Ofis",
    value: "Barbaros Mh. Mor Sumbul Sk. No:5/A Deluxia Palace K:17 / 474 ATASEHIR / ISTANBUL",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Teknik Servis",
    value: "Cihangir Mah. E5 Yan Yol Uzeri Turksan Center A Blok No: 291 2L Avcilar / Istanbul 34310",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "E-Posta",
    value: "info@ephortech.com",
    href: "mailto:info@ephortech.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Musteri Hizmetleri",
    value: "0850 335 0860",
    href: "tel:08503350860",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Calisma Saatleri",
    value: "Hafta ici: 08:30 - 22:00 | Cumartesi: 10:00 - 15:00",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  kvkk?: string;
}

export default function IletisimContent() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", kvkk: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Ad Soyad gereklidir.";
    if (!form.email.trim()) newErrors.email = "E-posta gereklidir.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Gecerli bir e-posta giriniz.";
    if (!form.subject) newErrors.subject = "Konu seciniz.";
    if (!form.message.trim()) newErrors.message = "Mesajinizi yaziniz.";
    if (!form.kvkk) newErrors.kvkk = "KVKK onayini vermelisiniz.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="hero-gradient" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
            <Breadcrumb items={[{ label: "Anasayfa", href: "/" }, { label: "Iletisim" }]} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 text-sm font-medium text-[var(--brand-blue-light)] mb-6">
                Iletisim
              </span>
              <h1 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <TextReveal>Iletisim</TextReveal>{" "}
                <TextReveal delay={0.2}>
                  <span className="gradient-text">Bilgilerimiz</span>
                </TextReveal>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl text-[var(--text-secondary)]"
              >
                Size en uygun cozumu sunmak icin haziriz.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Form */}
              <AnimatedSection delay={0.1} className="lg:col-span-3 gradient-border p-5 sm:p-8 md:p-10 rounded-2xl">
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6"
                      >
                        <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </motion.div>
                      <h3 className="font-[var(--font-syne)] text-2xl font-bold text-white mb-3">Mesajiniz Iletildi!</h3>
                      <p className="text-[var(--text-secondary)] max-w-sm">En kisa surede sizinle iletisime gececegiz.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form">
                      <h2 className="font-[var(--font-syne)] text-2xl font-bold mb-8">Mesaj Gonderin</h2>
                      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="iletisim-name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Isim</label>
                            <input
                              id="iletisim-name"
                              type="text"
                              placeholder="Adiniz"
                              value={form.name}
                              onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                              className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border ${errors.name ? "border-red-500/50" : "border-white/5"} text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:ring-1 focus:ring-[var(--brand-blue)]/20 transition-all`}
                            />
                            {errors.name && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5">{errors.name}</motion.p>}
                          </div>
                          <div>
                            <label htmlFor="iletisim-email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                            <input
                              id="iletisim-email"
                              type="email"
                              placeholder="ornek@sirket.com"
                              value={form.email}
                              onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                              className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border ${errors.email ? "border-red-500/50" : "border-white/5"} text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:ring-1 focus:ring-[var(--brand-blue)]/20 transition-all`}
                            />
                            {errors.email && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5">{errors.email}</motion.p>}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="iletisim-subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Konu</label>
                          <select
                            id="iletisim-subject"
                            value={form.subject}
                            onChange={(e) => { setForm({ ...form, subject: e.target.value }); setErrors({ ...errors, subject: undefined }); }}
                            className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border ${errors.subject ? "border-red-500/50" : "border-white/5"} text-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:ring-1 focus:ring-[var(--brand-blue)]/20 transition-all appearance-none cursor-pointer`}
                          >
                            <option value="">Konu Seciniz</option>
                            <option value="sigorta">Sigorta Firmalari</option>
                            <option value="kurum">Kurumsal Hizmetler</option>
                            <option value="marka">Marka Cozumleri</option>
                            <option value="konut">Konut Projeleri</option>
                            <option value="diger">Diger</option>
                          </select>
                          {errors.subject && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5">{errors.subject}</motion.p>}
                        </div>
                        <div>
                          <label htmlFor="iletisim-message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Mesajiniz</label>
                          <textarea
                            id="iletisim-message"
                            rows={6}
                            placeholder="Mesajinizi buraya yazabilirsiniz..."
                            value={form.message}
                            onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: undefined }); }}
                            className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-secondary)] border ${errors.message ? "border-red-500/50" : "border-white/5"} text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)]/40 focus:ring-1 focus:ring-[var(--brand-blue)]/20 transition-all resize-none`}
                          />
                          {errors.message && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs mt-1.5">{errors.message}</motion.p>}
                        </div>
                        <div className="flex items-start gap-3">
                          <input
                            id="iletisim-kvkk"
                            type="checkbox"
                            checked={form.kvkk}
                            onChange={(e) => { setForm({ ...form, kvkk: e.target.checked }); setErrors({ ...errors, kvkk: undefined }); }}
                            className="mt-1 w-4 h-4 rounded border-white/20 bg-[var(--bg-secondary)] text-[var(--brand-blue)] focus:ring-[var(--brand-blue)]/30 cursor-pointer accent-[var(--brand-blue)]"
                          />
                          <label htmlFor="iletisim-kvkk" className="text-xs text-[var(--text-muted)] leading-relaxed cursor-pointer">
                            <a href="/yasal#kvkk" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-blue)] hover:underline">KVKK Aydinlatma Metni</a>&apos;ni okudum ve kisisel verilerimin islenmesini kabul ediyorum.
                          </label>
                        </div>
                        {errors.kvkk && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs -mt-4">{errors.kvkk}</motion.p>}
                        <button
                          type="submit"
                          disabled={formState === "submitting"}
                          className="group relative w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold overflow-hidden magnetic-btn disabled:opacity-70"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-105" />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {formState === "submitting" ? (
                              <>
                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                Gonderiliyor...
                              </>
                            ) : (
                              <>
                                Gonder
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </>
                            )}
                          </span>
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimatedSection>

              {/* Info */}
              <div className="lg:col-span-2 space-y-4">
                {contactInfo.map((item, i) => (
                  <AnimatedSection key={item.label} delay={0.3 + i * 0.1} direction="right">
                    <div className="group gradient-border p-6 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center text-[var(--brand-blue)] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <span className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.label}</span>
                          {item.href ? (
                            <a href={item.href} className="text-[var(--text-secondary)] hover:text-white transition-colors">{item.value}</a>
                          ) : (
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ofis Gorselleri */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatedSection delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image src="/images/cagri-merkezi.png" alt="Cagri Merkezi" width={400} height={250} className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" quality={85} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent rounded-2xl" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-semibold text-white/90">Cagri Merkezi</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image src="/images/servis.png" alt="Teknik Servis" width={400} height={250} className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" quality={85} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent rounded-2xl" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-semibold text-white/90">Teknik Servis</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image src="/images/slider-devices.png" alt="Cihazlar" width={400} height={250} className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" quality={85} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent rounded-2xl" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-semibold text-white/90">Cihazlar</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
                <iframe
                  title="EphorTech Konum"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6!2d29.128!3d40.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzI0LjAiTiAyOcKwMDcnNDAuOCJF!5e0!3m2!1str!2str!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
