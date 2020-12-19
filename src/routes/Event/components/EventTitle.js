import { Typography, Box } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { ColumnView } from 'components/ColumnView'
import { LGE_BALANCE_URL } from 'constants/Links'
import React, { useCallback,useEffect, useState } from 'react'
import { getDisplayBalanceFixed } from 'utils'

export const EventTitle = ({ data }) => {
  const [value, setValue] = useState('0')

  const getContribution = useCallback(() => {
    fetch(LGE_BALANCE_URL, { 
      method: 'GET',
      cache: 'no-cache',
      mode: 'cors'
    })
    .then((response) => response.json())
    .then((json) => setValue(json && json.PWDR_LGE_Balance ? json.PWDR_LGE_Balance : '0'))
    .catch((e) => console.log(e.message))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      getContribution()
    }, 5000) 

    return () => clearInterval(interval)
  }, [getContribution])

  return (
    <ColumnView>
      <Box mb={2}>
      <Typography variant="h2" align="center">
        <b>{data ? getDisplayBalanceFixed(new BigNumber(data)) : getDisplayBalanceFixed(new BigNumber(value), 0)}</b>
      </Typography>
      <Typography variant="subtitle1" align="center">
        Total Contributed Ξ
      </Typography>
      </Box>
      
    </ColumnView>
  )
}
