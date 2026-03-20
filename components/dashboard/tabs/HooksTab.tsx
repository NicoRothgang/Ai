'use client'

import { useState } from 'react'
import type { AnalysisResult, Hook } from '@/types/analysis'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Zap, Copy, Check } from 'lucide-react'
import { formatPlatform } from '@/lib/utils'

interface Props {
  result: AnalysisResult
}

function HookCard({ hook }: { hook: Hook }) {
  const [copied, setCopied] = useState(false)

  function copyHook() {
    navigator.clipboard.writeText(hook.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const typeLabels: Record<Hook['type'], string> = {
    question: 'Frage',
    statement: 'Statement',
    challenge: 'Challenge',
    story: 'Story',
  }

  const typeColors: Record<Hook['type'], string> = {
    question: 'info',
    statement: 'default',
    challenge: 'warning',
    story: 'success',
  }

  return (
    <Card hover className="relative group">
      <div className="flex items-start justify-between gap-3 mb-4">
        <Badge variant={typeColors[hook.type] as 'info' | 'default' | 'warning' | 'success'}>
          {typeLabels[hook.type]}
        </Badge>
        <button
          onClick={copyHook}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors px-2 py-1 rounded-lg hover:bg-white/6"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Kopiert</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Kopieren</span>
            </>
          )}
        </button>
      </div>

      <blockquote className="text-white text-base leading-relaxed font-medium border-l-2 border-indigo-500/40 pl-4">
        &ldquo;{hook.text}&rdquo;
      </blockquote>

      <div className="flex gap-1.5 flex-wrap mt-4">
        {hook.platform.map((p) => (
          <Badge key={p} variant="muted">
            {formatPlatform(p)}
          </Badge>
        ))}
      </div>
    </Card>
  )
}

export function HooksTab({ result }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
          <Zap className="w-4 h-4 text-amber-400" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Hook-Bibliothek</h2>
          <p className="text-xs text-slate-500">Klick auf &ldquo;Kopieren&rdquo; um den Hook direkt zu übernehmen</p>
        </div>
      </div>

      <div className="mt-2 mb-6 p-4 rounded-xl bg-amber-500/6 border border-amber-500/15">
        <p className="text-amber-200/70 text-sm leading-relaxed">
          <strong className="text-amber-300">Hinweis:</strong> Diese Hooks sind auf deine Nische und Zielgruppe zugeschnitten.
          Passe Platzhalter in eckigen Klammern individuell an dein Business an.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {result.hooks.map((hook) => (
          <HookCard key={hook.id} hook={hook} />
        ))}
      </div>
    </div>
  )
}
