import type { Metadata } from "next";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        {children}
        <Drawers />
      </body>
    </html>
  );
}
