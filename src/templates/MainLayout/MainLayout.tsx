import { Header } from '../../components'
import styles from './MainLayout.module.css'

export interface MainLayoutProps {
  children?: React.ReactNode
  className?: string
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  const cls = `${styles.MainLayout} ${className || ''}`.trim()
  return (
    <div className={cls}>
      <Header />
      <main className={styles.MainLayoutMain}>
        <div className="container">
          {children ?? <p className={styles.MainLayoutPlaceholder}>Page content</p>}
        </div>
      </main>
    </div>
  )
}
