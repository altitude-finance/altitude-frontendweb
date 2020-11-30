import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { AvalancheHeader } from './components/AvalancheHeader'
import { AvalanchePoolCard } from './components/AvalanchePoolCard'
import { AvalancheStats } from './components/AvalancheStats'

export const Avalanche = () => {
  return (
    <HeaderView title="Avalanche">
      <FeatureGatedView feature="AVALANCHE">
        <AvalancheHeader />
        <AvalancheStats />
        <AvalanchePoolCard />
      </FeatureGatedView>
    </HeaderView>
  )
}
