// All page copy in one place. Voice matches ../../store/store-listing.md
// (the verified copy source — not the outdated Chrome Web Store draft).
// Every claim below is cross-checked against extension/ source + roadmap.md
// "Current state" before being written here — see landing-page-plan.md's
// Copy plan for why that step matters.

export const CTA_LABEL = 'Add to Chrome — it\'s free'

export const nav = {
  links: [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'FAQ', href: '/#faq' },
  ],
}

export const hero = {
  eyebrow: 'A browser companion for people with too many tabs',
  headline: 'Your browser has a ghost.',
  subheadline:
    'It gets more chaotic with every tab you open. Split lives on your new tab page and reacts, in real time, to how out of control your browsing has gotten.',
  primaryCta: CTA_LABEL,
  secondaryCta: { label: 'See how it works', href: '#how-it-works' },
}

export interface MoodCopy {
  mood: 'calm' | 'uneasy' | 'fragmented' | 'chaotic' | 'beast'
  range: string
  label: string
  description: string
}

export const howItWorks = {
  heading: 'Five moods, one honest number.',
  intro:
    'The ghost’s mood is calculated directly from your live tab count — nothing fake, nothing you have to configure.',
  moods: [
    { mood: 'calm', range: '0–5 tabs', label: 'Calm', description: 'Quiet, floating, content.' },
    { mood: 'uneasy', range: '6–10 tabs', label: 'Uneasy', description: 'Something feels off.' },
    { mood: 'fragmented', range: '11–17 tabs', label: 'Fragmented', description: 'Losing coherence.' },
    { mood: 'chaotic', range: '18–25 tabs', label: 'Chaotic', description: 'Actively suffering.' },
    { mood: 'beast', range: '26+ tabs', label: 'The Beast', description: 'No going back.' },
  ] satisfies MoodCopy[],
  glitchNote:
    'As it gets worse, strange things start happening in your browser — titles change, text corrupts, colors invert. The ghost is trying to tell you something.',
}

export interface FeatureCopy {
  // Glyphs pulled from the extension's own UI where one exists (▤ = "MANAGE
  // TABS", ⊡ = park) — see src/popup/App.tsx / src/newtab/TabManager.tsx.
  // ⊟ deliberately matches that same geometric family for Workspaces, which
  // has no dedicated icon in the product yet.
  icon: string
  title: string
  description: string
}

export const features = {
  heading: 'Not just a mood ring — an actual tab manager.',
  items: [
    {
      icon: '▤',
      title: 'Tab Manager',
      description:
        'See every tab organized by domain. Close duplicates, hibernate idle ones, group by site, or search across everything.',
    },
    {
      icon: '⊟',
      title: 'Workspaces',
      description:
        'Save your whole session as a named workspace and restore it anytime — or save-and-close for an instant clean slate.',
    },
    {
      icon: '⊡',
      title: 'Tab Parking',
      description:
        'Not ready to close a tab? Park it to a quick-access panel — jump back to it anytime, even from the address bar by typing "split" plus its number.',
    },
    {
      icon: '⚙',
      title: 'Popup quick actions',
      description:
        'Park the current tab, save-and-close everything, or open the full Tab Manager — all in one click from the toolbar.',
    },
    {
      icon: '✓',
      title: 'The FREED counter',
      description:
        "Every tab you close counts toward a running total in the panel. Proof it's working, not a promise.",
    },
    {
      icon: '⏱',
      title: 'Oldest-tab awareness',
      description:
        "Split tracks how long tabs sit open. Once one's been idle for hours, it surfaces front and center with a one-click Park it or Close it action.",
    },
  ] satisfies FeatureCopy[],
}

export interface MockPageCopy {
  tabTitle: string
  url: string
  heading: string
  paragraphs: string[]
  links: string[]
}

export const glitchShowcase = {
  heading: 'See it in your browser.',
  intro:
    "Split doesn't stop at the new tab page. Once your mood crosses into fragmented, it starts messing with every page you're actually browsing — titles flicker, text corrupts, colors invert. Here's what that looks like, one glitch at a time.",
  mockPage: {
    tabTitle: 'Why I Have 47 Tabs Open',
    url: 'example.com/blog/47-tabs-and-counting',
    heading: 'Why I Have 47 Tabs Open (And Counting)',
    paragraphs: [
      'It started innocently enough — one tab for research, one for reference, a couple for "I\'ll read this later." That was three weeks ago.',
      'Somewhere around tab thirty I stopped recognizing my own tab titles. They have become abstract art.',
    ],
    links: ['Read more', 'Related posts', 'Subscribe'],
  } satisfies MockPageCopy,
}

export const privacy = {
  heading: 'Everything stays on your device.',
  body: 'Split stores everything locally in your browser. No accounts, no servers, no data collection, no analytics. Uninstalling removes all of it. Your tab habits stay yours.',
}

export interface FaqCopy {
  q: string
  a: string
}

export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'Does Split close my tabs automatically?',
      a: 'No. Split never closes, hibernates, or parks anything without you clicking an action yourself. It only ever reflects your tab count — what you do about it is up to you.',
    },
    {
      q: 'Does parking a tab close it?',
      a: 'No. Parking saves a tab to a quick-access panel without closing it. If you want to close tabs, that is a separate, explicit action.',
    },
    {
      q: 'What does Split actually see?',
      a: 'Split reads your open tab count and titles to power the Tab Manager and the ghost’s mood — nothing is sent anywhere. It all stays in your browser’s local storage.',
    },
    {
      q: 'Will it slow my browser down?',
      a: 'Split does its work on a lightweight, once-a-minute heartbeat plus your normal tab activity — it is not running anything continuously in the background.',
    },
    {
      q: 'Is it free?',
      a: 'Yes. Split is free to install and use.',
    },
    {
      q: 'Which browsers does it support?',
      a: 'Split is built for Chrome (Manifest V3) and any Chromium-based browser that supports Chrome extensions.',
    },
  ] satisfies FaqCopy[],
}

export const finalCta = {
  heading: 'Your tabs are not getting any fewer on their own.',
  body: 'Install Split and let the ghost keep you honest.',
  cta: CTA_LABEL,
}

// Condensed from store/privacy-policy.html — that file stays the full,
// legally-complete version; this is a short summary in the site's voice,
// covering the same disclosures (data, permissions, third parties,
// deletion) without the full legal-doc structure. Keep the two in sync if
// the underlying practices change.
export const privacyPolicy = {
  updated: 'July 9, 2026',
  summary:
    "Split doesn't collect, store, or transmit any of your data anywhere — everything it needs lives only in your own browser, on your own device.",
  points: [
    "Everything — mood history, workspaces, parked tabs, the FREED count — stays in chrome.storage.local. Nothing is ever sent to a server.",
    'The tabs, storage, alarms, and tabGroups permissions only power the ghost’s mood, Tab Manager, and Workspaces — never anything beyond your own device.',
    'No analytics, ads, or third-party trackers of any kind.',
    'The only external link is an optional feedback form, governed by Google’s own privacy policy — not ours.',
    'Uninstalling Split deletes everything instantly. There is nothing on our end to remove.',
  ],
}

export const footer = {
  tagline: 'Split — 100% local, no accounts, no servers.',
  feedbackLabel: 'Feedback',
  contactLabel: 'Contact',
  privacyLabel: 'Privacy',
}
