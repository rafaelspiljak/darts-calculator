import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./tailwind-custom.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darts counter",
  description: "Darts calculator",
  icons: "/darts.png",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
