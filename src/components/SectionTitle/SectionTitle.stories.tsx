import type { Meta, StoryObj } from '@storybook/react'
import SectionTitle from './SectionTitle'

const meta: Meta<typeof SectionTitle> = {
  title: 'Atoms/SectionTitle',
  tags: ['autodocs'],
  component: SectionTitle,
}

export default meta

type Story = StoryObj<typeof SectionTitle>

export const Default: Story = {
  args: { children: 'Section heading' },
}

export const AsH1: Story = {
  args: { children: 'Page title', as: 'h1' },
}

export const AsH3: Story = {
  args: { children: 'Subsection', as: 'h3' },
}
