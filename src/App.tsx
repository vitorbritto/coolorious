import { Box } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import ColorPicker from './components/ColorPicker'
import About from './components/About'

import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  return (
    <>
      <Box
        minHeight="100vh"
        justifyContent="center"
        alignContent="center"
        margin="auto"
        bgcolor={theme => theme.palette.background.default}
        color={theme => theme.palette.text.primary}
        padding={3}
      >
        <About />
        <ColorPicker />
      </Box>
      <ToastContainer />
    </>
  )
}
export default App
