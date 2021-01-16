import { getContractSlopes, getContractSlopesOld } from "eth"
import { claimAllSlopes, claimSlopes, depositSlopes, getPoolStats, getSlopesStats, migrateSlopes, withdrawSlopes } from "eth/utils"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useWallet } from "use-wallet"
import { useAltitude } from "./useAltitude"
import { useBlock } from "./useBlock"
import { useNotifications } from "./useNotifications"
import { approve, awaitReceipt } from "utils"
import BigNumber from "bignumber.js"

export const useSlopes = () => {
  const block = useBlock()
  const { account, chainId, ethereum } = useWallet()
  const altitude = useAltitude()
  const [stats, setStats] = useState([])
  const [oldStats, setOldStats] = useState([])
  const [active, setActive] = useState(false)
  const [accumulating, setAccumulating] = useState(false)
  const notify = useNotifications()

  const SlopesContract = useMemo(() => {
    return getContractSlopes(altitude)
  }, [altitude])

  const SlopesOldContract = useMemo(() => {
    return getContractSlopesOld(altitude)
  }, [altitude])

  const handleApprove = useCallback(async (tokenAddress) => {
    const receipt = await approve(
      tokenAddress, 
      SlopesContract.options.address, 
      account,
      ethereum,
      (txHash) => notify('Started Slopes approval transaction...', 'default', txHash)
    )
    if (receipt) {
      notify('Successfully approved Slopes.', 'success')
      return true
    } else {
      notify('Encountered an error during approval', 'error')
      return false
    }
  }, [SlopesContract, account, ethereum, notify])

  const handleClaim = useCallback(async (pid) => {
    const tx = await claimSlopes(SlopesContract, pid, account)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Claiming pending rewards...', 'default', txHash))
    if (receipt) {
      notify('Successfully claimed pending rewards', 'success')
      return true
    } else {
      notify('Encountered an error during claim', 'error')
      return false
    }
  }, [SlopesContract, account, ethereum, notify])

  const handleClaimAll = useCallback(async () => {
    const tx = await claimAllSlopes(SlopesContract, account)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Claiming all pending rewards...', 'default', txHash))
    if (receipt) {
      notify('Successfully claimed all pending rewards', 'success')
      return true
    } else {
      notify('Encountered an error during claim all', 'error')
      return false
    }
  }, [SlopesContract, account, ethereum, notify])

  const handleDeposit = useCallback(async (pid, amount) => {
    const tx = await depositSlopes(SlopesContract, pid, account, new BigNumber(amount).toString())
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Depositing tokens...', 'default', txHash))
    if (receipt) {
      notify('Successfully deposited tokens.', 'success')
      return true
    } else {
      notify('Encountered an error during deposit', 'error')
      return false
    }
  }, [SlopesContract, account, ethereum, notify])

  const handleWithdraw = useCallback(async (pid, amount) => {
    const tx = await withdrawSlopes(SlopesContract, pid, account, amount)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Withdrawing tokens...', 'default', txHash))
    if (receipt) {
      notify('Successfully withdrew tokens.', 'success')
      return true
    } else {
      notify('Encountered an error during withdrawal', 'error')
      return false
    }
  }, [SlopesContract, account, ethereum, notify])

  const handleWithdrawOld = useCallback(async (pid, amount) => {
    const tx = await withdrawSlopes(SlopesOldContract, pid, account, amount)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Withdrawing tokens...', 'default', txHash))
    if (receipt) {
      notify('Successfully withdrew tokens from SlopesV1.', 'success')
      return true
    } else {
      notify('Encountered an error during withdrawal from SlopesV1', 'error')
      return false
    }
  }, [SlopesOldContract, account, ethereum, notify])

  const fetchStats = useCallback(async () => {
    const { active, accumulating, stats } = await getSlopesStats(SlopesContract, account)
    const oldSlopes = await getSlopesStats(SlopesOldContract, account)
    
    setActive(active)
    setAccumulating(accumulating)

    if (stats && stats.length) {
      setStats(stats.map((pool, i) => formatSlopesData(pool, i)))
      setOldStats(oldSlopes.stats.map((pool, i) => formatSlopesData(pool, i)))
    }
  }, [setStats, setOldStats, setActive, SlopesContract, SlopesOldContract, account])

  const formatSlopesData = (pool, i) => ({
    pid: i,
    active: pool[0],
    apr: pool[1],
    lastReward: pool[2],
    totalShares: pool[3],
    totalStaked: pool[4],
    tokenPrice: pool[7],
    lpPrice: pool[8],
    stakingFee: pool[9],
    tokenBalance: pool[10],
    tokenAllowance: pool[11],
    lpBalance: pool[12],
    lpAllowance: pool[13],
    stakedBalance: pool[14],
    sharesBalance: pool[15],
    pwdrRewards: pool[16],
    tokenRewards: pool[17]
  })

  useEffect(() => {
    if (!!account) {
      fetchStats()
    }
  }, [block, account, chainId, fetchStats])

  return {
    stats,
    oldStats,
    active,
    accumulating,
    approve: handleApprove,
    claim: handleClaim,
    claimAll: handleClaimAll,
    deposit: handleDeposit,
    withdraw: handleWithdraw,
    withdrawOld: handleWithdrawOld
  }
}