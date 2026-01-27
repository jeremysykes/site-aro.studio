import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from './ProductCard'

const item = {
  id: 'token-editor',
  title: 'Token Editor',
  description: 'Create and edit design tokens.',
  slug: 'token-editor',
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
