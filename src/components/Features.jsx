import { ShieldCheck, Bot, Headphones, Lock, Sparkles, LineChart } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Voice-first AI',
    desc: 'Speak naturally to resolve finance workflows, from reconciliations to variance analysis.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Your AI teammate that answers policy questions and hunts down details in seconds.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II, SSO, audit logs, role-based access — built for regulated teams.',
  },
  {
    icon: Lock,
    title: 'Private by Design',
    desc: 'Your data stays yours. No training on your prompts. Granular retention controls.',
  },
  {
    icon: Sparkles,
    title: 'Automations',
    desc: 'Prebuilt flows for close, AR, AP, FP&A. Trigger runs and monitor progress.',
  },
  {
    icon: LineChart,
    title: 'Realtime Insights',
    desc: 'Ask anything about cash, runway, and performance — get cited answers from sources.',
  },
]

export default function Features() {
  return (
    <section id="product" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Everything you need to ship faster</h2>
          <p className="mt-3 text-gray-600">A secure, conversational layer on top of your finance stack.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
