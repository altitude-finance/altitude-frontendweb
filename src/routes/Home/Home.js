import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { DisplayView } from 'components/DisplayView'
import { SocialButtonGroup } from 'components/SocialButtonGroup'
import { Brand } from 'components/Brand'
import { FlexCenter } from 'components/FlexCenter'
import { TextDecoration } from 'components/TextDecoration'
import { LGECountdown } from './components/LGECountdown'
import { HomeButtonGroup } from './components/HomeButtonGroup'


export const Home = () => {
  return (
    <DisplayView justify="center">
      <FlexCenter>
        <Brand vertical size={300} />
      </FlexCenter>
      
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

        <Typography
            variant="subtitle2"
            color="textSecondary"
            align="center"
            style={{ fontSize: 16 }}
        >
            PWDR MAKING LGE BEGINS:
        </Typography>
        <LGECountdown />

        <HomeButtonGroup />
        {/* <Button variant="outlined" color="secondary">Learn More</Button> */}
      </FlexCenter>
    </DisplayView>
  )
}
