import { useTranslation } from 'react-i18next'
import type { ProductSuiteItem } from '../../types'
import ProductCard from '../ProductCard'
import styles from './ProductSuite.module.css'

export interface ProductSuiteProps {
  items: ProductSuiteItem[]
}

export default function ProductSuite({ items }: ProductSuiteProps) {
  const { t } = useTranslation()
  return (
    <section className={styles.ProductSuite}>
      <h2 className={styles.ProductSuiteTitle}>{t('productSuite.sectionTitle')}</h2>
      <div className={styles.ProductSuiteGrid}>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
