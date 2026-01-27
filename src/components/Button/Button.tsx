import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export interface ButtonProps {
  children: React.ReactNode
  href?: string
  to?: string
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  href,
  to,
  disabled = false,
  className,
}: ButtonProps) {
  const cls = `${styles.Button} ${className || ''}`.trim()
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
