import Link from 'next/link'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-white">
            Viral<span className="gradient-text">IQ</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="#" className="hover:text-slate-300 transition-colors">Datenschutz</Link>
          <Link href="#" className="hover:text-slate-300 transition-colors">AGB</Link>
          <Link href="#" className="hover:text-slate-300 transition-colors">Impressum</Link>
          <Link href="/analyze" className="hover:text-slate-300 transition-colors">Analyse starten</Link>
        </nav>

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} ViralIQ
        </p>
      </div>
    </footer>
  )
}
