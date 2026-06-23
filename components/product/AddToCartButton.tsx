"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/stores/cart-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  productId?: string;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  selectedColor?: string;
  selectedColorHex?: string;
  selectedSize?: string;
};

export default function AddToCartButton({
  productId,
  productName,
  productPrice,
  productImage,
  selectedColor,
  selectedColorHex,
  selectedSize,
}: Props) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const setCartOpen = useCartStore((s) => s.setCartOpen);

  const handleClick = () => {
    if (productId && productName) {
      addItem({
        id: productId,
        name: productName,
        price: productPrice ?? 0,
        image: productImage ?? "",
        color: selectedColor ?? "",
        colorHex: selectedColorHex,
        size: selectedSize ?? "",
      });
      setCartOpen(true);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full h-12 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-[background-color,transform] duration-200 active:scale-[0.97] overflow-hidden relative ${
        added ? "bg-tertiary-container text-on-tertiary" : "bg-primary text-on-primary"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="added"
            className="flex items-center gap-2"
            initial={{ opacity: 0, filter: "blur(4px)", y: 6 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span>Added</span>
            <PhosphorIcon icon="check" />
          </motion.span>
        ) : (
          <motion.span
            key="add"
            className="flex items-center gap-2"
            initial={{ opacity: 0, filter: "blur(4px)", y: 6 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span>Add to Cart</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
