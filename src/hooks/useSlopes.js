import { getContractSlopes } from "eth"
import { claimAllSlopes, claimSlopes, depositSlopes, getPoolStats, getSlopesStats, withdrawSlopes } from "eth/utils"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useWallet } from "use-wallet"
import { useAltitude } from "./useAltitude"
import { useBlock } from "./useBlock"

export const useSlopes = () => {
  const block = useBlock()
  const { account, chainId } = useWallet()
  const altitude = useAltitude()
  const [stats, setStats] = useState([])
  const [active, setActive] = useState(false)

  const SlopesContract = useMemo(() => {
    return getContractSlopes(altitude)
  }, [altitude])

  const handleClaim = useCallback(async () => {
    const txHash = await claimSlopes(SlopesContract, account)
    return txHash
  }, [SlopesContract, account])

  const handleClaimAll = useCallback(async () => {
    const txHash = await claimAllSlopes(SlopesContract, account)
    return txHash
  }, [SlopesContract, account])

  const handleDeposit = useCallback(async (amount) => {
    const txHash = await depositSlopes(SlopesContract, account, amount)
    return txHash
  }, [SlopesContract, account])

  const handleWithdraw = useCallback(async (amount) => {
    const txHash = await withdrawSlopes(SlopesContract, account, amount)
    return txHash
  }, [SlopesContract, account])

  const fetchStats = useCallback(async () => {
    const { active, stats } = await getSlopesStats(SlopesContract, account)
    console.log(active, stats)
    if (active) {
      setActive(active)
    }
    if (stats && stats.length) {
      console.log(stats)
      setStats(stats.map((pool) => ({
        active: pool[0],
        apr: pool[1],
        lastReward: pool[2],
        totalShares: pool[3],
        totalStaked: pool[4],
        tokenBalance: pool[10],
        tokenAllowance: pool[11],
        lpBalance: pool[12],
        lpAllowance: pool[13],
        stakedBalance: pool[14],
        sharesBalance: pool[15],
        pwdrRewards: pool[16],
        tokenRewards: pool[17]
      })))
    }
  }, [setStats, setActive, SlopesContract, account])

  const fetchTestNetStats = useCallback(async () => {
    const pool = await getPoolStats(SlopesContract, account, 0)

    if (pool) {
      setActive(true)
      setStats([{
        active: pool[0],
        apr: pool[1],
        lastReward: pool[2],
        totalShares: pool[3],
        totalStaked: pool[4],
        tokenPrice: pool[7],
        lpPrice: pool[8],
        tokenBalance: pool[10],
        tokenAllowance: pool[11],
        lpBalance: pool[12],
        lpAllowance: pool[13],
        stakedBalance: pool[14],
        sharesBalance: pool[15],
        pwdrRewards: pool[16],
        tokenRewards: pool[17]
      }])
    }
  }, [SlopesContract, account])

  useEffect(() => {
    if (!!account) {
      if (chainId === 4) {
        fetchTestNetStats()
      } else {
        fetchStats()
      }
    }
  }, [block, account, chainId, fetchStats, fetchTestNetStats])

  return {
    stats,
    active,
    claim: handleClaim,
    claimAll: handleClaimAll,
    deposit: handleDeposit,
    withdraw: handleWithdraw,
  }
}