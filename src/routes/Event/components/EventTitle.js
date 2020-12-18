import { Typography } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import { ColumnView } from 'components/ColumnView'
import React, { useCallback,useEffect } from 'react'
import { getDisplayBalanceFixed, sleep } from 'utils'

const ENDPOINT = "https://assets.altitude.finance/lgebalance/pwdr_lge_balance.json"

export const EventTitle = ({ title, data }) => {

  const getContribution = useCallback(async () => {
    const contribution = await fetch(ENDPOINT, { 
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    }).then(r => r.json()).then(d => d)
    const json = JSON.stringify(contribution)
    console.log(json)
  }, [])

  useEffect(() => {
    getContribution()
    sleep(1000)
  }, [])

  return (
    <ColumnView mb={2}>
      <Typography variant="h2" align="center">
        <b>{getDisplayBalanceFixed(new BigNumber(data))}</b>
      </Typography>
      <Typography variant="subtitle1" align="center">
        Total Contributed Ξ
      </Typography>
    </ColumnView>
  )
}
