import { Box, Paper, Typography, makeStyles, Divider, Grid } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import SlopesSign from 'assets/img/slopes-signs.png'
import { ValueDisplay } from 'components/ValueDisplay'
import BigNumber from 'bignumber.js'
import { ConnectView } from 'components/ConnectView'
import SlopesMap from 'constants/SlopesMap'
import { useNetwork } from 'hooks/useNetwork'
import { useSlopes } from 'hooks/useSlopes'

const useStyles = makeStyles((theme) => ({
  headerSign: {
    [theme.breakpoints.down('sm')]: {
      width: "256px"
    },
    [theme.breakpoints.up('md')]: {
      width: "512px"
    }
  }
}))

export const SlopesStats = ({ slope }) => {
  const classes = useStyles()
  const { chainId } = useNetwork()
  const { stats } = useSlopes()

  const tvl = (pools) => {
    if (pools && pools.length) {
      let total = new BigNumber(0)
      const slopes = [...SlopesMap(chainId).pools]
    
      pools.forEach((pool, i) => {
        const price = slopes[i].lpStaked ? pool.lpPrice : pool.tokenPrice
        total = total.plus(new BigNumber(pool.totalStaked).times(price).div(new BigNumber(10).pow(slopes[i].decimals)))
      })
      return total
    } else {
      return '0'
    }
    
  }

  return (
    <Box>
      <FlexCenter>
        <img 
          src={SlopesSign} 
          className={classes.headerSign} 
          alt="slopes-sign"
        />
      </FlexCenter>
      <Paper variant="outlined">
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h5" align="center">Global Slopes Stats</Typography>
          </Box>
          <Divider />
          <Box mt={1}>
            <ConnectView>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <ValueDisplay
                    title="PWDR Price Ξ"
                    value={stats && stats.length ? stats[0].tokenPrice : '0'}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ValueDisplay
                    title="Total Value Locked Ξ"
                    value={stats && stats.length ? tvl(stats) : '0'}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ValueDisplay
                    title="Staking Fee"
                    info="5%"
                  />
                </Grid>
              </Grid>
            </ConnectView>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
