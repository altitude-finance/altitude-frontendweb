import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core'
import { ConnectView } from 'components/ConnectView'
import React from 'react'
import { ContributionInput } from './ContributionInput'
import { EventData } from './EventData'

export const AccountStats = ({ active, stats }) => {
  const getSnowboard = (id) => {
    if (id === '1') {
      return 'Golden'
    } else if (id === '2') {
      return 'Silver'
    } else {
      return 'Normal'
    }
  }
  
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Box mb={2}>
          <Typography variant="h5" align="center">Account Stats</Typography>
        </Box>
        <Divider />
        <Box mt={1}>
          <ConnectView>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <EventData 
                  title="My Contribution Ξ" 
                  data={stats && stats.length ? stats[8] : '0'} 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <EventData 
                  title="My Snowboard" 
                  info={stats && stats.length 
                    ? getSnowboard(stats[9]) 
                    : getSnowboard('0') 
                  } 
                />
              </Grid>
              <Grid item xs={12}>
                {active && (
                  <ContributionInput 
                    max={stats && stats.length ? stats[1] : '0'} 
                    min={stats && stats.length ? stats[3] : '0'} 
                    current={stats && stats.length ? stats[8] : '0'} 
                  />
                )}
              </Grid>
            </Grid>
          </ConnectView>
        </Box>  
      </Box>
    </Paper>
  )
}
