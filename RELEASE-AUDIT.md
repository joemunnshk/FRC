# Pre-release audit

Run it yourself any time:

```bash
node scripts/audit.js
```

244 cards. **192 findings in 7 categories** as of 28 Nov 2026. This file says
which of those actually block a public release and which are noise.

The audit is mechanical — it checks the data against itself and against the
files on disk. **It cannot tell you whether a claim is true.** That is a separate
pass, described at the bottom.

---

## Blocks release

### 74 cards publish a price that was never measured

They carry `priceBasis: "mixed"` and show a band like `$1 – $30,000` under an
"all grades" chip. The chip is honest about the figure not being a raw price,
but the figure itself came from prose written before any sold listing was
checked. Nine of those bands span more than 100x, which is not a price, it is a
shrug.

Mostly the modern TCG tab — Gundam, Riftbound, Duel Masters, Cardfight, Union
Arena, Flesh and Blood — plus the Japanese-market Icons.

**Blocked on:** eBay rate limits. It serves roughly 30 queries before returning
403s and error pages, so this is paced work, not hard work. Two to three days.

### 1 card indexes a different card than the one it pictures, undisclosed

| Card | Indexes | Pictures |
|---|---|---|
| `superman-1940-gum-inc` | #1 | #36 |
| `catwoman-1966-topps` | #25 | #27 |

Both now say so in `setInfo`, so a reader is not misled. They stop blocking the
moment a photograph of the right card turns up, and they are listed here so that
hunt does not get forgotten.

---

## Does not block release

### 87 cards have no card number in `setInfo`

Expected for most of them: a Hello Kitty playing-card deck, a sticker album, a
Carddass prism run and a Weiss Schwarz trial deck have no card number to give.
The check exists to catch the ones that *should* have a number and lost it.
Needs a read-through, not a fix.

### 23 ladder rungs carry no sample size

From waves before `sales` existed as a field. The page simply omits the count
for these, rather than showing a wrong one. Each is replaced as its card goes
through the pricing pass.

### 4 ladders run backwards

`star-wars-1977-topps` PSA 6 $860 then PSA 7 $238; `mcu-1966-donruss-ironman`
PSA 3 $1,575 then PSA 4 $650. Every one is a rung resting on a single sale, and
the page says "1 sale" beside it. Working as intended — the alternative is
deleting inconvenient data.

### 1 year "contradiction", 1 duplicate character-year

`doctor-doom-1975-topps` is a 1975 sticker shown as its 1976 reprint. Superman
appears twice in 1940 because `dceu-1940-superman-12` is the DC Extended
Universe row borrowing a Superman card. Both are correct; the audit is being
careful.

---

## What the audit cannot check, and what it would take

Every mechanical check above passes or fails on the data alone. None of them
test the claim the whole site rests on: **that this is the character's first
card.**

That needs a per-card research pass — set checklists, release dates, and whether
an earlier printing exists in another market. The 1966 Donruss and 1940 Gum,
Inc. work already found one failure of exactly this kind: Superman's entry was
built on card #36 because that is the card the project owned a photograph of,
and #12 was indexed as a second Superman when it is Lex Luthor's first
appearance. Both stood for months and neither was a pricing error.

**It has now been run.** Ten research agents checked all 244 entries against
set checklists, release dates and earlier printings. **141 were wrong — 58%.**
The results, tiered by what a correction costs, are in `CONTENT-AUDIT.md`.

That document supersedes this section. The short version: the mechanical audit
above passed on data this content pass found to be wrong more often than right,
which is the clearest possible demonstration of what a self-consistency check
cannot do.

## Known gaps carried forward

- Anpanman and Thomas the Tank Engine need Japanese-language queries; English
  eBay returns unrelated products.
- SpongeBob's AA-001 and Fortnite's Crystal Shard parallel cannot be isolated
  from their sets in raw form.
- Freddy Krueger's slab label crop caught card art instead of the label.
- Top Trumps Uncharted (item 001434): does the box carry a printed year? If it
  predates 2012, Nathan Drake's entry is wrong.
- PSX 2014 deck: which rank and suit is The Last of Us, and who is pictured?
