import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 via-violet-600/5 to-transparent p-12 md:p-16 text-center card-glow">
          {/* Glow effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[300px] rounded-full bg-indigo-600/15 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-5">
              Kostenlos testen
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Bereit für Content,
              <br />
              <span className="gradient-text">der wirklich wirkt?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Starte jetzt kostenlos. Keine Kreditkarte nötig. Einfach
              Nische eingeben und in Minuten deine erste Strategie erhalten.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/analyze">
                <Button size="lg">
                  Analyse jetzt starten
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <p className="text-slate-500 text-sm">Kostenlos · Keine Anmeldung nötig</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
