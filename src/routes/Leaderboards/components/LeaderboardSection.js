import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { BorrowerDataGrid } from './BorrowerDataGrid'
import { StakerDataGrid } from './StakerDataGrid'


export const LeaderboardSection = () => {
  return (
    <Box mt={2}>
      <Typography variant="h5" gutterBottom>Leaderboards</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <BorrowerDataGrid />
        </Grid>
        <Grid item xs={12} md={6}>
          <StakerDataGrid />
        </Grid>
      </Grid>
    </Box>    
  )
}
