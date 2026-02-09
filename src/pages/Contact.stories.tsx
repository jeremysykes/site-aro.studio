import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Contact from './Contact'

const withRouter = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const meta: Meta<typeof Contact> = {
  title: 'Pages/Contact',
  tags: ['autodocs'],
  component: Contact,
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof Contact>

export const Default: Story = {}
