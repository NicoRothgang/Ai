import type { AnalysisResult, VideoIdea } from '@/types/analysis'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Flame, ShoppingCart, Eye, Zap } from 'lucide-react'
import { difficultyLabel } from '@/lib/utils'

interface Props {
  result: AnalysisResult
}

function IdeaCard({ idea }: { idea: VideoIdea }) {
  return (
    <Card hover>
      <div className="flex items-start justify-between gap-3 mb-3">
        <CardTitle className="flex-1">{idea.title}</CardTitle>
        <div className="flex gap-2 flex-shrink-0">
          <Badge
            variant={
              idea.potential === 'high'
                ? 'success'
                : idea.potential === 'medium'
                ? 'warning'
                : 'muted'
            }
          >
            {idea.potential === 'high'
              ? 'Hoch'
              : idea.potential === 'medium'
              ? 'Mittel'
              : 'Gering'}
          </Badge>
        </div>
      </div>

      <CardDescription>{idea.description}</CardDescription>

      <div className="mt-4 pt-4 border-t border-white/6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Eye className="w-3.5 h-3.5" />
          <span>{idea.estimatedViews} Views</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Zap className="w-3.5 h-3.5" />
          <span>{idea.format}</span>
        </div>
        <Badge variant="muted">{difficultyLabel(idea.difficulty)}</Badge>
        <div className="flex gap-1.5 flex-wrap">
          {idea.tags.map((tag) => (
            <span key={tag} className="text-xs text-slate-600 bg-white/4 px-2 py-0.5 rounded-md border border-white/6">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function IdeasTab({ result }: Props) {
  return (
    <div className="space-y-10">
      {/* Viral ideas */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/25 flex items-center justify-center">
            <Flame className="w-4 h-4 text-rose-400" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">Virale Videoideen</h2>
            <p className="text-xs text-slate-500">Optimiert für organische Reichweite</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.viralIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>

      {/* Sales ideas */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">Verkaufsstarke Videoideen</h2>
            <p className="text-xs text-slate-500">Optimiert für Conversion & Leads</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.salesIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  )
}
