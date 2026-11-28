// Pre-release self-audit. Everything here is mechanical: it checks the data
// against itself and against the files on disk. It cannot tell you whether a
// claim is TRUE — that is the separate, per-card content pass.
const fs = require('fs')
const ROOT = require('path').join(__dirname, '..', 'apps', 'web')
const cards = JSON.parse(fs.readFileSync(ROOT + '/src/data/cards.json', 'utf8'))
const onDisk = new Set(fs.readdirSync(ROOT + '/public/cards'))

const F = {}
const add = (k, l) => { (F[k] = F[k] || []).push(l) }
const money = (s) => [...String(s).matchAll(/\$([\d,]+(?:\.\d+)?)/g)].map((m) => +m[1].replace(/,/g, ''))

const ids = new Set()
const imgs = {}

for (const c of cards) {
  const id = c.id

  // ---- schema ----
  const req = ['id', 'franchise', 'character', 'year', 'setInfo', 'description', 'funFacts',
    'estimatedValue', 'rawPriceUsd', 'priceBasis', 'gradedPrices', 'exampleCert', 'image',
    'noCardReason', 'mediaRank', 'revenueBillions', 'categories', 'sources']
  req.forEach((k) => { if (!(k in c)) add('A. missing field', `${id} — no "${k}"`) })
  if (ids.has(id)) add('A. duplicate id', id)
  ids.add(id)
  if (!Array.isArray(c.categories) || !c.categories.length) add('A. no category', id)

  // ---- images ----
  if (c.image) {
    if (!onDisk.has(c.image)) add('B. image file missing', `${id} -> ${c.image}`)
    ;(imgs[c.image] = imgs[c.image] || []).push(id)
  } else if (!c.noCardReason) {
    add('B. no image and no reason', id)
  }
  if (c.image && c.noCardReason) add('B. has image but also noCardReason', id)

  // ---- text ----
  if (!c.description || c.description.length < 80) add('C. thin description', `${id} — ${(c.description || '').length} chars`)
  if (!c.funFacts || c.funFacts.length < 2) add('C. under 2 fun facts', `${id} — ${(c.funFacts || []).length}`)
  // "placeholder" is legitimate prose on at least one card — Kirby was pink
  // because his designer drew him as one — so match only real markers.
  if (/\bTODO\b|\bTBC\b|\bXXX\b|\bFIXME\b|lorem ipsum/i.test(JSON.stringify(c))) add('C. placeholder text', id)
  // Mojibake only. A lone £ or € is correct on a foreign-market card; the
  // damage signature is the mis-decoded byte pair, or the replacement glyph.
  if (/Â[ -¿]|â€|�/.test(JSON.stringify(c))) add('C. encoding damage', id)
  if (!c.sources || !c.sources.length) add('C. no sources', id)
  ;(c.sources || []).forEach((s) => {
    if (!/^https?:\/\//.test(s.url || '')) add('C. bad source url', `${id} — ${s.url}`)
  })

  // ---- pricing ----
  const basisOK = ['raw', 'mixed', 'graded', 'sealed', 'set', 'asking', 'none']
  if (!basisOK.includes(c.priceBasis)) add('D. bad priceBasis', `${id} — ${c.priceBasis}`)
  // 'none' may carry a short phrase instead of a dash, but never a number.
  if (c.priceBasis === 'none' && /\d/.test(c.rawPriceUsd || '')) add('D. basis none but has a figure', `${id} — ${c.rawPriceUsd}`)
  if (c.priceBasis !== 'none' && (!c.rawPriceUsd || c.rawPriceUsd === '—')) add('D. priced basis but no figure', `${id} — ${c.priceBasis}`)
  if (/[£€¥]/.test(c.rawPriceUsd || '')) add('D. non-USD in tile figure', `${id} — ${c.rawPriceUsd}`)
  // A foreign-market card may keep its original figure, but only in support of
  // a dollar one — never on its own.
  if (/[£€¥]/.test(c.estimatedValue || '') && !/\$/.test(c.estimatedValue || '')) {
    add('D. foreign currency with no dollar figure beside it', id)
  }
  if (c.priceBasis === 'mixed') add('D. still unmeasured ("all grades")', `${id} — ${c.rawPriceUsd}`)

  // Does the tile's band appear anywhere in the prose that is meant to explain it?
  const tile = money(c.rawPriceUsd)
  const prose = money(c.estimatedValue)
  if (tile.length && prose.length) {
    const lo = Math.min(...tile), hi = Math.max(...tile)
    if (!prose.some((p) => p >= lo * 0.9 && p <= hi * 1.1)) {
      add('D. tile figure absent from its own prose', `${id} — tile ${c.rawPriceUsd} / prose ${prose.slice(0, 4).join(', ')}`)
    }
  }

  // ---- graded ladder ----
  for (const g of (c.gradedPrices || [])) {
    if (!/^(PSA|CGC|SGC|BGS|GMA|BVG)\s/.test(g.grade)) add('E. malformed grade label', `${id} — "${g.grade}"`)
    if (/#/.test(g.grade)) add('E. card number in grade field', `${id} — "${g.grade}"`)
    if (g.sales === undefined) add('E. rung with no sample size', `${id} — ${g.grade}`)
  }
  const psa = (c.gradedPrices || []).filter((g) => /^PSA/.test(g.grade))
    .map((g) => [parseFloat(g.grade.slice(4)), money(g.price)[0], g.sales])
  for (let i = 1; i < psa.length; i++) {
    if (psa[i][1] < psa[i - 1][1] * 0.6) {
      add('E. ladder goes backwards', `${id} — PSA ${psa[i - 1][0]} $${psa[i - 1][1]}(${psa[i - 1][2]}) then PSA ${psa[i][0]} $${psa[i][1]}(${psa[i][2]})`)
    }
  }

  // ---- the rookie-card rule ----
  // Only a real mismatch when a card number is claimed BEFORE "shown:" and a
  // different one appears after it. "Set — shown: #7" names no other card, so
  // #7 is the card; that is phrasing, not a contradiction.
  const [head, shownTail = ''] = c.setInfo.split(/shown:/i)
  const headNums = [...head.matchAll(/#\s?(\d+)/g)].map((m) => m[1])
  const shownNums = [...shownTail.matchAll(/#\s?(\d+)/g)].map((m) => m[1])
  if (headNums.length && shownNums.length && !shownNums.some((n) => headNums.includes(n))) {
    add('F. photo is a different card than the one indexed', `${id} — indexes #${headNums.join('/#')}, shows #${shownNums.join('/#')}`)
  }
  if (!/#\s?\d/.test(c.setInfo) && c.image) add('F. no card number in setInfo', `${id} — ${c.setInfo.slice(0, 74)}`)

  // ---- cross-field ----
  // A second year in setInfo is usually legitimate context — a copyright line,
  // a reprint, a dating dispute, an earlier related card — so only flag years
  // that carry none of those markers. (It also used to match card stats: a
  // Beyblade's "defence 2000" is not a year.)
  const CONTEXT = /\u00a9|\(c\)|&copy;|TM|reprint|earlier|predat|labels the set|catalogues it|attack|defen[cs]e|\/\s*$/i
  const yrs = [...String(c.setInfo).matchAll(/(.{0,28})\b((?:18|19|20)\d\d)\b/g)]
    .filter((m) => !CONTEXT.test(m[1]))
    .map((m) => +m[2])
  if (yrs.length && !yrs.includes(c.year)) {
    add('G. year disagrees with setInfo', `${id} — year ${c.year}, setInfo says ${[...new Set(yrs)].join('/')}`)
  }
  const isMedia = c.categories.includes('media')
  if (isMedia && c.mediaRank === null) add('G. media tab entry with no rank', id)
  if (!isMedia && c.mediaRank !== null) add('G. rank but not on media tab', `${id} — rank ${c.mediaRank}`)
}

// ---- set-level ----
Object.entries(imgs).forEach(([f, who]) => {
  if (who.length > 1) add('B. image shared by several cards', `${f} — ${who.join(', ')}`)
})
const used = new Set(cards.map((c) => c.image).filter(Boolean))
;[...onDisk].filter((f) => /\.(jpg|jpeg|png|webp|avif)$/i.test(f) && !used.has(f))
  .forEach((f) => add('B. orphan image on disk', f))

const ranks = cards.filter((c) => c.mediaRank !== null).map((c) => c.mediaRank)
const dupeRanks = [...new Set(ranks.filter((r, i) => ranks.indexOf(r) !== i))]
if (dupeRanks.length) add('G. duplicate media ranks', dupeRanks.join(', '))
for (let r = 1; r <= 50; r++) if (!ranks.includes(r)) add('G. missing media rank', String(r))

const seen = {}
cards.forEach((c) => {
  const k = c.character.toLowerCase().trim() + ' | ' + c.year
  ;(seen[k] = seen[k] || []).push(c.id)
})
Object.entries(seen).forEach(([k, v]) => {
  if (v.length > 1) add('A. same character and year twice', `${k} — ${v.join(', ')}`)
})

// ---- report ----
let total = 0
for (const k of Object.keys(F).sort()) {
  const v = F[k]
  total += v.length
  console.log(`\n### ${k}  (${v.length})`)
  v.slice(0, 12).forEach((l) => console.log('   ' + l))
  if (v.length > 12) console.log(`   ...and ${v.length - 12} more`)
}
console.log(`\n==== ${total} findings in ${Object.keys(F).length} categories, across ${cards.length} cards ====`)
