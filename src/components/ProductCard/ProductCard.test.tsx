import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from './ProductCard'

const item = {
  id: 'inspect',
  title: 'Aro Inspect',
  description: 'See what you actually have.',
  slug: 'inspect',
}

describe('ProductCard', () => {
  it('renders item title and Learn More link', () => {
    render(
      <BrowserRouter>
        <ProductCard item={item} />
      </BrowserRouter>
    )
    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })
})
