import React from 'react'
import { useTheme } from 'hooks/useTheme'
import { Switch, FormControlLabel, FormGroup, Typography } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const SnowSwitch = ({
  labeled=false,
  // labelPlacement="top"
}) => {
  const { snowstorm, toggleSnowstorm } = useTheme()

  return (
    <>
      {labeled ? (
        <FormGroup row>
        <FormControlLabel
          labelPlacement="end"
          label={<Typography variant="overline" align="center">Snow</Typography>}
          control={
            <Switch 
              checked={snowstorm}
              onChange={toggleSnowstorm}
              name="snowSwitch"
              size="small"
              // icon={<Brightness4Icon style={{display:'flex'}} />}
            />
          }
        />
        </FormGroup>
      ) : (
        <Switch 
          checked={snowstorm} 
          onChange={toggleSnowstorm}
          name="snowSwitch"
        />
      )}
    </>
  )
}
