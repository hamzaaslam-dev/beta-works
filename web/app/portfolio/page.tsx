'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PortfolioRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/work')
  }, [router])

  return (
    <main className="flex min-h-svh items-center justify-center bg-[#020617] px-6 text-slate-300">
      <p>
        Taking you to{' '}
        <Link href="/work" className="text-sky-300 underline underline-offset-4">
          Work
        </Link>
        …
      </p>
    </main>
  )
}
