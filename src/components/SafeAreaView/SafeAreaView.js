import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  safeArea: {
    paddingTop: theme.mixins.toolbar.minHeight,
    display: 'flex',
    flexDirection: 'column',
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: 280,
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingBottom: 120,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   paddingBottom: 110,
    // },
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
