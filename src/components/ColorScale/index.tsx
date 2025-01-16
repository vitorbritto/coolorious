import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { generateColorScale } from '../../utils/colorScale'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DownloadIcon from '@mui/icons-material/Download'

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
        style: {
          backgroundColor: '#0e141d',
          color: '#ffec70',
          borderRadius: '4px',
          fontFamily: 'monospace'
        }
      })
    } catch (err) {
      toast.error('Não foi possível copiar a cor', {
        icon: () => '❌',
        style: {
          backgroundColor: '#0e141d',
          color: '#ffec70',
          borderRadius: '4px'
        }
      })
    }
  }

  const handleCopyAll = async () => {
    try {
      const colorsText = colorScale.join('\n')
      await navigator.clipboard.writeText(colorsText)
      toast.success('Todas as cores foram copiadas!', {
        icon: () => '📋',
        style: {
          backgroundColor: '#0e141d',
          color: '#ffec70',
          borderRadius: '4px',
          fontFamily: 'monospace'
        }
      })
    } catch (err) {
      toast.error('Não foi possível copiar as cores', {
        icon: () => '❌',
        style: {
          backgroundColor: '#0e141d',
          color: '#ffec70',
          borderRadius: '4px'
        }
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
      style: {
        backgroundColor: '#0e141d',
        color: '#ffec70',
        borderRadius: '4px',
        fontFamily: 'monospace'
      }
    })
  }

  return (
    <Box
      sx={{
        mt: '3.25rem',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Color Picker */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0e141d',
          px: 4,
          py: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: '#ffec70',
              opacity: 0.8
            }}
          >
            Selecione sua cor
          </Typography>

          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            style={{
              width: '32px',
              height: '32px',
              padding: 0,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: 'transparent'
            }}
          />
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#fff',
              fontFamily: 'monospace'
            }}
          >
            {selectedColor.toUpperCase()}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Copiar todas as cores" arrow placement="bottom">
            <IconButton
              onClick={handleCopyAll}
              sx={{
                color: '#ffec70',
                opacity: 0.8,
                '&:hover': { opacity: 1 }
              }}
            >
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Baixar escala de cores" arrow placement="bottom">
            <IconButton
              onClick={handleDownload}
              sx={{
                color: '#ffec70',
                opacity: 0.8,
                '&:hover': { opacity: 1 }
              }}
            >
              <DownloadIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Color Scale */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flex: 1,
          overflow: 'hidden'
        }}
      >
        {colorScale.map((color, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              bgcolor: color,
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              pb: 3,
              '&:hover': {
                flex: 1.5
              }
            }}
            onClick={() => handleCopyColor(color)}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(4px)',
                padding: '4px 8px',
                borderRadius: '4px',
                opacity: 0,
                transform: 'translateY(8px)',
                transition: 'all 0.2s ease-in-out',
                '.MuiBox-root:hover &': {
                  opacity: 1,
                  transform: 'translateY(0)'
                }
              }}
            >
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
