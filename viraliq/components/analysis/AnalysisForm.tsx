'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { runAnalysis } from '@/lib/analysis-engine'
import type { AnalysisInput, Platform, ContentGoal, ContentStyle } from '@/types/analysis'

const NICHE_SUGGESTIONS = [
  'Zahnarzt',
  'Wellnesshotel',
  'Fitness Coach',
  'Immobilienmakler',
  'Restaurant',
  'Personal Trainer',
  'Fotograf',
  'Friseur',
  'E-Commerce Brand',
  'Agentur',
  'Steuerberater',
  'Physiotherapeut',
]

const PLATFORMS: { id: Platform; label: string; icon: string }[] = [
  { id: 'tiktok', label: 'TikTok', icon: '♪' },
  { id: 'instagram', label: 'Instagram', icon: '⬡' },
  { id: 'youtube', label: 'YouTube Shorts', icon: '▶' },
  { id: 'facebook', label: 'Facebook', icon: 'f' },
]

const GOALS: { id: ContentGoal; label: string; desc: string }[] = [
  { id: 'viral', label: 'Viral gehen', desc: 'Maximale organische Reichweite' },
  { id: 'sales', label: 'Verkaufen', desc: 'Direkte Conversion & Umsatz' },
  { id: 'leads', label: 'Leads generieren', desc: 'Anfragen & Kontakte aufbauen' },
  { id: 'branding', label: 'Branding', desc: 'Vertrauen & Markenaufbau' },
]

const STYLES: { id: ContentStyle; label: string }[] = [
  { id: 'authentic', label: 'Authentisch' },
  { id: 'highquality', label: 'Hochwertig' },
  { id: 'direct', label: 'Direkt' },
  { id: 'emotional', label: 'Emotional' },
  { id: 'serious', label: 'Seriös' },
  { id: 'casual', label: 'Locker' },
]

export function AnalysisForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<Partial<AnalysisInput>>({
    niche: '',
    targetAudience: '',
    platforms: [],
    goal: undefined,
    style: undefined,
  })

  function togglePlatform(p: Platform) {
    setForm((prev) => {
      const current = prev.platforms ?? []
      return {
        ...prev,
        platforms: current.includes(p)
          ? current.filter((x) => x !== p)
          : [...current, p],
      }
    })
  }

  function isValid(): boolean {
    return !!(
      form.niche?.trim() &&
      form.targetAudience?.trim() &&
      (form.platforms?.length ?? 0) > 0 &&
      form.goal &&
      form.style
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid() || loading) return

    setLoading(true)
    try {
      const result = await runAnalysis(form as AnalysisInput)
      // Store result in sessionStorage for results page
      sessionStorage.setItem('viraliq-result', JSON.stringify(result))
      router.push('/results')
    } catch {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Nische */}
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-3">
          Deine Nische <span className="text-indigo-400">*</span>
        </label>
        <input
          type="text"
          value={form.niche}
          onChange={(e) => setForm((p) => ({ ...p, niche: e.target.value }))}
          placeholder="z. B. Zahnarzt, Fitness Coach, Restaurant ..."
          className="w-full bg-white/5 border border-white/12 rounded-xl px-5 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all text-sm"
          required
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {NICHE_SUGGESTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setForm((p) => ({ ...p, niche: n }))}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                form.niche === n
                  ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
                  : 'bg-white/4 border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/16'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Zielgruppe */}
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-3">
          Zielgruppe <span className="text-indigo-400">*</span>
        </label>
        <input
          type="text"
          value={form.targetAudience}
          onChange={(e) => setForm((p) => ({ ...p, targetAudience: e.target.value }))}
          placeholder="z. B. Frauen 25–45, lokale Familien, Unternehmer ..."
          className="w-full bg-white/5 border border-white/12 rounded-xl px-5 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all text-sm"
          required
        />
      </div>

      {/* Plattformen */}
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-3">
          Plattformen <span className="text-indigo-400">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PLATFORMS.map((p) => {
            const active = form.platforms?.includes(p.id)
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => togglePlatform(p.id)}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  active
                    ? 'bg-indigo-500/15 border-indigo-500/40 text-white'
                    : 'bg-white/4 border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/16'
                }`}
              >
                <span className="text-2xl">{p.icon}</span>
                <span className="text-xs font-medium">{p.label}</span>
                {active && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-400" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Ziel */}
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-3">
          Content-Ziel <span className="text-indigo-400">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GOALS.map((g) => {
            const active = form.goal === g.id
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setForm((p) => ({ ...p, goal: g.id }))}
                className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${
                  active
                    ? 'bg-indigo-500/15 border-indigo-500/40'
                    : 'bg-white/4 border-white/8 hover:border-white/16'
                }`}
              >
                <div
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    active ? 'border-indigo-400' : 'border-white/20'
                  }`}
                >
                  {active && <div className="w-2 h-2 rounded-full bg-indigo-400" />}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${active ? 'text-white' : 'text-slate-400'}`}>
                    {g.label}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">{g.desc}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Stil */}
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-3">
          Content-Stil <span className="text-indigo-400">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {STYLES.map((s) => {
            const active = form.style === s.id
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setForm((p) => ({ ...p, style: s.id }))}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                  active
                    ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
                    : 'bg-white/4 border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/16'
                }`}
              >
                {s.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={!isValid()}
          loading={loading}
        >
          {loading ? (
            'Analyse läuft ...'
          ) : (
            <>
              Analyse starten
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
        {!isValid() && (
          <p className="text-center text-slate-600 text-xs mt-3">
            Bitte alle Pflichtfelder ausfüllen
          </p>
        )}
      </div>
    </form>
  )
}
