import Card from '../Card'
import SectionTitle from '../SectionTitle'
import Button from '../Button'
import styles from './PricingCard.module.css'

export interface PricingCardProps {
  title: string
  price: string
  features: string[]
  ctaText: string
  ctaTo?: string
  ctaHref?: string
  className?: string
}

export default function PricingCard({
  title,
  price,
  features,
  ctaText,
  ctaTo,
  ctaHref,
  className,
}: PricingCardProps) {
  const cls = `${styles.PricingCard} ${className || ''}`.trim()
  return (
    <Card className={cls}>
      <SectionTitle as="h3">{title}</SectionTitle>
      <p className={styles.PricingCardPrice}>{price}</p>
      <ul className={styles.PricingCardFeatures}>
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <Button to={ctaTo} href={ctaHref} variant="cta">
        {ctaText}
      </Button>
    </Card>
  )
}
