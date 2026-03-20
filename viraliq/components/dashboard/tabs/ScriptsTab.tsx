'use client'

import { useState } from 'react'
import type { AnalysisResult, Script } from '@/types/analysis'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FileText, ChevronDown, ChevronUp, Clock } from 'lucide-react'

interface Props {
  result: AnalysisResult
}

function ScriptCard({ script }: { script: Script }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="overflow-hidden">
      {/* Header */}
      <button
        className="w-full flex items-center justify-between gap-4 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant="default">{script.format}</Badge>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="w-3 h-3" />
              {script.duration}
            </div>
          </div>
          <h3 className="text-white font-semibold text-base leading-snug">{script.title}</h3>
        </div>
        <div className="text-slate-500 flex-shrink-0">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {/* Collapsed preview */}
      {!open && (
        <div className="mt-3 pl-px">
          <p className="text-slate-500 text-sm italic truncate">&ldquo;{script.hook}&rdquo;</p>
        </div>
      )}

      {/* Expanded content */}
      {open && (
        <div className="mt-5 space-y-4">
          {/* Hook */}
          <div>
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
              Hook (0–3 Sek.)
            </p>
            <div className="bg-indigo-500/8 border border-indigo-500/20 rounded-xl px-4 py-3">
              <p className="text-white text-sm leading-relaxed font-medium">{script.hook}</p>
            </div>
          </div>

          {/* Body */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Hauptteil
            </p>
            <div className="space-y-2">
              {script.body.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-slate-700 text-xs font-mono mt-0.5 w-4 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              Call to Action
            </p>
            <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl px-4 py-3">
              <p className="text-white text-sm leading-relaxed">{script.cta}</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

export function ScriptsTab({ result }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/25 flex items-center justify-center">
          <FileText className="w-4 h-4 text-sky-400" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Skript-Templates</h2>
          <p className="text-xs text-slate-500">Klick auf ein Skript um es vollständig zu öffnen</p>
        </div>
      </div>

      <div className="space-y-4">
        {result.scripts.map((script) => (
          <ScriptCard key={script.id} script={script} />
        ))}
      </div>
    </div>
  )
}
