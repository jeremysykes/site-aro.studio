import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import HomeTemplate from './HomeTemplate'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof HomeTemplate> = {
  title: 'Templates/HomeTemplate',
  tags: ['autodocs'],
  component: HomeTemplate,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof HomeTemplate>

export const Default: Story = {
  args: {},
}
