import { Box, Button, Typography } from '@material-ui/core'
import { Brand } from 'components/Brand'
import { ColumnView } from 'components/ColumnView'
import { FlexCenter } from 'components/FlexCenter'
import PreviewFeatures from 'constants/PreviewFeatures'
import React from 'react'
import { useWallet } from 'use-wallet'
import Logo from 'assets/img/altitude-logo.png'

export const FeatureGatedView = ({ 
  feature,
  children 
}) => {
  const{ account } = useWallet()

  const featureEnabled = (address) => {
    if (PreviewFeatures.whitelist.includes(address)) {
      return true;
    }
  }
  
  return (
    <>
      {!!account && featureEnabled(account) ? (
        <ColumnView>
          {children}
        </ColumnView>
      ) : (
        <ColumnView 
          // height="100%"
          flexGrow="inherit"
          alignItems="center"
          // justifyContent="center"
        >
          {/* <Brand size={100} /> */}
          {/* <img src={Logo} height="100px" alt="logo" /> */}
          <Typography align="center" variant="subtitle2" gutterBottom>Coming Soon</Typography>
        </ColumnView>
      )}    
    </>
  )
}
