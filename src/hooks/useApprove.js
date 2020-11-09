import { useWallet } from 'use-wallet'
import { approve } from '../utils'

export const useApprove = (tokenContract, spenderAddress) => {
  const { account } = useWallet()

  const handleApprove = async () => {
    try {
      const tx = await approve(tokenContract, spenderAddress, account)
      return tx
    } catch (e) {
      return false
    }
  }

  return {
    onApprove: handleApprove
  }
}