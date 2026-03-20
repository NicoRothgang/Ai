import type {
  ContentFormat,
  TrendInsight,
  VideoIdea,
  Hook,
  Script,
  Shotlist,
  Platform,
  ContentGoal,
  ContentStyle,
} from '@/types/analysis'

// ─── Format templates per niche category ───────────────────────────────────

export const FORMAT_TEMPLATES: ContentFormat[] = [
  {
    name: 'Before & After',
    description:
      'Zeige eine klare Transformation – vorher und nachher. Funktioniert für fast alle Nischen und erzeugt starkes Engagement.',
    platforms: ['tiktok', 'instagram', 'youtube'],
    avgEngagement: '4.2%',
    difficulty: 'easy',
  },
  {
    name: 'POV / Day-in-the-Life',
    description:
      'Authentischer Einblick in deinen Alltag oder den deiner Kunden. Wirkt nahbar und aufbauend.',
    platforms: ['tiktok', 'instagram'],
    avgEngagement: '5.8%',
    difficulty: 'easy',
  },
  {
    name: '3 Fehler, die XY macht',
    description:
      'Educationally aufgebaut, weckt Neugierde und positioniert dich als Experte.',
    platforms: ['tiktok', 'instagram', 'youtube', 'facebook'],
    avgEngagement: '6.1%',
    difficulty: 'medium',
  },
  {
    name: 'Testimonial Story',
    description:
      'Kundenstory erzählt aus der Ich-Perspektive oder als Re-Tell. Extremes Vertrauenssignal.',
    platforms: ['instagram', 'facebook', 'youtube'],
    avgEngagement: '3.9%',
    difficulty: 'medium',
  },
  {
    name: 'Quick-Tip / Hack',
    description:
      'Kurzer, wertvoller Tipp in unter 30 Sekunden. Extrem shareable und für Reichweite optimiert.',
    platforms: ['tiktok', 'instagram', 'youtube'],
    avgEngagement: '7.3%',
    difficulty: 'easy',
  },
  {
    name: 'Behind the Scenes',
    description:
      'Zeige deinen Prozess, dein Team oder dein Setup. Baut Authentizität und Vertrauen auf.',
    platforms: ['tiktok', 'instagram', 'youtube'],
    avgEngagement: '4.7%',
    difficulty: 'easy',
  },
  {
    name: 'Myth vs. Reality',
    description:
      'Zerstöre weit verbreitete Fehlannahmen in deiner Branche. Positioniert dich als Experte.',
    platforms: ['tiktok', 'instagram', 'youtube', 'facebook'],
    avgEngagement: '5.4%',
    difficulty: 'medium',
  },
  {
    name: 'Vergleich / Breakdown',
    description:
      'Vergleiche zwei Optionen oder erkläre Unterschiede. Hoher Educational Value.',
    platforms: ['youtube', 'instagram', 'facebook'],
    avgEngagement: '4.1%',
    difficulty: 'hard',
  },
]

// ─── Hook templates ──────────────────────────────────────────────────────────

export const HOOK_TEMPLATES: Omit<Hook, 'id'>[] = [
  {
    text: 'Das macht {niche} anders als alle anderen – und warum du das wissen solltest.',
    type: 'statement',
    platform: ['tiktok', 'instagram', 'youtube'],
  },
  {
    text: 'Wusstest du, dass die meisten {audience} einen großen Fehler machen?',
    type: 'question',
    platform: ['tiktok', 'instagram'],
  },
  {
    text: 'Ich habe 3 Monate gebraucht, um das herauszufinden. Dir erkläre ich es in 60 Sekunden.',
    type: 'story',
    platform: ['tiktok', 'instagram', 'youtube'],
  },
  {
    text: 'Stop scrolling. Das ist der wichtigste Tipp für {audience} in 2024.',
    type: 'challenge',
    platform: ['tiktok', 'instagram'],
  },
  {
    text: '3 Dinge, die {niche} nie sagen werden – aber du wissen solltest.',
    type: 'statement',
    platform: ['tiktok', 'instagram', 'youtube', 'facebook'],
  },
  {
    text: 'Was passiert, wenn du {action} – und warum 90% es falsch machen.',
    type: 'question',
    platform: ['youtube', 'facebook'],
  },
  {
    text: 'Ich habe alles ausprobiert. Das ist das Einzige, was wirklich funktioniert.',
    type: 'story',
    platform: ['tiktok', 'instagram'],
  },
  {
    text: 'Die Wahrheit über {niche}, die niemand ausspricht.',
    type: 'statement',
    platform: ['tiktok', 'instagram', 'youtube'],
  },
]

