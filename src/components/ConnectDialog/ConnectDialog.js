import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import AuthereumLogo from 'assets/img/authereum.png'
import FortmaticLogo from 'assets/img/fortmatic.png'
import FrameLogo from 'assets/img/frame.png'
import MetamaskLogo from 'assets/img/metamask-fox.svg'
import PortisLogo from 'assets/img/portis.svg'
import WalletConnectLogo from 'assets/img/wallet-connect.svg'
import { ConnectDialogButton } from './components/ConnectDialogButton'
import { useWallet } from 'use-wallet'
import { Dialog } from '../Dialog'

export const ConnectDialog = ({ isOpen, onDismiss }) => {
  const { account, connect } = useWallet()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} title="Connect To Ethereum">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ConnectDialogButton
            image={MetamaskLogo}
            provider="Metamask"
            onClick={() => connect('injected')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ConnectDialogButton
            image={WalletConnectLogo}
            provider="WalletConnect"
            onClick={() => connect('walletconnect')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ConnectDialogButton
            image={PortisLogo}
            provider="Portis"
            onClick={() => connect('portis')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ConnectDialogButton
            image={AuthereumLogo}
            provider="Authereum"
            onClick={() => connect('authereum')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ConnectDialogButton
            image={FortmaticLogo}
            provider="Fortmatic"
            onClick={() => connect('fortmatic')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ConnectDialogButton
            image={FrameLogo}
            provider="Frame"
            onClick={() => connect('frame')}
          />
        </Grid>
      </Grid>
    </Dialog>
  )
}
