import type { HeroContent } from '../../types'
import Button from '../Button'
import styles from './Hero.module.css'

export interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className={styles.Hero}>
      <h1 className={styles.HeroHeadline}>{content.headline}</h1>
      <p className={styles.HeroDescription}>{content.description}</p>
      <Button to={content.ctaHref}>{content.ctaText}</Button>
    </section>
  )
}
