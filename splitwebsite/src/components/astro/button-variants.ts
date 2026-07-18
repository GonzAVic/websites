import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 border font-mono uppercase tracking-widest transition-[color,background-color,box-shadow] duration-150 whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'border-mood-calm text-mood-calm hover:bg-mood-calm/10 hover:shadow-[0_0_16px_-2px_var(--color-mood-calm)]',
        secondary:
          'border-brand-border text-brand-text hover:border-mood-calm hover:text-mood-calm',
        ghost: 'border-transparent text-brand-dim hover:text-brand-heading',
      },
      size: {
        default: 'text-sm px-5 py-2.5',
        sm: 'text-xs px-3 py-1.5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
