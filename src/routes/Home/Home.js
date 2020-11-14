import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'

import { DisplayView } from 'components/DisplayView'
import { Logo } from 'components/Logo'
import { SocialButtonGroup } from 'components/SocialButtonGroup'

export const Home = () => {
  return (
    <DisplayView>
      <Logo size={300} withTitle withSubtitle />
      {/* <Grid item> */}
      
      {/* </Grid> */}
      
      <Box my={2} display="flex" direction="column" alignItems="center" justifyContent="center">
        <SocialButtonGroup />
        {/* <Button variant="outlined" color="secondary">Learn More</Button> */}
      </Box>
      
    </DisplayView>
  )
}
