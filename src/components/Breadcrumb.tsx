import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--brand-blue)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text-secondary)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
