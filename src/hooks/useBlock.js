import { useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import Web3 from 'web3'

export const useBlock = () => {
  const [block, setBlock] = useState(0)
  const { ethereum } = useWallet()

  useEffect(() => {
    if (!ethereum) return
    const web3 = new Web3(ethereum)

    const interval = setInterval(async () => {
      const latestBlockNumber = await web3.eth.getBlockNumber()
      if (block !== latestBlockNumber) {
        setBlock(latestBlockNumber)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [ethereum, setBlock])

  return block
}