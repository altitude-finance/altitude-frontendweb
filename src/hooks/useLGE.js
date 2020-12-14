import { getContractLGE } from "eth"
import { activateLGE, claimLGE, contributeLGE, getLGEStats } from "eth/utils"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useWallet } from "use-wallet"
import { useAltitude } from "./useAltitude"
import { useBlock } from "./useBlock"

export const useLGE = () => {
  const block = useBlock()
  const { account } = useWallet()
  const altitude = useAltitude()
  const [stats, setStats] = useState([])
  const [active, setActive] = useState(false)

  const LGEContract = useMemo(() => {
    return getContractLGE(altitude)
  }, [altitude])

  const handleActivate = useCallback(async () => {
    const txHash = await activateLGE(LGEContract, account)
    return txHash
  }, [LGEContract, account])

  const handleClaim = useCallback(async () => {
    const txHash = await claimLGE(LGEContract, account)
    return txHash
  }, [LGEContract, account])

  const handleContribute = useCallback(async (amount) => {
    const txHash = await contributeLGE(LGEContract, account, amount)
    return txHash
  }, [LGEContract, account])

  const fetchStats = useCallback(async () => {
    const { active, stats } = await getLGEStats(LGEContract, account)
    setStats(stats)
    setActive(active)
  }, [setStats, setActive, LGEContract, account])

  useEffect(() => {
    if (!!account) {
      fetchStats()
    }
  }, [block, account, fetchStats])

  return {
    stats,
    active,
    activate: handleActivate,
    claim: handleClaim,
    contribute: handleContribute
  }
}