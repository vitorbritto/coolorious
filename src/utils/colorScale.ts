type RGB = {
  r: number
  g: number
  b: number
}

// Converte hex para RGB
const hexToRgb = (hex: string): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) {
    throw new Error('Invalid color format')
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
}

// Converte RGB para hex
const rgbToHex = ({ r, g, b }: RGB): string => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

// Ajusta a luminosidade de uma cor
const adjustBrightness = (color: RGB, factor: number): RGB => {
  return {
    r: Math.min(255, Math.max(0, Math.round(color.r * factor))),
    g: Math.min(255, Math.max(0, Math.round(color.g * factor))),
    b: Math.min(255, Math.max(0, Math.round(color.b * factor)))
  }
}

// Gera uma escala de cores
export const generateColorScale = (baseColor: string, steps: number = 9): string[] => {
  const rgb = hexToRgb(baseColor)
  const scale: string[] = []

  // Fatores para escurecer e clarear
  const darkFactors = Array.from(
    { length: Math.floor(steps / 2) },
    (_, i) => 1 - (i + 1) * (0.8 / Math.floor(steps / 2))
  )

  const lightFactors = Array.from(
    { length: Math.floor(steps / 2) },
    (_, i) => 1 + (i + 1) * (0.8 / Math.floor(steps / 2))
  )

  // Adiciona cores mais escuras
  darkFactors.reverse().forEach(factor => {
    scale.push(rgbToHex(adjustBrightness(rgb, factor)))
  })

  // Adiciona a cor base
  scale.push(baseColor)

  // Adiciona cores mais claras
  lightFactors.forEach(factor => {
    scale.push(rgbToHex(adjustBrightness(rgb, factor)))
  })

  return scale
}

// Converte RGB para HSL
const rgbToHsl = ({ r, g, b }: RGB): string => {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return `HSL(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}

// Exportar a função junto com as outras
export const hexToHsl = (hex: string): string => {
  return rgbToHsl(hexToRgb(hex))
}
