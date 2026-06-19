"use client";

import { useCartStore } from "@/stores/cart-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  className?: string;
  label?: string;
};

export default function CartButton({ className = "", label }: Props) {
  const setCartOpen = useCartStore((s) => s.setCartOpen);

  return (
    <button
      aria-label={label || "shopping_bag"}
      className={className}
      onClick={() => setCartOpen(true)}
    >
      {label ? (
        <span>{label}</span>
      ) : (
        <PhosphorIcon icon="shopping_bag" />
      )}
    </button>
  );
}
