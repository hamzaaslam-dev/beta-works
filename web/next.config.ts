import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export so Vercel can deploy from a subdirectory without
  // depending on dashboard Root Directory / "public" output settings.
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
