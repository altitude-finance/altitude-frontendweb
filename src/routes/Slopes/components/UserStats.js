import React from 'react'
import { Box, Paper, Typography, makeStyles, Divider, Grid } from '@material-ui/core'
import { ValueDisplay } from 'components/ValueDisplay'
import BigNumber from 'bignumber.js'
import { ConnectView } from 'components/ConnectView'
import SlopesMap from 'constants/SlopesMap'
import { useNetwork } from 'hooks/useNetwork'
import { useSlopes } from 'hooks/useSlopes'


export const UserStats = () => {

  const { chainId } = useNetwork()
  const { stats } = useSlopes()
  const slopes = [...SlopesMap(chainId).pools]

  const tvl = (pools) => {
    if (pools && pools.length) {
      let total = new BigNumber(0)
    
      pools.forEach((pool, i) => {
        const price = slopes[i].lpStaked ? pool.lpPrice : pool.tokenPrice
        total = total.plus(new BigNumber(pool.stakedBalance).times(price).div(new BigNumber(10).pow(slopes[i].decimals)))
      })
      return total
    } else {
      return '0'
    }
  }

  const rewards = (pools) => {
    if (pools && pools.length) {
      let total = new BigNumber(0)
    
      pools.forEach((pool, i) => {
        total = total.plus(new BigNumber(pool.pendingPwdrRewards))
      })
      return total
    } else {
      return '0'
    }
  }


  return (
    <Box>
      <Paper variant="outlined">
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h5" align="center">Personal Stats</Typography>
          </Box>
          <Divider />
          <Box mt={1}>
            <ConnectView>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <ValueDisplay
                    title="My Pending PWDR Rewards"
                    value={stats && stats.length ? rewards(stats) : '0'}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ValueDisplay
                    title="Total Value Locked Ξ"
                    value={stats && stats.length ? tvl(stats) : '0'}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={4}>
                  <ValueDisplay
                    title="Staking Fee"
                    info="5%"
                  />
                </Grid> */}
              </Grid>
            </ConnectView>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}