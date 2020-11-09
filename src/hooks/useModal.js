import { useCallback, useContext } from 'react'
import { ModalsContext } from '../contexts/Modals'

export const useModal = (modal) => {
  const { onDismiss, onPresent } = useContext(ModalsContext)

  const handlePresent = useCallback(() => {
    onPresent(modal)
  }, [modal, onPresent])

  return [handlePresent, onDismiss]
}