import { Box, Typography, Grid, Button } from '@material-ui/core'
import React, { useCallback } from 'react'
import { Dialog } from 'components/Dialog'
import { ValueDisplay } from 'components/ValueDisplay'
import { useLoyalty } from 'hooks/useLoyalty'
import { useNotifications } from 'hooks/useNotifications'
import { ColumnView } from 'components/ColumnView'
import { FlexCenter } from 'components/FlexCenter'
import { getBoard } from 'utils'

export const LodgeDialog = ({ isOpen, onDismiss }) => {
  const { approved, balances, stats, approveAll, deposit, withdraw } = useLoyalty()

  const notify = useNotifications()

  const handleApproveAll = useCallback(async () => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }
    const receipt = await approveAll()
    return receipt
  }, [approveAll, notify, stats])

  const handleDeposit = useCallback(async (id) => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }

    if (balances[id] === '0') {
      notify('No NFTs to deposit', 'warn')
      return
    }

    if (stats.staked !== '0') {
      notify('Only one NFT boost per account', 'warn')
      return
    }

    if (!approved) {
      const receipt = await handleApproveAll()
      if (!receipt) {
        return
      }
    }

    const receipt = await deposit(id)
    return receipt
  }, [handleApproveAll, approved, deposit, notify, stats, balances])

  const handleWithdraw = useCallback(async (id) => {
    if (!balances) {
      notify('Please connect to Web3', 'info')
      return
    }

    if (stats.staked !== (id + 1).toString()) {
      notify('No NFTs staked to withdraw', 'error')
      return
    }

    const receipt = await withdraw(id)
    return receipt
  }, [balances, withdraw, notify, stats])

  return (
    <Dialog 
      isOpen={isOpen} 
      onDismiss={onDismiss} 
      title="Altitude Lodge Staking"
      marginBottom={0}
      fullWidth
      maxWidth="sm"
    >
      <ColumnView>
        <Box my={2}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <ValueDisplay 
                title="Currently Equipped Board" 
                info={stats ? getBoard(stats.staked) : getBoard('0')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ValueDisplay 
              title="Total Boost" 
              info={stats ? `${(stats.boost / 10)}%` : `0%`} />
            </Grid>
          </Grid>
        </Box>
          
        <Box my={2}>
          <Grid container>
            {["Golden", "Silver", "Bronze"].map((board, i) => (
              <Grid item xs={12} md={4} key={i}>
                <ValueDisplay 
                  overline={`${board} Board Balance`}
                  value={balances && balances.length ? balances[i] : '0'} 
                  decimals={0}
                  isFixed
                />
                <Box my={1}>
                <FlexCenter>
                  <Button
                    onClick={() => handleDeposit(i)}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Deposit
                  </Button>
                </FlexCenter>
                </Box>
                
                <FlexCenter>
                  <Button
                    onClick={() => handleWithdraw(i)}
                    variant="contained"
                    size="small"
                    color="default"
                  >
                    Withdraw
                  </Button>
                </FlexCenter>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography variant="subtitle2" align="center">
          All deposits/withdraws will claim any pending rewards from the Slopes and Avalanche.
        </Typography>
      </ColumnView>
    </Dialog>
  )
}
