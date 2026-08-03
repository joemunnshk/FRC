import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import cards from '../data/cards.json'
import { getCardDisplay } from '../lib/cardDisplay'

export const Route = createFileRoute('/cards/$cardId')({
  loader: ({ params }) => {
    const card = cards.find((c) => c.id === params.cardId)
    if (!card) throw notFound()
    return card
  },
  component: CardDetailPage,
})

function CardDetailPage() {
  const card = Route.useLoaderData()
  const display = getCardDisplay(card)

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← Back to all cards
      </Link>

      <div className="detail-layout">
        <img src={`${import.meta.env.BASE_URL}cards/${card.image}`} alt={card.character} />

        <div className="detail-info">
          {display.badge && <div className="franchise">{display.badge}</div>}
          <h1>{display.title}</h1>
          <div className="meta">
            {card.year} · {card.setInfo}
          </div>

          <div className="field-label">History</div>
          <div className="field-value">{card.description}</div>

          {card.funFacts && card.funFacts.length > 0 && (
            <>
              <div className="field-label">Why It Matters</div>
              <ul className="fact-list">
                {card.funFacts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </>
          )}

          <div className="field-label">Estimated Value</div>
          <div className="value-badge">{card.estimatedValue}</div>
        </div>
      </div>
    </div>
  )
}
