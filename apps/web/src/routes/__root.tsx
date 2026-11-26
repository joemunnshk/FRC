import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <header className="site-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Fictional Rookie Cards</h1>
        </Link>
        <p className="subtitle">
          The first-ever trading card for every character you grew up with — dated, sourced and shown as it was printed.
        </p>
      </header>
      <Outlet />
    </>
  )
}
