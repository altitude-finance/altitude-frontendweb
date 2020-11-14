import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { Logo } from 'components/Logo'
import { SocialButtonGroup } from 'components/SocialButtonGroup'
import { ThemeSwitch } from 'components/ThemeSwitch'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    zIndex: 1400,
    paddingTop: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette.background.footer //theme.palette.primary.main//
  }
}))

export const Footer = () => {
  const classes = useStyles()
  // const theme = useTheme()

  return (
    <Paper square variant="outlined" color="primary" classes={{root: classes.footer}}>
      {/* Altitude Finance */}
      {/* <Toolbar /> */}
      <Grid container alignItems="center" justify="center">
        <Grid item sm={12} md={4}>
          <Logo size={36} withTitle={16} />
          <Grid container justify="center">
            <ThemeSwitch labeled />
            <ThemeSwitch labeled />
          </Grid>
          
        </Grid>
        <Grid item sm={12} md={4}>
          <Grid container justify="center" direction="row">
            <Button size="small" color="primary">Home</Button>
            <Button size="small" color="primary">Slopes</Button>
            <Button size="small" color="primary">Avalanche</Button>
            <Button size="small" color="primary">Leaderboards</Button>
            <Button size="small" color="primary">About</Button>
            <Button size="small" color="primary">Wiki</Button>
            <Button size="small" color="primary">Legal</Button>
            {/* <Button size="small">Home</Button> */}
          </Grid>
          
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography align="center" variant="h6"><b>Connect With Us</b></Typography>
          <SocialButtonGroup />
        </Grid>
      </Grid>
      <Typography align="center" variant="body1" color="inherit"><b>Altitude Finance © 2020</b></Typography>
    </Paper>
  )
}
