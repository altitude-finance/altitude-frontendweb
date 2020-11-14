import AltitudeProvider from 'contexts/Altitude'
import ModalsProvider from 'contexts/Modals'
import NetworkProvider from 'contexts/Network'
import ThemeProvider from 'contexts/Theme'
import React from 'react'
import Routes from 'routes'


const App = () => {
  return (
    <NetworkProvider>
      <AltitudeProvider>
        <ThemeProvider>
          <ModalsProvider>
            <Routes />
          </ModalsProvider>
        </ThemeProvider>
      </AltitudeProvider>
    </NetworkProvider>
  )
}

export default App;
