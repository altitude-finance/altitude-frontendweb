class Contracts {
  constructor(provider, web3, chainId, options) {
    this.web3 = web3

    // Init our web3.eth.Contract objects here

    this.setProvider(provider, chainId)
    this.setDefaultAccount(this.web3.eth.defaultAccount)
  }

  // set contract provider and address
  setProvider(provider, chainId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider)
      if (address) {
        contract.options.address = address
      } else {
        console.error('Contract address not found in network', chainId)
      } 
    }


  }

  // set default sending account
  setDefaultAccount(account) {

  }
}

export default Contracts