import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/sections/Footer'
import { AnalysisForm } from '@/components/analysis/AnalysisForm'
import { Zap } from 'lucide-react'

export default function AnalyzePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6">
        {/* Background effects */}
        <div className="fixed inset-0 flex items-start justify-center pt-32 pointer-events-none">
          <div className="w-[500px] h-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
              <Zap className="w-3.5 h-3.5" />
              Analyse starten
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Deine Content-Strategie
              <br />
              <span className="gradient-text">in Minuten.</span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto">
              Füll das Formular aus und erhalte sofort eine strukturierte
              Analyse mit Videoideen, Hooks, Skripten und mehr.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-white/8 bg-white/3 card-glow p-8 md:p-10">
            <AnalysisForm />
          </div>

          {/* Trust note */}
          <p className="text-center text-slate-600 text-xs mt-6">
            Keine Anmeldung nötig · Ergebnis sofort · Kostenlos
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
