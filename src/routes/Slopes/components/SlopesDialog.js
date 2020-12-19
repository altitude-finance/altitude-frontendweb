import { Box, Typography, Grid, IconButton, makeStyles, Divider, TextField, Button, InputAdornment} from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { Dialog } from 'components/Dialog'
import { ColumnView } from 'components/ColumnView'
import { ValueDisplay } from 'components/ValueDisplay'
import { useNotifications } from 'hooks/useNotifications'
import { useSlopes } from 'hooks/useSlopes'
import BigNumber from 'bignumber.js'

export const SlopesDialog = ({ isOpen, onDismiss, active, slope, pool }) => {
  const { symbol, lpStaked, address, lpAddress, pid, decimals } = slope
  const [depositInput, setDepositInput] = useState('')
  const [withdrawInput, setWithdrawInput] = useState('')

  const { approve, claim, deposit, withdraw } = useSlopes()

  const notify = useNotifications()

  const handleDismiss = useCallback(() => {
    setDepositInput('')
    setWithdrawInput('')
    onDismiss()
  }, [setDepositInput, setWithdrawInput, onDismiss])

  const handleMax = useCallback((isDeposit) => {
    if (isDeposit) {
      setDepositInput(pool ? pool.tokenBalance : '0')
    } else {
      setWithdrawInput(pool ? pool.stakedBalance : '0')
    }
  }, [pool])

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
    } else if (!lpStaked && value.gt(pool.tokenBalance)) {
      notify(`Input exceeds ${symbol} Balance`, 'error')
      return
    }

    if ((lpStaked && pool.lpAllowance === '0')
      && (!lpStaked && pool.tokenAllowance === '0'))
    {
      const approvalReceipt = await handleApprove()
      if (!approvalReceipt) {
        return
      }
    } 

    const receipt = await deposit(pid, value.toString())
    return receipt
  }, [deposit, handleApprove, notify, pool, pid, lpStaked, depositInput, symbol])

  const handleUnstake = useCallback(async () => {
    if (!pool) {
      notify('Please connect to Web3', 'info')
      return
    }

    const value = new BigNumber(withdrawInput).times(new BigNumber(10).pow(decimals))

    if (!lpStaked && value.gt(pool.tokenBalance)) {
      notify(`Input exceeds ${symbol} Staked Balance`, 'error')
      return
    }

    const receipt = await withdraw(pid, value.toString())
    return receipt
  }, [lpStaked, notify, pool, symbol, pid, withdraw, withdrawInput])

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
              <ValueDisplay title={`Pending ${symbol} Rewards`} value="0" />
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
          value={pool ? lpStaked ? pool.tokenBalance : pool.lpBalance : '0'}
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
      <Typography variant="subtitle2" align="center">All deposits/withdraws will claim any pending rewards from the Slopes and Avalanche.</Typography>

    </Dialog>
  )
}
