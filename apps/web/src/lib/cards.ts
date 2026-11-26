import raw from '../data/cards.json'

export type Category = 'media' | 'tcg' | 'icons'

/** A reference backing up the claims in a card's entry. */
export interface Source {
  /** What the reader sees, e.g. "PSA CardFacts" — not a bare URL. */
  label: string
  url: string
}

export interface Card {
  id: string
  franchise: string
  character: string
  year: number
  setInfo: string
  description: string
  funFacts: string[]
  estimatedValue: string
  /** Filename in public/cards. Empty when this franchise never had a trading card. */
  image: string
  /** Why no card exists. Empty when the franchise does have one. */
  noCardReason: string
  /** Position on Wikipedia's highest-grossing media franchises list, or null. */
  mediaRank: number | null
  /** Lifetime franchise revenue in US$ billions, or null for TCG-only entries. */
  revenueBillions: number | null
  /** Which tabs this card appears in. A card can belong to both. */
  categories: Category[]
  /** References for this entry's claims. Empty until the entry has been checked. */
  sources: Source[]
}

export const cards = raw as Card[]

export const CATEGORY_LABELS: Record<Category, string> = {
  media: 'Media Franchises',
  tcg: 'Trading Card Games',
  icons: 'Icons',
}

/**
 * The three tabs answer three different questions and overlap freely — Pikachu
 * is on all of them — so each one says what it is rather than leaving the
 * reader to infer it from the counts.
 */
export const CATEGORY_CAPTIONS: Record<Category, string> = {
  media:
    'The 50 highest-grossing media franchises of all time, ranked by lifetime revenue — and the first trading card for each one.',
  tcg: 'A landmark card from each major trading card game, from Magic’s Black Lotus to Lorcana and beyond.',
  icons: 'The first trading card ever printed for each character, however obscure the set it hid in.',
}
