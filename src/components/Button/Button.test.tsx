import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders as button by default', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('renders as anchor when href is provided', () => {
    render(<Button href="/">Link</Button>)
    const link = screen.getByRole('link', { name: /link/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
