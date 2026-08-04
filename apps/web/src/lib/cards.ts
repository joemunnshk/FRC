import raw from '../data/cards.json'

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
}

export const cards = raw as Card[]
