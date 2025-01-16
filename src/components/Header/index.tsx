import { Box, Link, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import AboutModal from '../AboutModal'

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid',
          borderColor: 'rgba(255,255,255,0.1)',
          bgcolor: '#0c1118',
          width: '100%',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 1000
        }}
      >
        <Box
          sx={{
            py: 1.5,
            px: { xs: 3, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo with Beta Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#ffec70',
                textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
                '&:hover': {
                  color: '#ffe340'
                },
                transition: 'color 0.2s ease-in-out'
              }}
            >
              coolorious
            </Typography>
            <Box
              sx={{
                fontSize: '0.625rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#0c1118',
                bgcolor: '#ffec70',
                px: 0.75,
                py: 0.25,
                borderRadius: '4px',
                letterSpacing: '0.05em',
                lineHeight: 1
              }}
            >
              beta
            </Box>
          </Box>

          {/* Navigation */}
          <Stack direction="row" spacing={4}>
            <Link
              component="button"
              onClick={() => setIsAboutOpen(true)}
              sx={{
                color: '#ffec70',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ffe340'
                }
              }}
            >
              Sobre
            </Link>
            <Link
              href="https://github.com/vitorbritto/coolorious/issues"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#ffec70',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                '&:hover': {
                  color: '#ffe340'
                }
              }}
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
