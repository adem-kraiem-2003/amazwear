"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

type Props = {
  products: Product[];
};

const ITEMS_PER_PAGE = 6;

export default function MobileCatalogue({ products }: Props) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = products.slice(start, start + ITEMS_PER_PAGE);

  return (
    <main className="px-margin-mobile pt-6 flex flex-col gap-8">
      <SearchBar />
      <div className="flex flex-col gap-10">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </main>
  );
}
