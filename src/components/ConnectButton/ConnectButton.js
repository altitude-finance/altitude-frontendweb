import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useModal } from 'hooks/useModal'
import { useWallet } from 'use-wallet'
import { formatAddress } from 'utils'
import { ConnectDialog } from '../ConnectDialog'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export const ConnectButton = ({...props}) => {
  const history = useHistory()
  const [showConnectModal] = useModal(<ConnectDialog />)
  const { account, reset } = useWallet()

  return (
    <Button
      color="inherit"
      variant="outlined"
      onClick={!!account 
        ? () => history.push('/account')
        : showConnectModal
      }
      // onClick={!!account 
      //   ? reset
      //   : showConnectModal
      // }
      startIcon={!!account
        ? undefined
        : <AccountBalanceWalletIcon />
      }
      {...props}
    >
      {!!account 
        ? formatAddress(account) 
        : "CONNECT"
      }
    </Button>
  )
}
