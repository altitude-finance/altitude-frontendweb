export const formatAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

export const getEtherscanAddress = (chainId) => {
  return chainId === 1 ? 'https://etherscan.io/' : 'https://rinkeby.etherscan.io/'
}