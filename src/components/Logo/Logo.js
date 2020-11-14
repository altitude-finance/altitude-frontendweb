import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import AltitudeLogo from 'assets/img/altitude-lg.png'

export const Logo = ({
  size,
  withTitle=false,
  withSubtitle=false
}) => {
  return (
//   <Box display="flex" direction="column" alignItems="center" justifyContent="center">
//   <img src={AltitudeLogo} alt="Altitude Logo" height="300" />
// </Box>
// <Typography variant="h4" align="center"><b>Altitude Finance</b></Typography>
// <Typography variant="subtitle2" color="textSecondary" align="center">Reach New Altitudes, Attain Peak Capital</Typography>
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <img src={AltitudeLogo} alt="Altitude Logo" height={size} />
      </Grid>
      {withTitle && (
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            style={{fontSize: withTitle}}
          >
            <b>Altitude Finance</b>
          </Typography>
        </Grid>
      )}
      {withSubtitle && (
        <Grid item>
          <Typography 
            variant="subtitle2" 
            color="textSecondary" 
            align="center"
            style={{fontSize: withSubtitle}}
          >
            Reach New Altitudes, Attain Peak Capital
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
