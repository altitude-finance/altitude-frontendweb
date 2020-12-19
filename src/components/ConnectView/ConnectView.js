import { Box } from '@material-ui/core'
import { ConnectButton } from 'components/ConnectButton'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import { useWallet } from 'use-wallet'

export const ConnectView = ({ children }) => {
  const { account } = useWallet()

  return (
    <Box mt={2}>
      {!!account ? (
        <Box>
          {children}
        </Box>
      ) : (
        <FlexCenter>
          <ConnectButton />
        </FlexCenter>
      )}
    </Box>
  )
}
