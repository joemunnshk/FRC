import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <header className="site-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>🃏 Fictional Rookie Cards</h1>
        </Link>
        <p className="subtitle">A database of the first-ever trading card for your favorite fictional characters.</p>
      </header>
      <Outlet />
    </>
  )
}
