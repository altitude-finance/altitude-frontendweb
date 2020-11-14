import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import AltitudeLogo from 'assets/img/altitude.png'

const useStyles = makeStyles((theme) => ({
  image: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    height: "36px"
  }
}))

export const Brand = () => {
  const classes = useStyles()

  return (
    <Grid container alignItems="center">
      <Typography variant="h6" align="center">
        <img src={AltitudeLogo} alt="Altitude Logo" align="center" className={classes.image} />
        altitude.finance
      </Typography>
    </Grid>
  )
}
