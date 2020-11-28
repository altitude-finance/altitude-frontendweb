import { Box, Grid } from '@material-ui/core'
import { ColumnView } from 'components/ColumnView'
import { FlexCenter } from 'components/FlexCenter'
import { SurfaceTabs } from 'components/SurfaceTabs'
import React from 'react'
import { AccountHeader } from './AccountHeader'

const ACCOUNT_TABS = ["Farming", "Flash", "Settings"]

export const ActiveAccount = () => {

  return (
    <ColumnView>
      <AccountHeader />
      <Grid container >
        <Grid item xs={12}>
        <SurfaceTabs tabs={ACCOUNT_TABS}>
          <Box>Test1</Box>
          <Box>Test2</Box>
          <Box></Box>
        </SurfaceTabs>
        </Grid>
      </Grid>
    </ColumnView>
  )
}
