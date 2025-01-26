import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
  it('should render logo and navigation', () => {
    render(<Header />)

    expect(screen.getByText('coolorious')).toBeDefined()
    expect(screen.getByText('Sobre')).toBeDefined()
    expect(screen.getByText('Sugestões')).toBeDefined()
  })

  it('should render beta badge', () => {
    render(<Header />)
    expect(screen.getByText('beta')).toBeDefined()
  })

  it('should open the About modal when clicking Sobre link', () => {
    render(<Header />)
    const aboutLink = screen.getByText('Sobre')
    fireEvent.click(aboutLink)

    expect(screen.getByText('Sobre o Coolorious')).toBeDefined()
  })
})
