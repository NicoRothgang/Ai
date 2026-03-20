'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { AnalysisResult } from '@/types/analysis'
import { OverviewTab } from './tabs/OverviewTab'
import { IdeasTab } from './tabs/IdeasTab'
import { HooksTab } from './tabs/HooksTab'
import { ScriptsTab } from './tabs/ScriptsTab'
import { ShotlistsTab } from './tabs/ShotlistsTab'
import {
  LayoutDashboard,
  Flame,
  Zap,
  FileText,
  Video,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'
import { formatGoal, formatStyle } from '@/lib/utils'

type Tab = 'overview' | 'ideas' | 'hooks' | 'scripts' | 'shotlists'

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'overview', label: 'Übersicht', icon: LayoutDashboard },
  { id: 'ideas', label: 'Videoideen', icon: Flame },
  { id: 'hooks', label: 'Hooks', icon: Zap },
  { id: 'scripts', label: 'Skripte', icon: FileText },
  { id: 'shotlists', label: 'Shotlists', icon: Video },
]

export function ResultsClient() {
  const router = useRouter()
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const raw = sessionStorage.getItem('viraliq-result')
    if (!raw) {
      router.push('/analyze')
      return
    }
    try {
      setResult(JSON.parse(raw))
    } catch {
      router.push('/analyze')
    }
  }, [router])

  if (!mounted || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 text-sm">Ergebnisse werden geladen ...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Top bar */}
      <div className="border-b border-white/6 bg-[#080810]/80 backdrop-blur-xl sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb & meta */}
          <div className="py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/analyze"
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Neue Analyse
              </Link>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white font-semibold text-sm">{result.input.niche}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 text-sm">{formatGoal(result.input.goal)}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 text-sm">{formatStyle(result.input.style)}</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
              {result.input.platforms.map((p) => (
                <span key={p} className="px-2 py-1 rounded-md bg-white/4 border border-white/8 text-slate-400 capitalize">
                  {p === 'youtube' ? 'YT Shorts' : p}
                </span>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 pb-0 overflow-x-auto">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap border-b-2 ${
                    active
                      ? 'text-white border-indigo-500 bg-indigo-500/8'
                      : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/4'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {activeTab === 'overview' && <OverviewTab result={result} />}
        {activeTab === 'ideas' && <IdeasTab result={result} />}
        {activeTab === 'hooks' && <HooksTab result={result} />}
        {activeTab === 'scripts' && <ScriptsTab result={result} />}
        {activeTab === 'shotlists' && <ShotlistsTab result={result} />}
      </div>
    </div>
  )
}
