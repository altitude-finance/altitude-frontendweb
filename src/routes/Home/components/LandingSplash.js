import { Box, Typography } from '@material-ui/core'
import { Brand } from 'components/Brand'
import { FlexCenter } from 'components/FlexCenter'
import { SocialButtonGroup } from 'components/SocialButtonGroup'
import { TextDecoration } from 'components/TextDecoration'
import { HomeButtonGroup } from './HomeButtonGroup'
import React from 'react'
import { ColumnView } from 'components/ColumnView'

export const LandingSplash = () => {
  return (
    <ColumnView 
      minHeight='100vh'
      height='100%'
      width='100%'
      justifyContent="center"
      alignItems="center"
    >
      <FlexCenter>
        <Brand vertical size={300} />
      </FlexCenter>
      
      <FlexCenter flexDirection="column" align="center">
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
        <HomeButtonGroup />
      </FlexCenter>
    </ColumnView>
  )
}
