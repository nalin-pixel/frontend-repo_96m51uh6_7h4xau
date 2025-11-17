import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/60" />
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 mb-5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
              Introducing next‑gen AI for accounting teams
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
              AI voice agent for modern finance teams
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Automate reconciliations, close books faster, and answer finance questions instantly with a secure AI that understands your data.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#demo" className="rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">Book a demo</a>
              <a href="#pricing" className="rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">See pricing</a>
            </div>
            <div className="mt-6 text-xs text-gray-500">SOC2 • GDPR • SSO</div>
          </div>
        </div>
      </div>
    </section>
  )
}
