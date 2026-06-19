"use client";

import { useState, useEffect, ReactNode } from "react";

type Props = {
  delay?: number;
  fallback: ReactNode;
  children: ReactNode;
};

export default function DelayedRender({ delay = 4000, fallback, children }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return show ? children : fallback;
}
