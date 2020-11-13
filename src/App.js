import ModalsProvider from 'contexts/Modals'
import NetworkProvider from 'contexts/Network'
import ThemeProvider from 'contexts/Theme'
import React from 'react'
import Routes from 'routes'


const App = () => {
  return (
    <NetworkProvider>
      <ThemeProvider>
        <ModalsProvider>
          <Routes />
        </ModalsProvider>
      </ThemeProvider>
    </NetworkProvider>
  )
}

export default App;
