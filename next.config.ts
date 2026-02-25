import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'preview-chat-6c155754-7bac-4e80-ad22-0a70f99cba11.space.z.ai',
    '.space.z.ai',
    'localhost:3000',
  ],
};

export default nextConfig;
