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
