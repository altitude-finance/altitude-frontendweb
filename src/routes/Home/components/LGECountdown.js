import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import FundClockProgress from 'react-fundraising-countdown';
import { useTheme } from '@material-ui/core/styles';
import { CountdownClock } from 'components/CountdownClock';

export const LGECountdown = ({active}) => {
  const theme = useTheme();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {active ? (
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="center"
            style={{ fontSize: 16 }}
          >
            LATEST LGE ACTIVATION:
          </Typography>
          <CountdownClock endDate="2020-12-19T18:00:00Z" />
        </Grid>
      ) : (
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="center"
            style={{ fontSize: 16 }}
          >
            PWDR MAKING LGE BEGINS:
          </Typography>
          <CountdownClock endDate="2020-12-14T18:00:00Z" />
        </Grid>
      )}
    </Grid>
  )
}
