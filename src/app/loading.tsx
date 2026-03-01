export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--brand-blue)]/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--brand-blue)] animate-spin" />
        </div>
        <span className="text-sm text-[var(--text-muted)] font-medium">Yükleniyor...</span>
      </div>
    </div>
  );
}
