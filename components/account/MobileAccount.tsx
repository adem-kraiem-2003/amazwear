"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

const NAV_ITEMS = [
  { icon: "receipt_long", label: "Order History" },
  { icon: "person", label: "Personal Information" },
  { icon: "location_on", label: "Saved Addresses" },
  { icon: "credit_card", label: "Payment Methods" },
  { icon: "settings", label: "Settings" },
];

export default function MobileAccount() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  if (!user) {
    router.push("/auth");
    return null;
  }

  return (
    <>
      <header className="w-full sticky top-0 z-50 border-b border-outline-variant bg-surface/80 backdrop-blur-md">
        <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop w-full">
          <button className="text-primary hover:opacity-70 transition-opacity active:scale-95 transition-transform duration-200" aria-label="Menu">
            <PhosphorIcon icon="menu" />
          </button>
          <div className="font-headline-md text-headline-md tracking-widest text-primary uppercase text-center flex-1">
            LUXE
          </div>
          <button className="text-primary hover:opacity-70 transition-opacity active:scale-95 transition-transform duration-200" aria-label="Shopping bag">
            <PhosphorIcon icon="shopping_bag" />
          </button>
        </div>
      </header>

      <main className="flex-1 px-margin-mobile md:px-margin-desktop py-8 flex flex-col pb-32">
        <div className="mb-12">
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2">Hello, {user.name.split(" ")[0]}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">{user.email}</p>
        </div>

        <nav className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              className="group flex items-center justify-between py-4 border-b border-surface-container active:scale-[0.98] transition-transform duration-200"
              href="#"
            >
              <div className="flex items-center space-x-4">
                <PhosphorIcon icon={item.icon} className="text-primary font-light" />
                <span className="font-body-lg text-body-lg text-primary">{item.label}</span>
              </div>
              <PhosphorIcon icon="chevron_right" className="text-outline group-hover:text-primary transition-colors" />
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-12">
          <button
            onClick={() => { logout(); router.push("/auth"); }}
            className="w-full h-[48px] bg-transparent border border-outline text-primary font-label-sm text-label-sm uppercase tracking-wider rounded flex items-center justify-center active:scale-[0.98] transition-transform duration-200 hover:bg-surface-container"
          >
            Sign Out
          </button>
        </div>
      </main>
    </>
  );
}
