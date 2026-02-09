import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import PricingCard from './PricingCard'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof PricingCard> = {
  title: 'Molecules/PricingCard',
  tags: ['autodocs'],
  component: PricingCard,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof PricingCard>

export const Default: Story = {
  args: {
    title: 'Pro',
    price: '$29/mo',
    features: ['Unlimited projects', 'API access', 'Priority support'],
    ctaText: 'Get started',
    ctaTo: '/#get-started',
  },
}

export const Free: Story = {
  args: {
    title: 'Free',
    price: '$0',
    features: ['Up to 3 projects', 'Community support'],
    ctaText: 'Sign up',
    ctaTo: '/contact',
  },
}

export const Team: Story = {
  args: {
    title: 'Team',
    price: '$99/mo',
    features: ['Everything in Pro', 'Team dashboard', 'SSO'],
    ctaText: 'Contact sales',
    ctaHref: '/contact',
  },
}
