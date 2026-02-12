import type { TFunction } from 'i18next'
import type { ProductSuiteItem } from '../types'

const CONFIG: { slug: string; i18nKey: string }[] = [
  { slug: 'inspect', i18nKey: 'inspect' },
  { slug: 'guard', i18nKey: 'guard' },
  { slug: 'align', i18nKey: 'align' },
  { slug: 'ship', i18nKey: 'ship' },
  { slug: 'docs', i18nKey: 'docs' },
  { slug: 'flow', i18nKey: 'flow' },
]

export function getProductSuiteItems(t: TFunction): ProductSuiteItem[] {
  return CONFIG.map(({ slug, i18nKey }) => ({
    id: slug,
    slug,
    title: t(`productSuite.items.${i18nKey}.title`),
    description: t(`productSuite.items.${i18nKey}.description`),
  }))
}
