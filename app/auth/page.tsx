"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import MobileAuth from "@/components/auth/MobileAuth";
import DesktopAuth from "@/components/auth/DesktopAuth";
import "@/styles/mobile.css";

export default function AuthPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    if (user) router.push("/compte");
  }, [user, router]);

  if (user) return null;

  return (
    <>
      <div className="block lg:hidden">
        <MobileAuth />
      </div>
      <div className="hidden lg:flex">
        <DesktopAuth />
      </div>
    </>
  );
}
