"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PhosphorIcon from "@/components/shared/PhosphorIcon";
import CartButton from "./CartButton";
import UserButton from "./UserButton";

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      id="main-header"
      className={`w-full top-0 bg-surface z-50 sticky transition-all duration-300 ${
        scrolled ? "shadow-sm bg-surface/95 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-desktop py-8 max-w-[1440px] mx-auto">
        <div className="flex-1 flex items-center">
          <button aria-label="Search" className="text-secondary hover:text-primary transition-colors duration-200 mr-2">
            <PhosphorIcon icon="search" className="font-label-sm" />
          </button>
          <input className="bg-transparent border-none outline-none text-body-md font-body-md w-full placeholder-secondary-fixed focus:ring-0" placeholder="Search" type="text" />
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/" className="font-display-lg text-display-lg font-bold tracking-tighter text-primary">LUXE</Link>
        </div>
        <div className="flex-1 flex justify-end items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-label-sm text-label-sm uppercase tracking-widest text-secondary pb-1 hover:text-primary transition-colors duration-200">New In</Link>
            <Link href="/" className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-primary transition-colors duration-200">Ready to Wear</Link>
            <Link href="/" className="font-label-sm text-label-sm uppercase tracking-widest text-secondary pb-1 hover:text-primary transition-colors duration-200">Search</Link>
          </nav>
          <UserButton className="text-primary hover:opacity-70 scale-98 active:scale-95 transition-transform" />
          <CartButton className="text-primary hover:opacity-70 scale-98 active:scale-95 transition-transform" />
        </div>
      </div>
    </header>
  );
}
