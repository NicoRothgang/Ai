export type Platform = 'tiktok' | 'instagram' | 'youtube' | 'facebook'
export type ContentGoal = 'viral' | 'sales' | 'leads' | 'branding'
export type ContentStyle =
  | 'authentic'
  | 'highquality'
  | 'direct'
  | 'emotional'
  | 'serious'
  | 'casual'

export interface AnalysisInput {
  niche: string
  targetAudience: string
  platforms: Platform[]
  goal: ContentGoal
  style: ContentStyle
}

export interface VideoIdea {
  id: string
  title: string
  description: string
  format: string
  estimatedViews: string
  difficulty: 'easy' | 'medium' | 'hard'
  potential: 'high' | 'medium' | 'low'
  tags: string[]
}

export interface Hook {
  id: string
  text: string
  type: 'question' | 'statement' | 'challenge' | 'story'
  platform: Platform[]
}

export interface Script {
  id: string
  title: string
  duration: string
  hook: string
  body: string[]
  cta: string
  format: string
}

export interface ShotlistItem {
  order: number
  shot: string
  description: string
  duration: string
  notes?: string
}

export interface Shotlist {
  id: string
  title: string
  totalDuration: string
  shots: ShotlistItem[]
}

export interface ContentFormat {
  name: string
  description: string
  platforms: Platform[]
  avgEngagement: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface TrendInsight {
  topic: string
  relevance: 'high' | 'medium' | 'low'
  momentum: 'rising' | 'stable' | 'declining'
  description: string
}

export interface AnalysisResult {
  id: string
  input: AnalysisInput
  generatedAt: string
  viralScore: number
  salesScore: number
  summary: string
  trendInsights: TrendInsight[]
  topFormats: ContentFormat[]
  viralIdeas: VideoIdea[]
  salesIdeas: VideoIdea[]
  hooks: Hook[]
  scripts: Script[]
  shotlists: Shotlist[]
}
