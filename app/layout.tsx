import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brad McCourt",
  description: "Brad McCourt is a software engineer and entrepreneur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} dark:dark overflow-x-hidden bg-app-bg text-high-contrast-text`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
