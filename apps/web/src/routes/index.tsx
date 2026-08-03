import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Hello, FRC!</h1>
      <p>This is the vertical slice — a basic static site built with Vite and TanStack Router.</p>
    </main>
  )
}
