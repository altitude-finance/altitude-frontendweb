import { Button } from '@material-ui/core'
import React from 'react'
import { useWallet } from 'use-wallet'

export const DisconnectButton = () => {
  const { reset } = useWallet()

  return (
    <Button
      onClick={reset}
      color="secondary" 
      size="small" 
      variant="outlined"
    >
      Disconnect
    </Button>
  )
}
