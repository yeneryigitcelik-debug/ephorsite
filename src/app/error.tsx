"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-red-500/15 to-red-600/10 border border-red-500/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>

        <h1 className="font-[var(--font-syne)] text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Bir Hata Oluştu
        </h1>
        <p className="text-[var(--text-secondary)] text-base mb-10 leading-relaxed">
          Beklenmeyen bir hata meydana geldi. Lütfen tekrar deneyin veya ana sayfaya dönün.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              Tekrar Dene
            </span>
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white transition-all duration-300"
          >
            Ana Sayfa
          </a>
        </div>
      </div>
    </main>
  );
}
