'use client'

import { Suspense, lazy, useState } from 'react'
import { cn } from '@/lib/utils'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineCanvas({ scene, className }: SplineSceneProps) {
  const [ready, setReady] = useState(false)

  return (
    <div className={cn('relative h-full w-full bg-transparent', className)}>
      {!ready && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-[#020617]">
          <span className="loader" />
        </div>
      )}
      <div
        className={cn(
          'h-full w-full transition-opacity duration-700',
          ready ? 'opacity-100' : 'opacity-0'
        )}
      >
        <Spline scene={scene} onLoad={() => setReady(true)} className="h-full w-full" />
      </div>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center bg-[#020617]">
          <span className="loader" />
        </div>
      }
    >
      <SplineCanvas scene={scene} className={className} />
    </Suspense>
  )
}
