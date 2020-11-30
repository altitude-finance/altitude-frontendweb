import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'
import { useModal } from 'hooks/useModal'
import { useWallet } from 'use-wallet'
import { formatAddress } from 'utils'
import { ConnectDialog } from '../ConnectDialog'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { Avatar } from 'components/Avatar'

const useStyles = makeStyles((theme) => ({
  label: {
    textTransform: 'none'
  }
}))

export const ConnectButton = ({...props}) => {
  const classes = useStyles()
  const history = useHistory()
  const [showConnectModal] = useModal(<ConnectDialog />)
  const { account } = useWallet()

  return (
    <Button
      color="inherit"
      variant="outlined"
      //disableElevation
      classes={{label: classes.label}}
      onClick={!!account 
        ? () => history.push('/account')
        : showConnectModal
      }
      startIcon={!!account
        ? <Avatar size={20} />
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
