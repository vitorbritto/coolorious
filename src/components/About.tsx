import { Stack, Typography, Box } from '@mui/material'

const About = () => {
  return (
    <Stack justifyContent="center" alignItems="center" marginBottom={8}>
      <img src="./src/assets/logo.png" alt="Color Scale" width={120} />
      <Typography variant="h3" marginY={2}>
        Color Scale
      </Typography>
      <Box width="35%" textAlign="center">
        <Typography variant="body1" marginTop={4}>
          Color Scale is a project that allows you to create color scales with a few
          clicks. You can choose the color you want and the project will generate a color
          scale from the color you chose.
        </Typography>
      </Box>
    </Stack>
  )
}

export default About
