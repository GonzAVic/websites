// Minimal classnames joiner — no tailwind-merge dependency needed at this
// scale; components pass a fixed variant set plus an optional override string.
export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ')
}
