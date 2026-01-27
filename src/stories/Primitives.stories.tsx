import type { Meta, StoryObj } from '@storybook/react'

function PrimitivesDemo() {
  return (
    <div className="container">
      <button type="button" className="btn">
        Button
      </button>
      <button type="button" className="btn btn--lg">
        Get Started
      </button>
      <div className="card">
        <p>Card content</p>
      </div>
    </div>
  )
}

const meta: Meta<typeof PrimitivesDemo> = {
  title: 'DesignSystem/Primitives',
  tags: ['autodocs'],
  component: PrimitivesDemo,
}

export default meta

type Story = StoryObj<typeof PrimitivesDemo>

export const Default: Story = {}

export const ButtonAndCard: Story = {
  render: () => (
    <div className="container">
      <div className="grid grid--3" style={{ maxWidth: 600 }}>
        <div className="card">
          <p>Card 1</p>
        </div>
        <div className="card">
          <p>Card 2</p>
        </div>
        <div className="card">
          <p>Card 3</p>
        </div>
      </div>
    </div>
  ),
}
