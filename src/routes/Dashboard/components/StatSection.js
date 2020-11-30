import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { StatCard } from './StatCard'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AcUnitIcon from '@material-ui/icons/AcUnit'

export const StatSection = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Overview</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="PWDR Balance"
            value="1000 PWDR"
            icon={<AccountBalanceIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="PWDR Spot Price"
            value="$1.25"
            icon={<AttachMoneyIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="PWDR Total Supply"
            value="2.25M"
            icon={<AcUnitIcon />}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
