'use client'

interface ScoreRingProps {
  score: number
  label: string
  sublabel?: string
  color?: 'indigo' | 'emerald' | 'amber'
  size?: 'sm' | 'md' | 'lg'
}

export function ScoreRing({
  score,
  label,
  sublabel,
  color = 'indigo',
  size = 'md',
}: ScoreRingProps) {
  const radius = size === 'lg' ? 52 : size === 'md' ? 44 : 34
  const strokeWidth = size === 'lg' ? 6 : 5
  const cx = radius + strokeWidth
  const cy = radius + strokeWidth
  const viewBoxSize = (radius + strokeWidth) * 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const colorMap = {
    indigo: { stroke: '#6366f1', glow: 'rgba(99,102,241,0.3)', text: 'text-indigo-300' },
    emerald: { stroke: '#10b981', glow: 'rgba(16,185,129,0.3)', text: 'text-emerald-300' },
    amber: { stroke: '#f59e0b', glow: 'rgba(245,158,11,0.3)', text: 'text-amber-300' },
  }

  const c = colorMap[color]
  const textSize = size === 'lg' ? 'text-3xl' : size === 'md' ? 'text-2xl' : 'text-xl'
  const svgSize = viewBoxSize

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center" style={{ width: svgSize, height: svgSize }}>
        <svg width={svgSize} height={svgSize} className="rotate-[-90deg]">
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={c.stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 6px ${c.glow})`,
              transition: 'stroke-dashoffset 1s ease',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold ${textSize} text-white`}>{score}</span>
        </div>
      </div>
      <div className="text-center">
        <p className={`text-sm font-semibold ${c.text}`}>{label}</p>
        {sublabel && <p className="text-xs text-slate-500 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  )
}
