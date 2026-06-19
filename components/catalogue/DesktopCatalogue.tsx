"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";
import PhosphorIcon from "@/components/shared/PhosphorIcon";
import Link from "next/link";

type Props = {
  products: Product[];
};

const ITEMS_PER_PAGE = 12;

export default function DesktopCatalogue({ products }: Props) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = products.slice(start, start + ITEMS_PER_PAGE);

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-desktop py-12 flex flex-col gap-12">
      <section className="flex flex-col gap-8">
        <h1 className="font-display-lg text-display-lg">Ready to Wear</h1>
        <FilterBar />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12">
        {visible.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} className="group cursor-pointer flex flex-col gap-4">
            <div className="relative w-full aspect-4-5 bg-surface-container-low overflow-hidden">
              <img
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={p.images[0]}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-surface/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-3 px-6 rounded-DEFAULT hover:bg-surface hover:text-primary border border-primary transition-colors duration-200 scale-98 active:scale-95">
                  View More
                </button>
              </div>
              <button className="md:hidden absolute bottom-4 right-4 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                <PhosphorIcon icon="add" size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-body-md text-body-md text-primary font-medium">{p.name}</h3>
              <p className="font-body-md text-body-md text-secondary">{p.currency}{p.price}</p>
            </div>
          </Link>
        ))}
      </section>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </main>
  );
}
