import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  safeArea: {
    paddingTop: theme.mixins.toolbar.minHeight,
    // paddingBottom: theme.mixins.toolbar.minHeight,
    display: 'flex',
    flexDirection: 'column'
  }
}))

export const SafeAreaView = ({
  children,
  ...props
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.safeArea}>
      {children}
    </Box>
  )
}
