import { Box, Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { version } from '../../../package.json'

interface AboutModalProps {
  open: boolean
  onClose: () => void
}

const AboutModal = ({ open, onClose }: AboutModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="about-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#0c1118',
          borderRadius: 2,
          p: 4,
          maxWidth: '600px',
          width: '100%',
          outline: 'none',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Box
          component="button"
          onClick={onClose}
          aria-label="fechar"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#ffec70',
            opacity: 0.8,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            display: 'flex',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          <CloseIcon />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#ffec70',
            mb: 3
          }}
        >
          Sobre o Coolorious
        </Typography>

        <Typography
          sx={{
            color: '#fff',
            lineHeight: 1.7,
            mb: 4
          }}
        >
          O Coolorious é uma ferramenta de geração de escalas de cores projetada para
          designers e desenvolvedores. Com ela, você pode criar facilmente escalas
          harmoniosas a partir de qualquer cor base, gerando tons mais claros e mais
          escuros que mantêm a consistência visual. Perfeita para sistemas de design,
          interfaces e qualquer projeto que necessite de uma paleta de cores coesa e
          profissional.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            color: '#ffffff40'
          }}
        >
          <Typography component="span" variant="caption">
            Versão {version}
          </Typography>
          <Typography component="span" variant="caption">
            Última atualização: 27/01/2025
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}

export default AboutModal
