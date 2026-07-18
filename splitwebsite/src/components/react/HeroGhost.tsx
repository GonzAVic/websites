import { useEffect, useState } from 'react'
import type { Mood } from '../../tokens/colors'
import { MOOD_ORDER } from '../../tokens/ghost-art'
import GhostArt from './GhostArt'

const MOOD_SWITCH_MS = 1500

function randomMood(exclude: Mood): Mood {
  const options = MOOD_ORDER.filter((m) => m !== exclude)
  return options[Math.floor(Math.random() * options.length)]
}

export default function HeroGhost() {
  const [mood, setMood] = useState<Mood>('calm')

  // Cycle through a random mood every 1.5s — a showcase of the product's
  // mood system, not a real tab count (there is no browser tab to read here).
  useEffect(() => {
    const id = setInterval(() => {
      setMood((current) => randomMood(current))
    }, MOOD_SWITCH_MS)
    return () => clearInterval(id)
  }, [])

  return <GhostArt mood={mood} className="mx-auto w-fit text-lg sm:text-xl" />
}
