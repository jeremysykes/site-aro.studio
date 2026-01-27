import { useTranslation } from 'react-i18next'
import { Hero, ProductSuite } from '../components'
import { getProductSuiteItems } from '../data/productSuite'
import styles from './Home.module.css'

export default function Home() {
  const { t } = useTranslation()
  return (
    <main className={`container ${styles.Home}`.trim()}>
      <Hero
        content={{
          headline: t('hero.headline'),
          description: t('hero.description'),
          ctaText: t('hero.ctaText'),
          ctaHref: '/#get-started',
        }}
      />
      <ProductSuite items={getProductSuiteItems(t)} />
    </main>
  )
}
