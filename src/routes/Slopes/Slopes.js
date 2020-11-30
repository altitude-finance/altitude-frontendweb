import { FeatureGatedView } from 'components/FeatureGatedView'
import { HeaderView } from 'components/HeaderView'
import React from 'react'
import { SlopesHeader } from './components/SlopesHeader'
import { SlopesStats } from './components/SlopesStats'

export const Slopes = () => {
  return (
    <HeaderView title="Slopes">
      <FeatureGatedView feature="SLOPES">
        <SlopesHeader />
        <SlopesStats />
        {/* slopes.map((slope, i) => (<SlopesPoolCard />)) */}
      </FeatureGatedView>
    </HeaderView>
  )
}
