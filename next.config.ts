import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static HTML export — deployable to Vercel or any static host.
  output: "export",
  // No runtime image optimizer in a static export; scripts/prepare-images.mjs
  // pre-generates the WebP variants instead (see components/Shot.tsx).
  images: { unoptimized: true },
  // Emit /ar/index.html rather than /ar.html so every static host serves it cleanly.
  trailingSlash: true,
};

export default nextConfig;
