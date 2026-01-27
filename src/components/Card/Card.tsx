import styles from './Card.module.css'

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  const cls = `${styles.Card} ${className || ''}`.trim()
  return <div className={cls}>{children}</div>
}
