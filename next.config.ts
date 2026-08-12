import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "192.168.1.9",
  ],
};

export default nextConfig;