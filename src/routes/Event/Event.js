import { Box, Card, Container, Divider, Grid, Paper, Typography } from '@material-ui/core'
import { CountdownClock } from 'components/CountdownClock'
import { DisplayView } from 'components/DisplayView'
import { FlexCenter } from 'components/FlexCenter'
import { HeaderView } from 'components/HeaderView'
import { useLGE } from 'hooks/useLGE'
import React, { useEffect } from 'react'
import { AccountStats } from './components/AccountStats'
import { EventData } from './components/EventData'
import { EventHeader } from './components/EventHeader'
import { EventStats } from './components/EventStats'
import { EventTitle } from './components/EventTitle'

export const Event = () => {
  
  // useEffect()

  // const { claim, deposit, withdraw } = useLGE()
  const { claim, contribute, stats, active } = useLGE()
  
  // useEffect(() => {
    
  // }, [])

  return (
    <HeaderView title="Liquidity Generation Event">
      <Container maxWidth="md">
        <EventHeader stats={stats} />
        
        <Box mb={2}>
          <EventStats stats={stats} />
        </Box>

        <Box mb={2}>
          <AccountStats active={active} stats={stats} />
        </Box>
      </Container>
    </HeaderView>
  )
}
