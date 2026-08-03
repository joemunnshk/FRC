import { useEffect, useState, type CSSProperties } from 'react'

interface Sponsor {
  name: string
  url: string
}

interface SiteData {
  heading: string
  tagline: string
  about: string
  sponsors: Sponsor[]
}

type SaveState = 'idle' | 'saving' | 'saved' | 'error'

const fieldStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '0.5rem',
  marginTop: '0.25rem',
  boxSizing: 'border-box',
}

export default function App() {
  const [data, setData] = useState<SiteData | null>(null)
  const [saveState, setSaveState] = useState<SaveState>('idle')

  useEffect(() => {
    fetch('/api/site')
      .then((res) => res.json())
      .then(setData)
  }, [])

  async function handleSave() {
    if (!data) return
    setSaveState('saving')
    try {
      const res = await fetch('/api/site', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Save failed')
      setSaveState('saved')
    } catch {
      setSaveState('error')
    }
  }

  function updateSponsor(index: number, field: keyof Sponsor, value: string) {
    if (!data) return
    const sponsors = data.sponsors.map((sponsor, i) => (i === index ? { ...sponsor, [field]: value } : sponsor))
    setData({ ...data, sponsors })
    setSaveState('idle')
  }

  function addSponsor() {
    if (!data) return
    setData({ ...data, sponsors: [...data.sponsors, { name: '', url: '' }] })
    setSaveState('idle')
  }

  function removeSponsor(index: number) {
    if (!data) return
    setData({ ...data, sponsors: data.sponsors.filter((_, i) => i !== index) })
    setSaveState('idle')
  }

  if (!data) {
    return (
      <main style={{ padding: '2rem' }}>
        <p>Loading...</p>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: 560, margin: '0 auto', padding: '2rem', textAlign: 'left' }}>
      <h1>FRC Site Editor</h1>
      <p>Edit the text shown on the homepage, then save.</p>

      <label style={{ display: 'block', marginTop: '1.5rem' }}>
        Heading
        <input
          type="text"
          value={data.heading}
          onChange={(e) => {
            setData({ ...data, heading: e.target.value })
            setSaveState('idle')
          }}
          style={fieldStyle}
        />
      </label>

      <label style={{ display: 'block', marginTop: '1rem' }}>
        Tagline
        <textarea
          value={data.tagline}
          onChange={(e) => {
            setData({ ...data, tagline: e.target.value })
            setSaveState('idle')
          }}
          rows={3}
          style={fieldStyle}
        />
      </label>

      <label style={{ display: 'block', marginTop: '1rem' }}>
        About Us
        <textarea
          value={data.about}
          onChange={(e) => {
            setData({ ...data, about: e.target.value })
            setSaveState('idle')
          }}
          rows={4}
          style={fieldStyle}
        />
      </label>

      <div style={{ marginTop: '1.5rem' }}>
        <strong>Sponsors</strong>
        {data.sponsors.map((sponsor, index) => (
          <div
            key={index}
            style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}
          >
            <input
              type="text"
              placeholder="Sponsor name"
              value={sponsor.name}
              onChange={(e) => updateSponsor(index, 'name', e.target.value)}
              style={{ ...fieldStyle, marginTop: 0, flex: 1 }}
            />
            <input
              type="text"
              placeholder="Website URL"
              value={sponsor.url}
              onChange={(e) => updateSponsor(index, 'url', e.target.value)}
              style={{ ...fieldStyle, marginTop: 0, flex: 1 }}
            />
            <button onClick={() => removeSponsor(index)} aria-label="Remove sponsor">
              Remove
            </button>
          </div>
        ))}
        <button onClick={addSponsor} style={{ marginTop: '0.75rem' }}>
          + Add sponsor
        </button>
      </div>

      <button
        onClick={handleSave}
        disabled={saveState === 'saving'}
        style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem' }}
      >
        {saveState === 'saving' ? 'Saving...' : 'Save'}
      </button>

      {saveState === 'saved' && <p style={{ color: 'green' }}>Saved! Refresh the web app to see the change.</p>}
      {saveState === 'error' && <p style={{ color: 'red' }}>Something went wrong saving. Try again.</p>}
    </main>
  )
}
