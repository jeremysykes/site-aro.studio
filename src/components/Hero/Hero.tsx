import type { HeroContent } from '../../types'
import Button from '../Button'
import styles from './Hero.module.css'

export interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  const headlineParts = content.headline.split('\n')

  return (
    <section className={styles.Hero}>
      <h1 className={styles.HeroHeadline}>
        {headlineParts.map((part, i) => (
          <span key={i}>
            {part}
            {i < headlineParts.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className={styles.HeroDescription}>{content.description}</p>
      <Button to={content.ctaHref}>{content.ctaText}</Button>
    </section>
  )
}
