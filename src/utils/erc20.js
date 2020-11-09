import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import IERC20 from '../eth/abi/IERC20.json'

BigNumber.config({
  DECIMAL_PLACES: 80,
  EXPONENTIAL_AT: 1000
})

export const getContract = (provider, address) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(IERC20.abi, address)
  return contract
}

export const getAllowance = async (
  tokenContract,
  spendingAddress,
  account,
) => {
  try {
    const allowance = await tokenContract.methods
      .allowance(account, spendingAddress)
      .call()
    return new BigNumber(allowance)
  } catch (e) {
    return new BigNumber(0)
  }
}

export const getBalance = async (
  provider,
  tokenAddress,
  userAddress,
) => {
  const tokenContract = getContract(provider, tokenAddress)
  try {
    const balance = await tokenContract.methods
      .balanceOf(userAddress)
      .call()
    return new BigNumber(balance)
  } catch (e) {
    return new BigNumber(0)
  }
}

export const approve = async (
  tokenContract,
  spenderAddress,
  account
) => {
  try {
    const tx = tokenContract.methods
      .approve(spenderAddress,  ethers.constants.MaxUint256.toString())
      .send({ from: account })
      .on('transactionHash',(tx) => tx.transactionHash)
    return tx
  } catch (e) {
    return false
  }
}