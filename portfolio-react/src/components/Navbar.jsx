import { useEffect, useMemo, useState } from 'react'

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar({ brand, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const themeLabel = useMemo(() => (theme === 'dark' ? 'Light' : 'Dark'), [theme])

  return (
    <header className="nav">
      <a className="nav__brand" href="#top" aria-label="Go to top">
        <span className="nav__dot" aria-hidden="true" />
        <span>{brand}</span>
      </a>

      <nav className="nav__links" aria-label="Primary">
        {links.map((l) => (
          <a key={l.href} className="nav__link" href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav__actions">
        <button className="btn btn--ghost" onClick={onToggleTheme} type="button">
          {themeLabel} mode
        </button>
        <button
          className={cx('btn', 'btn--ghost', 'nav__menuBtn')}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="nav__mobile" role="dialog" aria-label="Mobile navigation">
          <div className="nav__mobileInner">
            {links.map((l) => (
              <a
                key={l.href}
                className="nav__mobileLink"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button className="btn btn--primary" onClick={() => setOpen(false)} type="button">
              Close
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
