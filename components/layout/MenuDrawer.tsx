"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

const navLinks = [
  { href: "/", label: "New In" },
  { href: "/", label: "Ready to Wear" },
  { href: "/", label: "Accessories" },
  { href: "/", label: "Journal" },
];

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

export default function MenuDrawer() {
  const menuOpen = useCartStore((s) => s.menuOpen);
  const setMenuOpen = useCartStore((s) => s.setMenuOpen);
  const { mounted, visible, triggerClose } = useAnimatedOpen(menuOpen, () => setMenuOpen(false));

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className={`absolute inset-0 bg-primary/20 backdrop-blur-md transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={triggerClose}
      />
      <nav
        className={`relative h-full w-[85%] max-w-[320px] bg-surface-container-lowest z-50 flex flex-col shadow-2xl transition-transform duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile h-16 w-full">
          <span
            className="font-display-lg-mobile text-[24px] font-bold tracking-tighter text-primary uppercase transition-all duration-500 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-8px)",
              transitionDelay: "60ms",
            }}
          >
            LUXE
          </span>
          <button
            aria-label="Close menu"
            className="flex items-center justify-center w-12 h-12 -mr-3 text-primary hover:opacity-70 transition-all active:scale-90 hover:scale-110 duration-200"
            onClick={triggerClose}
          >
            <PhosphorIcon icon="close" size={28} />
          </button>
        </div>
        <div className="flex-1 px-margin-mobile pt-12 flex flex-col gap-8 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-headline-md text-headline-md text-primary hover:text-secondary transition-colors group flex items-center justify-between"
              onClick={triggerClose}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${idx * 60 + 80}ms, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${idx * 60 + 80}ms`,
              }}
            >
              <span>{link.label}</span>
              <PhosphorIcon icon="arrow_forward" className="opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-[opacity,transform] -translate-x-4 [@media(hover:hover)]:group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </div>
        <div
          className="px-margin-mobile pb-12 pt-8 flex flex-col gap-6 transition-all duration-500 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transitionDelay: `${navLinks.length * 60 + 120}ms`,
          }}
        >
          <div className="w-full h-[1px] bg-surface-container mb-2" />
          <Link
            href="/compte"
            className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-3 active:scale-[0.97] duration-150"
            onClick={triggerClose}
          >
            <PhosphorIcon icon="person" size={18} />
            Account
          </Link>
          <Link
            href="/"
            className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-3 active:scale-[0.97] duration-150"
            onClick={triggerClose}
          >
            <PhosphorIcon icon="eco" size={18} />
            Sustainability
          </Link>
        </div>
      </nav>
    </div>
  );
}
