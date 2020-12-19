import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { CountdownClock } from 'components/CountdownClock'
import { useLGE } from 'hooks/useLGE'
import React from 'react'
import { useWallet } from 'use-wallet'
import { EventTitle } from './EventTitle'

export const EventHeader = ({ stats }) => {
  const { activate, active, claim } = useLGE()
  const { account } = useWallet()

  const onActivate = async () => {
    const txHash = await activate()

  }

  const onClaim = async () => {
    const txHash = await claim()

  }

  return (
    <Grid container direction="column" justify="center" align="center">
      <Grid item>
        {stats && stats.length ? ( // we have data
          <Box> 
            {stats[7] * 1000 < Date.now() ? ( // time has expired
              <Box>
                {active && ( // lge has not been activated
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={onActivate}
                  >
                    ACTIVATE
                  </Button>
                )} 
                {new BigNumber(stats[8]).gt(0) && (
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={onClaim}
                  >
                    CLAIM
                  </Button>
                )}
              </Box>  
            ) : ( 
              <CountdownClock endDate={new Date(stats[7] * 1000).toISOString()} />
            )}
          </Box>
        ) : (
          <Box> 
            {1608400682000 < Date.now() ? ( // time has expired
              <Container maxWidth="xs">
                <Typography variant="h4">Event Completed</Typography>
                <Typography variant="subtitle1">The Altitude LGE has been completed and PWDR has been created. Check back here later for more stats!</Typography>
              </Container>
            ) : (
              <CountdownClock endDate={new Date(1608400682000).toISOString()} />
            )}
          </Box>
        )}
      </Grid>
      <EventTitle data={stats && stats.length ? stats[6] : undefined} />
    </Grid>
  )
}
