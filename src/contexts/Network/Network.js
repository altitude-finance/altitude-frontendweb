import { 
  ARAGON_ENDPOINTS,
  FORTMATIC_PUBLIC_KEYS,
  PORTIS_DAPP_ID
} from 'constants/Network';
import { createContext } from 'react'
import { UseWalletProvider } from 'use-wallet';

export const NetworkContext = createContext({
  chainId: 1,
  isDevelopment: false
})

const NetworkProvider = ({ children }) => {
  const chainId = (window.location.host.indexOf("rinkeby") > -1) ? 4 : 1;
  const isDevelopment = chainId === 4 || window.location.host.indexOf("frontenddev") > -1;

  return (
    <NetworkContext.Provider value={{
      chainId,
      isDevelopment
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