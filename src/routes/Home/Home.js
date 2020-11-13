import { Box, Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import AltitudeLogo from 'assets/img/altitude-lg.png'


export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box my={4} display="flex" direction="column" alignItems="center" justifyContent="center">
        <img src={AltitudeLogo} alt="Altitude Logo" height="300" />
      </Box>
      <Typography variant="h5" align="center">altitude.finance</Typography>
      <Typography variant="subtitle1" align="center">Reach new altitudes, attain peak capital</Typography>
      <Box my={2} display="flex" alignItems="center" justifyContent="center">
        <Button variant="outlined" color="secondary">Learn More</Button>
      </Box>
      
    </Container>
  )
}
