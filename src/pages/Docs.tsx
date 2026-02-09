import { SectionTitle } from '../components'
import styles from './Docs.module.css'

export default function Docs() {
  return (
    <main className={`container ${styles.Docs}`.trim()}>
      <SectionTitle as="h1">Overview</SectionTitle>
      <p>
        This documentation covers the Aro Studio product suite: design token
        editing, validation, Figma sync, and more.
      </p>

      <SectionTitle>Getting started</SectionTitle>
      <p>To get started:</p>
      <ul className={styles.DocsList}>
        <li>Install the CLI or use the web app</li>
        <li>Connect your token repository</li>
        <li>Configure your pipeline and run validation</li>
      </ul>

      <SectionTitle>API reference</SectionTitle>
      <p>
        The REST API is available at <code>/api/v1</code>. Authentication uses
        API keys. Rate limits apply per plan.
      </p>
    </main>
  )
}
