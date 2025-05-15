import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // HTML & API
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=30, s-maxage=60, stale-while-revalidate=3600", // max-age = 1 minute, stale-while-revalidate = 1 hour
          },
        ],
      },
      {
        // JavaScript
        source: "/_next/static/chunks/:path*.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=1209000, immutable", // max-age = 14 days
          },
        ],
      },
      {
        // Images
        source: "/:path*(jpg|jpeg|png|avif|webp|svg|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "private, max-age=31536000, immutable", // max-age = 1 year
          },
        ],
      },
      {
        // Fonts
        source: "/:path*(woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // max-age = 1 year
          },
        ],
      },
    ];
  },
};

export default nextConfig;
