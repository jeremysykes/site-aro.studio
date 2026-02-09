import { SectionTitle, PricingCard } from '../components'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <main className={`container ${styles.Pricing}`.trim()}>
      <SectionTitle as="h1">Plans</SectionTitle>
      <div className={styles.PricingGrid}>
        <PricingCard
          title="Free"
          price="$0"
          features={['Up to 3 projects', 'Community support']}
          ctaText="Sign up"
          ctaTo="/contact"
        />
        <PricingCard
          title="Pro"
          price="$29/mo"
          features={['Unlimited projects', 'API access', 'Priority support']}
          ctaText="Get started"
          ctaTo="/#get-started"
        />
        <PricingCard
          title="Team"
          price="$99/mo"
          features={['Everything in Pro', 'Team dashboard', 'SSO']}
          ctaText="Contact sales"
          ctaTo="/contact"
        />
      </div>
    </main>
  )
}
