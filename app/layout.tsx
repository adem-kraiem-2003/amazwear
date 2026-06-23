import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Drawers from "@/components/layout/Drawers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "LUXE",
  description: "Luxury fashion e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} light h-full antialiased`}>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        {children}
        <Drawers />
      </body>
    </html>
  );
}
