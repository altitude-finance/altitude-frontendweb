import { Box, Button, Grid, Typography } from '@material-ui/core'
import { ConnectButton } from 'components/ConnectButton'
import { DisplayView } from 'components/DisplayView'
import React from 'react'
import { useWallet } from 'use-wallet'
import { formatAddress } from 'utils'

export const Account = () => {
  const { account, reset } = useWallet()

  const handleReset = () => {
    reset()
    // will do more later
  }

  return (
    <>
      {account ? (
        <DisplayView alignItems="center" justify="flex-start">
          <Typography variant="overline" align="center">Viewing My Account</Typography>
          <Typography variant="h4" align="center" gutterBottom><b>{formatAddress(account)}</b></Typography>
          <Grid item>
            <Button color="secondary" size="small" variant="outlined" onClick={handleReset}>Disconnect Wallet</Button>
          </Grid>
        </DisplayView>
      ) : (
        <DisplayView alignItems="center" justify="flex-start">
          <p style={{fontSize:60}}>🧐</p>
          <Typography variant="h4" align="center" gutterBottom>No Wallet Connected!</Typography>
          <ConnectButton />
        </DisplayView>
      )}
    </>
  )
}
