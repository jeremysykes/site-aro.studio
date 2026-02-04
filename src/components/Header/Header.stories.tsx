import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof Header> = {
  title: 'Organism/Header',
  tags: ['autodocs'],
  component: Header,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
