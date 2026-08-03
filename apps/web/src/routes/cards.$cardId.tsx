import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import cards from '../data/cards.json'

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

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← Back to all cards
      </Link>

      <div className="detail-layout">
        <img src={`${import.meta.env.BASE_URL}cards/${card.image}`} alt={card.character} />

        <div className="detail-info">
          <div className="franchise">{card.franchise}</div>
          <h1>{card.character}</h1>
          <div className="meta">
            {card.year} · {card.setInfo}
          </div>

          <div className="field-label">History</div>
          <div className="field-value">{card.description}</div>

          <div className="field-label">Estimated Value</div>
          <div className="value-badge">{card.estimatedValue}</div>
        </div>
      </div>
    </div>
  )
}
