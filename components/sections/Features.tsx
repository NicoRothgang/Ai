import {
  TrendingUp,
  Flame,
  ShoppingCart,
  FileText,
  Video,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Trend-Analyse',
    description:
      'Erkenne, welche Formate und Themen in deiner Nische gerade performen – bevor deine Konkurrenz es tut.',
    color: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Flame,
    title: 'Virales Potenzial',
    description:
      'Jede Idee wird mit einem Viral-Score bewertet. Du weißt sofort, was Reichweite generieren kann.',
    color: 'from-rose-500/20 to-rose-600/5 border-rose-500/20',
    iconColor: 'text-rose-400',
  },
  {
    icon: ShoppingCart,
    title: 'Sales-Potenzial',
    description:
      'Nicht jeder Click macht Umsatz. ViralIQ zeigt dir, welcher Content wirklich konvertiert.',
    color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Zap,
    title: 'Hook-Generator',
    description:
      'Die ersten 3 Sekunden entscheiden. Erhalte starke, plattformspezifische Hooks für jede Idee.',
    color: 'from-amber-500/20 to-amber-600/5 border-amber-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: FileText,
    title: 'Fertige Skripte',
    description:
      'Keine leere Seite mehr. Strukturierte Skript-Templates, die du direkt anpassen und drehen kannst.',
    color: 'from-sky-500/20 to-sky-600/5 border-sky-500/20',
    iconColor: 'text-sky-400',
  },
  {
    icon: Video,
    title: 'Shotlists',
    description:
      'Gehe mit einem klaren Drehplan auf Set. Shot für Shot, mit Regieanweisungen und Timings.',
    color: 'from-violet-500/20 to-violet-600/5 border-violet-500/20',
    iconColor: 'text-violet-400',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Was ViralIQ liefert
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mehr als nur Ideen.
            <br />
            <span className="gradient-text">Eine vollständige Strategie.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Von der Trend-Analyse bis zur fertigen Shotlist – alles was du
            brauchst, um Content zu erstellen, der Ergebnisse bringt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`rounded-2xl border bg-gradient-to-br p-6 ${feature.color} card-glow-hover`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/6 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
