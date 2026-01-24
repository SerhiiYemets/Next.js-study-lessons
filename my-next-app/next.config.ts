import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [ 
      {
        hostname: "www.maledivy-levne.cz"
      }
    ]
  }
};

export default nextConfig;
