import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Hero'
import type { HeroContent } from '../../types'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  tags: ['autodocs'],
  component: Hero,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Hero>

const defaultContent: HeroContent = {
  headline: 'The Design System Suite for Enterprise Teams',
  description:
    'Build, validate, and ship design tokens and components with a unified suite of tools.',
  ctaText: 'Get Started',
  ctaHref: '/#',
}

export const Default: Story = {
  args: { content: defaultContent },
}

export const Short: Story = {
  args: {
    content: {
      headline: 'Short Headline',
      description: 'Short description.',
      ctaText: 'Start',
      ctaHref: '/',
    },
  },
}
