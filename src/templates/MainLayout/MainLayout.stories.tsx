import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof MainLayout> = {
  title: 'Templates/MainLayout',
  tags: ['autodocs'],
  component: MainLayout,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof MainLayout>

export const Default: Story = {
  args: {},
}

export const WithContent: Story = {
  args: {
    children: (
      <>
        <h2>Custom content</h2>
        <p>Main layout with custom child content.</p>
      </>
    ),
  },
}
