import { Hero, ProductSuite } from '../../components'
import type { ProductSuiteItem } from '../../types'
import styles from './HomeTemplate.module.css'

export interface HomeTemplateProps {
  heroContent?: {
    headline: string
    description: string
    ctaText: string
    ctaHref: string
  }
  productSuiteItems?: ProductSuiteItem[]
  className?: string
}

const defaultHeroContent = {
  headline: 'Design tokens, validated and in sync',
  description:
    'Create, validate, and publish design tokens across your tools and teams.',
  ctaText: 'Get Started',
  ctaHref: '/#get-started',
}

const defaultProductSuiteItems: ProductSuiteItem[] = [
  {
    id: 'token-editor',
    title: 'Token Editor',
    description: 'Create and edit design tokens.',
    slug: 'token-editor',
  },
  {
    id: 'validator',
    title: 'Validator',
    description: 'Validate design tokens.',
    slug: 'validator',
  },
  {
    id: 'figma-sync',
    title: 'Figma Sync',
    description: 'Keep Figma in sync.',
    slug: 'figma-sync',
  },
]

export default function HomeTemplate({
  heroContent = defaultHeroContent,
  productSuiteItems = defaultProductSuiteItems,
  className,
}: HomeTemplateProps) {
  const cls = `${styles.HomeTemplate} ${className || ''}`.trim()
  return (
    <main className={cls}>
      <div className="container">
        <Hero content={heroContent} />
        <ProductSuite items={productSuiteItems} />
      </div>
    </main>
  )
}
