import React from 'react'
import { useTheme } from 'hooks/useTheme'
import { Switch, FormControlLabel, FormGroup, Typography } from '@material-ui/core'

export const ThemeSwitch = ({
  labeled=false
}) => {
  const { colorMode, toggleColorMode } = useTheme()

  return (
    <>
      {labeled ? (
        <FormGroup>
        <FormControlLabel 
          labelPlacement="top"
          label={<Typography variant="overline" style={{fontSize:12}}>Theme</Typography>}
          control={
            <Switch 
              checked={colorMode === 'dark'} 
              onChange={toggleColorMode}
              name="themeSwitch"
              size="small"
            />
          }
        />
        </FormGroup>
      ) : (
        <Switch 
          checked={colorMode === 'dark'} 
          onChange={toggleColorMode}
          name="themeSwitch"
        />
      )}
    </>
  )
}
