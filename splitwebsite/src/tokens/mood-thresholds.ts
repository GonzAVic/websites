// Mirrors MOOD_THRESHOLDS in extension/src/lib/stateMachine.ts. Keep in
// sync by hand — same pattern as colors.ts / ghost-art.ts.

import type { Mood } from './colors'

const MOOD_THRESHOLDS: { mood: Mood; min: number }[] = [
  { mood: 'beast', min: 26 },
  { mood: 'chaotic', min: 18 },
  { mood: 'fragmented', min: 11 },
  { mood: 'uneasy', min: 6 },
  { mood: 'calm', min: 0 },
]

export function getMoodForTabCount(count: number): Mood {
  for (const { mood, min } of MOOD_THRESHOLDS) {
    if (count >= min) return mood
  }
  return 'calm'
}

export const MAX_DEMO_TABS = 35
