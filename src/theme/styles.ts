export const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0c1118',
    color: '#ffec70',
    fontFamily: '"Poppins", sans-serif',
    width: '100%'
  },
  header: {
    borderBottom: '1px solid',
    borderColor: 'rgba(255,255,255,0.1)',
    bgcolor: '#0c1118',
    width: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 1000
  },
  logoContainer: {
    py: 1.5,
    px: { xs: 3, md: 4 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logoWrapper: { display: 'flex', alignItems: 'center', gap: 1.5 },
  link: {
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
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#ffec70',
    textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
    '&:hover': {
      color: '#ffe340'
    },
    transition: 'color 0.2s ease-in-out'
  },
  betaBadge: {
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
  },

  aboutModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2
  },
  aboutModalContent: {
    position: 'relative',
    bgcolor: '#0c1118',
    borderRadius: 2,
    p: 4,
    maxWidth: '600px',
    width: '100%',
    outline: 'none',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  modalCloseButton: {
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
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#ffec70',
    mb: 3
  },
  modalDescription: {
    color: '#fff',
    lineHeight: 1.7,
    mb: 4
  },
  modalVersion: {
    display: 'flex',
    gap: 2,
    color: '#ffffff40'
  },
  toastMessage: {
    backgroundColor: '#0e141d',
    color: '#ffec70',
    borderRadius: '4px',
    fontFamily: 'monospace'
  },
  colorScaleContainer: {
    mt: '3.25rem',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column'
  },
  colorPickerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0e141d',
    px: 4,
    py: 2
  },
  colorPicker: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  colorPickerText: {
    fontSize: '0.875rem',
    color: '#ffec70',
    opacity: 0.8
  },
  colorPickerInput: {
    width: '32px',
    height: '32px',
    padding: 0,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: 'transparent'
  },
  colorPickerSelectedColor: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#fff',
    fontFamily: 'monospace'
  },
  colorPickerActions: {
    display: 'flex',
    gap: 1
  },
  colorPickerAction: {
    color: '#ffec70',
    opacity: 0.8,
    '&:hover': { opacity: 1 }
  },
  colorScale: {
    display: 'flex',
    width: '100%',
    flex: 1,
    overflow: 'hidden'
  },
  colorScaleItem: {
    flex: 1,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    pb: 3,
    '&:hover': {
      flex: 1.5
    }
  },
  colorScaleItemText: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(4px)',
    padding: '4px 8px',
    borderRadius: '4px',
    opacity: 0,
    transform: 'translateY(8px)',
    transition: 'all 0.2s ease-in-out',
    '.MuiBox-root:hover &': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
}
