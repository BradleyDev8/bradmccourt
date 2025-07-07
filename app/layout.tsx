import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Sidebar from "@/components/ui/sidebar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brad McCourt | Software Engineer",
  description:
    "Brad McCourt is a software engineer and entrepreneur specialising in full stack development with Next.js, React, TypeScript, and Node.js.",
  metadataBase: new URL("https://bradmccourt.xyz"),
  keywords: [
    "Brad McCourt",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Blog",
  ],
  authors: [{ name: "Brad McCourt" }],
  creator: "Brad McCourt",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bradmccourt.xyz",
    title: "Brad McCourt - Software Engineer",
    description:
      "Brad McCourt is a software engineer and entrepreneur specialising in full stack development with Next.js, React, TypeScript, and Node.js.",
    siteName: "Brad McCourt",
    images: [
      {
        url: "/BradSkiReal.png",
        width: 1200,
        height: 630,
        alt: "Brad McCourt - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brad McCourt - Software Engineer",
    description:
      "Brad McCourt is a software engineer and entrepreneur specialising in full stack development with Next.js, React, TypeScript, and Node.js.",
    images: ["/BradSkiReal.png"],
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden bg-app-bg text-high-contrast-text relative top-8`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Analytics />
          <PlausibleProvider domain="bradmccourt.xyz">
            <main className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row gap-8 md:gap-12">
              <Sidebar />
              <div className="flex-1 min-w-0">{children}</div>
            </main>
          </PlausibleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
