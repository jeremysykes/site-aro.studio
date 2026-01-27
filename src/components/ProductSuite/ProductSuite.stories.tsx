import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import ProductSuite from './ProductSuite'
import type { ProductSuiteItem } from '../../types'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof ProductSuite> = {
  title: 'Components/ProductSuite',
  tags: ['autodocs'],
  component: ProductSuite,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof ProductSuite>

const sampleItems: ProductSuiteItem[] = [
  { id: 'token-editor', title: 'Token Editor', description: 'Create and edit design tokens.', slug: 'token-editor' },
  { id: 'validator', title: 'Validator', description: 'Validate design tokens.', slug: 'validator' },
  { id: 'figma-sync', title: 'Figma Sync', description: 'Keep Figma in sync.', slug: 'figma-sync' },
]

export const Default: Story = {
  args: { items: sampleItems },
}

export const OneItem: Story = {
  args: { items: sampleItems.slice(0, 1) },
}
