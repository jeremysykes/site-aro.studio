import { SectionTitle, Button } from '../components'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <main className={`container ${styles.Contact}`.trim()}>
      <SectionTitle as="h1">Get in touch</SectionTitle>
      <p className={styles.ContactLead}>
        Have a question or want to work together? We’d love to hear from you.
      </p>
      <p className={styles.ContactSecondary}>
        We’ll get back within 24 hours.
      </p>
      <Button href="mailto:hello@aro.studio" variant="cta">
        Email us
      </Button>
    </main>
  )
}
