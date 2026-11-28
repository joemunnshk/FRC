import raw from '../data/cards.json'
import { getUniverse } from './universes'

export type Category = 'media' | 'tcg' | 'icons'

/** A reference backing up the claims in a card's entry. */
export interface Source {
  /** What the reader sees, e.g. "PSA CardFacts" — not a bare URL. */
  label: string
  url: string
}

/**
 * Not every card has a raw single's price. A few only ever trade sealed, as a
 * complete set, or at an asking price nobody has met — and the ones that were
 * never printed have no price at all. The grid says which, rather than passing
 * a graded figure off as a raw one.
 */
export type PriceBasis = 'raw' | 'mixed' | 'graded' | 'sealed' | 'set' | 'asking' | 'none'

/** The chip shown before the figure. 'raw' and 'none' get none. */
export const PRICE_BASIS_LABEL: Record<PriceBasis, string> = {
  raw: '',
  mixed: 'all grades',
  graded: 'graded',
  sealed: 'sealed',
  set: 'set',
  asking: 'asking',
  none: '',
}

export interface GradedPrice {
  /** As the grading company writes it, e.g. "PSA 8" or "CGC NM 7". */
  grade: string
  /** A sold price, already formatted: "$2,375". */
  price: string
  /**
   * How many sold listings the figure is a median of. Shown to the reader,
   * because a rung resting on one sale deserves less weight than one resting
   * on five, and hiding that would make a thin ladder look authoritative.
   */
  sales?: number
}

export interface ExampleCert {
  grader: 'PSA' | 'CGC' | 'SGC'
  grade: string
  cert: string
}

/** Each grader publishes a cert lookup; the number on the label is the key. */
export const CERT_LOOKUP: Record<ExampleCert['grader'], (cert: string) => string> = {
  PSA: (c) => `https://www.psacard.com/cert/${c}`,
  CGC: (c) => `https://www.cgccards.com/certlookup/${c}/`,
  SGC: (c) => `https://gosgc.com/cert/${c}`,
}

export interface Card {
  id: string
  franchise: string
  character: string
  year: number
  setInfo: string
  description: string
  funFacts: string[]
  /** The full prose valuation, shown on the card's own page. */
  estimatedValue: string
  /**
   * The one-line price for the grid, always in US dollars: "$25 – $140",
   * "Under $1", "—". Derived from estimatedValue but authored, not parsed, so
   * no tile ever shows a truncated sentence or a foreign currency symbol.
   */
  rawPriceUsd: string
  /** What rawPriceUsd is a price for. Most are ungraded singles. */
  priceBasis: PriceBasis
  /**
   * Sold prices for certified copies, cheapest grade first. Empty until the
   * card has been through a comps pass — most entries have none, which is why
   * this is a block on the card's own page and not a column in the grid.
   */
  gradedPrices: GradedPrice[]
  /**
   * The slab actually pictured on this card's page, read off its label. Null
   * when the photograph is of a raw card.
   */
  exampleCert: ExampleCert | null
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
  media: 'Top 50 Grossing Media Franchises',
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

/**
 * A card's set, reduced to the part that is shared by every card in it.
 *
 * `setInfo` is prose, and the tail of it is per-card: "Donruss Marvel Super
 * Heroes #12 — Iron Man run", "Topps Comic Book Heroes sticker 'The Thing-1'".
 * Cutting at the first card number, dash or quote leaves the set itself, which
 * is what two cards from one set actually have in common. Commas are kept on
 * purpose — "PlayStation Collectible Cards, Series 2" and "Series 3" are
 * different sets and must not collapse into one.
 */
export function getSetKey(setInfo: string): string {
  return setInfo
    .split(/[#\u2014\u2013'\u2018\u2019"\u201c\u201d]/)[0]
    .trim()
    .replace(/[\s,;:-]+$/, '')
    .toLowerCase()
}

/**
 * Chronological order, with a deliberate tiebreak. Plenty of years are busy —
 * 2001 has 16 cards, 1975 has 15 — and left unsorted they arrive in whatever
 * order the data file happens to hold, so a year's Marvel cards scatter among
 * its Pokémon ones.
 *
 * Inside a year the set comes first, because a set is the thing two cards most
 * concretely share: Nathan Drake and Sly Cooper were printed on the same 2012
 * GameStop Italia deck, and sorting by universe split them apart — "Sly
 * Cooper" and "Uncharted" are different universes, with "The Hunger Games"
 * landing between them. Set first keeps a deck, a series or a sticker run
 * consecutive no matter how many franchises it spans; universe and franchise
 * then order the cards within it.
 */
export function compareChronologically(a: Card, b: Card, newestFirst = false): number {
  const byYear = newestFirst ? b.year - a.year : a.year - b.year
  if (byYear !== 0) return byYear

  const setA = getSetKey(a.setInfo)
  const setB = getSetKey(b.setInfo)
  if (setA !== setB) return setA.localeCompare(setB)

  const universeA = getUniverse(a.franchise)
  const universeB = getUniverse(b.franchise)
  if (universeA !== universeB) return universeA.localeCompare(universeB)

  // Inside a universe, the exact franchise still separates Spider-Man from X-Men.
  if (a.franchise !== b.franchise) return a.franchise.localeCompare(b.franchise)

  return a.character.localeCompare(b.character)
}
