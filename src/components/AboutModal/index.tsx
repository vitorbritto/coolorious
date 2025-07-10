import { Box, Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { version } from '../../../package.json'
import { styles } from '../../theme/styles'

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
      sx={styles.aboutModal}
    >
      <Box sx={styles.aboutModalContent}>
        <Box
          component="button"
          onClick={onClose}
          aria-label="fechar"
          sx={styles.modalCloseButton}
        >
          <CloseIcon />
        </Box>

        <Typography variant="h2" sx={styles.modalTitle}>
          Sobre o Coolorious
        </Typography>

        <Typography sx={styles.modalDescription}>
          O Coolorious é uma ferramenta de geração de escalas de cores projetada para
          designers e desenvolvedores. Com ela, você pode criar facilmente escalas
          harmoniosas a partir de qualquer cor base, gerando tons mais claros e mais
          escuros que mantêm a consistência visual. Perfeita para sistemas de design,
          interfaces e qualquer projeto que necessite de uma paleta de cores coesa e
          profissional.
        </Typography>

        <Box sx={styles.modalVersion}>
          <Typography component="span" variant="caption">
            Versão {version}
          </Typography>
          <Typography component="span" variant="caption">
            Última atualização: 28/01/2025
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}

export default AboutModal
