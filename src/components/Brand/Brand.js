import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import AltitudeLogo from 'assets/img/altitude.png'

export const Brand = () => {
  return (
    <Grid container alignItems="center">
      <img src={AltitudeLogo} alt="Altitude Logo" height="50" />
      <Box ml={1}>
        <Typography variant="h6">altitude.finance</Typography>
      </Box>
    </Grid>
  )
}
