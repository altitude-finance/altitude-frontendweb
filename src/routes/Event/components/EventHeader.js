import { Button, Grid } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { CountdownClock } from 'components/CountdownClock'
import { useLGE } from 'hooks/useLGE'
import React from 'react'
import { EventTitle } from './EventTitle'

export const EventHeader = ({ stats }) => {
  const { activate, active, claim } = useLGE()

  const onActivate = async () => {
    const txHash = await activate()

  }

  const onClaim = async () => {
    const txHash = await claim()
  }

  return (
    <Grid container direction="column" justify="center" align="center">
      <Grid item>
        {stats && stats.length && (stats[7] * 1000 < Date.now()) ? (
          <>
            {active ? (
              <Button
                color="secondary"
                variant="contained"
                onClick={onActivate}
              >
                ACTIVATE LGE
              </Button>
            ) : (
              <>
                {new BigNumber(stats[8]).gt(0) && (
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={onClaim}
                  >
                    CLAIM
                  </Button>
                )}
              </>
            )}
          </>
          ) : (
            <CountdownClock endDate={new Date(1608400682000).toISOString()} />
          )}
        </Grid>
      <EventTitle title="Total Contributed" data={stats && stats.length ? stats[6] : '0'} />
    </Grid>
  )
}
