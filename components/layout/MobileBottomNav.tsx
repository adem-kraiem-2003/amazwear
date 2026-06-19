import Link from "next/link";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-background border-t border-surface-container z-50 px-margin-mobile pb-safe">
      <button aria-label="home" className="flex flex-col items-center justify-center text-primary scale-110 transition-all duration-200">
        <PhosphorIcon icon="home" fill={1} />
      </button>
      <button aria-label="search" className="flex flex-col items-center justify-center text-secondary hover:text-primary scale-98 active:scale-90 transition-all duration-200">
        <PhosphorIcon icon="search" />
      </button>
      <button aria-label="favorite" className="flex flex-col items-center justify-center text-secondary hover:text-primary scale-98 active:scale-90 transition-all duration-200">
        <PhosphorIcon icon="favorite" />
      </button>
      <Link href="/auth" aria-label="person" className="flex flex-col items-center justify-center text-secondary hover:text-primary scale-98 active:scale-90 transition-all duration-200">
        <PhosphorIcon icon="person" />
      </Link>
    </nav>
  );
}
