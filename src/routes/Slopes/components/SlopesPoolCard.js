import React, { useState } from 'react'
import { Button, Typography, Grid, Paper, Box } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import { useTheme } from '@material-ui/core/styles'
import { TextDecoration } from 'components/TextDecoration'
import { makeStyles } from '@material-ui/core/styles'
import { FlexCenter } from 'components/FlexCenter'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { ValueDisplay } from 'components/ValueDisplay'
import { ConnectView } from 'components/ConnectView'
import { useModal } from 'hooks/useModal'
import { SlopesDialog } from './SlopesDialog'

const useStyles = makeStyles((theme) => ({
  slopeSign: {
    [theme.breakpoints.down('sm')]: {
      width: "256px"
    },
    [theme.breakpoints.up('md')]: {
      width: "384px"
    }
  },
  uniswapButton: {

  }
}))

export const SlopesPoolCard = ({
  slope,
  pool,
  active
}) => {
  const { symbol, sign, name, decimals, lpStaked, address } = slope
  const classes = useStyles();
  const [value, setValue] = useState('1')
  const theme = useTheme();
  const [showModal] = useModal(<SlopesDialog active={active} slope={slope} pool={pool} />)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper variant="outlined">
      <Box p={2}>
        <FlexCenter>
          <img
            src={sign}
            alt={name}
            className={classes.slopeSign}
          />
        </FlexCenter>

        <Grid container justify="center" alignItems="center">
          <FlexCenter
            my={2}
            flexDirection="column"
            alignSelf="center"
          >
            <Typography variant="h4" align="center">
              <b>{symbol} Slope</b>
            </Typography>
            <TextDecoration />
          </FlexCenter>
        </Grid>
        <ConnectView>
          {active ? (
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
            >
              Waiting for LGE Completion
            </Typography>
          ) : (
            <Box>
              <FlexCenter>
                <ValueDisplay 
                  title="Fixed APR" 
                  info={pool ? `${pool.apr}%` : "800%"} 
                />
              </FlexCenter>
              <TabContext value={value}>
                <TabList 
                  onChange={handleChange}
                  aria-label={`${slope.symbol}-slopes-tabs`}
                  TabIndicatorProps={{
                    style: {backgroundColor: theme.palette.secondary.main}
                  }}
                  centered
                >
                  <Tab label="Slope Info" value="1" />
                  <Tab label="My Info" value="2" />
                </TabList>
                <TabPanel value="1">
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <ValueDisplay
                        title={`Total ${symbol} Staked`}
                        value={pool ? pool.totalStaked : '0'}
                        decimals={decimals}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <ValueDisplay
                        title={`${symbol} Price Ξ`}
                        value={pool ? lpStaked ? pool.lpPrice : pool.tokenPrice : '0'}
                        decimals={decimals}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ValueDisplay
                        title="Total Value Staked Ξ"
                        value={pool ? pool.totalStaked : '0'}
                        decimals={decimals}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>

                <TabPanel value="2">
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <ValueDisplay
                        title={`Pending ${symbol} Rewards`}
                        value={pool ? pool.tokenRewards : '0'}
                        decimals={decimals}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <ValueDisplay
                        title={`Pending PWDR Rewards`}
                        value={pool ? pool.pwdrRewards : '0'}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ValueDisplay
                        title={`${symbol} Staked  Balance`}
                        value={pool ? pool.stakedBalance : '0'}
                        decimals={decimals}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
              </TabContext>
              <FlexCenter flexDirection="column">
                <Box mb={1} width="100%">
                  <Button
                    onClick={showModal}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Stake / Unstake
                  </Button>
                </Box>
                
                <Button
                  href={lpStaked
                    ? `https://info.uniswap.org/pair/${address}`
                    : `https://info.uniswap.org/token/${address}`} 
                  target="_blank"
                  variant="contained"
                  color="default"
                  endIcon={<OpenInNewIcon />}
                  fullWidth
                >
                  {lpStaked 
                  ? `Add ${symbol} Liquidity` 
                  : `Buy ${symbol} on Uniswap`}
                </Button>
              </FlexCenter>
            </Box>
          )}
        </ConnectView>
      </Box>
    </Paper>
  )
}
