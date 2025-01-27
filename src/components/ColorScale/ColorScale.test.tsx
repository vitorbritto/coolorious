import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import ColorScale from '.'

const writeText = vi.fn()

Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

describe('ColorScale', () => {
  it('should render color picker', () => {
    render(<ColorScale />)

    expect(screen.getByText('Selecione sua cor')).toBeDefined()
  })

  it('should render initial color value', () => {
    render(<ColorScale />)

    expect(screen.getByText('#FFEC70')).toBeDefined()
  })

  it('should copy HEX and RGB initial color value', () => {
    const hexAndRgbValues = ['#FFEC70', 'RGB(255, 236, 112)'];
  
    render(<ColorScale />);
  
    hexAndRgbValues.forEach((value) => {
      expect(screen.getByText(value)).toBeDefined();
    });
  
    const hexCopyButton = screen.getByLabelText('Copiar HEX da cor escolhida');
    const rgbCopyButton = screen.getByLabelText('Copiar RGB da cor escolhida');
  
    fireEvent.click(hexCopyButton);
    fireEvent.click(rgbCopyButton);
  
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(hexAndRgbValues[0]);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(hexAndRgbValues[1]);
  });
})
