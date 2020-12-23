import Web3 from 'web3'
import IERC1155 from '../eth/abi/ERC1155.json'
import { waitTransaction } from './txn'

export const getMultiTokenContract = (provider, address) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(IERC1155, address)
  return contract
}

export const approveAll = async (
  multiTokenAddress,
  spenderAddress,
  account,
  provider,
  onTxHash,
) => {
  try {
    const tokenContract = getMultiTokenContract(provider, multiTokenAddress)
    return tokenContract.methods
      .setApprovalForAll(spenderAddress, true)
      .send({ from: account } , async (error, txHash) => {
        if (error) {
          console.log("ERC1155 could not be approved", error);
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