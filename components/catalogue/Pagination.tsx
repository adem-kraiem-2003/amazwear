import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 3) pages.push("...");
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <div className="flex justify-center items-center gap-2 py-8">
      <button
        className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
      >
        <PhosphorIcon icon="chevron_left" size={14} />
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="w-6 text-center font-label-sm text-label-sm text-secondary">
            ...
          </span>
        ) : (
          <button
            key={p}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-label-sm text-label-sm transition-all active:scale-95 ${
              p === page
                ? "bg-primary text-on-primary"
                : "border border-outline-variant text-secondary hover:border-primary hover:text-primary"
            }`}
            onClick={() => onChange(p)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}
      <button
        className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
      >
        <PhosphorIcon icon="chevron_right" size={14} />
      </button>
    </div>
  );
}
