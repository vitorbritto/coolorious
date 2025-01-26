import { describe, it, expect } from 'vitest'
import { generateColorScale } from './colorScale'

describe('colorScale', () => {
  it('should generate a color scale with default steps', () => {
    const baseColor = '#ffec70'
    const scale = generateColorScale(baseColor)

    expect(scale).toHaveLength(9)
    expect(scale).toContain(baseColor)
  })

  it('should generate a color scale with custom steps', () => {
    const baseColor = '#ffec70'
    const steps = 5
    const scale = generateColorScale(baseColor, steps)

    expect(scale).toHaveLength(steps)
    expect(scale).toContain(baseColor)
  })

  it('should handle invalid color input', () => {
    const invalidColor = 'invalid'
    expect(() => generateColorScale(invalidColor)).toThrowError('Invalid color format')
  })
})
