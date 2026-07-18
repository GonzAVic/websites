// Single source of truth for the site's type scale — the typescale.com
// equivalent. Change TYPE_BASE_PX and/or TYPE_RATIO here and re-run
// `npm run tokens` to regenerate src/styles/tokens.css.

export const TYPE_BASE_PX = 16
export const TYPE_RATIO = 1.25 // Major Third — try 1.2 (Minor Third), 1.333 (Perfect Fourth), 1.618 (Golden Ratio)

// Named steps, relative to base. Negative = smaller than base, positive = larger.
const STEPS: { name: string; step: number }[] = [
  { name: 'xs', step: -2 },
  { name: 'sm', step: -1 },
  { name: 'base', step: 0 },
  { name: 'md', step: 1 },
  { name: 'lg', step: 2 },
  { name: 'xl', step: 3 },
  { name: '2xl', step: 4 },
  { name: '3xl', step: 5 },
  { name: '4xl', step: 6 },
  { name: '5xl', step: 7 },
]

export interface TypeScaleEntry {
  name: string
  px: number
  rem: number
}

export function buildTypeScale(
  base: number = TYPE_BASE_PX,
  ratio: number = TYPE_RATIO
): TypeScaleEntry[] {
  return STEPS.map(({ name, step }) => {
    const px = base * Math.pow(ratio, step)
    return {
      name,
      px: Math.round(px * 100) / 100,
      rem: Math.round((px / 16) * 1000) / 1000,
    }
  })
}
