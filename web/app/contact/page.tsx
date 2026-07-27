export default function ContactPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[#f4f7fc] px-6 pt-24 text-[#0b1b33]">
      <div className="max-w-xl text-center">
        <p className="text-sm tracking-[0.18em] text-blue-700 uppercase">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Tell us what you&apos;re building.</h1>
        <p className="mt-4 text-slate-600">
          Email{' '}
          <a className="font-medium text-blue-700 underline underline-offset-4" href="mailto:info@beta-works.com">
            info@beta-works.com
          </a>{' '}
          — form migration can follow the hero launch.
        </p>
      </div>
    </main>
  )
}
