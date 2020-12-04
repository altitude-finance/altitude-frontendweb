import { Box, Dialog, Typography, Grid, IconButton, makeStyles, Divider} from '@material-ui/core'
import React, { useEffect } from 'react'
import AuthereumLogo from 'assets/img/authereum.png'
import FortmaticLogo from 'assets/img/fortmatic.png'
import FrameLogo from 'assets/img/frame.png'
import MetamaskLogo from 'assets/img/metamask-fox.svg'
import PortisLogo from 'assets/img/portis.svg'
import WalletConnectLogo from 'assets/img/wallet-connect.svg'
import { ConnectDialogButton } from './components/ConnectDialogButton'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import { useWallet } from 'use-wallet'

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(2)
  }
}))

export const ConnectDialog = ({ isOpen, onDismiss }) => {
  const { account, connect } = useWallet()
  const classes = useStyles()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Dialog open={isOpen} onClose={onDismiss} maxWidth="lg">
      <MuiDialogTitle disableTypography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Choose Your Web3 Provider</Typography>
          <IconButton aria-label="close" onClick={onDismiss} classname={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>
      </MuiDialogTitle>
      <Divider />
      <Grid container className={classes.content}>
        <Grid item xs={12} md={6}>
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
          <ConnectDialogButton
            image={FortmaticLogo}
            provider="Fortmatic"
            onClick={() => connect('fortmatic')}
          />
          <ConnectDialogButton
            image={FrameLogo}
            provider="Frame"
            onClick={() => connect('frame')}
          />
        </Grid>
      </Grid>
        
        
      {/* <DialogActions>

      </DialogActions> */}
    </Dialog>
  )
}
