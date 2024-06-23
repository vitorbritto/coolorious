const lightenDarkenColor = (col: string, amt: number) => {
  let usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt
  r = r > 255 ? 255 : r < 0 ? 0 : r

  let g = ((num >> 8) & 0x00ff) + amt
  g = g > 255 ? 255 : g < 0 ? 0 : g

  let b = (num & 0x0000ff) + amt
  b = b > 255 ? 255 : b < 0 ? 0 : b

  return (
    (usePound ? '#' : '') +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0')
  )
}

export const generateColorScale = (baseColor: string) => {
  const scale = []
  for (let i = -4; i <= 4; i++) {
    scale.push(lightenDarkenColor(baseColor, i * 30))
  }
  return scale
}
