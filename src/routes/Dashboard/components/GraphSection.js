import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { TotalValueGraph } from './TotalValueGraph'

export const GraphSection = () => {
  return (
    <Box mt={2}>
      <Typography variant="h5" gutterBottom>Total Value Locked</Typography>
      <Grid container>
        <Grid item xs={12}>
          <TotalValueGraph />
        </Grid>
      </Grid>
    </Box>
  )
}
