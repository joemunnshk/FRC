import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { cards, compareChronologically, CATEGORY_LABELS, type Category } from '../lib/cards'
import { getUniverse } from '../lib/universes'
import { Logo } from '../components/Logo'
import './brand.css'

export const Route = createFileRoute('/brand')({
  component: BrandMockup,
})

const TABS: Category[] = ['icons', 'media', 'tcg']

/** The long value strings don't fit a one-line mono price, so take the headline figure. */
function shortValue(value: string): string {
  // Split only on an em dash or "depending" — an en dash is the range itself
  // ("$5 – $20"), and cutting there would turn every range into its floor.
  const head = value.split(/\s+—\s+|\s+depending\s+/i)[0].trim()
  return head.length > 24 ? head.slice(0, 23).trimEnd() + '…' : head
}

function BrandMockup() {
  const [tab, setTab] = useState<Category>('icons')

  const shown = useMemo(
    () =>
      cards
        .filter((c) => c.categories.includes(tab))
        .sort((a, b) => compareChronologically(a, b))
        .slice(0, 18),
    [tab],
  )

  return (
    <div className="cc">
      <div className="cc-grain" aria-hidden="true" />

      <header className="cc-head">
        <div className="cc-head-row">
          <Logo className="cc-logo" plural />
          <p className="cc-tagline">
            The first-ever trading card for every character you grew up with — dated, sourced and shown as it was
            printed.
          </p>
        </div>
      </header>

      {/* The signature ramp, sampled straight off the brand deck's gradient. */}
      <div className="cc-ramp" aria-hidden="true" />

      <nav className="cc-bar">
        <div className="cc-tabs">
          {TABS.map((t) => (
            <button key={t} className={`cc-pill${t === tab ? ' on' : ''}`} onClick={() => setTab(t)}>
              {CATEGORY_LABELS[t]}
              <span className="cc-pill-n">{cards.filter((c) => c.categories.includes(t)).length}</span>
            </button>
          ))}
        </div>
        <div className="cc-bar-right">
          <div className="cc-search">Search by character, franchise or card set…</div>
          <div className="cc-count">{cards.filter((c) => c.categories.includes(tab)).length} indexed</div>
        </div>
      </nav>

      <div className="cc-grid">
        {shown.map((card) => (
          <article key={card.id} className="cc-tile">
            <div className="cc-thumb">
              {card.image ? (
                <img src={`${import.meta.env.BASE_URL}cards/${card.image}`} alt={card.character} loading="lazy" />
              ) : (
                <div className="cc-nocard">NO CARD</div>
              )}
            </div>
            <div className="cc-body">
              <div className="cc-meta">
                {getUniverse(card.franchise)} <span className="cc-dot">·</span> {card.year}
              </div>
              <h3 className="cc-name">{card.character}</h3>
              <div className="cc-set">{card.setInfo}</div>
              <div className="cc-value">{shortValue(card.estimatedValue)}</div>
            </div>
          </article>
        ))}
      </div>

      <footer className="cc-foot">
        <span>FICTIONAL ROOKIE CARDS 2026</span>
        <span>THE FIRST CARD, ALWAYS</span>
        <span>{cards.length} INDEXED</span>
      </footer>
    </div>
  )
}
