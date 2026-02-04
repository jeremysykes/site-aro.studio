import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Atom/Card',
  tags: ['autodocs'],
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: { children: 'Card content' },
}

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <>
        <h3>Title</h3>
        <p>Description</p>
      </>
    ),
  },
}
