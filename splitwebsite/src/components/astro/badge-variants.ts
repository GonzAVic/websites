import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-mono uppercase tracking-widest',
  {
    variants: {
      tone: {
        neutral: 'border-brand-border text-brand-dim',
        calm: 'border-mood-calm text-mood-calm',
        uneasy: 'border-mood-uneasy text-mood-uneasy',
        fragmented: 'border-mood-fragmented text-mood-fragmented',
        chaotic: 'border-mood-chaotic text-mood-chaotic',
        beast: 'border-mood-beast text-mood-beast',
      },
    },
    defaultVariants: { tone: 'neutral' },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
