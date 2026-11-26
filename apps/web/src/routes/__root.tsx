import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Logo, LogoMark } from '../components/Logo'
import { cards } from '../lib/cards'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <header className="site-header">
        <div className="masthead-row">
          <Link to="/" className="masthead">
            <h1>
              {/* The full lockup on the front page; on a card's own page the
                  masthead shrinks, and the curved lettering stops being legible,
                  so the eye pairs with a plain wordmark instead. */}
              <Logo className="masthead-full" plural />
              <span className="masthead-compact">
                <LogoMark className="masthead-mark" />
                <span className="masthead-wordmark">Fictional Rookie Cards</span>
              </span>
              <span className="sr-only">Fictional Rookie Cards</span>
            </h1>
          </Link>
          <p className="subtitle">
            The first-ever trading card for every character you grew up with — dated, sourced and shown as it was
            printed.
          </p>
        </div>
      </header>
      <Outlet />
      <footer className="site-foot">
        <span>Fictional Rookie Cards {new Date().getFullYear()}</span>
        <span>The first card, always</span>
        <span>{cards.length} indexed</span>
      </footer>
    </>
  )
}
