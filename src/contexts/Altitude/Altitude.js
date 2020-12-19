import Altitude from 'eth'
import { useNetwork } from 'hooks/useNetwork'
import { createContext, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'

export const AltitudeContext = createContext({
  altitude: undefined
})

const AltitudeProvider = ({ children }) => {
  const { account, ethereum } = useWallet()
  const { chainId } = useNetwork()
  const [altitude, setAltitude] = useState()

  window.eth = ethereum
  
  useEffect(() => {
    if (ethereum) {
      const { selectedAddress } = ethereum

      const altitudeLib = new Altitude(ethereum, chainId, {
        defaultAccount: selectedAddress,
        ethereumNodeTimeout: 10000,
      })
      setAltitude(altitudeLib)
      window.altitude = altitudeLib
      console.log(altitudeLib)
    }
  }, [account, ethereum, setAltitude])

  return (
    <AltitudeContext.Provider value={{
      altitude
    }}>
      {children}
    </AltitudeContext.Provider>
  )
}

export default AltitudeProvider