import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { LodgeHeader } from './components/LodgeHeader'
import { LodgePoolCard } from './components/LodgePoolCard'
import { LodgeTrophyView } from './components/LodgeTrophyView'

export const Lodge = () => {
  return (
    <HeaderView title="Lodge">
      <FeatureGatedView feature="LODGE">
        <LodgeHeader />
        <LodgePoolCard />
        <LodgeTrophyView />
      </FeatureGatedView>
    </HeaderView>
  )
}
