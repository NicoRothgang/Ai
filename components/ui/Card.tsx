import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = false, glow = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/8 bg-white/3 p-6',
        glow && 'card-glow',
        hover && 'card-glow-hover cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4 mb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: CardHeaderProps) {
  return (
    <h3 className={cn('text-base font-semibold text-white leading-snug', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: CardHeaderProps) {
  return (
    <p className={cn('text-sm text-slate-400 leading-relaxed mt-1', className)}>
      {children}
    </p>
  )
}
