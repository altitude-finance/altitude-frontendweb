import { Button, Box, Typography, Container } from '@material-ui/core'
import React from 'react'
import { DisplayView } from 'components/DisplayView'
import { SocialButtonGroup } from 'components/SocialButtonGroup'
import { Brand } from 'components/Brand'
import { FlexCenter } from 'components/FlexCenter'
import { TextDecoration } from 'components/TextDecoration'
import { HomeButtonGroup } from './components/HomeButtonGroup'
import { EpochStats } from './components/EpochStats'
import { InformationCard } from './components/InformationCard'
import { LandingSplash } from './components/LandingSplash'

export const Home = () => {

  return (
    <DisplayView justify="center">
      <LandingSplash />
      <Container maxWidth="md">
        <EpochStats />
        <InformationCard />
      </Container>
    </DisplayView>
  )
}
