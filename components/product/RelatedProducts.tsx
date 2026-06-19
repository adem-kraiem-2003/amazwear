import type { Product } from "@/lib/types";
import "@/styles/mobile.css";

type Props = {
  relatedProducts: Product[];
};

export default function RelatedProducts({ relatedProducts }: Props) {
  if (!relatedProducts.length) return null;

  return (
    <section className="py-8 flex flex-col gap-4">
      <h2 className="font-label-sm text-label-sm uppercase text-primary px-margin-mobile">Complete The Look</h2>
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-margin-mobile gap-4 pb-4">
        {relatedProducts.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="w-48 flex-shrink-0 snap-start flex flex-col gap-2 group">
            <div className="aspect-[4/5] bg-surface-container rounded-DEFAULT overflow-hidden">
              <img alt={p.name} className="w-full h-full object-cover" src={p.images[0]} loading="lazy" />
            </div>
            <div className="flex flex-col">
              <span className="font-body-md text-body-md text-primary truncate">{p.name}</span>
              <span className="font-body-md text-body-md text-secondary">{p.currency} {p.price.toFixed(2)}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
