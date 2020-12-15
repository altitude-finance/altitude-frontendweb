import { Typography } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { ColumnView } from 'components/ColumnView'
import React from 'react'
import { getDisplayBalance } from 'utils'

export const EventTitle = ({ title, data }) => {
  return (
    <ColumnView mb={2}>
      <Typography variant="h2" align="center">
        <b>{getDisplayBalance(new BigNumber(data))}</b>
      </Typography>
      <Typography variant="subtitle1" align="center">
        Total Contributed Ξ
      </Typography>
    </ColumnView>
  )
}
