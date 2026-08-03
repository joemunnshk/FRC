import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import cards from '../data/cards.json'
import { getCardDisplay } from '../lib/cardDisplay'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [search, setSearch] = useState('')
  const [franchise, setFranchise] = useState<string>('All')

  const franchises = useMemo(() => ['All', ...new Set(cards.map((card) => card.franchise))], [])

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return cards.filter((card) => {
      const matchesFranchise = franchise === 'All' || card.franchise === franchise
      const matchesSearch =
        query === '' ||
        card.character.toLowerCase().includes(query) ||
        card.franchise.toLowerCase().includes(query)
      return matchesFranchise && matchesSearch
    })
  }, [search, franchise])

  return (
    <>
      <div className="controls">
        <input
          type="search"
          className="search-input"
          placeholder="Search by character or franchise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-chips">
          {franchises.map((f) => (
            <button
              key={f}
              className={`filter-chip${f === franchise ? ' active' : ''}`}
              onClick={() => setFranchise(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="card-grid">
        {filtered.length === 0 && <p className="empty-state">No cards match your search.</p>}
        {filtered.map((card) => {
          const display = getCardDisplay(card)
          return (
            <Link key={card.id} to="/cards/$cardId" params={{ cardId: card.id }} className="card-tile">
              <img src={`${import.meta.env.BASE_URL}cards/${card.image}`} alt={card.character} />
              <div className="card-tile-info">
                {display.badge && <div className="franchise">{display.badge}</div>}
                <h3>{display.title}</h3>
                <div className="year">{card.year}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
