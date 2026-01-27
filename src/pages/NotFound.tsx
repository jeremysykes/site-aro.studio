import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <p className={styles.NotFoundMessage}>Page not found</p>
      <Link to="/" className={styles.NotFoundBack}>
        Back to home
      </Link>
    </main>
  )
}
