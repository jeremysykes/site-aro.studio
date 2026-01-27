import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Hero'

const content = {
  headline: 'Test Headline',
  description: 'Test description.',
  ctaText: 'Get Started',
  ctaHref: '/#',
}

describe('Hero', () => {
  it('renders headline and link with ctaText', () => {
    render(
      <BrowserRouter>
        <Hero content={content} />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /test headline/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })
})
