import { createFileRoute } from '@tanstack/react-router'
import site from '../data/site.json'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>{site.heading}</h1>
      <p>{site.tagline}</p>
    </main>
  )
}
