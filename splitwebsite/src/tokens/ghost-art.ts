// ASCII ghost frames — mirrors GHOST in
// extension/src/newtab/ghost/GhostAscii.tsx. Keep these two in sync by hand,
// same as MOOD_COLORS in ./colors.ts; there's no shared package between the
// extension and this site (yet).

import type { Mood } from './colors'

export interface GhostFrames {
  open: string[]
  blink: string[]
}

export const GHOST_ART: Record<Mood, GhostFrames> = {
  calm: {
    open: [
      '  .------.',
      ' /  ●  ●  \\',
      '|          |',
      '|          |',
      '|          |',
      ' \\/\\/\\/\\/',
    ],
    blink: [
      '  .------.',
      ' /  ─  ─  \\',
      '|          |',
      '|          |',
      '|          |',
      ' \\/\\/\\/\\/',
    ],
  },
  uneasy: {
    open: [
      '  .------.',
      ' /  ◕  ◕  \\',
      '|          |',
      '|          |',
      '|          |',
      ' \\/\\/\\/\\/',
    ],
    blink: [
      '  .------.',
      ' /  ─  ─  \\',
      '|          |',
      '|          |',
      '|          |',
      ' \\/\\/\\/\\/',
    ],
  },
  fragmented: {
    open: [
      '  .------.',
      ' /  ●  ○  \\',
      '|          |',
      '|          |',
      '|          |',
      ' \\/\\/ \\/\\/',
    ],
    blink: [
      '  .------.',
      ' /  ─  ─  \\',
      '|          |',
      '|          |',
      '|          |',
      ' \\/\\/ \\/\\/',
    ],
  },
  chaotic: {
    open: [
      ' .--.--.  ',
      '/× ×  × ×\\',
      '|          |',
      '|          |',
      '|          |',
      '/\\/\\/\\/\\/',
    ],
    blink: [
      ' .--.--.  ',
      '/─ ─  ─ ─\\',
      '|          |',
      '|          |',
      '|          |',
      '/\\/\\/\\/\\/',
    ],
  },
  beast: {
    open: [
      '  ▄████▄  ',
      ' ▐ ◼  ◼ ▌ ',
      ' ▐        ▌',
      ' ▐        ▌',
      ' ▐        ▌',
      '  ▀▄▀▄▀▄  ',
    ],
    blink: [
      '  ▄████▄  ',
      ' ▐ ▬  ▬ ▌ ',
      ' ▐        ▌',
      ' ▐        ▌',
      ' ▐        ▌',
      '  ▀▄▀▄▀▄  ',
    ],
  },
}

export const MOOD_ORDER: Mood[] = ['calm', 'uneasy', 'fragmented', 'chaotic', 'beast']
