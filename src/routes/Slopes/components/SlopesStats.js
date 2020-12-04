import { Box, Container, Paper, Typography } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'

export const SlopesStats = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" width="100%">
        <Paper variant="outlined" style={{width:"100%"}}>
          <FlexCenter width="100%" p={2}>
            <Typography variant="h5">Global Slope Stats</Typography>
          </FlexCenter>
        </Paper>
      </Box>
      
    </Container>
  )
}
