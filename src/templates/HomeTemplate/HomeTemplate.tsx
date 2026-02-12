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
  headline: 'Make Your Design System\nObservable, Safe, and Operable',
  description:
    'A modular desktop suite that works alongside Figma, Storybook, and your codebase — adding the safety and coherence layer those tools don\'t cover.',
  ctaText: 'Get Started',
  ctaHref: '/#get-started',
}

const defaultProductSuiteItems: ProductSuiteItem[] = [
  {
    id: 'inspect',
    title: 'Aro Inspect',
    description: 'See what you actually have.',
    slug: 'inspect',
  },
  {
    id: 'guard',
    title: 'Aro Guard',
    description: 'Stop breaking changes before they ship.',
    slug: 'guard',
  },
  {
    id: 'align',
    title: 'Aro Align',
    description: 'Make sure design and code tell the same story.',
    slug: 'align',
  },
  {
    id: 'ship',
    title: 'Aro Ship',
    description: 'Turn your system into something teams can actually use.',
    slug: 'ship',
  },
  {
    id: 'docs',
    title: 'Aro Docs',
    description: "Documentation that doesn't rot.",
    slug: 'docs',
  },
  {
    id: 'flow',
    title: 'Aro Flow',
    description: 'Change the system safely, step by step.',
    slug: 'flow',
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
