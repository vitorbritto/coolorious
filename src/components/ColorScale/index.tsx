import { Box, hexToRgb, IconButton, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { generateColorScale } from '../../utils/colorScale'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DownloadIcon from '@mui/icons-material/Download'
import { styles } from '../../theme/styles'

const ColorScale = () => {
  const [selectedColor, setSelectedColor] = useState('#ffec70')
  const [colorScale, setColorScale] = useState<string[]>(
    generateColorScale(selectedColor)
  )

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setSelectedColor(newColor)
    setColorScale(generateColorScale(newColor))
  }

  const handleCopyColor = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      toast.success(`Cor ${color} copiada!`, {
        icon: () => '📋',
        style: styles.toastMessage
      })
    } catch (err) {
      toast.error('Não foi possível copiar a cor', {
        icon: () => '❌',
        style: styles.toastMessage
      })
    }
  }

  const handleCopyAll = async () => {
    try {
      const colorsText = colorScale.join('\n')
      await navigator.clipboard.writeText(colorsText)
      toast.success('Todas as cores foram copiadas!', {
        icon: () => '📋',
        style: styles.toastMessage
      })
    } catch (err) {
      toast.error('Não foi possível copiar as cores', {
        icon: () => '❌',
        style: styles.toastMessage
      })
    }
  }

  const handleCopySelectedColor = async (color: string, colorType: string) => {
    try {
      await navigator.clipboard.writeText(color)
      toast.success(`${colorType} da cor escolhida foi copiado!`, {
        icon: () => '📋',
        style: styles.toastMessage
      })
    } catch (err) {
      toast.error(`Não foi possível copiar ${colorType} da cor escolhida`, {
        icon: () => '❌',
        style: styles.toastMessage
      })
    }
  }

  const handleDownload = () => {
    const colorsText = colorScale.join('\n')
    const blob = new Blob([colorsText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `color-scale-${selectedColor.substring(1)}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast.success('Escala de cores baixada!', {
      icon: () => '💾',
      style: styles.toastMessage
    })
  }

  return (
    <Box sx={styles.colorScaleContainer}>
      <Box sx={styles.colorPickerContainer}>
        <Box sx={styles.colorPickerWrapper}>
          <Box sx={styles.colorPicker}>
            <Typography sx={styles.colorPickerText}>Selecione sua cor</Typography>
            <input
              type="color"
              value={selectedColor}
              onChange={handleColorChange}
              style={styles.colorPickerInput}
            />
          </Box>

          <Box sx={styles.colorPicker}>
            <Typography sx={styles.colorPickerSelectedColor}>
              {selectedColor.toUpperCase()}
            </Typography>
            <Tooltip title="Copiar HEX da cor escolhida" arrow placement="bottom">
              <IconButton aria-label='Copiar HEX da cor escolhida' onClick={() => handleCopySelectedColor(selectedColor.toUpperCase(), 'HEX')} sx={styles.colorPickerAction}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={styles.colorPicker}>
            <Typography sx={styles.colorPickerSelectedColor}>
              {hexToRgb(selectedColor).toUpperCase()}
            </Typography>
            <Tooltip title="Copiar RGB da cor escolhida" arrow placement="bottom">
              <IconButton aria-label='Copiar RGB da cor escolhida' onClick={() => handleCopySelectedColor(hexToRgb(selectedColor).toUpperCase(), 'RGB')} sx={styles.colorPickerAction}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Box sx={styles.colorPickerActions}>
          <Tooltip title="Copiar todas as cores" arrow placement="bottom">
            <IconButton onClick={handleCopyAll} sx={styles.colorPickerAction}>
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Baixar escala de cores" arrow placement="bottom">
            <IconButton onClick={handleDownload} sx={styles.colorPickerAction}>
              <DownloadIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Box sx={styles.colorScale}>
        {colorScale.map((color, index) => (
          <Box
            key={index}
            sx={{
              ...styles.colorScaleItem,
              bgcolor: color
            }}
            onClick={() => handleCopyColor(color)}
          >
            <Box sx={styles.colorScaleItemText}>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  color: '#fff',
                  fontWeight: 500,
                  fontFamily: 'monospace'
                }}
              >
                {color}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ColorScale
