import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './MobileMenu.module.css'

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: { label: string; href: string }[]
  cta: { label: string; href: string }
}

export default function MobileMenu({
  isOpen,
  onClose,
  items,
  cta,
}: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        className={styles.Overlay}
        role="presentation"
        aria-hidden="true"
        onClick={onClose}
      />
      <nav
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile menu"
        className={styles.Drawer}
      >
        <button
          type="button"
          ref={closeRef}
          className={styles.CloseButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          Close
        </button>
        <ul className={styles.List}>
          {items.map(({ label, href }) => (
            <li key={href}>
              <Link to={href} onClick={onClose}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.Cta}>
          <Link to={cta.href} className={styles.CtaLink} onClick={onClose}>
            {cta.label}
          </Link>
        </div>
      </nav>
    </>
  )
}
