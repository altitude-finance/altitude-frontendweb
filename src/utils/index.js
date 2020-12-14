import Web3 from 'web3'
import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'
import IERC20 from '../eth/abi/IERC20.json'

BigNumber.config({
  DECIMAL_PLACES: 80,
  EXPONENTIAL_AT: 1000
})


export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const waitTransaction = async (provider, txHash) => {
  const web3 = new Web3(provider)
  let txReceipt
  while (!txReceipt) {
    const r = await web3.eth.getTransactionReceipt(txHash)
    txReceipt = r
    await sleep(2000)
  }
  return txReceipt.status
}

export const getContract = (provider, address) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(IERC20.abi, address)
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
      .send({ from: account, gas: 80000 }, async (error, txHash) => {
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

export const formatAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

export const getBalanceNumber = (balance, decimals = 18) => {
  const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

export const getDisplayBalance = (balance, decimals = 18) => {
  const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals))
  if (displayBalance.lt(1)) {
    return displayBalance.toPrecision(4)
  } else {
    return displayBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

export const getFullDisplayBalance = (balance, decimals = 18) => {
  return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()
}

export const getEtherscanAddress = (chainId) => {
  return chainId === 1 ? 'https://etherscan.io/' : 'https://rinkeby.etherscan.io/'
}
