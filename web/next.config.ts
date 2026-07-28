import type { NextConfig } from 'next'

// Dev and production must not share the same `.next` folder.
// Mixing `next build` (static export) with `next dev --turbopack` on one
// cache causes missing build-manifest.json and Internal Server Errors.
const isDev = process.env.NODE_ENV !== 'production'

const nextConfig: NextConfig = {
  distDir: isDev ? '.next-dev' : '.next',
  // Static export only for production builds (Vercel / `npm run build`).
  // Keeping this off in dev avoids turbopack reading export-only artifacts.
  ...(isDev ? {} : { output: 'export' as const }),
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
