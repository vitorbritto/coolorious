import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ColorScale from '.'

describe('ColorScale', () => {
  it('should render color picker', () => {
    render(<ColorScale />)

    expect(screen.getByText('Selecione sua cor')).toBeDefined()
  })

  it('should render initial color value', () => {
    render(<ColorScale />)

    expect(screen.getByText('#FFEC70')).toBeDefined()
  })
})
