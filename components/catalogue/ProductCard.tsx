"use client";

import Link from "next/link";
import PhosphorIcon from "@/components/shared/PhosphorIcon";
import type { Product } from "@/lib/types";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const setCartOpen = useCartStore((s) => s.setCartOpen);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] ?? "",
      color: product.colors[0]?.name ?? "",
      colorHex: product.colors[0]?.hex,
      size: product.sizes?.[0] ?? "",
    });
    setCartOpen(true);
  };

  return (
    <Link href={`/product/${product.id}`} className="block group">
      <article className="flex flex-col gap-4 cursor-pointer">
        <div className="relative w-full aspect-4-5 bg-surface-container-low overflow-hidden">
          {product.isNew && (
            <span className="absolute top-3 left-3 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5">
              NEW
            </span>
          )}
          <img
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={product.images[0] ?? ""}
            loading="lazy"
          />
          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to cart`}
            className="absolute bottom-4 right-4 z-10 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center md:hidden active:scale-95 transition-transform duration-150"
          >
            <PhosphorIcon icon="add" size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-1.5">
          <h2 className="font-body-md text-body-md text-primary font-medium leading-snug">
            {product.name}
          </h2>
          <div className="flex items-center gap-2 font-body-md text-body-md">
            <span className="text-primary">
              {product.currency}{product.price}
            </span>
            {product.originalPrice != null && (
              <span className="text-secondary line-through text-sm">
                {product.currency}{product.originalPrice}
              </span>
            )}
          </div>
          {product.colors.length > 0 && (
            <div className="flex gap-1.5 mt-0.5">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  className="w-4 h-4 rounded-full border border-outline-variant"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          )}
          <span className="mt-1 font-label-sm text-label-sm text-secondary underline underline-offset-2 group-hover:text-primary transition-colors duration-150 w-max">
            View product
          </span>
        </div>
      </article>
    </Link>
  );
}
