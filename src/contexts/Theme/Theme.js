import { createContext, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, useMediaQuery } from '@material-ui/core'
import { getDarkTheme, getLightTheme } from 'theme'
import { isMobile } from 'react-device-detect'

export const ThemeContext = createContext({
  colorMode: 'dark',
  toggleColorMode: () => {},
  snowstorm: true,
  toggleSnowstorm: () => {}
})

const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [colorMode, setColorMode] = useState(() => !prefersDarkMode ? 'light' : 'dark')
  const [snowstorm, setSnowstorm] = useState(!isMobile)

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

  const toggleSnowstorm = () => {
    setSnowstorm(!snowstorm)
  }

  return (
    <ThemeContext.Provider value={{
      colorMode,
      toggleColorMode,
      snowstorm,
      toggleSnowstorm
    }}>
      <MaterialThemeProvider theme={theme}>
        <CssBaseline />
        
        {children}
      </MaterialThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
