import type { AnalysisResult } from '@/types/analysis'
import { Card } from '@/components/ui/Card'
import { Video, Clock, Camera } from 'lucide-react'

interface Props {
  result: AnalysisResult
}

export function ShotlistsTab({ result }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
          <Video className="w-4 h-4 text-violet-400" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Shotlists</h2>
          <p className="text-xs text-slate-500">Dein Drehplan – Shot für Shot</p>
        </div>
      </div>

      <div className="space-y-6">
        {result.shotlists.map((sl) => (
          <Card key={sl.id}>
            {/* Shotlist header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-white/6">
              <div>
                <h3 className="text-white font-semibold text-lg">{sl.title}</h3>
                <div className="flex items-center gap-1.5 mt-1 text-slate-500 text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  Gesamtlänge: {sl.totalDuration}
                </div>
              </div>
              <div className="bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-lg">
                <span className="text-violet-300 text-sm font-semibold">
                  {sl.shots.length} Shots
                </span>
              </div>
            </div>

            {/* Shot rows */}
            <div className="space-y-3">
              {sl.shots.map((shot) => (
                <div
                  key={shot.order}
                  className="flex gap-4 p-4 rounded-xl bg-white/3 border border-white/6 hover:bg-white/5 transition-colors"
                >
                  {/* Order indicator */}
                  <div className="flex-shrink-0 flex items-start pt-0.5">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
                      <span className="text-violet-300 text-xs font-bold">{shot.order}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Camera className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      <span className="text-white text-sm font-semibold">{shot.shot}</span>
                      <span className="ml-auto text-xs text-slate-600 font-mono flex-shrink-0">
                        {shot.duration}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{shot.description}</p>
                    {shot.notes && (
                      <p className="mt-1.5 text-xs text-amber-400/70 italic">
                        ↳ {shot.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
