import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from './ProductCard'
import type { ProductSuiteItem } from '../../types'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  tags: ['autodocs'],
  component: ProductCard,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof ProductCard>

const defaultItem: ProductSuiteItem = {
  id: 'inspect',
  title: 'Aro Inspect',
  description: 'See what you actually have.',
  slug: 'inspect',
}

export const Default: Story = {
  args: { item: defaultItem },
}

export const Guard: Story = {
  args: {
    item: {
      id: 'guard',
      title: 'Aro Guard',
      description: 'Stop breaking changes before they ship.',
      slug: 'guard',
    },
  },
}
