import Link from "next/link";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Color = { name: string; hex: string };

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number | null;
    currency: string;
    isNew?: boolean;
    colors: Color[];
    images: string[];
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`} className="block">
      <article className="flex flex-col gap-4 group cursor-pointer">
        <div className="relative w-full aspect-4-5 bg-surface-container rounded-lg overflow-hidden group">
          {product.isNew && (
            <div className="absolute top-4 left-4 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-1 rounded">
              NEW
            </div>
          )}
          <img
            alt={product.name}
            className="w-full h-full object-cover"
            src={product.images[0]}
            loading="lazy"
          />
          <button className="absolute bottom-4 right-4 z-10 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:hidden block hover:scale-105 active:scale-95">
            <PhosphorIcon icon="add" size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-body-md text-body-md text-primary font-medium">{product.name}</h2>
          <div className="flex items-center gap-2 font-body-md text-body-md">
            <span className="text-primary">{product.currency}{product.price}</span>
            {product.originalPrice && (
              <span className="text-secondary line-through text-sm">
                {product.currency}{product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex gap-2 mt-1">
            {product.colors.map((c) => (
              <span
                key={c.name}
                className="w-4 h-4 rounded-full border border-outline-variant"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
          <span className="mt-2 text-left font-label-sm text-label-sm text-primary underline hover:text-secondary transition-colors w-max">
            Voir plus
          </span>
        </div>
      </article>
    </Link>
  );
}
