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
    <div className={cn('relative h-full w-full bg-[#020617]', className)}>
      {!ready && (
        <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
          <span className="loader" />
        </div>
      )}
      <Spline
        scene={scene}
        // Continuous render so look-at / follow stays smooth with the cursor
        renderOnDemand={false}
        onLoad={() => setReady(true)}
        className={cn(
          'h-full w-full transition-opacity duration-500',
          ready ? 'opacity-100' : 'opacity-0'
        )}
      />
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
