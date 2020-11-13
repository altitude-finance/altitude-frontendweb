import { Dialog, DialogTitle} from '@material-ui/core'
import React, { useEffect } from 'react'
import MetamaskLogo from 'assets/img/metamask-fox.svg'
import WalletConnectLogo from 'assets/img/wallet-connect.svg'
import { ConnectDialogButton } from './components/ConnectDialogButton'
import { useWallet } from 'use-wallet'

export const ConnectDialog = ({ isOpen, onDismiss }) => {
  const { account, connect } = useWallet()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Dialog open={isOpen} onClose={onDismiss}>
      <DialogTitle>Choose Your Web3 Provider</DialogTitle>
      
        <ConnectDialogButton
          image={MetamaskLogo}
          provider="Metamask"
          onClick={() => connect('injected')}
        />
        <ConnectDialogButton
          image={WalletConnectLogo}
          provider="WalletConnect"
          onClick={() => connect('walletconnect')}
        />
    </Dialog>
  )
}
