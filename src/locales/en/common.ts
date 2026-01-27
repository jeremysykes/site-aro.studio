/**
 * English translations. Keys: nav.*, hero.*, productSuite.*
 */
export default {
  nav: {
    productSuite: 'Product Suite',
    docs: 'Docs',
    pricing: 'Pricing',
    contactUs: 'Contact Us',
  },
  hero: {
    headline: 'The Design System Suite for Enterprise Teams',
    description:
      'Build, validate, and ship design tokens and components with a unified suite of tools.',
    ctaText: 'Get Started',
  },
  productSuite: {
    sectionTitle: 'Our Product Suite',
    learnMore: 'Learn More',
    items: {
      tokenEditor: {
        title: 'Token Editor',
        description:
          'Create and edit design tokens with a visual editor. Manage colors, typography, and spacing in one place.',
      },
      validator: {
        title: 'Validator',
        description:
          'Validate design tokens and component usage across your codebase. Catch inconsistencies before they ship.',
      },
      figmaSync: {
        title: 'Figma Sync',
        description:
          'Keep Figma and your design system in sync. Export tokens and components bidirectionally.',
      },
      packageBuilder: {
        title: 'Package Builder',
        description:
          'Build and publish design system packages. Generate code for web, iOS, and Android.',
      },
      proofPublisher: {
        title: 'Proof Publisher',
        description:
          'Publish and share design specs and proofs. Collaborate with stakeholders and developers.',
      },
      aiRunner: {
        title: 'AI Runner',
        description:
          'Automate design system tasks with AI. Generate variations, suggest improvements, and more.',
      },
    },
  },
} as const
