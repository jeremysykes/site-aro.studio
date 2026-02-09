import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/i18n/config'
import '../src/styles/tokens.css'
import '../src/styles/ui.css'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Intro',
          'Getting Started',
          'Atoms',
          ['Button', 'Card', 'SectionTitle'],
          'Molecules',
          ['ProductCard', 'PricingCard'],
          'Organisms',
          ['Header', 'Hero', 'ProductSuite'],
          'Templates',
          ['MainLayout', 'HomeTemplate'],
          'Pages',
          ['Docs', 'Pricing', 'Contact'],
          '*',
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals?.theme as string) ?? 'light'
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme)
      }
      return (
        <div
          style={{
            background: 'var(--bg)',
            color: 'var(--text)',
            minHeight: '100vh',
            padding: '1rem',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
