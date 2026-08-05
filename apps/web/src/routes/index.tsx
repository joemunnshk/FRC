import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { cards, CATEGORY_LABELS, type Category } from '../lib/cards'
import { getCardDisplay } from '../lib/cardDisplay'

export const Route = createFileRoute('/')({
  component: HomePage,
})

type SortKey = 'oldest' | 'newest' | 'revenue' | 'name'

const CATEGORIES: Category[] = ['media', 'tcg']

function HomePage() {
  const [tab, setTab] = useState<Category>('media')
  const [search, setSearch] = useState('')
  const [franchise, setFranchise] = useState('All')
  const [sort, setSort] = useState<SortKey>('revenue')

  const inTab = useMemo(() => cards.filter((c) => c.categories.includes(tab)), [tab])

  const franchises = useMemo(
    () => [...new Set(inTab.map((c) => c.franchise))].sort((a, b) => a.localeCompare(b)),
    [inTab],
  )

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    const result = inTab.filter((card) => {
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
      if (sort === 'revenue') {
        // TCG-only entries have no media revenue figure — sort those last.
        if (a.revenueBillions === null && b.revenueBillions === null) return a.year - b.year
        if (a.revenueBillions === null) return 1
        if (b.revenueBillions === null) return -1
        return b.revenueBillions - a.revenueBillions
      }
      return sort === 'newest' ? b.year - a.year : a.year - b.year
    })
  }, [inTab, search, franchise, sort])

  function switchTab(next: Category) {
    setTab(next)
    setFranchise('All')
    setSort(next === 'media' ? 'revenue' : 'oldest')
  }

  return (
    <>
      <div className="tabs" role="tablist">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={tab === c}
            className={`tab${tab === c ? ' active' : ''}`}
            onClick={() => switchTab(c)}
          >
            {CATEGORY_LABELS[c]}
            <span className="tab-count">{cards.filter((x) => x.categories.includes(c)).length}</span>
          </button>
        ))}
      </div>

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
              <option value="All">All ({inTab.length})</option>
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
              <option value="revenue">Franchise revenue</option>
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
                <div className="year">
                  {card.year}
                  {sort === 'revenue' && card.revenueBillions !== null && (
                    <span className="revenue"> · ${card.revenueBillions}B</span>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
