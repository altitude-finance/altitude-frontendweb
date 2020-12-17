import { getContractLoyalty } from "eth"
import { depositLoyalty, getLoyaltyStats, withdrawLoyalty } from "eth/utils"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useWallet } from "use-wallet"
import { useAltitude } from "./useAltitude"
import { useBlock } from "./useBlock"

export const useLoyalty = () => {
  const block = useBlock()
  const { account } = useWallet()
  const altitude = useAltitude()
  const [stats, setStats] = useState([])

  const LoyaltyContract = useMemo(() => {
    return getContractLoyalty(altitude)
  }, [altitude])

  const handleDeposit = useCallback(async (amount) => {
    const txHash = await depositLoyalty(LoyaltyContract, account, amount)
    return txHash
  }, [LoyaltyContract, account])

  const handleWithdraw = useCallback(async (amount) => {
    const txHash = await withdrawLoyalty(LoyaltyContract, account, amount)
    return txHash
  }, [LoyaltyContract, account])

  const fetchStats = useCallback(async () => {
    const { _stats } = await getLoyaltyStats(LoyaltyContract, account)
    setStats(_stats)
  }, [setStats, LoyaltyContract, account])

  useEffect(() => {
    if (!!account) {
      fetchStats()
    }
  }, [block, account, fetchStats])

  return {
    stats,
    deposit: handleDeposit,
    withdraw: handleWithdraw,
  }
}