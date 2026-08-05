import raw from '../data/cards.json'

export type Category = 'media' | 'tcg'

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
}

export const cards = raw as Card[]

export const CATEGORY_LABELS: Record<Category, string> = {
  media: 'Media Franchises',
  tcg: 'Trading Card Games',
}
