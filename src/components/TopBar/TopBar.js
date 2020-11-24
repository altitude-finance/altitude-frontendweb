import React, { useState } from 'react'
import { AppBar, Box, Toolbar, useTheme, useMediaQuery, Button, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { MobileMenu } from 'components/MobileMenu'
import { ConnectButton } from 'components/ConnectButton'
import { ThemeSwitch } from 'components/ThemeSwitch'
import { Brand } from 'components/Brand'
import LaunchIcon from '@material-ui/icons/Launch'

const useStyles = makeStyles(() => ({
  appBar: {
    position: 'fixed',
    zIndex: 1400
  }
}))

export const TopBar = () => {
  const theme = useTheme()
  const displayMobileMenu = useMediaQuery(theme.breakpoints.down("sm"))
  const history = useHistory()
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {displayMobileMenu && <MobileMenu />}
        
        <Box flexGrow={1} display="flex" alignItems="center">
          <Brand size={48} dark={false} />
        </Box>
        
        
        {!displayMobileMenu && (
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => history.push("/slopes")}>
              Slopes
            </Button>
            <Button color="inherit" onClick={() => history.push("/avalanche")}>
              Avalanche
            </Button>
            <Button color="inherit" onClick={() => history.push("/leaderboards")}>
              Leaderboards
            </Button>
            <Button color="inherit" onClick={() => history.push("/docs")}> 
              Docs
            </Button>
            <Button
              href="https://degen.altitude.finance/"
              target="_blank"
              color="secondary"
              style={{marginRight: 8}}
            >
              Chart
              <LaunchIcon style={{fontSize:12}} />
            </Button>
            
            <ConnectButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
