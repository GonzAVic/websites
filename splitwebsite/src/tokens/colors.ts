// Mood palette — mirrors GHOST_COLOR in
// extension/src/newtab/ghost/GhostAscii.tsx. Keep these two in sync by hand;
// there's no shared package between the extension and this site (yet).

export const MOOD_COLORS = {
  calm: '#4a8fff',
  uneasy: '#ffaa22',
  fragmented: '#ff44cc',
  chaotic: '#ff2244',
  beast: '#aa22ff',
} as const

export type Mood = keyof typeof MOOD_COLORS

// Brand/neutral tones for the site itself, independent of mood.
export const BRAND_COLORS = {
  bg: '#03000a',
  panel: '#0a0514',
  border: '#ffffff1a',
  text: '#d8d4e0',
  dim: '#8a8496',
  heading: '#f0eef5',
}
