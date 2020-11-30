import React, { useState } from 'react'
import { AppBar, Box, Toolbar, useTheme, useMediaQuery, Button, makeStyles, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { MobileMenu } from 'components/MobileMenu'
import { ConnectButton } from 'components/ConnectButton'
import { ThemeSwitch } from 'components/ThemeSwitch'
import { Brand } from 'components/Brand'
import LaunchIcon from '@material-ui/icons/Launch'
import RouteMap from 'constants/RouteMap'

const useStyles = makeStyles(() => ({
  appBar: {
    position: 'fixed',
    zIndex: 1400
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    // cursor: 'pointer'
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
        
        <Box className={classes.brandContainer} ml={displayMobileMenu ? 1 : 0}>
          <Button onClick={() => history.push("/")}>
            <Brand size={48} dark={false} />
          </Button>
        </Box>
        
        
        {!displayMobileMenu && (
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            {/* <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button> */}
            {[...RouteMap.active].map((route, i) => (
              <Button 
                key={i}
                onClick={() => history.push(route.path)}
                color="inherit"
              >
                {route.title}
              </Button>
            ))}

            
            {[...RouteMap.external].map((route, i) => (
              <Button
                key={i}
                href={route.path}
                target="_blank"
                color="secondary"
              >
                {route.title}
                <LaunchIcon style={{fontSize:12}} />
              </Button>
            ))}

            <ConnectButton style={{marginLeft: 8}} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
