import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { GraphSection } from './components/GraphSection'
import { LeaderboardSection } from './components/LeaderboardSection'
import { StatSection } from './components/StatSection'

export const Dashboard = () => {
  return (
    <HeaderView title="Dashboard">
      <FeatureGatedView feature="DASHBOARD">
        <StatSection />
        <GraphSection />
        <LeaderboardSection />
      </FeatureGatedView>
    </HeaderView>
  )
}
