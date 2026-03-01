"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl glass-card-deep rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Deneyiminizi iyileştirmek için çerezler kullanıyoruz. Sitemizi kullanmaya devam ederek{" "}
                  <Link href="/yasal#cerez-politikasi" className="text-[var(--brand-blue)] hover:underline">
                    Çerez Politikamızı
                  </Link>{" "}
                  ve{" "}
                  <Link href="/yasal#kvkk" className="text-[var(--brand-blue)] hover:underline">
                    KVKK Aydınlatma Metnimizi
                  </Link>{" "}
                  kabul etmiş olursunuz.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={reject}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-[var(--text-muted)] rounded-xl border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                >
                  Reddet
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)] rounded-xl hover:shadow-lg hover:shadow-[var(--brand-blue)]/20 transition-all duration-300"
                >
                  Kabul Et
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
