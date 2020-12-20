import { Box, Typography, Grid, IconButton, makeStyles, Divider, TextField, Button, InputAdornment} from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { Dialog } from 'components/Dialog'
import { ColumnView } from 'components/ColumnView'
import { ValueDisplay } from 'components/ValueDisplay'
import { useNotifications } from 'hooks/useNotifications'
import { useSlopes } from 'hooks/useSlopes'
import BigNumber from 'bignumber.js'
import { getBalanceNumber, getFullDisplayBalance } from 'utils'

BigNumber.config({
  DECIMAL_PLACES: 80,
  EXPONENTIAL_AT: 1000
})

export const SlopesDialog = ({ isOpen, onDismiss, slope }) => {
  const { symbol, lpStaked, address, lpAddress, pid, decimals } = slope
  const { approve, claim, deposit, withdraw, stats } = useSlopes()
  const pool = stats && stats.length ? stats[pid] : undefined
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
      const balance = lpStaked ? new BigNumber(pool.lpBalance) : new BigNumber(pool.tokenBalance)
      setDepositInput(pool 
        ? getFullDisplayBalance(balance, decimals) 
        : '0')
    } else {
      setWithdrawInput(pool 
        ? getFullDisplayBalance(new BigNumber(pool.stakedBalance), decimals) 
        : '0')
    }
  }, [pool, decimals, lpStaked])

  const handleApprove = useCallback(async () => {
    const receipt = await approve(lpStaked ? lpAddress : address)
    if (receipt) {
      return true
    } else {
      return false
    }
  }, [approve, lpStaked, address, lpAddress])

  const handleClaim = useCallback(async () => {
    if (!pool) {
      notify('Please connect to Web3', 'info')
      return
    }
    if (pool.pwdrRewards.toString() === '0'
      && pool.tokenRewards.toString() === '0') 
    {
      notify('No Pending Rewards available to claim', 'warning')
      return
    }
    const receipt = await claim(pid)
    return receipt
  }, [pool, notify, claim, pid])

  const handleStake = useCallback(async () => {
    if (!pool) {
      notify('Please connect to Web3', 'info')
      return
    }

    if (!pool.active) {
      notify('Pool is not currently active', 'warning')
      return
    }

    const value = new BigNumber(depositInput).times(new BigNumber(10).pow(decimals))

    if (lpStaked && value.gt(pool.lpBalance)) {
      notify(`Input exceeds ${symbol} LP Token Balance`, 'error')
      return
    }
    
    if (!lpStaked && value.gt(pool.tokenBalance)) {
      notify(`Input exceeds ${symbol} Balance`, 'error')
      return
    }

    if ((lpStaked && new BigNumber(pool.lpAllowance).eq('0'))
      || (!lpStaked && new BigNumber(pool.tokenAllowance).eq('0')))
    {
      const approvalReceipt = await handleApprove()
      if (!approvalReceipt) {
        return
      }
    } 

    const receipt = await deposit(pid, value.toString())
    return receipt
  }, [deposit, handleApprove, notify, pool, pid, decimals, lpStaked, depositInput, symbol])

  const handleUnstake = useCallback(async () => {
    if (!pool) {
      notify('Please connect to Web3', 'info')
      return
    }

    const value = new BigNumber(withdrawInput).times(new BigNumber(10).pow(decimals))

    if (value.gt(pool.stakedBalance)) {
      notify(`Input exceeds ${symbol} Staked Balance`, 'error')
      return
    }

    const receipt = await withdraw(pid, value.toString())
    return receipt
  }, [notify, pool, symbol, pid, withdraw, withdrawInput, decimals])

  return (
    <Dialog 
      isOpen={isOpen} 
      onDismiss={handleDismiss} 
      title={`Viewing ${symbol} Slope`}
      marginBottom={0}
      fullWidth
    >
      <Box mb={2}>
        <Box mb={1}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <ValueDisplay 
                title="Pending PWDR Rewards" 
                value={pool ? pool.pwdrRewards : '0'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ValueDisplay 
              title={`Pending ${symbol} Rewards`} 
              value={pool ? pool.tokenRewards : '0'}
              decimals={decimals}
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
          value={pool ? lpStaked ? pool.lpBalance : pool.tokenBalance : '0'}
          decimals={decimals}
        />

        {/* <Typography variant="headline" align="left" gutterBottom>Deposit</Typography> */}
        <TextField 
          value={depositInput}
          onChange={(e) => setDepositInput(e.target.value)}
          type="number"
          label={`Deposit ${symbol}`}
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
          Stake {symbol}
        </Button>
      </ColumnView>
      <ColumnView my={2}>
        <ValueDisplay 
          overline="Staked Balance" 
          align="left" 
          value={pool ? pool.stakedBalance : '0'}
          decimals={decimals}
        />
        <TextField 
          value={withdrawInput}
          onChange={(e) => setWithdrawInput(e.target.value)}
          label={`Withdraw ${symbol}`}
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
          Unstake {symbol}
        </Button>
      </ColumnView>
      <Typography variant="subtitle2" align="center">All deposits/withdraws will claim any pending rewards from the Slopes.</Typography>

    </Dialog>
  )
}
