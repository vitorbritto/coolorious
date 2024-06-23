import { createTheme } from '@mui/material/styles'
import { green, grey, red, orange } from '@mui/material/colors'
import '@fontsource/montserrat'

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: green['A700']
    },
    text: {
      primary: grey[900],
      secondary: grey[600]
    },
    background: {
      default: '#EFFFFE',
      paper: '#ffffff'
    },
    error: {
      main: red[700]
    },
    warning: {
      main: orange[700]
    },
    info: {
      main: '#0f0aaa'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12
  }
})
