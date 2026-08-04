import { useEffect, useRef, useState, type ChangeEvent, type CSSProperties } from 'react'

interface Card {
  id: string
  franchise: string
  character: string
  year: number
  setInfo: string
  description: string
  funFacts: string[]
  estimatedValue: string
  image: string
  noCardReason: string
  imagePreview?: string
}

type SaveState = 'idle' | 'saving' | 'saved' | 'error'

const fieldStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '0.5rem',
  marginTop: '0.25rem',
  boxSizing: 'border-box',
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function blankCard(): Card {
  return {
    id: '',
    franchise: '',
    character: '',
    year: new Date().getFullYear(),
    setInfo: '',
    description: '',
    funFacts: [],
    estimatedValue: '',
    image: '',
    noCardReason: '',
  }
}

export default function App() {
  const [cards, setCards] = useState<Card[] | null>(null)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [saveState, setSaveState] = useState<SaveState>('idle')
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch('/api/cards')
      .then((res) => res.json())
      .then(setCards)
  }, [])

  function updateEditingCard(patch: Partial<Card>) {
    if (cards === null || editingIndex === null) return
    setCards(cards.map((card, i) => (i === editingIndex ? { ...card, ...patch } : card)))
    setSaveState('idle')
  }

  function handleAddCard() {
    if (cards === null) return
    setCards([...cards, blankCard()])
    setEditingIndex(cards.length)
  }

  function handleDeleteCard(index: number) {
    if (cards === null) return
    setCards(cards.filter((_, i) => i !== index))
    if (editingIndex === index) setEditingIndex(null)
    setSaveState('idle')
  }

  function updateFact(index: number, value: string) {
    if (!editingCard) return
    const funFacts = editingCard.funFacts.map((fact, i) => (i === index ? value : fact))
    updateEditingCard({ funFacts })
  }

  function addFact() {
    if (!editingCard) return
    updateEditingCard({ funFacts: [...editingCard.funFacts, ''] })
  }

  function removeFact(index: number) {
    if (!editingCard) return
    updateEditingCard({ funFacts: editingCard.funFacts.filter((_, i) => i !== index) })
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async () => {
      const dataUrl = reader.result as string
      updateEditingCard({ imagePreview: dataUrl })

      const res = await fetch('/api/upload-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, dataUrl }),
      })
      const result = await res.json()
      if (result.ok) {
        updateEditingCard({ image: result.filename })
      }
    }
    reader.readAsDataURL(file)
  }

  async function handleSaveAll() {
    if (cards === null) return
    setSaveState('saving')

    const usedIds = new Set(cards.map((c) => c.id).filter(Boolean))
    const finalCards = cards.map((card) => {
      if (card.id) return card
      let base = slugify(card.character) || 'card'
      let id = base
      let n = 2
      while (usedIds.has(id)) {
        id = `${base}-${n}`
        n++
      }
      usedIds.add(id)
      return { ...card, id }
    })

    const cleanCards = finalCards.map(({ imagePreview: _imagePreview, ...rest }) => rest)

    try {
      const res = await fetch('/api/cards', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanCards),
      })
      if (!res.ok) throw new Error('Save failed')
      setCards(finalCards)
      setSaveState('saved')
    } catch {
      setSaveState('error')
    }
  }

  if (cards === null) {
    return (
      <main style={{ padding: '2rem' }}>
        <p>Loading...</p>
      </main>
    )
  }

  const editingCard = editingIndex !== null ? cards[editingIndex] : null

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '2rem', textAlign: 'left' }}>
      <h1>Card Database Editor</h1>
      <p>Add, edit, or remove cards. Click Save All Changes when you're done.</p>

      <div style={{ marginTop: '1.5rem' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem',
              border: '1px solid #444',
              borderRadius: 8,
              marginBottom: '0.5rem',
            }}
          >
            <div>
              <strong>{card.character || '(unnamed card)'}</strong>
              <div style={{ fontSize: '0.85rem', opacity: 0.75 }}>
                {card.franchise || 'No franchise'} · {card.year}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setEditingIndex(index)}>Edit</button>
              <button onClick={() => handleDeleteCard(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleAddCard} style={{ marginTop: '0.5rem' }}>
        + Add New Card
      </button>

      {editingCard && (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #444', borderRadius: 8 }}>
          <h2>Editing: {editingCard.character || '(unnamed card)'}</h2>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            Franchise
            <input
              type="text"
              placeholder="e.g. Pokémon"
              value={editingCard.franchise}
              onChange={(e) => updateEditingCard({ franchise: e.target.value })}
              style={fieldStyle}
            />
          </label>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            Character
            <input
              type="text"
              placeholder="e.g. Pikachu"
              value={editingCard.character}
              onChange={(e) => updateEditingCard({ character: e.target.value })}
              style={fieldStyle}
            />
          </label>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            Year
            <input
              type="number"
              value={editingCard.year}
              onChange={(e) => updateEditingCard({ year: Number(e.target.value) })}
              style={fieldStyle}
            />
          </label>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            Set / Card Number
            <input
              type="text"
              placeholder="e.g. Base Set #58/102"
              value={editingCard.setInfo}
              onChange={(e) => updateEditingCard({ setInfo: e.target.value })}
              style={fieldStyle}
            />
          </label>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            History / Description
            <textarea
              value={editingCard.description}
              onChange={(e) => updateEditingCard({ description: e.target.value })}
              rows={4}
              style={fieldStyle}
            />
          </label>

          <div style={{ marginTop: '1rem' }}>
            <strong>Why It Matters (mini factfile)</strong>
            {editingCard.funFacts.map((fact, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="A short, interesting fact about this card"
                  value={fact}
                  onChange={(e) => updateFact(index, e.target.value)}
                  style={{ ...fieldStyle, marginTop: 0, flex: 1 }}
                />
                <button onClick={() => removeFact(index)} aria-label="Remove fact">
                  Remove
                </button>
              </div>
            ))}
            <button onClick={addFact} style={{ marginTop: '0.75rem' }}>
              + Add fact
            </button>
          </div>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            Estimated Value
            <input
              type="text"
              placeholder="e.g. $20 – $300+"
              value={editingCard.estimatedValue}
              onChange={(e) => updateEditingCard({ estimatedValue: e.target.value })}
              style={fieldStyle}
            />
          </label>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            No card was ever released? Explain why (leave blank if a card exists)
            <textarea
              placeholder="e.g. Candy Crush is a mobile game and never had a physical trading card set."
              value={editingCard.noCardReason}
              onChange={(e) => updateEditingCard({ noCardReason: e.target.value })}
              rows={3}
              style={fieldStyle}
            />
          </label>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            Card Image
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} style={{ marginTop: '0.25rem' }} />
          </label>
          {(editingCard.imagePreview || editingCard.image) && (
            <img
              src={editingCard.imagePreview}
              alt="Preview"
              style={{ marginTop: '0.75rem', maxWidth: 180, borderRadius: 8, display: editingCard.imagePreview ? 'block' : 'none' }}
            />
          )}
          {!editingCard.imagePreview && editingCard.image && (
            <p style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '0.5rem' }}>
              Current image file: {editingCard.image} (choose a new file above to replace it)
            </p>
          )}

          <button onClick={() => setEditingIndex(null)} style={{ marginTop: '1rem' }}>
            Done editing this card
          </button>
        </div>
      )}

      <button onClick={handleSaveAll} disabled={saveState === 'saving'} style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem' }}>
        {saveState === 'saving' ? 'Saving...' : 'Save All Changes'}
      </button>

      {saveState === 'saved' && <p style={{ color: 'green' }}>Saved! Refresh the web app to see the change.</p>}
      {saveState === 'error' && <p style={{ color: 'red' }}>Something went wrong saving. Try again.</p>}
    </main>
  )
}
