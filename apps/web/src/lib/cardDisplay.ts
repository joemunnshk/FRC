import type { Category } from './cards'
import { getUniverse } from './universes'

interface CardLike {
  franchise: string
  character: string
}

/**
 * Every card reads the same way: a purple label above, the card's name as the
 * white headline below. Franchises named after their own character (Hello
 * Kitty, Garfield, Godzilla) repeat the name across both lines — that
 * repetition is intentional, so the grid stays visually consistent.
 *
 * Icons is a shelf of characters, so its label is the universe. The other two
 * tabs label the exact franchise instead: on Media the revenue figure beside it
 * belongs to that ranked franchise rather than the wider universe, and on TCG
 * the product name is the whole point — badging both Darth Vader entries "Star
 * Wars" would hide that one is the 1995 CCG and the other 2024's Unlimited.
 */
export function getCardDisplay(card: CardLike, tab?: Category): { title: string; badge: string } {
  return {
    title: card.character.trim(),
    badge: tab === 'icons' ? getUniverse(card.franchise) : card.franchise.trim(),
  }
}

/** A money range at the very start, e.g. "$20 – $500+" or "Under $1 – $5". */
const LEADING_RANGE = /^(?:Under\s+)?\$[\d,]+(?:\.\d+)?\+?\s*[–—-]\s*\$?[\d,]+(?:\.\d+)?\+?/

/** Where the figure stops and the caveat starts. */
const QUALIFIER = /\s+[—;]\s*|\s+depending\s+/i

/**
 * Estimated values are written as sentences — "$20 – $500+ depending on grade",
 * "$5 – $50 for common cards, more for high-grade", "Rarely traded — a
 * convention giveaway". A tile has one mono line for this, so reduce it.
 *
 * A leading range wins outright, because it is the whole answer and nothing
 * after it changes the number. Otherwise cut at the first qualifier and, if
 * that is still too long, at a word boundary — never mid-word.
 *
 * Note what is deliberately NOT done: cutting at the first " for " or " per "
 * would shorten more entries, but it turns "$5 for a base card up to five
 * figures for the 1/1 Superfractor" into "$5", which is a lie about the card.
 * A trailing ellipsis is honest; a bare floor price is not.
 */
export function shortValue(value: string): string {
  const trimmed = value.trim()

  const range = LEADING_RANGE.exec(trimmed)
  if (range) return range[0]

  const head = trimmed.split(QUALIFIER)[0].trim().replace(/,$/, '')
  if (head.length <= 26) return head

  return head.slice(0, 26).replace(/\s+\S*$/, '').replace(/[,;]$/, '') + '…'
}
