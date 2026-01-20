import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/IQAndreas/sample-images/**',
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
