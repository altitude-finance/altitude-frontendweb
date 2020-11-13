
export const getEtherscanAddress = (chainId) => {
  return chainId === 1 ? 'https://etherscan.io/' : 'https://rinkeby.etherscan.io/'
}