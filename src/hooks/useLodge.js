import { getContractLodge } from 'eth'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { useWallet } from 'use-wallet'
import { useAltitude } from './useAltitude'
import { useBlock } from './useBlock'

export const useLodge = () => {
  const [balances, setBalances] = useState([0, 0, 0])
  const block = useBlock()
  const { account } = useWallet()
  const altitude = useAltitude()

  const LodgeContract = useMemo(() => {
    return getContractLodge(altitude)
  }, [altitude])

  const isApproved = useCallback(() => {

  })

  const approve = useCallback(() => {

  })

  const getBalances = useCallback(() => {

  })

  useEffect(() => {

  })
  
  return {
    
  }
}
