import Web3 from 'web3'
import Contracts from './lib/contracts'
import Addresses from 'constants/Addresses'

class Altitude {
  constructor(provider, chainId, options) {
    let realProvider
    
    if (typeof provider === 'string') {
      if (provider.includes('wss')) {
        realProvider = new Web3.providers.WebsocketProvider(
          provider,
          options.ethereumNodeTimeout || 10000,
        )
      } else {
        realProvider = new Web3.providers.HttpProvider(
          provider,
          options.ethereumNodeTimeout || 10000,
        )
      }
    } else {
      realProvider = provider
    }

    this.web3 = new Web3(realProvider)

    if (options.defaultAccount) {
      this.web3.eth.defaultAccount = options.defaultAccount
    }
    
    this.contracts = new Contracts(provider, this.web3, chainId, options)
    this.pwdrAddress = Addresses.PWDR[chainId];
    this.pwdrLpAddress = Addresses.PWDRLP[chainId];
    this.lodgeAddress = Addresses.Lodge[chainId];
    this.lgeAddress = Addresses.LGE[chainId];
    this.slopesAddress = Addresses.Slopes[chainId];
    this.slopesOldAddress = Addresses.SlopesOld[chainId];
    this.avalancheAddress = Addresses.Avalanche[chainId];
    this.loyaltyAddress = Addresses.Loyalty[chainId];
  }

  setProvider(provider, networkId) {
    this.web3.setProvider(provider)
    this.contracts.setProvider(provider, networkId)
    // this.operation.setNetworkId(networkId)
  }

  setDefaultAccount(account) {
    this.web3.eth.defaultAccount = account
    this.contracts.setDefaultAccount(account)
  }

  getDefaultAccount() {
    return this.web3.eth.defaultAccount
  }
}

export default Altitude