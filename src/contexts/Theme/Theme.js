import { createContext, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, useMediaQuery } from '@material-ui/core'
import { getDarkTheme, getLightTheme } from 'theme'

export const ThemeContext = createContext({
  colorMode: 'light',
  handleColorModeChange: () => {}
})

const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [colorMode, setColorMode] = useState(() => prefersDarkMode ? 'dark' : 'light')

  const theme = useMemo(() => {
    return colorMode === 'dark' ? getDarkTheme() : getLightTheme() 
  }, [colorMode])

  const toggleColorMode = () => {
    if (colorMode === 'dark') {
      console.log(colorMode)
      setColorMode('light')
    } else {
      console.log(colorMode)
      setColorMode('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{
      colorMode,
      toggleColorMode
    }}>
      <MaterialThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MaterialThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
