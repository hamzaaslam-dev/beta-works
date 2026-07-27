import { SplineSceneBasic } from '@/components/ui/spline-scene-basic'

export default function HomePage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#020617]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)]" />
      <section className="relative mx-auto flex min-h-svh max-w-7xl items-center px-4 pt-24 pb-10 md:px-6">
        <SplineSceneBasic />
      </section>
    </main>
  )
}
