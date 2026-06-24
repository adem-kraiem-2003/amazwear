import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@/styles/globals.css";
import Drawers from "@/components/layout/Drawers";

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
    <html lang="en" className="light h-full antialiased">
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        {children}
        <Drawers />
      </body>
    </html>
  );
}
