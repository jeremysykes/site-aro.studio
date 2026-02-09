import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Button from './Button'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  component: Button,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { children: 'Click me' },
}

export const WithHref: Story = {
  args: { children: 'External', href: 'https://example.com' },
}

export const WithTo: Story = {
  args: { children: 'Home', to: '/' },
}

export const Cta: Story = {
  args: { children: 'Contact Us', to: '/contact', variant: 'cta' },
}
