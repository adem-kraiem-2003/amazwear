import Link from "next/link";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import UserButton from "./UserButton";

export default function MobileHeader() {
  return (
    <header className="bg-background/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 max-w-7xl mx-auto">
      <MenuButton className="text-secondary hover:opacity-70 transition-opacity scale-98 active:scale-95 duration-200" />
      <Link href="/" className="font-display-lg-mobile text-display-lg-mobile font-bold tracking-tighter text-primary">
        LUXE
      </Link>
      <div className="flex items-center gap-4">
        <UserButton className="text-secondary hover:opacity-70 transition-opacity scale-98 active:scale-95 duration-200" />
        <CartButton className="text-secondary hover:opacity-70 transition-opacity scale-98 active:scale-95 duration-200" />
      </div>
    </header>
  );
}
