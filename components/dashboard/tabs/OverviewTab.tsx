import type { AnalysisResult } from '@/types/analysis'
import { ScoreRing } from '@/components/ui/ScoreRing'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { TrendingUp, TrendingDown, Minus, BarChart2, Layers } from 'lucide-react'
import { formatPlatform, difficultyLabel } from '@/lib/utils'

interface Props {
  result: AnalysisResult
}

function MomentumIcon({ m }: { m: string }) {
  if (m === 'rising') return <TrendingUp className="w-4 h-4 text-emerald-400" />
  if (m === 'declining') return <TrendingDown className="w-4 h-4 text-red-400" />
  return <Minus className="w-4 h-4 text-amber-400" />
}

export function OverviewTab({ result }: Props) {
  return (
    <div className="space-y-8">
      {/* Scores + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Score card */}
        <Card className="lg:col-span-1 flex flex-col items-center justify-center py-8 gap-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Content-Score
          </h2>
          <div className="flex items-center gap-10">
            <ScoreRing
              score={result.viralScore}
              label="Viral"
              sublabel="Reichweite"
              color="indigo"
              size="lg"
            />
            <ScoreRing
              score={result.salesScore}
              label="Sales"
              sublabel="Conversion"
              color="emerald"
              size="lg"
            />
          </div>
          <p className="text-xs text-slate-600 text-center px-4">
            Basierend auf Nische, Plattformen und gewähltem Stil
          </p>
        </Card>

        {/* Summary card */}
        <Card className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="w-4 h-4 text-indigo-400" />
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Analyse-Zusammenfassung
            </h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm mb-6">
            {result.summary}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Virale Ideen', value: result.viralIdeas.length },
              { label: 'Sales Ideen', value: result.salesIdeas.length },
              { label: 'Hooks', value: result.hooks.length },
              { label: 'Skripte', value: result.scripts.length },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/4 rounded-xl px-4 py-3 text-center border border-white/6">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Trends */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-indigo-400" />
          <h2 className="text-base font-semibold text-white">Trend-Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result.trendInsights.map((trend, i) => (
            <Card key={i} hover>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-sm font-semibold text-white leading-snug">{trend.topic}</h3>
                <MomentumIcon m={trend.momentum} />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">{trend.description}</p>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    trend.relevance === 'high'
                      ? 'success'
                      : trend.relevance === 'medium'
                      ? 'warning'
                      : 'muted'
                  }
                >
                  {trend.relevance === 'high'
                    ? 'Hohe Relevanz'
                    : trend.relevance === 'medium'
                    ? 'Mittlere Relevanz'
                    : 'Geringe Relevanz'}
                </Badge>
                <Badge variant="muted">
                  {trend.momentum === 'rising'
                    ? 'Steigend'
                    : trend.momentum === 'stable'
                    ? 'Stabil'
                    : 'Rückläufig'}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Formats */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-indigo-400" />
          <h2 className="text-base font-semibold text-white">Empfohlene Formate</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.topFormats.map((format) => (
            <Card key={format.name} hover>
              <div className="flex items-start justify-between gap-3 mb-2">
                <CardTitle>{format.name}</CardTitle>
                <Badge
                  variant={
                    format.difficulty === 'easy'
                      ? 'success'
                      : format.difficulty === 'medium'
                      ? 'warning'
                      : 'info'
                  }
                >
                  {difficultyLabel(format.difficulty)}
                </Badge>
              </div>
              <CardDescription>{format.description}</CardDescription>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {format.platforms.map((p) => (
                    <Badge key={p} variant="muted">
                      {formatPlatform(p)}
                    </Badge>
                  ))}
                </div>
                <span className="text-xs text-emerald-400 font-semibold">
                  ⌀ {format.avgEngagement} Engagement
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
