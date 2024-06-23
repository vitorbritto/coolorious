import { useState, ChangeEvent } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { copyToClipboard, generateColorScale } from '../helpers'

const ColorPicker = () => {
  const [color, setColor] = useState('#ffa200')
  const [colorScale, setColorScale] = useState<string[]>(generateColorScale('#ffa200'))

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    setColorScale(generateColorScale(newColor))
  }

  return (
    <>
      <Card
        sx={{
          bgcolor: theme => theme.palette.background.paper,
          padding: 2,
          borderRadius: 2
        }}
      >
        <CardContent>
          <Stack gap={2} justifyContent="center" alignItems="center">
            <Typography variant="h4" color="primary">
              Select a color
            </Typography>
            <TextField
              value={color}
              onChange={handleColorChange}
              type="color"
              inputProps={{
                style: {
                  height: '50px',
                  width: '50px',
                  padding: 0,
                  border: '1px solid white',
                  cursor: 'pointer',
                  borderRadius: 5
                }
              }}
            />
          </Stack>
          <Stack direction="row" gap={2} justifyContent="center" marginTop={6}>
            {colorScale.map((col, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: col,
                  border: '1px solid rgba(255,255,255,0.5)',
                  padding: 3.5,
                  color: '#fff',
                  borderRadius: 2
                }}
              >
                <Button
                  onClick={() => copyToClipboard(col)}
                  sx={{
                    bgcolor: 'rgba(0, 0, 0, 0.15)',
                    paddingX: 1,
                    paddingY: 0.5,
                    borderRadius: 1
                  }}
                >
                  {col}
                </Button>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default ColorPicker
