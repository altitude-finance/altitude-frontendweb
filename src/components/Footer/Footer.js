import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { Brand } from 'components/Brand'
import { FlexCenter } from 'components/FlexCenter'
import { SnowSwitch } from 'components/SnowSwitch'
import { SocialButtonGroup } from 'components/SocialButtonGroup'
import { ThemeSwitch } from 'components/ThemeSwitch'
import RouteMap from 'constants/RouteMap'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    bottom: 0,
    
    paddingTop: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette.background.footer, //theme.palette.primary.main//
    [theme.breakpoints.up('md')]: {
      zIndex: 1400,
    },
  }
}))

export const Footer = () => {
  const classes = useStyles()
  const history = useHistory()
  // const theme = useTheme()

  return (
    <Paper 
      square 
      variant="outlined" 
      color="primary" 
      classes={{root: classes.footer}}
    >
      {/* Altitude Finance */}
      {/* <Toolbar /> */}
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} md={4}>
          <FlexCenter>
            <Brand vertical size={96} />
          </FlexCenter>
          
          
          
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container justify="center" direction="row">
            {[...RouteMap.active, ...RouteMap.footer].map((route, i) => (
              <Button
                key={i}
                onClick={() => history.push(route.path)}
                size="small" 
                color="primary"
              >
                {route.title}
              </Button>
            ))}
          </Grid>
          <Grid container justify="center">
            <ThemeSwitch labelPlacement="start" labeled />
            <SnowSwitch labelPlacement="start" labeled />
          </Grid>
            
          {/* </FlexCenter> */}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography align="center" variant="h6"><b>Connect With Us</b></Typography>
          <SocialButtonGroup />
        </Grid>
      </Grid>
      <Typography align="center" variant="body1" color="inherit"><b>Altitude Finance © 2020</b></Typography>
    </Paper>
  )
}
