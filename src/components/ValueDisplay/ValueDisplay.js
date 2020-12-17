import { Typography } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { ColumnView } from 'components/ColumnView'
import React from 'react'
import { getDisplayBalance, getDisplayBalanceFixed } from 'utils'

export const ValueDisplay = ({ 
  title, 
  value,
  info,
  overline,
  startSymbol,
  endSymbol,
  align="center",
  decimals=18,
  isFixed=false
}) => {
  return (
    <ColumnView>
      {overline && (
        <Typography variant="overline" align={align} style={{lineHeight: "0.75rem"}}>
          {overline}
        </Typography>
      )}
      <Typography variant="h4" align={align}>
        {value && (
          <b>
            {startSymbol && startSymbol}
            {isFixed 
              ? getDisplayBalanceFixed(new BigNumber(value), decimals).toString()
              : getDisplayBalance(new BigNumber(value), decimals).toString()
            }
            {endSymbol && endSymbol}
          </b>
        )}
        {info && <b>{info}</b>}
      </Typography>
      {title && (
        <Typography variant="subtitle2" align={align}>
          {title}
        </Typography>
      )}
      
    </ColumnView>
  )
}
