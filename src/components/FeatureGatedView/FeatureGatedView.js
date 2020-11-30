import { Box } from '@material-ui/core'
import { ColumnView } from 'components/ColumnView'
import { FlexCenter } from 'components/FlexCenter'
import PreviewFeatures from 'constants/PreviewFeatures'
import React from 'react'
import { useWallet } from 'use-wallet'

export const FeatureGatedView = ({ 
  feature,
  children 
}) => {
  const{ account } = useWallet()

  const featureEnabled = (address) => {

  }
  
  return (
    <>
      {!!account && featureEnabled(account) ? (
        <ColumnView>
          {children}
        </ColumnView>
      ) : (
        <FlexCenter>
          Coming Soon!
        </FlexCenter>
      )}    
    </>
  )
}
