import { Box, Typography, Grid, IconButton, makeStyles, Divider, TextField, Button, InputAdornment} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { Dialog } from 'components/Dialog'
import { ColumnView } from 'components/ColumnView'
import { ValueDisplay } from 'components/ValueDisplay'


export const SlopesDialog = ({ isOpen, onDismiss, active, slope, stats }) => {
  const { symbol } = slope
  
  const [depositInput, setDepositInput] = useState('')
  const [withdrawInput, setWithdrawInput] = useState('')


  const handleClaim = () => {

  }

  const handleDeposit = () => {

  }

  const handleWithdraw = () => {

  }

  return (
    <Dialog 
      isOpen={isOpen} 
      onDismiss={onDismiss} 
      title={`Viewing ${symbol} Slope`}
      marginBottom={0}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container style={{marginBottom: 4}}>
            <Grid item xs={12} md={6}>
              <ValueDisplay title="Pending PWDR Rewards" value="0" />
            </Grid>
            <Grid item xs={12} md={6}>
              <ValueDisplay title={`Pending ${symbol} Rewards`} value="0" />
            </Grid>
          </Grid>
          <Button
            onClick={() => {}}
            color="primary"
            variant="contained"
            fullWidth
          >
            Claim Rewards
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ColumnView>
            <ValueDisplay overline="My Balance" align="left" value="0" />


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
              onClick={() => {}}
              variant="contained"
              color="primary"
            >
              Stake {symbol}
            </Button>
          </ColumnView>
        </Grid>
        <Grid item xs={12}>
          <ColumnView>
            <ValueDisplay overline="Staked Balance" align="left" value="0"/>
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
              onClick={() => {}}
              variant="contained"
              color="primary"
            >
              Withdraw {symbol}
            </Button>
          </ColumnView>
        </Grid>
      </Grid>
    </Dialog>
  )
}
