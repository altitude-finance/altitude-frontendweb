import React, { useCallback } from 'react'
import { Box, Paper, Typography, makeStyles, Divider, Grid, Button } from '@material-ui/core'
import { ValueDisplay } from 'components/ValueDisplay'
import BigNumber from 'bignumber.js'
import { ConnectView } from 'components/ConnectView'
import SlopesMap from 'constants/SlopesMap'
import { useNetwork } from 'hooks/useNetwork'
import { useSlopes } from 'hooks/useSlopes'
import { FlexCenter } from 'components/FlexCenter'
import { useNotifications } from 'hooks/useNotifications'


export const UserStats = () => {

  const { chainId } = useNetwork()
  const { stats, claimAll } = useSlopes()
  const slopes = [...SlopesMap(chainId).pools]
  const notify = useNotifications()

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
    
      pools.forEach((pool) => {
        total = total.plus(new BigNumber(pool.pwdrRewards))
      })
      return total
    } else {
      return '0'
    }
  }

  const tokens = (pools) => {
    if (pools && pools.length) {
      let total = new BigNumber(0)
    
      pools.forEach((pool, i) => {
        const price = slopes[i].lpStaked ? pool.lpPrice : pool.tokenPrice
        total = total.plus(new BigNumber(pool.tokenRewards).times(price).div(new BigNumber(10).pow(slopes[i].decimals)))
      })
      return total
    } else {
      return '0'
    }
  }

  const handleClaimAll = useCallback(async () => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }

    let total = new BigNumber(0)
    stats.forEach((pool, i) => {
      total = total.plus(new BigNumber(pool.stakedBalance))
    })

    if (total.eq('0')) {
      notify('No Pending Rewards available to claim', 'warning')
      return
    }

    const receipt = await claimAll()
    return receipt
  }, [claimAll, notify, stats])


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
                <Grid item xs={12} sm={4}>
                  <ValueDisplay
                    title="My Total Pending PWDR Rewards"
                    value={stats && stats.length ? rewards(stats) : '0'}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ValueDisplay
                    title="My Total Value Locked Ξ"
                    value={stats && stats.length ? tvl(stats) : '0'}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ValueDisplay
                    title="My Pending Token Reward Value Ξ"
                    value={stats && stats.length ? tokens(stats) : '0'}
                  />
                </Grid>
              </Grid>
              <Box mt={2}>
                <FlexCenter>
                  <Button
                    onClick={handleClaimAll}
                    variant="contained"
                    color="primary"
                  >
                    Claim All Rewards
                  </Button>
                </FlexCenter>
              </Box>
            </ConnectView>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}