import Web3 from 'web3'
import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'
import IERC20 from '../eth/abi/ERC20.json'
import { waitTransaction } from './txn'

export const getContract = (provider, address) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(IERC20, address)
  return contract
}

export const approve = async (
  tokenAddress,
  spenderAddress,
  account,
  provider,
  onTxHash,
) => {
  try {
    const tokenContract = getContract(provider, tokenAddress)
    return tokenContract.methods
      .approve(spenderAddress,  ethers.constants.MaxUint256.toString())
      .send({ from: account }, async (error, txHash) => {
        if (error) {
          console.log("ERC20 could not be approved", error);
          onTxHash && onTxHash("")
          return false
        }
        if (onTxHash) {
          onTxHash(txHash)
        }
        const status = await waitTransaction(provider, txHash);
        if (!status) {
          console.log("Approval transaction failed.");
          return false
        }
        return true
      })
      
  } catch (e) {
    console.log('error approving', e)
    return false
  }
}

export const getAllowance = async (
  tokenAddress,
  spendingAddress,
  provider,
  account,
) => {
  try {
    const tokenContract = getContract(provider, tokenAddress)
    const allowance = await tokenContract.methods
      .allowance(account, spendingAddress)
      .call()
    return new BigNumber(allowance)
  } catch (e) {
    console.log('allowance', e)
    return new BigNumber(0)
  }
}

export const getBalance = async (
  tokenAddress,
  userAddress,
  provider,
) => {
  try {
    const tokenContract = getContract(provider, tokenAddress)
    const balance = await tokenContract.methods
      .balanceOf(userAddress)
      .call()
    return new BigNumber(balance)
  } catch (e) {
    console.log('balance', e)
    return new BigNumber(0)
  }
}

export const getTotalSupply = async (
  tokenAddress,
  provider,
) => {
  try {
    const tokenContract = getContract(provider, tokenAddress)
    const balance = await tokenContract.methods
      .totalSupply()
      .call()
    return new BigNumber(balance)
  } catch (e) {
    console.log('balance', e)
    return new BigNumber(0)
  }
}