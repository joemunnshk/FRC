import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { cards, CATEGORY_CAPTIONS, CATEGORY_LABELS, compareChronologically, type Category } from '../lib/cards'
import { getCardDisplay } from '../lib/cardDisplay'
import { getUniverse } from '../lib/universes'

export const Route = createFileRoute('/')({
  component: HomePage,
})

type SortKey = 'oldest' | 'newest' | 'revenue' | 'name'
type View = 'gallery' | 'checklist'

const CATEGORIES: Category[] = ['icons', 'media', 'tcg']

/** The tab the site opens on. Must be a member of CATEGORIES. */
const DEFAULT_TAB: Category = 'icons'

/** Only the media list is ranked by revenue; the other tabs read best chronologically. */
const DEFAULT_SORT: Record<Category, SortKey> = {
  media: 'revenue',
  tcg: 'oldest',
  icons: 'oldest',
}

function HomePage() {
  const [tab, setTab] = useState<Category>(DEFAULT_TAB)
  const [search, setSearch] = useState('')
  const [universe, setUniverse] = useState('All')
  const [sort, setSort] = useState<SortKey>(DEFAULT_SORT[DEFAULT_TAB])
  const [view, setView] = useState<View>('gallery')
  const searchRef = useRef<HTMLInputElement>(null)

  // "/" jumps to the search box, the way it does in every database UI.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return
      const el = document.activeElement
      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) return
      e.preventDefault()
      searchRef.current?.focus()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const inTab = useMemo(() => cards.filter((c) => c.categories.includes(tab)), [tab])

  /** How many cards sit in each universe, so the dropdown can show its size. */
  const universes = useMemo(() => {
    const counts = new Map<string, number>()
    for (const card of inTab) {
      const name = getUniverse(card.franchise)
      counts.set(name, (counts.get(name) ?? 0) + 1)
    }
    return [...counts.entries()].sort(
      // Biggest universes first, so Marvel and DC lead rather than hiding in the A-Z.
      ([aName, aCount], [bName, bCount]) => bCount - aCount || aName.localeCompare(bName),
    )
  }, [inTab])

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    const result = inTab.filter((card) => {
      const matchesUniverse = universe === 'All' || getUniverse(card.franchise) === universe
      const matchesSearch =
        query === '' ||
        card.character.toLowerCase().includes(query) ||
        card.franchise.toLowerCase().includes(query) ||
        getUniverse(card.franchise).toLowerCase().includes(query) ||
        card.setInfo.toLowerCase().includes(query)
      return matchesUniverse && matchesSearch
    })

    return result.sort((a, b) => {
      if (sort === 'name') return getCardDisplay(a).title.localeCompare(getCardDisplay(b).title)
      if (sort === 'revenue') {
        // TCG-only entries have no media revenue figure — sort those last.
        if (a.revenueBillions === null && b.revenueBillions === null) return compareChronologically(a, b)
        if (a.revenueBillions === null) return 1
        if (b.revenueBillions === null) return -1
        return b.revenueBillions - a.revenueBillions
      }
      return compareChronologically(a, b, sort === 'newest')
    })
  }, [inTab, search, universe, sort])

  function switchTab(next: Category) {
    setTab(next)
    setUniverse('All')
    setSort(DEFAULT_SORT[next])
    // The caption explaining the new tab sits above the grid, so go back up to it.
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function resetFilters() {
    setSearch('')
    setUniverse('All')
    setSort(DEFAULT_SORT[tab])
  }

  return (
    <>
      <div className="toolbar">
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
          <div className="search-field">
            <input
              ref={searchRef}
              type="search"
              className="search-input"
              placeholder="Search by character, franchise or card set..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-hint">/</span>
          </div>

          <label className="control">
            <span>Franchise</span>
            <select value={universe} onChange={(e) => setUniverse(e.target.value)}>
              <option value="All">All ({inTab.length})</option>
              {universes.map(([name, count]) => (
                <option key={name} value={name}>
                  {name} ({count})
                </option>
              ))}
            </select>
          </label>

          <label className="control">
            <span>Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              <option value="revenue">Franchise revenue</option>
              <option value="oldest">Oldest first</option>
              <option value="newest">Newest first</option>
              <option value="name">Name (A–Z)</option>
            </select>
          </label>

          <div className="view-toggle" role="group" aria-label="View">
            <button
              className={view === 'gallery' ? 'on' : ''}
              aria-pressed={view === 'gallery'}
              onClick={() => setView('gallery')}
            >
              Gallery
            </button>
            <button
              className={view === 'checklist' ? 'on' : ''}
              aria-pressed={view === 'checklist'}
              onClick={() => setView('checklist')}
            >
              Checklist
            </button>
          </div>

          <div className="result-count">
            {filtered.length === inTab.length
              ? `${inTab.length} indexed`
              : `Showing ${filtered.length} of ${inTab.length}`}
          </div>
        </div>
      </div>

      <p className="tab-caption">{CATEGORY_CAPTIONS[tab]}</p>

      {view === 'checklist' && filtered.length > 0 && (
        <div className="checklist-wrap">
          <table className="checklist">
            <thead>
              <tr>
                <th className="col-year">Year</th>
                <th>Character</th>
                <th>Franchise</th>
                {tab === 'media' && <th className="col-rev">Revenue</th>}
                <th>Set</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((card) => {
                const display = getCardDisplay(card, tab)
                return (
                  <tr key={card.id}>
                    <td className="col-year">{card.year}</td>
                    <td>
                      {/* The link stretches over the whole row, so the row is
                          clickable without giving up a real keyboard target. */}
                      <Link to="/cards/$cardId" params={{ cardId: card.id }} className="row-link">
                        {display.title}
                      </Link>
                    </td>
                    <td className="col-franchise">{getUniverse(card.franchise)}</td>
                    {tab === 'media' && (
                      <td className="col-rev">
                        {card.revenueBillions === null ? '—' : `$${card.revenueBillions}B`}
                      </td>
                    )}
                    <td className="col-set">{card.setInfo}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className={view === 'checklist' ? 'card-grid is-hidden' : 'card-grid'}>
        {filtered.length === 0 && (
          <div className="empty-state">
            <p>No cards match your search.</p>
            <button className="reset-filters" onClick={resetFilters}>
              Reset all filters
            </button>
          </div>
        )}
        {filtered.map((card) => {
          const display = getCardDisplay(card, tab)
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
                <div className="year-line">
                  <span className="year">{card.year}</span>
                </div>
                <h3>{display.title}</h3>
                {display.badge && <div className="franchise">{display.badge}</div>}
                {sort === 'revenue' && card.revenueBillions !== null && (
                  <div className="revenue">${card.revenueBillions}B lifetime</div>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
