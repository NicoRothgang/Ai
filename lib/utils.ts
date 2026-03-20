import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatPlatform(p: string): string {
  const map: Record<string, string> = {
    tiktok: 'TikTok',
    instagram: 'Instagram',
    youtube: 'YouTube Shorts',
    facebook: 'Facebook',
  }
  return map[p] ?? p
}

export function formatGoal(g: string): string {
  const map: Record<string, string> = {
    viral: 'Viral gehen',
    sales: 'Verkaufen',
    leads: 'Leads generieren',
    branding: 'Branding aufbauen',
  }
  return map[g] ?? g
}

export function formatStyle(s: string): string {
  const map: Record<string, string> = {
    authentic: 'Authentisch',
    highquality: 'Hochwertig',
    direct: 'Direkt',
    emotional: 'Emotional',
    serious: 'Seriös',
    casual: 'Locker',
  }
  return map[s] ?? s
}

export function scoreColor(score: number): string {
  if (score >= 80) return 'text-emerald-400'
  if (score >= 60) return 'text-amber-400'
  return 'text-red-400'
}

export function momentumLabel(m: string): string {
  const map: Record<string, string> = {
    rising: 'Steigend',
    stable: 'Stabil',
    declining: 'Rückläufig',
  }
  return map[m] ?? m
}

export function difficultyLabel(d: string): string {
  const map: Record<string, string> = {
    easy: 'Einfach',
    medium: 'Mittel',
    hard: 'Aufwendig',
  }
  return map[d] ?? d
}

export function potentialColor(p: string): string {
  const map: Record<string, string> = {
    high: 'text-emerald-400',
    medium: 'text-amber-400',
    low: 'text-slate-400',
  }
  return map[p] ?? 'text-slate-400'
}
