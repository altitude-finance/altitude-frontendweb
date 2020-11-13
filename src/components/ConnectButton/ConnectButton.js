import React from 'react'
import { Button } from '@material-ui/core'
import { useModal } from 'hooks/useModal'
import { useWallet } from 'use-wallet'
import { formatAddress } from 'utils'
import { ConnectDialog } from '../ConnectDialog'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export const ConnectButton = () => {
  const [showConnectModal] = useModal(<ConnectDialog />)
  const { account, reset } = useWallet()

  return (
    <Button
      color="inherit"
      // className={styles.button}
      variant="outlined"
      onClick={!!account 
        ? reset
        : showConnectModal
      }
      startIcon={!!account
        ? undefined
        : <AccountBalanceWalletIcon />
      }
    >
      {!!account ? 
        formatAddress(account) : "Connect"}
    </Button>
  )
}
