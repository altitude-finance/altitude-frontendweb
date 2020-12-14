import { Box, Button, ButtonGroup, FormGroup, InputAdornment, TextField } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { contributeLGE } from 'eth/utils'
import { useLGE } from 'hooks/useLGE'
import React, { useState } from 'react'

export const ContributionInput = ({ max, min, current }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const { contribute } = useLGE()


  const setMax = () => {
    setValue(new BigNumber(max).minus(current).div(min).toString())
  }

  const onSubmit = async () => {
    const txHash = await contribute(new BigNumber(value).times(min).toString())

  }

  return (
    <Box mt={2}>
      <FormGroup>
        <TextField
          type="number"
          label="Contribute Ethereum"
          placeholder="Enter an amount..."
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          
          // error={error}
          //helperText={formState.helperText}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">Ξ</InputAdornment>,
          }}
        />
        <Box mt={1}>
          <ButtonGroup color="primary" fullWidth>
            <Button onClick={() => setValue('1')}>1</Button>
            <Button onClick={() => setValue('5')}>5</Button>
            <Button onClick={() => setValue('10')}>10</Button>
            <Button onClick={setMax}>MAX</Button>
          </ButtonGroup>
        </Box>
        <Box mt={1}>
          <Button
            // disabled={contractStart + contributionPhase < Date.now()}
            onClick={onSubmit}
            color="primary"
            variant="contained"
            fullWidth
          >
            LOCK ETH
          </Button>
        </Box>
      </FormGroup>
    </Box>
    
  )
}
