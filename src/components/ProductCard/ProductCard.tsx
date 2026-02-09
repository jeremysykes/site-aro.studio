import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { ProductSuiteItem } from '../../types'
import Card from '../Card'
import styles from './ProductCard.module.css'

export interface ProductCardProps {
  item: ProductSuiteItem
}

export default function ProductCard({ item }: ProductCardProps) {
  const { t } = useTranslation()
  return (
    <Card className={styles.ProductCard}>
      <img
        src="/assets/placeholder.svg"
        alt=""
        className={styles.ProductCardIcon}
      />
      <h3 className={styles.ProductCardTitle}>{item.title}</h3>
      <p className={styles.ProductCardDescription}>{item.description}</p>
      <Link to={`/products/${item.slug}`} className={styles.ProductCardLink}>
        {t('productSuite.learnMore')}
      </Link>
    </Card>
  )
}
