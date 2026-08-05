import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { cards } from '../lib/cards'
import { getCardDisplay } from '../lib/cardDisplay'

export const Route = createFileRoute('/')({
  component: HomePage,
})

type SortKey = 'oldest' | 'newest' | 'name'

function HomePage() {
  const [search, setSearch] = useState('')
  const [franchise, setFranchise] = useState('All')
  const [sort, setSort] = useState<SortKey>('oldest')

  const franchises = useMemo(
    () => [...new Set(cards.map((card) => card.franchise))].sort((a, b) => a.localeCompare(b)),
    [],
  )

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    const result = cards.filter((card) => {
      const matchesFranchise = franchise === 'All' || card.franchise === franchise
      const matchesSearch =
        query === '' ||
        card.character.toLowerCase().includes(query) ||
        card.franchise.toLowerCase().includes(query) ||
        card.setInfo.toLowerCase().includes(query)
      return matchesFranchise && matchesSearch
    })

    return result.sort((a, b) => {
      if (sort === 'name') return getCardDisplay(a).title.localeCompare(getCardDisplay(b).title)
      return sort === 'newest' ? b.year - a.year : a.year - b.year
    })
  }, [search, franchise, sort])

  return (
    <>
      <div className="controls">
        <input
          type="search"
          className="search-input"
          placeholder="Search by character, franchise or card set..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="control-row">
          <label className="control">
            <span>Franchise</span>
            <select value={franchise} onChange={(e) => setFranchise(e.target.value)}>
              <option value="All">All ({cards.length})</option>
              {franchises.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>

          <label className="control">
            <span>Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              <option value="oldest">Oldest first</option>
              <option value="newest">Newest first</option>
              <option value="name">Name (A–Z)</option>
            </select>
          </label>

          <div className="result-count">
            {filtered.length} {filtered.length === 1 ? 'card' : 'cards'}
          </div>
        </div>
      </div>

      <div className="card-grid">
        {filtered.length === 0 && <p className="empty-state">No cards match your search.</p>}
        {filtered.map((card) => {
          const display = getCardDisplay(card)
          return (
            <Link key={card.id} to="/cards/$cardId" params={{ cardId: card.id }} className="card-tile">
              {card.image ? (
                <img src={`${import.meta.env.BASE_URL}cards/${card.image}`} alt={card.character} loading="lazy" />
              ) : (
                <div className="no-card-art">
                  <span className="no-card-mark">?</span>
                  <span className="no-card-label">No card ever released</span>
                </div>
              )}
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
