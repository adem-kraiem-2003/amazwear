"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCartStore } from "@/stores/cart-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

function useAnimatedOpen(open: boolean, onClose: () => void, duration = 350) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        setMounted(true);
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      requestAnimationFrame(() => setVisible(false));
      const timer = setTimeout(() => setMounted(false), duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration]);

  const triggerClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), duration);
  };

  return { mounted, visible, triggerClose };
}

export default function CartDrawer() {
  const cartOpen = useCartStore((s) => s.cartOpen);
  const setCartOpen = useCartStore((s) => s.setCartOpen);
  const cartItems = useCartStore((s) => s.cartItems);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const { mounted, visible, triggerClose } = useAnimatedOpen(cartOpen, () => setCartOpen(false));
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (!mounted) return null;

  return (
    <div
      aria-labelledby="cart-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
    >
      <div
        className={`absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={triggerClose}
      />
      <div
        className={`relative w-full max-w-[90%] md:max-w-md h-full bg-background flex flex-col border-l border-surface-container shadow-2xl transition-transform duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-margin-mobile py-6 border-b border-surface-container shrink-0">
          <h2
            className="font-headline-md text-headline-md text-primary tracking-tight"
            id="cart-title"
          >
            Shopping Bag ({cartItems.length})
          </h2>
          <button
            aria-label="Close cart"
            className="p-2 -mr-2 text-secondary hover:text-primary transition-[color,transform,background-color] flex items-center justify-center rounded-full hover:bg-surface-container [@media(hover:hover)]:hover:scale-110 active:scale-90 duration-200"
            onClick={triggerClose}
          >
            <PhosphorIcon icon="close" />
          </button>
        </header>
        <main className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
          {cartItems.length === 0 ? (
            <motion.div
              className="flex-1 flex flex-col items-center justify-center gap-7 px-8 py-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center">
                  <PhosphorIcon icon="shopping_bag" size={40} className="text-outline" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="font-label-sm text-[10px] text-secondary font-bold">0</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 max-w-[220px]">
                <h3 className="font-headline-md text-headline-md text-primary">
                  Your bag is empty
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  Discover pieces crafted for those who set the tone.
                </p>
              </div>

              <Link
                href="/"
                onClick={triggerClose}
                className="font-label-sm text-label-sm uppercase tracking-widest border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-on-primary transition-[background-color,color,transform] duration-200 active:scale-[0.97]"
              >
                Explore Collection
              </Link>

              <p className="font-label-sm text-label-sm text-secondary/60 mt-4">
                Free shipping on orders over $150
              </p>
            </motion.div>
          ) : (
          <div className="p-margin-mobile flex flex-col gap-8">
          {cartItems.map((item, idx) => (
            <div
              key={`${item.id}-${item.color}-${item.size}`}
              className="flex gap-4 group transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${idx * 60}ms`,
              }}
            >
              <div className="w-28 shrink-0 aspect-[4/5] bg-surface-container rounded-DEFAULT overflow-hidden">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={item.image}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-body-md text-body-md font-medium text-primary leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-body-md text-body-md text-primary shrink-0">
                      ${item.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {item.colorHex && (
                      <span
                        className="w-3 h-3 rounded-full border border-outline-variant shrink-0"
                        style={{ backgroundColor: item.colorHex }}
                      />
                    )}
                    {item.color && (
                      <p className="font-label-sm text-label-sm text-secondary">{item.color}</p>
                    )}
                    {item.size && (
                      <p className="font-label-sm text-label-sm text-secondary">
                        / Size: {item.size}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-surface-container rounded-DEFAULT bg-surface">
                    <button
                      aria-label="Decrease quantity"
                      className="w-8 h-8 flex items-center justify-center text-secondary hover:text-primary transition-all active:scale-90 duration-150"
                      onClick={() => updateQuantity(item.id, item.color, item.size, -1)}
                    >
                      <PhosphorIcon icon="remove" size={16} />
                    </button>
                    <span className="w-6 text-center font-label-sm text-label-sm text-primary">
                      {item.quantity}
                    </span>
                    <button
                      aria-label="Increase quantity"
                      className="w-8 h-8 flex items-center justify-center text-secondary hover:text-primary transition-all active:scale-90 duration-150"
                      onClick={() => updateQuantity(item.id, item.color, item.size, 1)}
                    >
                      <PhosphorIcon icon="add" size={16} />
                    </button>
                  </div>
                  <button
                    className="font-label-sm text-label-sm text-secondary hover:text-primary underline underline-offset-4 decoration-surface-container hover:decoration-primary transition-all active:scale-95 duration-150"
                    onClick={() => removeItem(item.id, item.color, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
          )}
        </main>
        {cartItems.length > 0 && (
          <footer
            className="border-t border-surface-container bg-background p-margin-mobile shrink-0 pb-10 transition-[opacity,transform] duration-500 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transitionDelay: `${Math.min(cartItems.length, 4) * 60 + 80}ms`,
            }}
          >
            <div className="flex flex-col gap-1 mb-6">
              <div className="flex justify-between items-baseline">
                <span className="font-body-md text-body-md text-secondary">Subtotal</span>
                <span className="font-headline-md text-headline-md text-primary">${subtotal}</span>
              </div>
              <p className="font-label-sm text-label-sm text-secondary">
                Taxes and shipping calculated at checkout.
              </p>
            </div>
            <Link
              href="/checkout"
              className="w-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-on-surface transition-[background-color,transform] active:scale-[0.98] duration-200"
              onClick={triggerClose}
            >
              <span>Continue to Checkout</span>
              <PhosphorIcon icon="arrow_forward" size={18} />
            </Link>
          </footer>
        )}
      </div>
    </div>
  );
}
