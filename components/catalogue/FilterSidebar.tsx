"use client";

import { useState } from "react";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

export type SortOption = "featured" | "price-asc" | "price-desc" | "new";

export type FilterState = {
  category: string;
  sizes: string[];
  colors: string[];
  sort: SortOption;
};

export const DEFAULT_FILTERS: FilterState = {
  category: "",
  sizes: [],
  colors: [],
  sort: "featured",
};

type ColorOption = { name: string; hex: string };
type CategoryOption = { id: string; name: string };

type SectionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function Section({ title, children, defaultOpen = true }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-outline-variant">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
          {title}
        </span>
        <PhosphorIcon
          icon="add"
          size={16}
          className={`text-secondary transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "New Arrivals" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

type Props = {
  categories: CategoryOption[];
  availableSizes: string[];
  availableColors: ColorOption[];
  filters: FilterState;
  resultCount: number;
  onChange: (filters: FilterState) => void;
};

export default function FilterSidebar({
  categories,
  availableSizes,
  availableColors,
  filters,
  resultCount,
  onChange,
}: Props) {
  const hasActiveFilters =
    filters.category !== "" ||
    filters.sizes.length > 0 ||
    filters.colors.length > 0;

  const toggleSize = (size: string) => {
    const next = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onChange({ ...filters, sizes: next });
  };

  const toggleColor = (color: string) => {
    const next = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onChange({ ...filters, colors: next });
  };

  return (
    <aside className="w-[220px] shrink-0 sticky top-24 self-start">
      <div className="flex items-end justify-between mb-1 pb-4 border-b border-outline-variant">
        <div>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-0.5">
            Filters
          </p>
          <p className="font-body-md text-body-md text-secondary">
            {resultCount} {resultCount === 1 ? "result" : "results"}
          </p>
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => onChange({ ...DEFAULT_FILTERS, sort: filters.sort })}
            className="font-label-sm text-label-sm text-secondary hover:text-primary underline underline-offset-2 transition-colors duration-150 pb-0.5"
          >
            Clear all
          </button>
        )}
      </div>

      <Section title="Sort" defaultOpen={false}>
        <div className="flex flex-col gap-0.5">
          {SORT_OPTIONS.map((opt) => {
            const active = filters.sort === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange({ ...filters, sort: opt.value })}
                className={`flex items-center gap-2.5 py-1.5 text-left font-body-md text-body-md transition-colors duration-150 ${
                  active ? "text-primary" : "text-secondary hover:text-primary"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                    active ? "bg-primary" : "bg-transparent"
                  }`}
                />
                {opt.label}
              </button>
            );
          })}
        </div>
      </Section>

      {categories.length > 0 && (
        <Section title="Category">
          <div className="flex flex-col gap-0.5">
            {categories.map((cat) => {
              const active = filters.category === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() =>
                    onChange({ ...filters, category: active ? "" : cat.id })
                  }
                  className={`flex items-center gap-2.5 py-1.5 text-left font-body-md text-body-md transition-all duration-150 ${
                    active ? "text-primary" : "text-secondary hover:text-primary"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                      active ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`transition-transform duration-150 ${
                      active ? "translate-x-0.5" : ""
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </Section>
      )}

      {availableSizes.length > 0 && (
        <Section title="Size">
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => {
              const active = filters.sizes.includes(size);
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleSize(size)}
                  aria-pressed={active}
                  className={`min-w-[36px] h-8 px-2 font-label-sm text-label-sm border transition-all duration-150 rounded-DEFAULT ${
                    active
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-transparent text-secondary border-outline-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </Section>
      )}

      {availableColors.length > 0 && (
        <Section title="Color">
          <div className="flex flex-col gap-1.5">
            {availableColors.map((color) => {
              const active = filters.colors.includes(color.name);
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => toggleColor(color.name)}
                  aria-pressed={active}
                  className={`flex items-center gap-3 py-0.5 text-left transition-colors duration-150 ${
                    active ? "text-primary" : "text-secondary hover:text-primary"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex-shrink-0 transition-all duration-150 ${
                      active
                        ? "border-2 border-primary"
                        : "border border-outline-variant"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="font-body-md text-body-md capitalize">{color.name}</span>
                  {active && (
                    <PhosphorIcon icon="check" size={14} className="ml-auto text-primary" />
                  )}
                </button>
              );
            })}
          </div>
        </Section>
      )}
    </aside>
  );
}
