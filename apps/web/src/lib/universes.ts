/**
 * A card's `franchise` is the precise entity the card belongs to — and on the
 * Media tab it is load-bearing, because those names and their revenue figures
 * come straight from Wikipedia's highest-grossing franchises list. "Marvel
 * Cinematic Universe" ($35.2B) and "Spider-Man" ($26.8B) are two separate rows
 * there, so neither name can be rewritten without making the ranking lie.
 *
 * A universe is the broader world a character actually lives in. Iron Man's
 * first card is 1966 Donruss, decades before the MCU existed, so on the Icons
 * tab he belongs under "Marvel". This map is the only place that grouping is
 * defined: a franchise missing from it is its own universe.
 */
const FRANCHISE_UNIVERSE: Record<string, string> = {
  // Marvel — split across five ranked franchises plus the comics line itself.
  'Marvel Cinematic Universe': 'Marvel',
  'Spider-Man': 'Marvel',
  'X-Men': 'Marvel',
  'Avengers': 'Marvel',
  'Fantastic Four': 'Marvel',

  // DC — Superman is ranked twice on the media list, as himself and as the DCEU.
  'Batman': 'DC',
  'Superman': 'DC',
  'DC Extended Universe': 'DC',

  // Walt Disney Animation, including the Princess line and the Lorcana cards.
  'Disney Princess': 'Disney',
  'Aladdin': 'Disney',
  'Beauty and the Beast': 'Disney',
  'Frozen': 'Disney',
  'The Lion King': 'Disney',
  'Winnie-the-Pooh': 'Disney',
  'Disney Lorcana': 'Disney',

  // Pixar is Disney-owned but its own canon, so it stays a separate shelf.
  'Toy Story': 'Pixar',
  'Cars': 'Pixar',

  'Wizarding World': 'Harry Potter',

  // Card games named after the world they draw on — Luffy is an icon of One
  // Piece, not of the card game that happens to hold his first card.
  'Star Wars CCG': 'Star Wars',
  'Star Wars: Unlimited': 'Star Wars',
  'One Piece Card Game': 'One Piece',

  'Middle-earth': 'The Lord of the Rings',
  'The Lord of the Rings TCG': 'The Lord of the Rings',
}

/** The universe a franchise sits in. Unmapped franchises stand on their own. */
export function getUniverse(franchise: string): string {
  const name = franchise.trim()
  return FRANCHISE_UNIVERSE[name] ?? name
}
