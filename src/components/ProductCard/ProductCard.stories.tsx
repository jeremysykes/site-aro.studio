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
  title: 'Components/ProductCard',
  tags: ['autodocs'],
  component: ProductCard,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof ProductCard>

const defaultItem: ProductSuiteItem = {
  id: 'token-editor',
  title: 'Token Editor',
  description: 'Create and edit design tokens.',
  slug: 'token-editor',
}

export const Default: Story = {
  args: { item: defaultItem },
}

export const Validator: Story = {
  args: {
    item: {
      id: 'validator',
      title: 'Validator',
      description: 'Validate design tokens and component usage.',
      slug: 'validator',
    },
  },
}
