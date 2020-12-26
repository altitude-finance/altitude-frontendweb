import { getAddressPWDRLP, getContractAvalanche } from 'eth'
import { claimAvalanche, depositAvalanche, getAvalancheStats, withdrawAvalanche } from 'eth/utils'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useWallet } from 'use-wallet'
import { approve, awaitReceipt } from 'utils'
import { useAltitude } from './useAltitude'
import { useBlock } from './useBlock'
import { useNotifications } from './useNotifications'
import BigNumber from "bignumber.js"

export const useAvalanche = () => {
  const altitude = useAltitude()
  const block = useBlock()
  const { account, ethereum } = useWallet()
  const [active, setActive] = useState(false)
  const [accumulating, setAccumulating] = useState(false)
  const [stats, setStats] = useState()

  const notify = useNotifications()

  const AvalancheContract = useMemo(() => {
    return getContractAvalanche(altitude)
  }, [altitude])

  const PwdrPoolAddress = useMemo(() => {
    return getAddressPWDRLP(altitude)
  }, [altitude])

  const handleApprove = useCallback(async () => {
    const receipt = await approve(
      PwdrPoolAddress, 
      AvalancheContract.options.address, 
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
  }, [AvalancheContract, PwdrPoolAddress, account, ethereum, notify])

  const handleClaim = useCallback(async () => {
    const tx = await claimAvalanche(AvalancheContract, account)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Claiming pending rewards...', 'default', txHash))
    if (receipt) {
      notify('Successfully claimed pending rewards', 'success')
      return true
    } else {
      notify('Encountered an error during claim', 'error')
      return false
    }
  }, [account, ethereum, notify, AvalancheContract])

  const handleDeposit = useCallback(async (amount) => {
    const tx = await depositAvalanche(AvalancheContract, account, amount)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Depositing tokens...', 'default', txHash))
    if (receipt) {
      notify('Successfully deposited tokens.', 'success')
      return true
    } else {
      notify('Encountered an error during deposit', 'error')
      return false
    }
  }, [account, ethereum, notify, AvalancheContract])

  const handleWithdraw = useCallback(async (amount) => {
    const tx = await withdrawAvalanche(AvalancheContract, account, amount)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Withdrawing tokens...', 'default', txHash))
    if (receipt) {
      notify('Successfully withdrew tokens.', 'success')
      return true
    } else {
      notify('Encountered an error during withdrawal', 'error')
      return false
    }
  }, [account, ethereum, notify, AvalancheContract])
  
  const fetchStats = useCallback(async () => {
    const { active, accumulating, stats } = await getAvalancheStats(AvalancheContract, account)
    
    setActive(active)
    setAccumulating(accumulating)

    if (stats && stats.length) {
      setStats({
        apr: stats[0],
        totalStaked: stats[2],
        pwdrPrice: stats[5],
        lpPrice: stats[6],
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
    accumulating,
    stats,
    approve: handleApprove,
    claim: handleClaim,
    deposit: handleDeposit,
    withdraw: handleWithdraw
  }
}
