import { createContext, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, useMediaQuery } from '@material-ui/core'
import { getDarkTheme, getLightTheme } from 'theme'
import SnowStorm from 'react-snowstorm'

export const ThemeContext = createContext({
  colorMode: 'light',
  handleColorModeChange: () => {}
})

const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [colorMode, setColorMode] = useState(() => !prefersDarkMode ? 'light' : 'dark')
  const [snowstorm, setSnowstorm] = useState(true)

  const theme = useMemo(() => {
    const next = colorMode === 'dark' ? getDarkTheme() : getLightTheme()
    window.theme = next
    return next
  }, [colorMode])

  const toggleColorMode = () => {
    if (colorMode === 'dark') {
      setColorMode('light')
    } else {
      setColorMode('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{
      colorMode,
      toggleColorMode,
      snowstorm,
      setSnowstorm
    }}>
      <MaterialThemeProvider theme={theme}>
        <CssBaseline />
        <SnowStorm 
          animationInterval={100}
          followMouse={false} 
          excludeMobile
        />
        {children}
      </MaterialThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
