import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="font-[var(--font-syne)] text-[120px] sm:text-[160px] md:text-[200px] font-extrabold leading-none gradient-text opacity-20 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/15 to-[var(--brand-blue-dark)]/10 border border-[var(--brand-blue)]/20 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="font-[var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-[var(--text-secondary)] text-base sm:text-lg mb-10 leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)] to-[var(--brand-blue)]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Ana Sayfa
            </span>
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[var(--text-secondary)] rounded-full border border-white/10 hover:border-[var(--brand-blue)]/30 hover:text-white transition-all duration-300"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </main>
  );
}
