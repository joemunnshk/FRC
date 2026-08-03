import { useEffect, useState } from 'react'

interface SiteData {
  heading: string
  tagline: string
}

type SaveState = 'idle' | 'saving' | 'saved' | 'error'

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
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem', boxSizing: 'border-box' }}
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
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem', boxSizing: 'border-box' }}
        />
      </label>

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
