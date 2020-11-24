import { Box, Typography } from '@material-ui/core'
import { Avatar } from 'components/Avatar'
import { DisconnectButton } from 'components/DisconnectButton'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import { useWallet } from 'use-wallet'
import { formatAddress } from 'utils'

export const AccountHeader = () => {
  const { account } = useWallet()

  return (
    <FlexCenter 
      flexDirection="column"
      mb={2}
    >
      <Box mb={1}>
        <Avatar size={200} />
      </Box>
      
      <Typography
        variant="subtitle2"
        align="center"
      >
        CONNECTED ACCOUNT
      </Typography>
      <Typography
        variant="h4" 
        align="center"
      >
        <b>{formatAddress(account)}</b>
      </Typography>
      
      <Box mt={1} mb={2}>
        <DisconnectButton />
      </Box>
    </FlexCenter>
  )
}