// ─── Trend insights ──────────────────────────────────────────────────────────

export const TREND_INSIGHTS: Omit<TrendInsight, 'topic'>[] = [
  {
    relevance: 'high',
    momentum: 'rising',
    description:
      'Authentischer, unpolierter Content dominiert derzeit die Feeds. Weniger Hochglanz, mehr Realität – das Publikum honoriert das mit Vertrauen.',
  },
  {
    relevance: 'high',
    momentum: 'rising',
    description:
      'Kurzvideos unter 30 Sekunden mit klarem Value erhalten überproportional viel organische Reichweite auf TikTok und Instagram Reels.',
  },
  {
    relevance: 'medium',
    momentum: 'stable',
    description:
      'Educational Content kombiniert mit persönlicher Story hat eine deutlich höhere Retention-Rate als rein informative Videos.',
  },
  {
    relevance: 'high',
    momentum: 'rising',
    description:
      'Creator, die sich klar positionieren und eine klare Meinung vertreten, wachsen schneller als solche mit generischem Content.',
  },
  {
    relevance: 'medium',
    momentum: 'stable',
    description:
      'User Generated Content und Testimonials sind auf Facebook und Instagram nach wie vor starke Performance-Signale für Ads und Organic.',
  },
]

// ─── Niche-specific idea generators ─────────────────────────────────────────

interface NicheData {
  viralIdeas: Omit<VideoIdea, 'id'>[]
  salesIdeas: Omit<VideoIdea, 'id'>[]
  trendTopics: string[]
  scripts: Omit<Script, 'id'>[]
  shotlists: Omit<Shotlist, 'id'>[]
}

