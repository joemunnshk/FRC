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
