import { Button, useTheme, Box } from '@material-ui/core'
import { FlexCenter } from 'components/FlexCenter'
import React from 'react'
import { useHistory } from 'react-router-dom'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { WHITEPAPER_URL } from 'constants/Links'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useNetwork } from 'hooks/useNetwork'
import Addresses from 'constants/Addresses'

export const HomeButtonGroup = ({active}) => {
  const theme = useTheme()
  const { chainId } = useNetwork()
  const history = useHistory()

  return (
    <Box marginTop={1}>
      {active && (
        <FlexCenter>
          <Button
            href={`https://info.uniswap.org/token/${Addresses.PWDR[chainId]}`}
            target="_blank"
            variant="contained"
            color="primary"
            style={{marginLeft: theme.spacing(1)}}
            endIcon={<SwapHorizIcon />}
          >
            Trade
          </Button>
          <Button
            onClick={() => history.push('/slopes')}
            variant="contained"
            color="primary"
            style={{marginLeft: theme.spacing(1)}}
            endIcon={<AccountBalanceIcon />}
          >
            Stake
          </Button>
          <Button 
            onClick={() => history.push('/lge')}
            variant="contained"
            color="primary"
            style={{marginLeft: theme.spacing(1)}}
            endIcon={<ArrowForwardIcon />}
          >
            LGE
          </Button>
        </FlexCenter>
      )}
      {/* <Box mt={1}> */}
        <FlexCenter>
          <Button 
            href={WHITEPAPER_URL}
            target="_blank"
            variant="contained"
            color="default"
            style={{backgroundColor: 'white', color: 'black', marginTop: theme.spacing(1)}}
            endIcon={<OpenInNewIcon />}
          >
            Whitepaper
          </Button>
        </FlexCenter>
      {/* </Box> */}
    </Box>
  )
}
