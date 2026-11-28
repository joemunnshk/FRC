import { createFileRoute, Link, notFound, useNavigate } from '@tanstack/react-router'
import { useEffect, useMemo } from 'react'
import {
  cards,
  CERT_LOOKUP,
  compareChronologically,
  PRICE_BASIS_LABEL,
  type Card,
} from '../lib/cards'
import { getCardDisplay } from '../lib/cardDisplay'
import { getUniverse } from '../lib/universes'

export const Route = createFileRoute('/cards/$cardId')({
  loader: ({ params }) => {
    const card = cards.find((c) => c.id === params.cardId)
    if (!card) throw notFound()
    return card
  },
  component: CardDetailPage,
})

/**
 * Flipping through the collection needs a defined running order. A card can
 * belong to several tabs, so the sequence follows its main one — Icons where
 * the card is an icon — in the order that tab opens on, oldest first.
 */
function neighbours(card: Card) {
  const tab = card.categories.includes('icons') ? 'icons' : card.categories[0]
  const run = cards
    .filter((c) => c.categories.includes(tab))
    .sort((a, b) => compareChronologically(a, b))
  const i = run.findIndex((c) => c.id === card.id)
  return { prev: run[i - 1], next: run[i + 1], position: i + 1, total: run.length }
}

function CardDetailPage() {
  const card = Route.useLoaderData()
  const display = getCardDisplay(card)
  const universe = getUniverse(card.franchise)
  const navigate = useNavigate()
  const { prev, next, position, total } = useMemo(() => neighbours(card), [card])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const el = document.activeElement
      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) return
      const to = e.key === 'ArrowLeft' ? prev : e.key === 'ArrowRight' ? next : undefined
      if (!to) return
      e.preventDefault()
      navigate({ to: '/cards/$cardId', params: { cardId: to.id } })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [prev, next, navigate])

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← Back to all cards
      </Link>

      <div className="detail-layout">
        {card.image ? (
          <img src={`${import.meta.env.BASE_URL}cards/${card.image}`} alt={card.character} />
        ) : (
          <div className="no-card-art">
            <span className="no-card-mark">?</span>
            <span className="no-card-label">No card ever released</span>
          </div>
        )}

        <div className="detail-info">
          <div className="year-line">
            <span className="year">{card.year}</span>
          </div>
          <h1>{display.title}</h1>
          {/* The universe leads, but the exact franchise is the more useful fact
              — Belle reads "Disney · Beauty and the Beast" — so keep both here. */}
          {universe && (
            <div className="franchise">
              {universe}
              {card.franchise.trim() !== universe && ` · ${card.franchise.trim()}`}
            </div>
          )}
          <div className="meta">{card.setInfo}</div>

          {card.noCardReason && <div className="no-card-note">{card.noCardReason}</div>}

          <div className="field-label">History</div>
          <div className="field-value">{card.description}</div>

          {card.funFacts.length > 0 && (
            <>
              <div className="field-label">Why It Matters</div>
              <ul className="fact-list">
                {card.funFacts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </>
          )}

          <div className="field-label">{card.image ? 'Estimated Value' : 'Collectibility'}</div>
          {/* The headline figure first, then the prose that qualifies it. */}
          {card.priceBasis !== 'none' && (
            <div className="price-headline">
              {PRICE_BASIS_LABEL[card.priceBasis] && (
                <span className="price-basis">{PRICE_BASIS_LABEL[card.priceBasis]}</span>
              )}
              {card.rawPriceUsd}
            </div>
          )}
          <div className="value-badge">{card.estimatedValue}</div>

          {/* Graded sales and the certified copy in the photograph. Only a
              minority of cards have either, so the whole block is optional
              rather than a row of empty columns on every page. */}
          {(card.gradedPrices.length > 0 || card.exampleCert) && (
            <>
              <div className="field-label">Graded</div>
              {card.gradedPrices.length > 0 && (
                <dl className="graded-ladder">
                  {card.gradedPrices.map((g) => (
                    <div className="graded-row" key={g.grade}>
                      <dt>{g.grade}</dt>
                      <dd>
                        {g.price}
                        {/* One sale is an anecdote, five are a price. Say which. */}
                        {g.sales !== undefined && (
                          <span className="graded-n">
                            {g.sales === 1 ? '1 sale' : `${g.sales} sales`}
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              {card.exampleCert && (
                <p className="cert-line">
                  The copy shown is {card.exampleCert.grader} {card.exampleCert.grade}, cert{' '}
                  <a
                    href={CERT_LOOKUP[card.exampleCert.grader](card.exampleCert.cert)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {card.exampleCert.cert}
                  </a>
                  .
                </p>
              )}
            </>
          )}

          {card.sources.length > 0 && (
            <>
              <div className="field-label">Sources</div>
              <ul className="source-list">
                {card.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <nav className="card-pager" aria-label="Browse cards">
        {prev ? (
          <Link to="/cards/$cardId" params={{ cardId: prev.id }} className="pager-link prev">
            <span className="pager-dir">← Previous</span>
            <span className="pager-name">
              {prev.character} <span className="pager-year">{prev.year}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        <span className="pager-position">
          {position} / {total}
          <span className="pager-hint">Use ← →</span>
        </span>

        {next ? (
          <Link to="/cards/$cardId" params={{ cardId: next.id }} className="pager-link next">
            <span className="pager-dir">Next →</span>
            <span className="pager-name">
              {next.character} <span className="pager-year">{next.year}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
