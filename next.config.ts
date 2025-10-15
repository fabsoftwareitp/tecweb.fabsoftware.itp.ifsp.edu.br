import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "servicosweb.cnpq.br",
      },
    ],
  },
};

export default nextConfig;
