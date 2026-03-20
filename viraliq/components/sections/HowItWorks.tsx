import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    title: 'Nische & Ziel eingeben',
    description:
      'Beschreibe dein Business, deine Zielgruppe, deine Plattformen und was du mit deinem Content erreichen willst.',
  },
  {
    number: '02',
    title: 'Analyse läuft automatisch',
    description:
      'ViralIQ analysiert Trends, Formate und Nischenmuster – und berechnet Viral- und Sales-Scores für deinen Bereich.',
  },
  {
    number: '03',
    title: 'Strategie erhalten & umsetzen',
    description:
      'Du bekommst sofort fertige Video-Ideen, Hooks, Skripte und Shotlists. Alles was du brauchst, um loszulegen.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              So funktioniert&apos;s
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              In 3 Schritten zur
              <br />
              <span className="gradient-text">fertigen Strategie.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Kein langes Ausprobieren. Keine generischen Tipps. Du gibst deine
              Nische ein – und bekommst innerhalb von Sekunden eine konkrete,
              umsetzbare Content-Strategie zurück.
            </p>
            <Link href="/analyze">
              <Button size="lg">
                Jetzt starten
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right – Steps */}
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex gap-5 p-6 rounded-2xl border border-white/8 bg-white/3 card-glow"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[2.6rem] top-full h-5 w-px bg-gradient-to-b from-indigo-500/30 to-transparent z-10" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                  <span className="text-indigo-400 font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
