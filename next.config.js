/** @type {import('next').NextType} */
const nextConfig = {
  /* 1. Modo estricto de React para detectar efectos secundarios en dev */
  reactStrictMode: true,

  /* 2. Optimización de imágenes (Configuración para Cloudflare / SSG) */
  images: {
    // Si despliegas en Cloudflare Pages como exportación estática o sin servidor de optimización de imágenes Node.js:
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  /* 3. Paquetes externos del servidor (Aísla dependencias Node durante el build) */
  serverExternalPackages: ["node:fs", "node:path"],

  /* 4. Transpilar paquetes ESM específicos si usas plugins de MDX/Remark/Rehype */
  transpilePackages: ["next-mdx-remote", "remark-gfm"],

  /* 5. Cabeceras de seguridad o redirecciones opcionales */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;