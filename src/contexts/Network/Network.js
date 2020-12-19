import { 
  ARAGON_ENDPOINTS,
  FORTMATIC_PUBLIC_KEYS,
  PORTIS_DAPP_ID
} from 'constants/Network';
import { createContext, useMemo } from 'react'
import { UseWalletProvider } from 'use-wallet';

export const NetworkContext = createContext({
  chainId: 1,
  isDevelopment: false,
  isStaging: false,
  isCanary: false,
})

const NetworkProvider = ({ children }) => {
  const isDevelopment = window.location.host.indexOf("localhost") > -1
  const isStaging = window.location.host.indexOf("rinkeby") > -1
  const isCanary = window.location.host.indexOf("frontenddev") > -1

  const chainId = useMemo(() => {
    return isStaging ? 4 : 1
  }, [isStaging])

  return (
    <NetworkContext.Provider value={{
      chainId,
      isDevelopment,
      isStaging,
      isCanary
    }}>
      <UseWalletProvider
        chainId={chainId}
        connectors={{
          formatic: { apiKey: FORTMATIC_PUBLIC_KEYS[chainId] },
          portis: { dAppId: PORTIS_DAPP_ID },
          walletconnect: { rpcUrl: ARAGON_ENDPOINTS[chainId] } 
        }}
      >
        {children}
      </UseWalletProvider>
    </NetworkContext.Provider>
  )
}

export default NetworkProvider