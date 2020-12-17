export { default } from './Altitude'

export const getContractPWDR = (altitude) => {
  return altitude && altitude.contracts && altitude.contracts.PWDR
}

export const getContractLodge = (altitude) => {
  return altitude && altitude.contracts && altitude.contracts.Lodge
}

export const getContractLGE = (altitude) => {
  return altitude && altitude.contracts && altitude.contracts.LGE
}

export const getContractSlopes = (altitude) => {
  return altitude && altitude.contracts && altitude.contracts.Slopes
}

export const getContractAvalanche = (altitude) => {
  return altitude && altitude.contracts && altitude.contracts.Avalanche
}

export const getContractLoyalty = (altitude) => {
  return altitude && altitude.contracts && altitude.contracts.Loyalty
}
