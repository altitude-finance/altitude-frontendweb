import React from 'react'
import { AppBar, Box, Toolbar, useTheme, useMediaQuery, Grid, Link, Button, Typography, makeStyles, Switch, ButtonBase } from '@material-ui/core'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { MobileMenu } from 'components/MobileMenu'
import LaunchIcon from '@material-ui/icons/Launch'
import { ConnectButton } from 'components/ConnectButton'
import { ThemeSwitch } from 'components/ThemeSwitch'
import { Brand } from 'components/Brand'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  image: {
    height: 50
  },
  button: {
    padding: 1
  }
}));

export const TopBar = () => {
  const theme = useTheme()
  const displayMobileMenu = useMediaQuery(theme.breakpoints.down("sm"))
  const styles = useStyles()
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
            <Button color="inherit" onClick={() => history.push("/docs")}> 
              Docs
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
