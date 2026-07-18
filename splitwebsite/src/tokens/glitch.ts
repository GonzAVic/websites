// Mirrors the glitch pools in extension/src/content/glitch.ts — kept short
// and hand-synced, same pattern as colors.ts / ghost-art.ts.

export const GLITCH_CHARS = '░▒▓█▄▀■□▪◘♦◄►↑↓←→@#%&?!~'

export const SARCASTIC_TITLES = [
  'still collecting tabs?',
  'are you even trying?',
  'tab hoarder detected',
  'memory? what memory?',
  'help me... please...',
  'this is fine. everything is fine.',
]

export const FAVICON_POOL = ['⚠️', '💀', '🌀', '💢', '❓']

function randomGlitchChar(): string {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
}

export function scrambleText(text: string, intensity = 0.35): string {
  return text
    .split('')
    .map((c) => (c !== ' ' && Math.random() < intensity ? randomGlitchChar() : c))
    .join('')
}
