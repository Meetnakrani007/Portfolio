import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow production build to succeed even if there are TypeScript or ESLint errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow loading external images from placehold.co
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
  // Optional: Enable strict React mode for development and production
  reactStrictMode: true,
  // Optional: Enable SWC minifier
  swcMinify: true,
};

export default nextConfig;
