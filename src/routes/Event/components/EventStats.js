import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core'
import { ConnectView } from 'components/ConnectView'
import React from 'react'
import { EventData } from './EventData'

export const EventStats = ({ stats }) => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Box mb={2}>
          <Typography variant="h5" align="center">LGE Stats</Typography>
        </Box>
        <Divider />
        <Box mt={1}>
          <ConnectView>
            <Grid container>
              <Grid item xs={12} sm={6} md={4}>
                <EventData 
                  title="LGE Total Cap Ξ" 
                  data={stats && stats.length ? stats[0] : '0'} 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <EventData 
                  title="Individual Cap Ξ" 
                  data={stats && stats.length ? stats[1] : '0'} 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <EventData 
                  title="Minimum Contribution Ξ" 
                  data={stats && stats.length ? stats[3] : '0'} 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <EventData 
                  title="Minimum NFT Contribution Ξ" 
                  data={stats && stats.length ? stats[2] : '0'} 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <EventData 
                  title="Golden Boards Remaining" 
                  data={stats && stats.length ? (10 - +stats[4] > 0 ? 10 - +stats[4] : '0') : '0'}
                  decimals={0} 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <EventData 
                  title="Silver Boards Remaining" 
                  data={stats && stats.length ? (20 - +stats[5] > 0 ? 20 - +stats[5] : '0') : '0'}
                  decimals={0}
                />
              </Grid>
            </Grid>
          </ConnectView>
        </Box>  
      </Box>
    </Paper>
  )
}
