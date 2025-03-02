import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "@/components/ui/theme-provider";
import LightRay from "@/components/ui/light-ray";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brad McCourt | Software Engineer",
  description: "Brad McCourt is a software engineer and entrepreneur specialising in full stack development with Next.js, React, TypeScript, and Node.js.",
  metadataBase: new URL("https://bradmccourt.xyz"),
  keywords: ["Brad McCourt", "Software Engineer", "Full Stack Developer", "Next.js", "React", "TypeScript", "Node.js", "Blog"],
  authors: [{ name: "Brad McCourt" }],
  creator: "Brad McCourt",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bradmccourt.xyz",
    title: "Brad McCourt - Software Engineer",
    description: "Brad McCourt is a software engineer and entrepreneur specialising in full stack development with Next.js, React, TypeScript, and Node.js.",
    siteName: "Brad McCourt",
    images: [
      {
        url: "/brad2.jpg",
        width: 1200,
        height: 630,
        alt: "Brad McCourt - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brad McCourt - Software Engineer",
    description: "Brad McCourt is a software engineer and entrepreneur specialising in full stack development with Next.js, React, TypeScript, and Node.js.",
    images: ["/brad2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden bg-app-bg text-high-contrast-text relative`}
      >
        <LightRay />
        <ThemeProvider>
          <Analytics />
          <PlausibleProvider domain="bradmccourt.xyz">{children}</PlausibleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
