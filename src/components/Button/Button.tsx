import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export interface ButtonProps {
  children: React.ReactNode
  href?: string
  to?: string
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'cta'
}

export default function Button({
  children,
  href,
  to,
  disabled = false,
  className,
  variant = 'primary',
}: ButtonProps) {
  const cls = [styles.Button, variant === 'cta' && styles.ButtonCta, className]
    .filter(Boolean)
    .join(' ')
    .trim()
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  if (to) {
    return <Link to={to} className={cls}>{children}</Link>
  }
  return (
    <button type="button" disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
