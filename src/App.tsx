import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

import { theme } from './theme'
import Header from './components/Header'
import ColorScale from './components/ColorScale'
import { styles } from './theme/styles'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.container}>
        <Header />
        <ColorScale />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          closeOnClick
          pauseOnHover={false}
          draggable={false}
          theme="dark"
          style={{ fontSize: '0.875rem' }}
        />
      </Box>
    </ThemeProvider>
  )
}

export default App
