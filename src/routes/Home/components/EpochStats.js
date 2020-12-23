import { Box, Container, Grid, Typography } from '@material-ui/core'
import { Card } from 'components/Card'
import { ConnectView } from 'components/ConnectView'
import { ValueDisplay } from 'components/ValueDisplay'
import { useLanding } from 'hooks/useLanding'
import React from 'react'

export const EpochStats = () => {
  const stats = useLanding()

  return (
    <Box>
      <Card title="Global PWDR Stats">
        <ConnectView>
          {!stats ? (
              <Typography 
                variant="body1"
                color="textSecondary"
                align="center"
              >
                Loading PWDR Stats...
              </Typography>
            ) : (
              <Box>
                <Box mb={1}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <ValueDisplay
                        title="PWDR Price Ξ"
                        value={stats.pwdrPrice}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ValueDisplay
                        title="Total PWDR Liquidity Ξ"
                        value={stats.totalLiquidity}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box mb={1}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <ValueDisplay
                        title="Current Epoch"
                        info={stats.currentEpoch}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ValueDisplay
                        title="Current Phase"
                        info={stats.currentPhase === '0' ? 'Accumulation' : 'Distribution'}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box mb={1}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <ValueDisplay
                        title="PWDR Total Supply"
                        value={stats.totalSupply}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ValueDisplay
                        title="Epoch Max Supply"
                        value={stats.currentMaxSupply}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            )}
        </ConnectView>
      </Card>
    </Box>
  )
}
