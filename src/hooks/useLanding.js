import BigNumber from 'bignumber.js'
import { getAddressPWDR, getAddressPWDRLP, getContractPWDR, getContractSlopes } from 'eth'
import { getCurrentEpoch, getCurrentMaxSupply, getCurrentPhase, getTokenPrice } from 'eth/utils'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useWallet } from 'use-wallet'
import { getTotalSupply } from 'utils/erc20'
import { useAltitude } from './useAltitude'
import { useBlock } from './useBlock'

export const useLanding = () => {
  const { ethereum } = useWallet()
  const altitude = useAltitude()
  const block = useBlock()
  const [stats, setStats] = useState()

  const PWDRContract = useMemo(() => {
    return getContractPWDR(altitude)
  }, [altitude])

  const SlopesContract = useMemo(() => {
    return getContractSlopes(altitude)
  }, [altitude])

  const PWDRAddress = useMemo(() => {
    return getAddressPWDR(altitude)
  }, [altitude])

  const PWDRLPAddress = useMemo(() => {
    return getAddressPWDRLP(altitude)
  }, [altitude])

  const fetchStats = useCallback(async () => {
    const values = await Promise.all([
      getTokenPrice(SlopesContract, PWDRLPAddress, PWDRAddress),
      getTokenPrice(SlopesContract, PWDRLPAddress),
      getTotalSupply(PWDRLPAddress, ethereum),
      getTotalSupply(PWDRAddress, ethereum),
      getCurrentEpoch(PWDRContract),
      getCurrentPhase(PWDRContract),
      getCurrentMaxSupply(PWDRContract),
    ])

    if (values && values.length) {
      setStats({
        pwdrPrice: new BigNumber(values[0]),
        totalLiquidity: new BigNumber(values[1]).times(values[2]).div(1e18),
        totalSupply: new BigNumber(values[3]),
        currentEpoch: values[4],
        currentPhase: values[5],
        currentMaxSupply: values[6]
      })
    }
  }, [PWDRAddress, PWDRContract, PWDRLPAddress, SlopesContract, ethereum])

  useEffect(() => {
    if (ethereum) {
      fetchStats()
    }
  }, [ethereum, block, fetchStats])

  return stats
}
