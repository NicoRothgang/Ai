import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ViralIQ – Content Strategy & Video Ideas für deine Nische',
  description:
    'Finde virale und verkaufsstarke Videoideen für deine Nische. KI-gestützte Content-Strategie für TikTok, Instagram, YouTube und mehr.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
