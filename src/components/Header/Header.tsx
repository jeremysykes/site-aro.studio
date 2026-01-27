import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button'
import MobileMenu from './MobileMenu'
import styles from './Header.module.css'

const NAV_ITEMS: { labelKey: string; href: string }[] = [
  { labelKey: 'nav.productSuite', href: '/' },
  { labelKey: 'nav.docs', href: '/docs' },
  { labelKey: 'nav.pricing', href: '/pricing' },
]

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const navItems = NAV_ITEMS.map(({ labelKey, href }) => ({
    label: t(labelKey),
    href,
  }))
  const cta = { label: t('nav.contactUs'), href: '/contact' }

  const handleClose = () => {
    setMenuOpen(false)
    setTimeout(() => hamburgerRef.current?.focus(), 0)
  }

  return (
    <header className={styles.Header}>
      <Link to="/" className={styles.HeaderLogo}>
        <img
          src="/assets/logo-aro.png"
          alt=""
          className={styles.HeaderLogoIcon}
        />
        Aro Studio
      </Link>
      <div className={styles.HeaderEnd}>
        <nav className={styles.HeaderNav} aria-label="Main">
          {NAV_ITEMS.map(({ labelKey, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `${styles.HeaderNavLink} ${isActive ? styles.HeaderNavLinkActive : ''}`.trim()
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}
        </nav>
        <div className={styles.HeaderCta}>
          <Button to="/contact" variant="cta">{t('nav.contactUs')}</Button>
        </div>
        <button
          ref={hamburgerRef}
          type="button"
          className={styles.HeaderHamburger}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={styles.HamburgerIcon} aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      {menuOpen && (
        <MobileMenu
          isOpen={menuOpen}
          onClose={handleClose}
          items={navItems}
          cta={cta}
        />
      )}
    </header>
  )
}
