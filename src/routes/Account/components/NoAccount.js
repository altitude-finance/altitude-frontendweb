import { Typography } from '@material-ui/core'
import { ConnectButton } from 'components/ConnectButton'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'

export const NoAccount = () => {
  return (
    <FlexCenter flexDirection="column">
      <Typography variant="h4" align="center" gutterBottom>No Wallet Connected!</Typography>
      <ConnectButton />
    </FlexCenter>
  )
}
