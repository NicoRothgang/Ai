import type { AnalysisInput, AnalysisResult, Hook, VideoIdea, Script, Shotlist } from '@/types/analysis'
import {
  FORMAT_TEMPLATES,
  HOOK_TEMPLATES,
  TREND_INSIGHTS,
  getNicheData,
} from '@/data/mock-templates'

// ─── Score calculation ────────────────────────────────────────────────────────

function calcViralScore(input: AnalysisInput): number {
  let score = 50
  if (input.platforms.includes('tiktok')) score += 15
  if (input.platforms.includes('instagram')) score += 10
  if (input.goal === 'viral') score += 15
  if (input.style === 'authentic') score += 8
  if (input.style === 'emotional') score += 6
  if (input.style === 'casual') score += 4
  return Math.min(score, 98)
}

function calcSalesScore(input: AnalysisInput): number {
  let score = 45
  if (input.platforms.includes('instagram')) score += 10
  if (input.platforms.includes('facebook')) score += 12
  if (input.platforms.includes('youtube')) score += 8
  if (input.goal === 'sales') score += 20
  if (input.goal === 'leads') score += 15
  if (input.style === 'direct') score += 10
  if (input.style === 'serious') score += 6
  return Math.min(score, 97)
}

// ─── Utility ──────────────────────────────────────────────────────────────────

let counter = 1
function uid() {
  return `id-${Date.now()}-${counter++}`
}

function interpolate(text: string, niche: string, audience: string): string {
  return text
    .replace(/\{niche\}/g, niche)
    .replace(/\{audience\}/g, audience)
    .replace(/\{action\}/g, `mit ${niche} zusammenarbeiten`)
}

// ─── Main engine ─────────────────────────────────────────────────────────────

export async function runAnalysis(input: AnalysisInput): Promise<AnalysisResult> {
  // Simulated async latency (replace with real API calls later)
  await new Promise((r) => setTimeout(r, 1800))

  const nicheData = getNicheData(input.niche, input.goal, input.style, input.platforms)

  const hooks: Hook[] = HOOK_TEMPLATES.filter((h) =>
    h.platform.some((p) => input.platforms.includes(p))
  ).map((h) => ({
    id: uid(),
    text: interpolate(h.text, input.niche, input.targetAudience),
    type: h.type,
    platform: h.platform.filter((p) => input.platforms.includes(p)),
  }))

  const viralIdeas: VideoIdea[] = nicheData.viralIdeas.map((idea) => ({
    id: uid(),
    ...idea,
  }))

  const salesIdeas: VideoIdea[] = nicheData.salesIdeas.map((idea) => ({
    id: uid(),
    ...idea,
  }))

  const scripts: Script[] = nicheData.scripts.map((s) => ({
    id: uid(),
    ...s,
  }))

  const shotlists: Shotlist[] = nicheData.shotlists.map((sl) => ({
    id: uid(),
    ...sl,
  }))

  const trendInsights = nicheData.trendTopics.map((topic, i) => ({
    topic,
    ...(TREND_INSIGHTS[i % TREND_INSIGHTS.length]),
  }))

  const topFormats = FORMAT_TEMPLATES.filter((f) =>
    f.platforms.some((p) => input.platforms.includes(p))
  ).slice(0, 4)

  const summary = buildSummary(input, calcViralScore(input), calcSalesScore(input))

  return {
    id: uid(),
    input,
    generatedAt: new Date().toISOString(),
    viralScore: calcViralScore(input),
    salesScore: calcSalesScore(input),
    summary,
    trendInsights,
    topFormats,
    viralIdeas,
    salesIdeas,
    hooks,
    scripts,
    shotlists,
  }
}

function buildSummary(input: AnalysisInput, viralScore: number, salesScore: number): string {
  const platformList = input.platforms.join(', ')
  const strength = viralScore > salesScore ? 'virale Reichweite' : 'direkte Conversion'
  return `Die Analyse für die Nische "${input.niche}" zeigt klares Potenzial für ${strength}. Basierend auf deinen Plattformen (${platformList}), deiner Zielgruppe und deinem Stil wurden passende Formate, Hooks und Ideen zusammengestellt. Der Fokus liegt auf umsetzbarem Content, der sowohl organische Reichweite als auch konkrete Ergebnisse erzielen kann.`
}
