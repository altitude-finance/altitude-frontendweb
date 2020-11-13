import { createContext } from 'react'
import { UseWalletProvider } from 'use-wallet';

export const NetworkContext = createContext({
  chainId: 1
})

const NetworkProvider = ({ children }) => {
  const chainId = (window.location.host.indexOf("rinkeby") > -1) ? 4 : 1;

  return (
    <NetworkContext.Provider value={{
      chainId
    }}>
      <UseWalletProvider
        chainId={chainId}
        connectors={chainId === 1 
          ? { walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' } } 
          : undefined
        }
      >
        {children}
      </UseWalletProvider>
    </NetworkContext.Provider>
  )
}

export default NetworkProvider