import Link from "next/link";

export default function DesktopFooter() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-12 max-w-[1440px] mx-auto gap-8 md:gap-0">
        <div className="flex-1">
          <span className="font-display-lg text-display-lg font-bold text-primary">LUXE</span>
        </div>
        <div className="flex-1 flex justify-center">
          <span className="font-label-sm text-label-sm text-secondary">&copy; 2024 LUXE. All rights reserved.</span>
        </div>
        <div className="flex-1 flex justify-end gap-6">
          <Link href="#" className="font-label-sm text-label-sm text-secondary hover:underline transition-all opacity-80 hover:opacity-100">Privacy Policy</Link>
          <Link href="#" className="font-label-sm text-label-sm text-secondary hover:underline transition-all opacity-80 hover:opacity-100">Terms of Service</Link>
          <Link href="#" className="font-label-sm text-label-sm text-secondary hover:underline transition-all opacity-80 hover:opacity-100">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
