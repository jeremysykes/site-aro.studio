import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { getProductSuiteItems } from '../data/productSuite'
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const items = getProductSuiteItems(t)
  const item = slug ? items.find((i) => i.slug === slug) : undefined

  return (
    <main className={`container ${styles.ProductDetail}`.trim()}>
      {item ? (
        <>
          <h1 className={styles.ProductDetailTitle}>{item.title}</h1>
          <p className={styles.ProductDetailDescription}>{item.description}</p>
          <Link to="/" className={styles.ProductDetailBack}>
            Back to home
          </Link>
        </>
      ) : (
        <>
          <p className={styles.ProductDetailNotFound}>Product not found</p>
          <Link to="/" className={styles.ProductDetailBack}>
            Back to home
          </Link>
        </>
      )}
    </main>
  )
}
