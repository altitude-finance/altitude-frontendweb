import Web3 from 'web3'

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

export const awaitReceipt = async (tx, provider, onTxHash) => {
  if (!tx) {
    onTxHash && onTxHash("")
    return false
  }

  const txHash = tx.transactionHash
  if (onTxHash) {
    onTxHash(txHash)
  }
  const status = await waitTransaction(provider, txHash);
  if (!status) {
    console.log("Approval transaction failed.");
    return false
  }
  return true
}