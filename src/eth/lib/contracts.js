import LGE from '../abi/LGE.json'
import PWDR from '../abi/PWDR.json'
import Lodge from '../abi/Lodge.json'
import Avalanche from '../abi/Avalanche.json'
import AvalancheOld from '../abi/AvalancheOld.json'
import Slopes from '../abi/Slopes.json'
import SlopesOld from '../abi/SlopesOld.json'
import Loyalty from '../abi/Loyalty.json'
import Addresses from 'constants/Addresses'

class Contracts {
  constructor(provider, web3, chainId, options) {
    this.web3 = web3

    // Init our web3.eth.Contract objects here
    this.LGE = new this.web3.eth.Contract(LGE)
    this.PWDR = new this.web3.eth.Contract(PWDR)
    this.Lodge = new this.web3.eth.Contract(Lodge)
    this.Loyalty = new this.web3.eth.Contract(Loyalty)
    this.Avalanche = new this.web3.eth.Contract(Avalanche)
    this.AvalancheOld = new this.web3.eth.Contract(AvalancheOld)
    this.Slopes = new this.web3.eth.Contract(Slopes)
    this.SlopesOld = new this.web3.eth.Contract(SlopesOld)

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

    setProvider(this.LGE, Addresses.LGE[chainId])
    setProvider(this.PWDR, Addresses.PWDR[chainId])
    setProvider(this.Lodge, Addresses.Lodge[chainId])
    setProvider(this.Loyalty, Addresses.Loyalty[chainId])
    setProvider(this.Avalanche, Addresses.Avalanche[chainId])
    setProvider(this.AvalancheOld, Addresses.AvalancheOld[chainId])
    setProvider(this.Slopes, Addresses.Slopes[chainId])
    setProvider(this.SlopesOld, Addresses.SlopesOld[chainId])
  }

  // set default sending account
  setDefaultAccount(account) {
    this.LGE.options.from = account
    this.PWDR.options.from = account
    this.Lodge.options.from = account
    this.Loyalty.options.from = account
    this.Avalanche.options.from = account
    this.AvalancheOld.options.from = account
    this.Slopes.options.from = account
    this.SlopesOld.options.from = account
  }
}

export default Contracts