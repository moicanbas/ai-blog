/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  serverExternalPackages: ["node:fs", "node:path"],
  transpilePackages: ["next-mdx-remote", "remark-gfm"],
};

module.exports = nextConfig;