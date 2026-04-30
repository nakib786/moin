import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats (AVIF first, then WebP) to supported browsers
    formats: ["image/avif", "image/webp"],
    // Breakpoints for responsive srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    // Allow a generous quality default — we override per-component where needed
    minimumCacheTTL: 86400, // cache optimised images for 24 h
  },
};

export default nextConfig;
