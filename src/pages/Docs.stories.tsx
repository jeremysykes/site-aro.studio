import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Docs from './Docs'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof Docs> = {
  title: 'Pages/Docs',
  tags: ['autodocs'],
  component: Docs,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Docs>

export const Default: Story = {}
