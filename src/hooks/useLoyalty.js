import { getContractLoyalty, getAddressLodge } from "eth"
import { depositLoyalty, getLoyaltyStats, withdrawLoyalty } from "eth/utils"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useWallet } from "use-wallet"
import { approveAll, awaitReceipt } from "utils"
import { useAltitude } from "./useAltitude"
import { useBlock } from "./useBlock"
import { useNotifications } from './useNotifications'

export const useLoyalty = () => {
  const block = useBlock()
  const { account, ethereum } = useWallet()
  const altitude = useAltitude()
  const [stats, setStats] = useState()
  const [balances, setBalances] = useState()
  const [active, setActive] = useState(false)
  const [approved, setApproved] = useState(false)
  const notify = useNotifications()


  const LoyaltyContract = useMemo(() => {
    return getContractLoyalty(altitude)
  }, [altitude])

  const handleApproveAll = useCallback(async () => {
    const lodgeAddress = getAddressLodge(altitude)
    const receipt = await approveAll(
      lodgeAddress, 
      LoyaltyContract.options.address, 
      account, 
      ethereum, 
      (txHash) => notify('Started Lodge approval transaction...', 'default', txHash)
    )
    if (receipt) {
      notify('Successfully approved Lodge.', 'success')
      return true
    } else {
      notify('Encountered an error during approval', 'error')
      return false
    }
  }, [altitude, account, ethereum, LoyaltyContract, notify])

  const handleDeposit = useCallback(async (id) => {
    const tx = await depositLoyalty(LoyaltyContract, account, id)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Depositing NFT...', 'default', txHash))
    if (receipt) {
      notify('Successfully deposited Lodge NFT.', 'success')
      return true
    } else {
      notify('Encountered an error during deposit', 'error')
      return false
    }
  }, [LoyaltyContract, account, ethereum, notify])

  const handleWithdraw = useCallback(async (id) => {
    const tx = await withdrawLoyalty(LoyaltyContract, account, id)
    const receipt = await awaitReceipt(tx, ethereum, (txHash) => notify('Withdrawing NFT...', 'default', txHash))
    if (receipt) {
      notify('Successfully withdrew Lodge NFT.', 'success')
      return true
    } else {
      notify('Encountered an error during withdraw', 'error')
      return false
    }
  }, [LoyaltyContract, account, ethereum, notify])

  const fetchStats = useCallback(async () => {
    const { stats, balances, active, approved } = await getLoyaltyStats(LoyaltyContract, account)
    
    setActive(active)
    setApproved(approved)

    if (balances && balances.length) {
      setBalances(balances)
    }

    if (stats && stats.length) {
      setStats({
        points: stats[0],
        tranche: stats[1],
        staked: stats[2],
        boost: stats[3]
      })
    }
    
  }, [setStats, LoyaltyContract, account])

  useEffect(() => {
    if (!!account) {
      fetchStats()
    }
  }, [block, account, fetchStats])

  return {
    active,
    approved,
    balances,
    stats,
    approveAll: handleApproveAll,
    deposit: handleDeposit,
    withdraw: handleWithdraw,
  }
}