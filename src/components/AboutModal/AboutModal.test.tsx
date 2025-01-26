import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import AboutModal from '.'

describe('AboutModal', () => {
  it('should render the modal with the correct title', () => {
    render(<AboutModal open={true} onClose={() => {}} />)

    expect(screen.getByText('Sobre o Coolorious')).toBeDefined()
  })

  it('should call onClose when the close button is clicked', async () => {
    const handleClose = vi.fn()
    render(<AboutModal open={true} onClose={handleClose} />)

    const closeButton = await screen.findByRole('button', { name: /fechar/i })
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalled()
  })

  it('should not render the modal when open is false', () => {
    const { container } = render(<AboutModal open={false} onClose={() => {}} />)
    expect(container.firstChild).toBeNull()
  })
})
