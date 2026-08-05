interface CardLike {
  franchise: string
  character: string
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

/**
 * Every card reads as a franchise label above the character name — the
 * franchise in small caps, the character as the headline.
 *
 * The one exception is when the two are character-for-character identical
 * (Batman / Batman), where printing the same word twice reads as a bug.
 */
export function getCardDisplay(card: CardLike): { title: string; badge: string | null } {
  const franchise = card.franchise.trim()
  const character = card.character.trim()

  if (normalize(franchise) === normalize(character)) {
    return { title: character, badge: null }
  }

  return { title: character, badge: franchise }
}
