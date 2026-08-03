import type { Metadata, Viewport } from "next"; // Importamos Viewport para SEO móvil moderno
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

// 1. Configuración de Viewport (Crucial para Core Web Vitals móviles)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Ajusta a tu color primario light
    { media: "(prefers-color-scheme: dark)", color: "#000000" },  // Ajusta a tu color primario dark
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Permitir zoom para accesibilidad (bueno para SEO)
};

// 2. Metadatos Agresivos
export const metadata: Metadata = {
  // Base para resolver URLs relativas en OG images y canónicas automáticamente
  metadataBase: new URL("https://mocadevia.online"),

  title: {
    // Título de la Home: Incluye palabras clave principales, máx 60 caracteres.
    default: "IA y Python sin Enredos | Aprende Inteligencia Artificial Fácil",
    // Plantilla para páginas internas: "Título de Post | Nombre del Sitio"
    template: "%s | Mocadevia",
  },

  description:
    "Guías sencillas y tutoriales prácticos sobre Inteligencia Artificial, Python desde cero, automatización y desarrollo web. Sin jerga técnica compleja.",

  // Keywords: Aunque Google les da poco peso, otros buscadores y sistemas de IA las usan.
  keywords: [
    "Aprender Inteligencia Artificial",
    "Python para principiantes",
    "Tutoriales de IA en español",
    "Automatización con Python",
    "LLM explicados fácil",
    "Desarrollo web Next.js",
    "Mocadevia",
    "Moises Cantillo",
  ],

  authors: [{ name: "Moises Cantillo", url: "https://mocadevia.online/about" }],
  creator: "Moises Cantillo",
  publisher: "Mocadevia",

  // Indexación y Rastreo Agresivo
  robots: {
    index: true, // Indexar esta página
    follow: true, // Seguir enlaces de esta página
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canónica por defecto (para la home). Next.js la maneja bien si metadataBase está setead.
  alternates: {
    canonical: "/",
  },

  // OpenGraph (Facebook, LinkedIn, Discord)
  openGraph: {
    // LinkedIn prefiere títulos claros y directos.
    title: "IA y Python sin Enredos - Mocadevia | Por Moisés Cantillo",
    description:
      "Aprende Inteligencia Artificial, Python desde cero y automatización con tutoriales sencillos y prácticos. Sin jerga técnica compleja.",

    // Esencial: Tipo 'website' para la home, 'article' para posts (esto se maneja en cada post).
    type: "website",

    locale: "es_ES",
    url: "https://mocadevia.online",
    siteName: "Mocadevia",

    // LinkedIn es MUY exigente con la imagen OG.
    images: [
      {
        // Ruta absoluta gracias a metadataBase
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        // Texto alternativo descriptivo es vital para accesibilidad y SEO en LinkedIn.
        alt: "Mocadevia - Logotipo y lema: IA y Python sin Enredos, tecnología explicada fácil.",
      },
    ],
  },

  // Metadatos adicionales útiles
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Esencial mantener 'lang="es"' para SEO local
    <html lang="es" suppressHydrationWarning>
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          min-h-screen
          bg-background
          text-foreground
          antialiased
          font-sans
        `}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            {/* Navbar semántico */}
            <Navbar />

            {/* Main semántico */}
            <main id="main-content" className="flex-1">
              {children}
            </main>

            {/* Footer semántico */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}