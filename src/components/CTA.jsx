export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Ready to accelerate your close?</h3>
          <p className="mt-3 text-gray-600">Get a tailored walkthrough for your team. See how AI can free up 30%+ of your time.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#demo" className="rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">Book a demo</a>
            <a href="#" className="rounded-lg bg-white border border-black/10 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
