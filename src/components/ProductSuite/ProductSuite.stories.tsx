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
  title: 'Organisms/ProductSuite',
  tags: ['autodocs'],
  component: ProductSuite,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof ProductSuite>

const sampleItems: ProductSuiteItem[] = [
  { id: 'inspect', title: 'Aro Inspect', description: 'See what you actually have.', slug: 'inspect' },
  { id: 'guard', title: 'Aro Guard', description: 'Stop breaking changes before they ship.', slug: 'guard' },
  { id: 'align', title: 'Aro Align', description: 'Make sure design and code tell the same story.', slug: 'align' },
  { id: 'ship', title: 'Aro Ship', description: 'Turn your system into something teams can actually use.', slug: 'ship' },
  { id: 'docs', title: 'Aro Docs', description: "Documentation that doesn't rot.", slug: 'docs' },
  { id: 'flow', title: 'Aro Flow', description: 'Change the system safely, step by step.', slug: 'flow' },
]

export const Default: Story = {
  args: { items: sampleItems },
}

export const OneItem: Story = {
  args: { items: sampleItems.slice(0, 1) },
}
