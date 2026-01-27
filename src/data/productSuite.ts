import type { TFunction } from 'i18next'
import type { ProductSuiteItem } from '../types'

const CONFIG: { slug: string; i18nKey: string }[] = [
  { slug: 'token-editor', i18nKey: 'tokenEditor' },
  { slug: 'validator', i18nKey: 'validator' },
  { slug: 'figma-sync', i18nKey: 'figmaSync' },
  { slug: 'package-builder', i18nKey: 'packageBuilder' },
  { slug: 'proof-publisher', i18nKey: 'proofPublisher' },
  { slug: 'ai-runner', i18nKey: 'aiRunner' },
]

export function getProductSuiteItems(t: TFunction): ProductSuiteItem[] {
  return CONFIG.map(({ slug, i18nKey }) => ({
    id: slug,
    slug,
    title: t(`productSuite.items.${i18nKey}.title`),
    description: t(`productSuite.items.${i18nKey}.description`),
  }))
}
