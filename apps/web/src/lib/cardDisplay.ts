interface CardLike {
  franchise: string
  character: string
}

/**
 * Every card reads the same way: the franchise as a purple label above, the
 * card's name as the white headline below. Franchises named after their own
 * character (Batman, Hello Kitty, Superman) repeat the name across both lines
 * — that repetition is intentional, so the grid stays visually consistent.
 */
export function getCardDisplay(card: CardLike): { title: string; badge: string } {
  return {
    title: card.character.trim(),
    badge: card.franchise.trim(),
  }
}
