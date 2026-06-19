"use client";

import { useState } from "react";
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
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full h-12 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center gap-2 scale-98 active:scale-95 transition-all duration-200 ${
        added ? "bg-tertiary-container text-on-tertiary" : "bg-primary text-on-primary"
      }`}
    >
      <span>{added ? "Added" : "Add to Cart"}</span>
      {added && <PhosphorIcon icon="check" />}
    </button>
  );
}
