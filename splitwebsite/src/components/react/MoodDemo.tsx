import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react'
import { MOOD_COLORS, type Mood } from '../../tokens/colors'
import { getMoodForTabCount, MAX_DEMO_TABS } from '../../tokens/mood-thresholds'
import GhostArt from './GhostArt'

export interface MoodDemoItem {
  mood: Mood
  range: string
  label: string
  description: string
}

interface Props {
  moods: MoodDemoItem[]
}

const AUTO_STEP_MS = 180
const RESUME_AFTER_MS = 5000

export default function MoodDemo({ moods }: Props) {
  const [tabCount, setTabCount] = useState(0)
  const [auto, setAuto] = useState(true)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const mood = useMemo(() => getMoodForTabCount(tabCount), [tabCount])
  const color = MOOD_COLORS[mood]

  // Auto-ramp the demo tab count until the visitor grabs the slider —
  // wraps back to 0 at the top instead of stopping.
  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => {
      setTabCount((c) => (c >= MAX_DEMO_TABS ? 0 : c + 1))
    }, AUTO_STEP_MS)
    return () => clearInterval(id)
  }, [auto])

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTabCount(Number(e.target.value))
    setAuto(false)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setAuto(true), RESUME_AFTER_MS)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
      <div className="flex flex-col items-center gap-6">
        <GhostArt mood={mood} className="text-lg sm:text-xl" />
        <div className="w-full max-w-xs">
          <input
            type="range"
            min={0}
            max={MAX_DEMO_TABS}
            value={tabCount}
            onChange={handleChange}
            className="w-full"
            style={{ accentColor: color }}
            aria-label="Simulated open tab count"
          />
          <p className="mt-3 text-center font-mono text-sm text-brand-dim">
            <span style={{ color }} className="font-bold">
              {tabCount}
            </span>{' '}
            tabs open
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {moods.map((m) => {
          const active = m.mood === mood
          return (
            <div
              key={m.mood}
              className="flex flex-wrap items-center gap-4 border p-4 transition-colors duration-200"
              style={{
                borderColor: active ? MOOD_COLORS[m.mood] : 'var(--color-brand-border)',
                backgroundColor: active ? 'color-mix(in srgb, var(--color-brand-panel) 60%, transparent)' : undefined,
              }}
            >
              <span
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: MOOD_COLORS[m.mood] }}
              >
                {m.label} — {m.range}
              </span>
              <span className="text-sm text-brand-dim">{m.description}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
