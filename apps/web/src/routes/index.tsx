import { createFileRoute } from '@tanstack/react-router'
import site from '../data/site.json'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: 640, margin: '0 auto' }}>
      <h1>{site.heading}</h1>
      <p>{site.tagline}</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>About Us</h2>
        <p>{site.about}</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Our Sponsors</h2>
        <ul>
          {site.sponsors.map((sponsor) => (
            <li key={sponsor.name}>
              <a href={sponsor.url} target="_blank" rel="noreferrer">
                {sponsor.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
