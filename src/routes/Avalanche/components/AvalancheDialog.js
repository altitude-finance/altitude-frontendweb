import { Box, Typography, Grid, Button, TextField, InputAdornment } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { Dialog } from 'components/Dialog'
import { ValueDisplay } from 'components/ValueDisplay'
import { useNotifications } from 'hooks/useNotifications'
import { ColumnView } from 'components/ColumnView'
import { getFullDisplayBalance } from 'utils'
import { useAvalanche } from 'hooks/useAvalanche'
import BigNumber from 'bignumber.js'

BigNumber.config({
  DECIMAL_PLACES: 80,
  EXPONENTIAL_AT: 1000
})

export const AvalancheDialog = ({ isOpen, onDismiss }) => {
  const { stats, pool, approve, claim, deposit, withdraw, withdrawOld, migrate } = useAvalanche()
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

  const handleStake = useCallback(async () => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }

    const value = new BigNumber(depositInput).times(1e18)

    if (value.gt(stats.lpBalance)) {
      notify('Not enough PWDR/ETH LP to deposit', 'warn')
      return
    }

    if (stats.lpAllowance === '0') {
      const receipt = await handleApprove()
      if (!receipt) {
        return
      }
    }

    const receipt = await deposit(value.toString())
    return receipt
  }, [handleApprove, deposit, notify, stats, depositInput])

  const handleUnstake = useCallback(async () => {
    if (!stats) {
      notify('Please connect to Web3', 'info')
      return
    }

    const value = new BigNumber(withdrawInput).times(1e18)

    if (value.gt(stats.stakedBalance)) {
      notify('Not enough staked PWDR/ETH LP to withdraw', 'error')
      return
    }

    const receipt = await withdraw(value.toString())
    return receipt
  }, [withdraw, notify, stats, withdrawInput])

  const handleUnstakeOld = useCallback(async () => {
    if (!pool) {
      notify('Please connect to Web3', 'info')
      return
    }

    const receipt = await withdrawOld(pool.stakedBalance)
    return receipt
  }, [notify, pool, withdrawOld])

  const handleMigrate = useCallback(async () => {
    if (!pool) {
      notify('Please connect to Web3', 'info')
      return
    }

    if (new BigNumber(pool.stakedBalance).eq('0')) {
      notify(`No tokens to migrate`, 'error')
      return
    }

    const receipt = await migrate()
    return receipt
  }, [notify, pool, migrate])

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

      <Box mb={1} width="100%">
        <Button
          onClick={handleUnstake}
          variant="contained"
          color="primary"
          fullWidth
        >
          Unstake PWDR/ETH
        </Button>
      </Box>

      {pool && pool.stakedBalance && (
        <Box mb={1} width="100%">
          <Button
            onClick={handleMigrate}
            variant="contained"
            color="default"
            fullWidth
          >
            Migrate PWDR/ETH to Avalanche
          </Button>
        </Box>
      )}

      {pool && pool.stakedBalance && (
        <Button
          onClick={handleUnstakeOld}
          variant="contained"
          color="default"
        >
          Unstake PWDR/ETH from SlopesV1
        </Button>
      )}
        
      </ColumnView>
      <Typography variant="subtitle2" align="center">
        All deposits/withdraws will claim any pending rewards from the Avalanche.
      </Typography>
    </Dialog>
  )
}
