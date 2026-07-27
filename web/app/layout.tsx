import type { Metadata } from 'next'
import { Archivo, Inter, IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link'
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
    <html lang="en">
      <body className={`${archivo.variable} ${inter.variable} ${plexMono.variable} ${inter.className} antialiased`}>
        <header className="fixed top-4 right-0 left-0 z-50 px-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#07111f]/70 px-5 py-3 text-sm text-slate-100 shadow-[0_18px_50px_rgba(5,15,40,0.35)] backdrop-blur-xl">
            <Link href="/" className={`${archivo.className} text-base font-semibold tracking-tight`}>
              Beta Works
            </Link>
            <nav className="hidden items-center gap-6 text-slate-300 md:flex">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <Link href="/services" className="transition-colors hover:text-white">
                Services
              </Link>
              <Link href="/portfolio" className="transition-colors hover:text-white">
                Work
              </Link>
              <Link href="/about" className="transition-colors hover:text-white">
                About
              </Link>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </nav>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
            >
              Start a project
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
