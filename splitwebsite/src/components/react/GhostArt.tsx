import { useEffect, useState } from 'react'
import { MOOD_COLORS, type Mood } from '../../tokens/colors'
import { GHOST_ART } from '../../tokens/ghost-art'

interface Props {
  mood: Mood
  className?: string
}

// Presentational ghost renderer — blinks and sways on its own, but the mood
// itself is always driven by a parent (HeroGhost cycles it randomly,
// MoodDemo drives it from a slider).
export default function GhostArt({ mood, className }: Props) {
  const [blink, setBlink] = useState(false)
  const [skirtTick, setSkirtTick] = useState(0)

  useEffect(() => {
    const loop = () => {
      setBlink(true)
      setTimeout(() => setBlink(false), 130)
    }
    const id = setInterval(loop, 3500 + Math.random() * 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ms = mood === 'chaotic' ? 200 : 700
    const id = setInterval(() => setSkirtTick((t) => t + 1), ms)
    return () => clearInterval(id)
  }, [mood])

  const frames = GHOST_ART[mood]
  const lines = [...(blink ? frames.blink : frames.open)]
  const lastIdx = lines.length - 1
  if (mood !== 'beast') {
    lines[lastIdx] = skirtTick % 2 === 0 ? lines[lastIdx] : ' ' + lines[lastIdx]
  }

  const color = MOOD_COLORS[mood]

  return (
    <pre
      aria-hidden="true"
      className={`font-mono leading-tight transition-colors duration-300 ${className ?? ''}`}
      style={{ color, filter: `drop-shadow(0 0 10px ${color})` }}
    >
      {lines.join('\n')}
    </pre>
  )
}
