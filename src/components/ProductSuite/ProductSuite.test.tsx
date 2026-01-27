import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductSuite from './ProductSuite'

const items = [
  { id: 'a', title: 'Product A', description: 'Desc A', slug: 'product-a' },
  { id: 'b', title: 'Product B', description: 'Desc B', slug: 'product-b' },
]

describe('ProductSuite', () => {
  it('renders section title and item titles', () => {
    render(
      <BrowserRouter>
        <ProductSuite items={items} />
      </BrowserRouter>
    )
    expect(screen.getByText('Our Product Suite')).toBeInTheDocument()
    expect(screen.getByText('Product A')).toBeInTheDocument()
    expect(screen.getByText('Product B')).toBeInTheDocument()
  })
})
