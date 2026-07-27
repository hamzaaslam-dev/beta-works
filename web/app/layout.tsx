import type { Metadata } from 'next'
import { Archivo, Inter, IBM_Plex_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const archivo = Archivo({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Beta Works — Engineering The Future Of Business',
  description:
    'Beta Works is a senior digital studio shipping web, mobile, Shopify, AI/ML, agentic systems, automations and brand experiences.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: 'Beta Works — Engineering The Future Of Business',
    description:
      'Beta Works is a senior digital studio shipping web, mobile, Shopify, AI/ML, agentic systems, automations and brand experiences.',
    images: [{ url: '/brand/logo.png', width: 855, height: 586, alt: 'Beta Works' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${archivo.variable} ${inter.variable} ${plexMono.variable} ${inter.className} min-h-svh bg-[#020617] text-slate-100 antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
