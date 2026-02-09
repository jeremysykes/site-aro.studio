import styles from './SectionTitle.module.css'

export interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export default function SectionTitle({
  children,
  className,
  as: Tag = 'h2',
}: SectionTitleProps) {
  const cls = `${styles.SectionTitle} ${className || ''}`.trim()
  return <Tag className={cls}>{children}</Tag>
}
