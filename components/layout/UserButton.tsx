"use client";

import Link from "next/link";
import { useAuthStore } from "@/stores/auth-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

type Props = {
  className?: string;
};

export default function UserButton({ className = "" }: Props) {
  const user = useAuthStore((s) => s.user);
  const href = user ? "/compte" : "/auth";

  return (
    <Link
      href={href}
      aria-label={user ? "Account" : "Sign in"}
      className={className}
    >
      <PhosphorIcon icon="person" fill={user ? 1 : 0} />
    </Link>
  );
}
