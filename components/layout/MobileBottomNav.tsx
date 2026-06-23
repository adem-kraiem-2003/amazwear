"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

const navItems = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/?search=1", icon: "search", label: "Search" },
  { href: "/compte", icon: "person", label: "Account" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-background border-t border-surface-container z-50 pb-safe"
    >
      {navItems.map(({ href, icon, label }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href.split("?")[0]);
        return (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-1 transition-[color,transform] duration-150 active:scale-90 ${
              isActive ? "text-primary" : "text-secondary"
            }`}
          >
            <PhosphorIcon icon={icon} fill={isActive ? 1 : 0} size={24} />
            <span className="text-[10px] font-medium tracking-wide leading-none">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
