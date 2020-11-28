import { Typography } from '@material-ui/core'
import React from 'react'
import { DisplayView } from 'components/DisplayView'
import { SocialButtonGroup } from 'components/SocialButtonGroup'
import { Brand } from 'components/Brand'
import { FlexCenter } from 'components/FlexCenter'
import { TextDecoration } from 'components/TextDecoration'

export const Home = () => {
  return (
    <DisplayView>
      <FlexCenter>
        <Brand vertical size={300} />
      </FlexCenter>
      {/* <Logo size={300} withTitle withSubtitle /> */}
      {/* <Grid item> */}
      
      {/* </Grid> */}
      
      <FlexCenter flexDirection="column" style={{alignSelf: 'center'}}>
        <Typography 
            variant="subtitle2" 
            color="textSecondary" 
            align="center"
            style={{fontSize: 16}}
          >
          Reach New Altitudes, Attain Peak Capital
        </Typography>
        <TextDecoration />
        <SocialButtonGroup />
        {/* <Button variant="outlined" color="secondary">Learn More</Button> */}
      </FlexCenter>
    </DisplayView>
  )
}
