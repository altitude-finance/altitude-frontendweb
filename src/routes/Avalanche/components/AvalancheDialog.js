import { Box, Typography, Grid, Button, TextField, InputAdornment } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { Dialog } from 'components/Dialog'
import { ValueDisplay } from 'components/ValueDisplay'
import { useNotifications } from 'hooks/useNotifications'
import { ColumnView } from 'components/ColumnView'
import { FlexCenter } from 'components/FlexCenter'
import { getBoard, getFullDisplayBalance } from 'utils'
import { useAvalanche } from 'hooks/useAvalanche'
import BigNumber from 'bignumber.js'

export const AvalancheDialog = ({ isOpen, onDismiss }) => {
  const { stats, approve, claim, deposit, withdraw } = useAvalanche()
  const [depositInput, setDepositInput] = useState('')
  const [withdrawInput, setWithdrawInput] = useState('')

  const notify = useNotifications()

  const handleDismiss = useCallback(() => {
    setDepositInput('')
    setWithdrawInput('')
    onDismiss()
  }, [setDepositInput, setWithdrawInput, onDismiss])

  const handleMax = useCallback((isDeposit) => {
    if (isDeposit) {
      setDepositInput(stats 
        ? getFullDisplayBalance(new BigNumber(stats.lpBalance)) 
        : '0')
    } else {
      setWithdrawInput(stats 
        ? getFullDisplayBalance(new BigNumber(stats.stakedBalance)) 
        : '0')
    }
  }, [stats])

  const handleApprove = useCallback(async () => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }
    const receipt = await approve()
    return receipt
  }, [approve, notify, stats])

  const handleClaim = useCallback(async () => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }
    const receipt = await claim()
    return receipt
  }, [claim, notify, stats])

  const handleStake = useCallback(async (amount) => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }

    if (new BigNumber(stats.lpBalance).lt(amount)) {
      notify('Not enough PWDR/ETH LP to deposit', 'warn')
      return
    }

    if (stats.lpAllowance === '0') {
      const receipt = await handleApprove()
      if (!receipt) {
        return
      }
    }

    const receipt = await deposit(amount)
    return receipt
  }, [handleApprove, deposit, notify, stats])

  const handleUnstake = useCallback(async (amount) => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }

    if (new BigNumber(stats.stakedBalance).lt(amount)) {
      notify('Not enough staked PWDR/ETH LP to withdraw', 'error')
      return
    }

    const receipt = await withdraw(amount)
    return receipt
  }, [withdraw, notify, stats])

  return (
    <Dialog 
      isOpen={isOpen} 
      onDismiss={handleDismiss} 
      title="Viewing Avalanche"
      marginBottom={0}
      fullWidth
    >
      <Box mb={2}>
        <Box mb={1}>
          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <ValueDisplay 
                title="Pending PWDR Rewards" 
                value={stats ? stats.pwdrRewards : '0'}
              />
            </Grid>
          </Grid>
        </Box>

        <Button
          onClick={handleClaim}
          color="primary"
          variant="contained"
          fullWidth
        >
          Claim Rewards
        </Button>
      </Box>
      
      <ColumnView my={2}>
        <ValueDisplay 
          overline="My Balance" 
          align="left" 
          value={stats ? stats.lpBalance : '0'}
        />

        {/* <Typography variant="headline" align="left" gutterBottom>Deposit</Typography> */}
        <TextField 
          value={depositInput}
          onChange={(e) => setDepositInput(e.target.value)}
          type="number"
          label="Deposit PWDR/ETH"
          variant="outlined"
          margin="dense" 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={() => handleMax(true)}
                  style={{ padding: 0 }}
                  variant="contained"
                  color="secondary"
                >
                  MAX
                </Button>
              </InputAdornment>
            ),
          }}
          fullWidth 
        />
        <Button
          onClick={handleStake}
          variant="contained"
          color="primary"
        >
          Stake PWDR/ETH
        </Button>
      </ColumnView>
      <ColumnView my={2}>
        <ValueDisplay 
          overline="Staked Balance" 
          align="left" 
          value={stats ? stats.stakedBalance : '0'}
        />
        <TextField
          value={withdrawInput}
          onChange={(e) => setWithdrawInput(e.target.value)}
          label="Withdraw PWDR/ETH"
          variant="outlined"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button 
                  onClick={() => handleMax(false)}
                  style={{ padding: 0 }}
                  variant="contained"
                  color="secondary"
                >
                  MAX
                </Button>
              </InputAdornment>
            ),
          }}
          fullWidth 
        />
        <Button
          onClick={handleUnstake}
          variant="contained"
          color="primary"
        >
          Unstake PWDR/ETH
        </Button>
      </ColumnView>
      <Typography variant="subtitle2" align="center">
        All deposits/withdraws will claim any pending rewards from the Avalanche.
      </Typography>
    </Dialog>
  )
}
