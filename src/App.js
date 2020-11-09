import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import WalletProvider from 'use-wallet'
import theme from './theme'

const App = () => {
  return (
    <WalletProvider chainId={1}>
      <ThemeProvider theme={theme}>
        <div />
      </ThemeProvider>
    </WalletProvider>
  )
}

export default App;
