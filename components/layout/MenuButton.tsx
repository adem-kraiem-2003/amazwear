"use client";

import { useCartStore } from "@/stores/cart-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  className?: string;
};

export default function MenuButton({ className = "" }: Props) {
  const setMenuOpen = useCartStore((s) => s.setMenuOpen);

  return (
    <button
      aria-label="menu"
      className={className}
      onClick={() => setMenuOpen(true)}
    >
      <PhosphorIcon icon="menu" />
    </button>
  );
}
