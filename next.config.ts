import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ["image/webp", "image/avif"],
    // Optimize image loading for performance
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },
  // Optimize for Vercel deployment
  reactStrictMode: true,
  // Performance optimizations
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  serverExternalPackages: ["@prisma/client"],
  // Turbopack configuration
  turbopack: {},
  // Optimize webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Enable compression
  compress: true,
};

export default nextConfig;
