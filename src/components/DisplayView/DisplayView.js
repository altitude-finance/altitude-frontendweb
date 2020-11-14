import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  display: {
    height: '100vh',
    width: '100%',
    spacing: 0
  }
}))

export const DisplayView = ({children, ...props}) => {
  const classes = useStyles()
  return (
    <Grid 
      direction="column" 
      justify="center"
      className={classes.display}
      container
      {...props}
    >
      {children}
    </Grid>
  )
}
