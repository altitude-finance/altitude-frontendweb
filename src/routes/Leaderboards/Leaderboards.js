import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { GraphSection } from './components/GraphSection'
import { LeaderboardSection } from './components/LeaderboardSection'
import { StatSection } from './components/StatSection'

export const Leaderboards = () => {
  return (
    <HeaderView title="Dashboard">
      <StatSection />
      <GraphSection />
      <LeaderboardSection />
    </HeaderView>
  )
}
