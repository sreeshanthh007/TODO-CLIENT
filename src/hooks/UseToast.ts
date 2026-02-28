

import { toast } from 'sonner'

const useToast = () => {

  const success = (message: string) => {
    toast.success(message)
  }

  const Error = (message: string) => {
    toast.error(message)
  }

  const warning = (message: string) => {
    toast.warning(message)
  }

  const info = (message: string) => {
    toast.info(message)
  }

  return { success, Error, warning, info }
}

export default useToast