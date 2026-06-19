"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Category, Product } from "@/lib/types";
import FilterSidebar, { FilterState, DEFAULT_FILTERS } from "./FilterSidebar";
import Pagination from "./Pagination";
import PhosphorIcon from "@/components/shared/PhosphorIcon";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  products: Product[];
  categories: Category[];
};

const ITEMS_PER_PAGE = 12;

export default function DesktopCatalogue({ products, categories }: Props) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);

  const addItem = useCartStore((s) => s.addItem);
  const setCartOpen = useCartStore((s) => s.setCartOpen);

  const availableSizes = useMemo(() => {
    const seen = new Set<string>();
    products.forEach((p) => p.sizes?.forEach((s) => seen.add(s)));
    return Array.from(seen);
  }, [products]);

  const availableColors = useMemo(() => {
    const seen = new Set<string>();
    const result: { name: string; hex: string }[] = [];
    products.forEach((p) =>
      p.colors.forEach((c) => {
        if (!seen.has(c.name)) {
          seen.add(c.name);
          result.push(c);
        }
      })
    );
    return result;
  }, [products]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes?.some((s) => filters.sizes.includes(s))
      );
    }
    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => filters.colors.includes(c.name))
      );
    }

    switch (filters.sort) {
      case "price-asc":
        return [...result].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...result].sort((a, b) => b.price - a.price);
      case "new":
        return [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      default:
        return result;
    }
  }, [products, filters]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handleFiltersChange = (next: FilterState) => {
    setFilters(next);
    setPage(1);
  };

  const handleQuickAdd = (product: Product) => {
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
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-desktop py-12">
      <h1 className="font-display-lg text-display-lg mb-10">Ready to Wear</h1>
      <div className="flex gap-12 items-start">
        <FilterSidebar
          categories={categories}
          availableSizes={availableSizes}
          availableColors={availableColors}
          filters={filters}
          resultCount={filtered.length}
          onChange={handleFiltersChange}
        />

        <div className="flex-1 min-w-0 flex flex-col gap-12">
          <section className="grid grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-12">
            {visible.map((p) => (
              <article key={p.id} className="group flex flex-col gap-4">
                <div className="relative w-full aspect-4-5 bg-surface-container-low overflow-hidden">
                  {p.isNew && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5">
                      NEW
                    </span>
                  )}
                  <Link href={`/product/${p.id}`} className="block w-full h-full">
                    <img
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={p.images[0] ?? ""}
                      loading="lazy"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute bottom-4 left-0 right-0 px-4 flex items-center justify-between opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <Link
                      href={`/product/${p.id}`}
                      className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-2.5 px-5"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(p)}
                      aria-label={`Add ${p.name} to cart`}
                      className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center hover:bg-surface hover:text-primary border border-primary transition-colors duration-150"
                    >
                      <PhosphorIcon icon="add" size={18} />
                    </button>
                  </div>
                </div>

                <Link href={`/product/${p.id}`} className="flex flex-col gap-1">
                  <h3 className="font-body-md text-body-md text-primary font-medium leading-snug">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 font-body-md text-body-md">
                    <span className="text-primary">
                      {p.currency}{p.price}
                    </span>
                    {p.originalPrice != null && (
                      <span className="text-secondary line-through text-sm">
                        {p.currency}{p.originalPrice}
                      </span>
                    )}
                  </div>
                  {p.colors.length > 0 && (
                    <div className="flex gap-1.5 mt-1">
                      {p.colors.map((c) => (
                        <span
                          key={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-outline-variant"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </section>

          {visible.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-body-md text-body-md text-secondary">
                No products match your filters.
              </p>
              <button
                type="button"
                onClick={() => handleFiltersChange(DEFAULT_FILTERS)}
                className="mt-4 font-label-sm text-label-sm text-primary underline underline-offset-2 hover:text-secondary transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          )}
        </div>
      </div>
    </main>
  );
}
