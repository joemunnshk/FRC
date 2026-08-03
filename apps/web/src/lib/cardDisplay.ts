interface CardLike {
  franchise: string
  character: string
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

/**
 * IP-style franchises (Pokémon, Disney) get "Franchise (Character)" so the
 * specific character is clear. When the franchise name already is the
 * character (Super Mario / Mario, SpongeBob SquarePants / SpongeBob
 * SquarePants), showing both would just be redundant.
 */
export function getCardDisplay(card: CardLike): { title: string; badge: string | null } {
  const franchise = card.franchise.trim()
  const character = card.character.trim()
  const nf = normalize(franchise)
  const nc = normalize(character)

  if (nf.includes(nc) || nc.includes(nf)) {
    return { title: character, badge: franchise }
  }

  return { title: `${franchise} (${character})`, badge: null }
}
