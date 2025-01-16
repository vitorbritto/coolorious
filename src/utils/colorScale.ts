type RGB = {
  r: number
  g: number
  b: number
}

// Converte hex para RGB
const hexToRgb = (hex: string): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 0, g: 0, b: 0 }
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
