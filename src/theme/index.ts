import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0284c7'
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff'
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    }
  },
  shape: {
    borderRadius: 8
  }
})
