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
    headline: 'Make Your Design System\nObservable, Safe, and Operable',
    description:
      'A modular desktop suite that works alongside Figma, Storybook, and your codebase — adding the safety and coherence layer those tools don\'t cover.',
    ctaText: 'Get Started',
  },
  productSuite: {
    sectionTitle: 'Our Product Suite',
    learnMore: 'Learn More',
    items: {
      inspect: {
        title: 'Aro Inspect',
        description:
          'See what you actually have. Scan your design system across Figma, code, and Storybook to produce a real, current inventory.',
      },
      guard: {
        title: 'Aro Guard',
        description:
          'Stop breaking changes before they ship. Enforce deterministic rules and contracts to make design systems safe to change.',
      },
      align: {
        title: 'Aro Align',
        description:
          'Make sure design and code tell the same story. Detect drift between Figma, code, and Storybook.',
      },
      ship: {
        title: 'Aro Ship',
        description:
          'Turn your system into something teams can actually use. Package your design system into deterministic, consumable artifacts.',
      },
      docs: {
        title: 'Aro Docs',
        description:
          'Documentation that doesn\'t rot. Generate documentation directly from real system state.',
      },
      flow: {
        title: 'Aro Flow',
        description:
          'Change the system safely, step by step. Guided workflows with automatic validation and PR-ready outputs.',
      },
    },
  },
} as const
