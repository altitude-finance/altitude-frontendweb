import { Box, Dialog as MuiDialog, Typography, IconButton, makeStyles, Divider} from '@material-ui/core'
import React from 'react'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import { FlexCenter } from 'components/FlexCenter'

const useStyles = makeStyles((theme) => ({
  closeButton: {
    // position: 'absolute',
    // right: theme.spacing(1),
    // top: theme.spacing(1)
  },
  title: {
    margin: 0,
    padding: 0
  }
}))

export const Dialog = ({ isOpen, onDismiss, title, children, marginBottom=2 }) => {
  const classes = useStyles()

  return (
    <MuiDialog open={isOpen} onClose={onDismiss} maxWidth="sm">
      <Box p={2}>
        <FlexCenter justify="space-between" align="center" m={1} marginBottom={2}>
          <Typography variant="h5" align="left" className={classes.title}><b>{title}</b></Typography>
          <IconButton 
            aria-label="close" 
            onClick={onDismiss} 
            // className={classes.closeButton}
            style={{padding: 0, fontSize: "1.5rem"}}
          >
            <CloseIcon />
          </IconButton>
        </FlexCenter>
        <Divider />
        <Box mt={marginBottom}>
          {children}
        </Box>
      </Box>
    </MuiDialog>
  )
}
