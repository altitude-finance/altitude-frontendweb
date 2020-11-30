import React from 'react'
import { useTheme } from 'hooks/useTheme'
import { Switch, FormControlLabel, FormGroup, Typography } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4';
export const ThemeSwitch = ({
  labeled=false,
  // labelPlacement="top"
}) => {
  const { colorMode, toggleColorMode } = useTheme()

  return (
    <>
      {labeled ? (
        <FormGroup row>
        <FormControlLabel
          labelPlacement="end"
          label={<Typography variant="overline" align="center">Theme</Typography>}
          control={
            <Switch 
              checked={colorMode !== 'dark'} 
              onChange={toggleColorMode}
              name="themeSwitch"
              size="small"
              // icon={<Brightness4Icon style={{display:'flex'}} />}
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
