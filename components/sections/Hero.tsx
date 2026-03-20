import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-indigo-400/6 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          KI-gestützte Content-Strategie
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
          Content-Ideen,{' '}
          <span className="gradient-text">die wirklich</span>
          <br />
          performen.
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Gib deine Nische ein und erhalte strukturierte Video-Strategien,
          virale Ideen und verkaufsstarke Hooks – zugeschnitten auf deine
          Plattform, deine Zielgruppe, dein Ziel.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Link href="/analyze">
            <Button size="lg" className="gap-2">
              Analyse kostenlos starten
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant="secondary" size="lg">
            Demo ansehen
          </Button>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['M', 'S', 'J', 'L'].map((initial) => (
                <div
                  key={initial}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#080810]"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span>Über 2.400 Creator vertrauen ViralIQ</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span>4.8 / 5 Sterne</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6">
          {[
            { value: '50+', label: 'Nischen abgedeckt', icon: Target },
            { value: '6 Plattformen', label: 'gleichzeitig analysiert', icon: TrendingUp },
            { value: '< 2 Min.', label: 'bis zur fertigen Strategie', icon: Sparkles },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-white/2 py-8 px-6 flex flex-col items-center gap-2">
              <Icon className="w-5 h-5 text-indigo-400 mb-1" />
              <span className="text-2xl font-bold text-white">{value}</span>
              <span className="text-sm text-slate-500 text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
