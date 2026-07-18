import { useEffect, useState, type CSSProperties } from 'react'
import { FAVICON_POOL, SARCASTIC_TITLES, scrambleText } from '../../tokens/glitch'

export interface MockPageCopy {
  tabTitle: string
  url: string
  heading: string
  paragraphs: string[]
  links: string[]
}

type GlitchKind = 'chromatic' | 'hue' | 'blur' | 'invert' | 'title' | 'favicon' | 'scramble'

interface Step {
  kind: GlitchKind
  on: number
  off: number
}

// One glitch demoed at a time, in order, looping — mirrors the real
// extension's effect pool (extension/src/content/glitch.ts) but simplified
// to a fixed, readable sequence instead of a weighted random pick.
const STEPS: Step[] = [
  { kind: 'chromatic', on: 1800, off: 900 },
  { kind: 'title', on: 1800, off: 900 },
  { kind: 'scramble', on: 1400, off: 900 },
  { kind: 'hue', on: 1400, off: 900 },
  { kind: 'favicon', on: 1800, off: 900 },
  { kind: 'blur', on: 900, off: 900 },
  { kind: 'invert', on: 500, off: 1300 },
]

interface Props {
  page: MockPageCopy
}

export default function GlitchWindow({ page }: Props) {
  const [active, setActive] = useState<GlitchKind | null>(null)
  const [scramble, setScramble] = useState<{ index: number; text: string } | null>(null)
  const [favicon, setFavicon] = useState<string | null>(null)
  const [titleFlip, setTitleFlip] = useState(false)
  const [sarcasticTitle, setSarcasticTitle] = useState('')

  useEffect(() => {
    if (active !== 'title') return
    const id = setInterval(() => setTitleFlip((f) => !f), 180)
    return () => {
      clearInterval(id)
      setTitleFlip(false)
    }
  }, [active])

  useEffect(() => {
    let cancelled = false
    let i = 0

    function enter(step: Step) {
      setActive(step.kind)
      if (step.kind === 'scramble') {
        const index = Math.floor(Math.random() * page.paragraphs.length)
        setScramble({ index, text: scrambleText(page.paragraphs[index]) })
      }
      if (step.kind === 'favicon') {
        setFavicon(FAVICON_POOL[Math.floor(Math.random() * FAVICON_POOL.length)])
      }
      if (step.kind === 'title') {
        setSarcasticTitle(SARCASTIC_TITLES[Math.floor(Math.random() * SARCASTIC_TITLES.length)])
      }
    }

    function exit() {
      setActive(null)
      setScramble(null)
      setFavicon(null)
    }

    function loop() {
      if (cancelled) return
      const step = STEPS[i % STEPS.length]
      enter(step)
      setTimeout(() => {
        if (cancelled) return
        exit()
        setTimeout(() => {
          if (cancelled) return
          i++
          loop()
        }, step.off)
      }, step.on)
    }

    loop()
    return () => {
      cancelled = true
    }
  }, [page.paragraphs])

  const windowStyle: CSSProperties = {
    filter:
      [
        active === 'blur' ? 'blur(3px)' : '',
        active === 'hue' ? 'hue-rotate(160deg)' : '',
        active === 'invert' ? 'invert(1)' : '',
      ]
        .filter(Boolean)
        .join(' ') || undefined,
    transition: 'filter 0.25s',
  }

  const textStyle: CSSProperties =
    active === 'chromatic' ? { textShadow: '-2px 0 #ff0055, 2px 0 #00ffee' } : {}

  const displayTitle = active === 'title' && titleFlip ? sarcasticTitle : page.tabTitle

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-brand-border shadow-2xl">
      <div className="flex items-center gap-2 bg-[#1a1822] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-3 flex flex-1 items-center gap-2 truncate rounded bg-black/30 px-3 py-1 text-xs text-brand-dim">
          <span>{favicon ?? '🌐'}</span>
          <span className="truncate">{page.url}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 border-b border-brand-border bg-[#141219] px-4 py-2 text-xs text-brand-dim">
        <span>{favicon ?? '🌐'}</span>
        <span className="truncate">{displayTitle}</span>
      </div>

      <div style={windowStyle} className="bg-white px-8 py-10 text-left">
        <h3 style={textStyle} className="text-lg font-bold text-[#1a1a1a]">
          {page.heading}
        </h3>
        {page.paragraphs.map((p, i) => (
          <p key={i} style={textStyle} className="mt-4 text-sm leading-relaxed text-[#333]">
            {scramble && scramble.index === i ? scramble.text : p}
          </p>
        ))}
        <div className="mt-6 flex gap-4 text-sm">
          {page.links.map((l) => (
            <span key={l} style={textStyle} className="text-blue-600 underline">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
