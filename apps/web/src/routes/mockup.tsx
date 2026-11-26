import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { cards } from '../lib/cards'
import { getUniverse } from '../lib/universes'

export const Route = createFileRoute('/mockup')({
  component: MockupPage,
})

/** A deliberate mix: graded slabs, raw portrait cards and landscape cards. */
const SAMPLE = [
  'mickey-mouse-1935-gum-inc',
  'krillin-1988-carddass',
  'donald-duck-1938-castell',
  'pacman-1980-fleer',
  'zelda-1999-carddass',
  'luigi-1989-carddass',
  'raphael-1989-topps',
  'samus-1993-amurol',
]

const picks = SAMPLE.map((id) => cards.find((c) => c.id === id)!).filter(Boolean)
const src = (c: (typeof cards)[number]) => `${import.meta.env.BASE_URL}cards/${c.image}`

function MockupPage() {
  const [view, setView] = useState<'grid' | 'table'>('grid')

  return (
    <div className="mock-page">
      <p className="mock-note">
        Mockup only — not the live site. Comparing the proposed “Collector’s Vault” treatment against what is there now.
      </p>

      <h2 className="mock-h">1 · A fixed 2.5 / 3.5 frame, cropped to fill</h2>
      <p className="mock-sub">
        What “respects a true 2.5 / 3.5 trading-card aspect ratio” means in practice. 56 of 186 images are landscape.
      </p>
      <div className="mock-grid">
        {picks.map((c) => (
          <figure key={c.id} className="mock-cell">
            <div className="mock-frame cover">
              <img src={src(c)} alt={c.character} />
            </div>
            <figcaption>{c.character}</figcaption>
          </figure>
        ))}
      </div>

      <h2 className="mock-h">2 · The same fixed frame, letterboxed instead</h2>
      <p className="mock-sub">Nothing is lost, but landscape cards shrink into a slot built for a shape they are not.</p>
      <div className="mock-grid">
        {picks.map((c) => (
          <figure key={c.id} className="mock-cell">
            <div className="mock-frame contain">
              <img src={src(c)} alt={c.character} />
            </div>
            <figcaption>{c.character}</figcaption>
          </figure>
        ))}
      </div>

      <h2 className="mock-h">3 · Current treatment, with the proposed tilt and slab labels</h2>
      <p className="mock-sub">Each card mounted at its own shape. Hover one to see the 3D inspection tilt.</p>
      <div className="mock-grid">
        {picks.map((c) => (
          <figure key={c.id} className="mock-cell">
            <div className="mock-tilt">
              <div className="mock-frame natural">
                <img src={src(c)} alt={c.character} />
              </div>
            </div>
            <figcaption>
              <span className="mock-name">{c.character}</span>
              <span className="mock-slab">
                {c.year} · {getUniverse(c.franchise)}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <h2 className="mock-h">4 · Checklist table view, and the monospace counter</h2>
      <div className="mock-toolbar">
        <div className="mock-toggle">
          <button className={view === 'grid' ? 'on' : ''} onClick={() => setView('grid')}>
            Gallery
          </button>
          <button className={view === 'table' ? 'on' : ''} onClick={() => setView('table')}>
            Checklist
          </button>
        </div>
        <span className="mock-counter">SHOWING {picks.length} OF {cards.length} INDEXED</span>
      </div>

      {view === 'table' ? (
        <table className="mock-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Character</th>
              <th>Franchise</th>
              <th>Set</th>
            </tr>
          </thead>
          <tbody>
            {picks.map((c) => (
              <tr key={c.id}>
                <td className="num">{c.year}</td>
                <td>{c.character}</td>
                <td>{getUniverse(c.franchise)}</td>
                <td className="set">{c.setInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mock-grid">
          {picks.slice(0, 4).map((c) => (
            <figure key={c.id} className="mock-cell">
              <div className="mock-frame natural">
                <img src={src(c)} alt={c.character} />
              </div>
              <figcaption>{c.character}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}
