import { getContractAvalanche } from 'eth'
import { claimAvalanche, depositAvalanche, getAvalancheStats, withdrawAvalanche } from 'eth/utils'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useWallet } from 'use-wallet'
import { useAltitude } from './useAltitude'
import { useBlock } from './useBlock'

export const useAvalanche = () => {
  const altitude = useAltitude()
  const block = useBlock()
  const { account } = useWallet()
  const [active, setActive] = useState(false)
  const [stats, setStats] = useState({
    apr: '',
    totalStaked: '',
    pwdrPrice: '',
    nextEpochReward: '',
    currentEpochReward: '',
    currentEpochRewardPerDay: '',
    startTime: '',
    lastPayout: '',
    payoutNumber: '',
    unstakingFee: '',
    lpBalance: '0',
    lpAllowance: '0',
    stakedBalance: '0',
    pwdrRewards: '0'
  })

  const AvalancheContract = useMemo(() => {
    return getContractAvalanche(altitude)
  }, [altitude])

  const handleClaim = useCallback(async () => {
    const txHash = await claimAvalanche(AvalancheContract, account)
    return txHash
  }, [account, AvalancheContract])

  const handleDeposit = useCallback(async (amount) => {
    const txHash = await depositAvalanche(AvalancheContract, account, amount)
    return txHash
  }, [account, AvalancheContract])

  const handleWithdraw = useCallback(async (amount) => {
    const txHash = await withdrawAvalanche(AvalancheContract, account, amount)
    return txHash
  }, [account, AvalancheContract])
  
  const fetchStats = useCallback(async () => {
    const { active, stats } = await getAvalancheStats(AvalancheContract, account)
    
    if (stats) {
      setActive(active)
      setStats({
        apr: stats[0],
        totalStaked: stats[2],
        pwdrPrice: stats[5],
        nextEpochReward: stats[7],
        currentEpochReward: stats[8],
        currentEpochRewardPerDay: stats[9],
        startTime: stats[10],
        lastPayout: stats[11],
        payoutNumber: stats[12],
        unstakingFee: stats[13],
        lpBalance: stats[14],
        lpAllowance: stats[15],
        stakedBalance: stats[16],
        pwdrRewards: stats[18]
      })
    }
  }, [AvalancheContract, account, setActive, setStats])

  useEffect(() => {
    if (!!account) {
      fetchStats()
    }
  }, [account, block, fetchStats])
  
  return {
    active,
    stats,
    claim: handleClaim,
    deposit: handleDeposit,
    withdraw: handleWithdraw
  }
}
