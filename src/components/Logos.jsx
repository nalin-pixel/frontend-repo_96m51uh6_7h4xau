export default function Logos() {
  const logos = ['Stripe', 'Rippling', 'Brex', 'QuickBooks', 'NetSuite', 'Workday']
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-500 mb-6">Trusted by forward‑thinking finance teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
          {logos.map((l) => (
            <div key={l} className="text-center text-gray-500 tracking-wide">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