export function getNicheData(
  niche: string,
  goal: ContentGoal,
  style: ContentStyle,
  platforms: Platform[]
): NicheData {
  const n = niche.toLowerCase()

  // Derive niche category
  const isHealth =
    n.includes('zahnarzt') ||
    n.includes('arzt') ||
    n.includes('fitness') ||
    n.includes('gesundheit') ||
    n.includes('coach') ||
    n.includes('wellness') ||
    n.includes('trainer') ||
    n.includes('personal')
  const isService =
    n.includes('agentur') ||
    n.includes('makler') ||
    n.includes('fotograf') ||
    n.includes('friseur') ||
    n.includes('berater')
  const isHospitality =
    n.includes('hotel') ||
    n.includes('restaurant') ||
    n.includes('café') ||
    n.includes('gastronomie')
  const isEcommerce =
    n.includes('shop') ||
    n.includes('brand') ||
    n.includes('e-commerce') ||
    n.includes('produkt')

  const viralIdeas: Omit<VideoIdea, 'id'>[] = [
    {
      title: `3 Dinge, die du über ${niche} nicht wusstest`,
      description: `Überraschende, wenig bekannte Fakten aus deiner Nische. Format: Talking Head + Inserts. Breites Publikum, hohe Shareability.`,
      format: 'Quick-Tip Reel',
      estimatedViews: '15.000 – 80.000',
      difficulty: 'easy',
      potential: 'high',
      tags: ['educational', 'viral', 'evergreen'],
    },
    {
      title: `Ein Tag als ${niche} – der ehrliche Einblick`,
      description: `Day-in-the-Life im authentischen POV-Stil. Kein Hochglanz, stattdessen echter Alltag. Wirkt nahbar und baut Vertrauen auf.`,
      format: 'POV / Vlog',
      estimatedViews: '8.000 – 40.000',
      difficulty: 'easy',
      potential: 'high',
      tags: ['authentic', 'behind-the-scenes', 'trust'],
    },
    {
      title: `Das hätte ich gerne früher über ${niche} gewusst`,
      description: `Persönliche Story mit klaren Learnings. Hook-stark, emotional, hohe Completion Rate durch Story-Bogen.`,
      format: 'Story Reel',
      estimatedViews: '12.000 – 60.000',
      difficulty: 'medium',
      potential: 'high',
      tags: ['story', 'educational', 'emotional'],
    },
    ...(isHealth
      ? [
          {
            title: `Vorher vs. Nachher – was wirklich möglich ist`,
            description: `Transformation zeigen mit ehrlicher Einordnung. Kein falscher Hype – klare, nachvollziehbare Veränderung.`,
            format: 'Before & After',
            estimatedViews: '20.000 – 120.000',
            difficulty: 'easy' as const,
            potential: 'high' as const,
            tags: ['transformation', 'proof', 'inspiration'],
          },
        ]
      : []),
    ...(isService
      ? [
          {
            title: `So läuft ein Projekt bei uns ab – transparent erklärt`,
            description: `Zeige deinen internen Prozess verständlich und nahbar. Reduziert Hemmschwellen und qualifiziert potenzielle Kunden vor.`,
            format: 'Process Breakdown',
            estimatedViews: '5.000 – 25.000',
            difficulty: 'medium' as const,
            potential: 'medium' as const,
            tags: ['transparency', 'process', 'trust'],
          },
        ]
      : []),
    ...(isHospitality
      ? [
          {
            title: `Was Gäste bei uns wirklich erleben – nicht was wir zeigen wollen`,
            description: `Zeige den echten Gast-Moment ohne Inszenierung. Emotionale Reaktionen, echte Erlebnisse. Sehr shareable.`,
            format: 'Guest Moment Reel',
            estimatedViews: '25.000 – 150.000',
            difficulty: 'easy' as const,
            potential: 'high' as const,
            tags: ['emotional', 'authentic', 'viral'],
          },
        ]
      : []),
  ]

  const salesIdeas: Omit<VideoIdea, 'id'>[] = [
    {
      title: `Warum ${niche} der beste Schritt ist, den du jetzt machen kannst`,
      description: `Direkte, klare Value-Proposition. Zeige konkrete Ergebnisse, adressiere Einwände, starker CTA. Ideal für Conversion.`,
      format: 'Sales Reel',
      estimatedViews: '3.000 – 15.000',
      difficulty: 'medium',
      potential: 'high',
      tags: ['sales', 'cta', 'conversion'],
    },
    {
      title: `Kundenstory: Was sich nach der Zusammenarbeit verändert hat`,
      description: `Testimonial-Video mit echtem Kunden. Authentisch, ehrlich, spezifisch. Eines der stärksten Sales-Formate überhaupt.`,
      format: 'Testimonial Story',
      estimatedViews: '2.000 – 12.000',
      difficulty: 'medium',
      potential: 'high',
      tags: ['social-proof', 'trust', 'conversion'],
    },
    {
      title: `Häufigste Fragen zu ${niche} – direkt beantwortet`,
      description: `FAQ-Format mit direktem Nutzen. Qualifiziert Leads, räumt Einwände aus, positioniert dich als Ansprechpartner.`,
      format: 'FAQ Video',
      estimatedViews: '4.000 – 20.000',
      difficulty: 'easy',
      potential: 'medium',
      tags: ['educational', 'lead-gen', 'trust'],
    },
    {
      title: `Was dich ein schlechter ${niche} wirklich kostet`,
      description: `Problem-Agitation-Solution. Zeige die Konsequenzen falscher Entscheidungen. Weckt Dringlichkeit ohne falschen Druck.`,
      format: 'PAS Reel',
      estimatedViews: '5.000 – 25.000',
      difficulty: 'medium',
      potential: 'high',
      tags: ['urgency', 'problem', 'sales'],
    },
  ]

  const scripts: Omit<Script, 'id'>[] = [
    {
      title: `Hook-Script: "3 Fehler bei ${niche}"`,
      duration: '45–60 Sek.',
      hook: `Warte kurz. Diese 3 Fehler machen fast alle, wenn sie zum ersten Mal mit ${niche} zu tun haben.`,
      body: [
        `Fehler 1: [Beschreibe häufigen Fehler in deiner Nische, konkret und nachvollziehbar]`,
        `Fehler 2: [Zweiter Fehler – zeige warum er passiert und was er kostet]`,
        `Fehler 3: [Dritter Fehler – der subtilste, aber oft der teuerste]`,
        `Das Gute: all das ist vermeidbar, wenn du weißt, worauf du achten musst.`,
      ],
      cta: `Wenn du wissen willst, wie du das konkret umsetzt, schreib mir eine Nachricht oder klick den Link in der Bio.`,
      format: 'Talking Head / Reel',
    },
    {
      title: `Story-Script: "Was sich verändert hat"`,
      duration: '60–90 Sek.',
      hook: `Vor 6 Monaten war das hier noch nicht möglich. Heute zeige ich dir, was sich wirklich verändert hat.`,
      body: [
        `[Beschreibe den Ausgangszustand – konkret, ehrlich, ohne Übertreibung]`,
        `[Erkläre, was der entscheidende Moment oder die Entscheidung war]`,
        `[Zeige den Wandel – spezifisch, mit konkreten Details]`,
        `[Gib eine Erkenntnis weiter, die auch deinem Publikum nützt]`,
      ],
      cta: `Falls du gerade in einer ähnlichen Situation steckst – lass uns kurz sprechen. Link ist in der Bio.`,
      format: 'Story Reel / Vlog',
    },
  ]

  const shotlists: Omit<Shotlist, 'id'>[] = [
    {
      title: `Shotlist: "${niche} – Quick-Tip Reel"`,
      totalDuration: '30–45 Sek.',
      shots: [
        {
          order: 1,
          shot: 'Opening Hook',
          description: 'Direkt in die Kamera, stehend oder sitzend. Starker erster Satz.',
          duration: '3–5 Sek.',
          notes: 'Kein Intro, sofort mit Hook starten',
        },
        {
          order: 2,
          shot: 'Insert / B-Roll',
          description: 'Zeige visuell, wovon du sprichst – Produkt, Arbeitsplatz, Prozess.',
          duration: '3–4 Sek.',
          notes: 'Nahaufnahme, scharfe Kante, gutes Licht',
        },
        {
          order: 3,
          shot: 'Talking Head – Punkt 1',
          description: 'Erster Tipp / Aussage klar formuliert, direkter Blickkontakt.',
          duration: '8–10 Sek.',
          notes: '',
        },
        {
          order: 4,
          shot: 'Insert / Grafik',
          description: 'Text-Overlay oder kurzes Insert als visuelle Unterstützung.',
          duration: '2–3 Sek.',
          notes: 'Unterstützt den gesprochenen Punkt',
        },
        {
          order: 5,
          shot: 'Talking Head – Punkt 2',
          description: 'Zweite Aussage mit leicht veränderter Position oder Winkel.',
          duration: '8–10 Sek.',
          notes: 'Cuts erzeugen Dynamik',
        },
        {
          order: 6,
          shot: 'CTA / Abschluss',
          description: 'Direkt in die Kamera, klare Handlungsaufforderung.',
          duration: '3–5 Sek.',
          notes: 'Konkret bleiben: "Kommentiere X" oder "Link in Bio"',
        },
      ],
    },
  ]

  const trendTopics = [
    `Authentizität vs. Hochglanz in der ${niche}-Branche`,
    `Community Building für ${niche}`,
    `Short-Form Video als Hauptkanal`,
    `Social Proof und Vertrauen aufbauen`,
    `Nischen-Positionierung statt Masse`,
  ]

  return { viralIdeas, salesIdeas, trendTopics, scripts, shotlists }
}
