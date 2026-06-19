import type { Product } from "@/lib/types";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  relatedProducts: Product[];
};

export default function DesktopRelatedProducts({ relatedProducts }: Props) {
  if (!relatedProducts.length) return null;

  return (
    <section className="mt-32">
      <h2 className="font-headline-md text-headline-md text-primary mb-12 text-center">Complete The Look</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {relatedProducts.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="group block">
            <div className="aspect-4-5 bg-surface-container-low mb-4 overflow-hidden relative">
              <img
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={p.images[0]}
                loading="lazy"
              />
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <PhosphorIcon icon="add" className="text-primary" size={14} />
              </button>
            </div>
            <h3 className="font-body-md text-body-md text-primary">{p.name}</h3>
            <p className="font-body-md text-body-md text-secondary mt-1">{p.currency} {p.price.toFixed(2)}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
