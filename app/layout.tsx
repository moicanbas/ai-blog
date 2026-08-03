import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"),

  title: {
    default: "AI & Python Blog",
    template: "%s | AI & Python Blog",
  },

  description:
    "Aprende Inteligencia Artificial, Python, automatización y desarrollo con explicaciones sencillas para cualquier persona.",

  keywords: [
    "Inteligencia Artificial",
    "Python",
    "LLM",
    "Machine Learning",
    "Next.js",
    "Automatización",
    "Programación",
  ],

  authors: [
    {
      name: "Moises Cantillo",
    },
  ],

  creator: "Moises Cantillo",

  openGraph: {
    title: "AI & Python Blog",
    description:
      "Explicaciones sencillas sobre IA, Python y tecnología.",

    type: "website",

    locale: "es_ES",

    url: "https://tudominio.com",

    siteName: "AI & Python Blog",

    images: [
      {
        url: "og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI & Python Blog",
    description:
      "Aprende IA y Python desde cero.",

    images: ["og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          min-h-screen
          bg-background
          text-foreground
          antialiased
        `}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}