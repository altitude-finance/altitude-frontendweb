import React from 'react'
import { useTheme } from 'hooks/useTheme'
import { Switch } from '@material-ui/core'

export const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useTheme()

  return (
    <Switch 
      checked={colorMode === 'dark'} 
      onChange={toggleColorMode}
      name="themeSwitch"
    />
  )
}
