import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Pricing from './Pricing'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof Pricing> = {
  title: 'Pages/Pricing',
  tags: ['autodocs'],
  component: Pricing,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Pricing>

export const Default: Story = {}
