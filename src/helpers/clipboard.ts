import { toast } from 'react-toastify'

const notify = (message: string) =>
  toast(message, {
    position: 'top-center'
  })

export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      notify(`Copied ${text} to clipboard`)
    })
    .catch(err => {
      console.error('Failed to copy text: ', err)
    })
}
