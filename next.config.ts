import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/beykozkurban' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;