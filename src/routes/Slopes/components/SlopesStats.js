import { Box, Paper, Typography, makeStyles, Divider, Grid } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import SlopesSign from 'assets/img/slopes-signs.png'
import { ValueDisplay } from 'components/ValueDisplay'
import BigNumber from 'bignumber.js'
import { ConnectView } from 'components/ConnectView'

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

export const SlopesStats = ({ stats }) => {
  const classes = useStyles()

  const tvl = (pools) => {
    const total = new BigNumber(0)
    pools.forEach((pool) => {
      total.plus(new BigNumber(pool.totalStaked).times(pool.tokenPrice))
    })
    return total
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
            <Typography variant="h5" align="center">Global Slope Stats</Typography>
          </Box>
          <Divider />
          <Box mt={1}>
            <ConnectView>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <ValueDisplay
                    title="PWDR Price"
                    value={stats && stats.length ? stats[0].tokenPrice : '0'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ValueDisplay
                    title="Total Value Locked"
                    value={stats && stats.length ? tvl(stats) : '0'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
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
