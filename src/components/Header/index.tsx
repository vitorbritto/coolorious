import { Box, Link, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import AboutModal from '../AboutModal'
import { styles } from '../../theme/styles'

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <>
      <Box component="header" sx={styles.header}>
        <Box sx={styles.logoContainer}>
          <Box sx={styles.logoWrapper}>
            <Typography variant="h1" sx={styles.logo}>
              coolorious
            </Typography>
            <Box sx={styles.betaBadge}>beta</Box>
          </Box>

          <Stack direction="row" spacing={4}>
            <Link
              component="button"
              onClick={() => setIsAboutOpen(true)}
              sx={styles.link}
            >
              Sobre
            </Link>
            <Link
              href="https://github.com/vitorbritto/coolorious/issues"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.link}
            >
              Sugestões
            </Link>
          </Stack>
        </Box>
      </Box>

      <AboutModal open={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  )
}

export default Header
