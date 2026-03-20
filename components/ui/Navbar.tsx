import Link from 'next/link'
import { Button } from './Button'
import { Zap } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Viral<span className="gradient-text">IQ</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#features" className="text-slate-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-slate-400 hover:text-white transition-colors">
              So funktioniert&apos;s
            </Link>
            <Link href="/analyze" className="text-slate-400 hover:text-white transition-colors">
              Analyse starten
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Link href="/analyze">
              <Button size="sm">Kostenlos starten</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
