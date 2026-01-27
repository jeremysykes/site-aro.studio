import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders logo and nav links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByRole('link', { name: /aro studio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /product suite/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(hamburger)
    expect(screen.getByRole('navigation', { name: /mobile menu/i })).toBeInTheDocument()
  })
})
