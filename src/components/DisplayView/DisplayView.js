import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { SafeAreaView } from 'components/SafeAreaView'

const useStyles = makeStyles((theme) => ({
  display: {
    minHeight: '100vh',
    height: '100%',
    width: '100%',
    spacing: 0
  }
}))

export const DisplayView = ({children, ...props}) => {
  const classes = useStyles()
  return (
    <SafeAreaView>
      <Grid 
        direction="column" 
        justify="center"
        // alignItems="center"
        className={classes.display}
        container
        {...props}
      >
        {children}
      </Grid>
    </SafeAreaView>
  )
}
