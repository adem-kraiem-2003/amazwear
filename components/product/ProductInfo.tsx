"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  name: string;
  price: number;
  currency: string;
  description?: string;
  details?: string[];
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProductInfo({ name, price, currency, description, details }: Props) {
  const [expanded, setExpanded] = useState<string[]>(["details"]);

  const toggle = (id: string) =>
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const hasDetails = description || (details && details.length > 0);

  return (
    <>
      <div className="px-margin-mobile py-6 flex flex-col gap-unit">
        <div className="flex justify-between items-start">
          <h1 className="font-headline-md text-headline-md text-primary">{name}</h1>
          <button
            aria-label="Save to wishlist"
            className="text-secondary hover:text-primary transition-colors active:scale-90 duration-150"
          >
            <PhosphorIcon icon="favorite_border" />
          </button>
        </div>
        <p className="font-body-lg text-body-lg text-secondary">{currency} {price.toFixed(2)}</p>
      </div>

      <div className="w-full h-px bg-surface-container" />

      {hasDetails && (
        <div className="border-b border-surface-container">
          <button
            onClick={() => toggle("details")}
            className="w-full px-margin-mobile py-4 flex items-center justify-between text-left"
            aria-expanded={expanded.includes("details")}
          >
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Details
            </span>
            <motion.span
              animate={{ rotate: expanded.includes("details") ? 45 : 0 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="text-secondary"
            >
              <PhosphorIcon icon="add" size={20} />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {expanded.includes("details") && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="px-margin-mobile pb-6 flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant">
                  {description && <p>{description}</p>}
                  {details && details.length > 0 && (
                    <ul className="list-disc pl-4 space-y-1 text-secondary">
                      {details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="border-b border-surface-container">
        <button
          onClick={() => toggle("shipping")}
          className="w-full px-margin-mobile py-4 flex items-center justify-between text-left"
          aria-expanded={expanded.includes("shipping")}
        >
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Shipping &amp; Returns
          </span>
          <motion.span
            animate={{ rotate: expanded.includes("shipping") ? 45 : 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="text-secondary"
          >
            <PhosphorIcon icon="add" size={20} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {expanded.includes("shipping") && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="px-margin-mobile pb-6 font-body-md text-body-md text-secondary">
                Free standard shipping on orders over $150. Returns accepted within 30 days — items must be unworn and in original packaging.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
