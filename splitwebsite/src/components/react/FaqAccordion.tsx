import { useState } from 'react'

export interface FaqItem {
  q: string
  a: string
}

interface Props {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-brand-border border border-brand-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-mono text-sm text-brand-heading"
            >
              <span>{item.q}</span>
              <span className="text-brand-dim">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm text-brand-dim">{item.a}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
