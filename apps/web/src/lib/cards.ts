import raw from '../data/cards.json'

export type Category = 'media' | 'tcg'

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
}
