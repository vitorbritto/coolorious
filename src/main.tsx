import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import App from './App'
import { theme } from './theme'

const rootElement = document.getElementById('root') as HTMLDivElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
