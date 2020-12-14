import { Typography } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { ColumnView } from 'components/ColumnView'
import React from 'react'
import { getDisplayBalance } from 'utils'

export const EventData = ({ title, data, info=undefined, decimals=18 }) => {
  return (
    <ColumnView>
      <Typography variant="h4" align="center">
        {data && <b>{getDisplayBalance(new BigNumber(data), decimals)}</b>}
        {info && <b>{info}</b>}
      </Typography>
      <Typography variant="subtitle2" align="center">
        {title}
      </Typography>
    </ColumnView>
  )
}
