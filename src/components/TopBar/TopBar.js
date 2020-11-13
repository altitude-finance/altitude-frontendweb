import React from 'react'
import { AppBar, Box, Toolbar, useTheme, useMediaQuery, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { MobileMenu } from 'components/MobileMenu'
import { ConnectButton } from 'components/ConnectButton'
import { ThemeSwitch } from 'components/ThemeSwitch'
import { Brand } from 'components/Brand'

export const TopBar = () => {
  const theme = useTheme()
  const displayMobileMenu = useMediaQuery(theme.breakpoints.down("sm"))
  const history = useHistory()

  return (
    <AppBar position="static">
      <Toolbar>
        <Brand />
        {displayMobileMenu ? (
          <MobileMenu />
        ) : (
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => history.push("/slopes")}>
              Slopes
            </Button>
            <Button color="inherit" onClick={() => history.push("/avalanche")}>
              Storm{/* Avalanche */}
            </Button>
            <Button color="inherit" onClick={() => history.push("/leaderboards")}>
              Stats{/* Leaderboards */}
            </Button>
            <Button color="inherit" onClick={() => history.push("/about")}>
              About
            </Button>
            <Button color="inherit" onClick={() => history.push("/wiki")}> 
              Wiki
            </Button>
            {/* <Link href="https://degen.altitude.finance/" color="secondary">
              Degen <LaunchIcon />
            </Link> */}
            
            <ThemeSwitch />
            <ConnectButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
