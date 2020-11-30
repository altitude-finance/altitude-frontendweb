import React, { useState } from 'react'
import { useHistory } from 'react-router-dom' 
import { IconButton, Drawer, List, ListItem, ListItemText, Divider, makeStyles, ListItemIcon } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ConnectButton } from 'components/ConnectButton'
import { ThemeSwitch } from 'components/ThemeSwitch'
import RouteMap from 'constants/RouteMap'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
    paddingTop: theme.mixins.toolbar.minHeight
  },
  drawer: {
    width: 240,
  }
}))

export const MobileMenu = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const history = useHistory()
  
  const toggleDrawer = () => setOpen(!open)

  const handlePush = (to) => {
    history.push(to)
    toggleDrawer()
  }

  return (
    <>
      <IconButton
        color="inherit"
        size="small"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => toggleDrawer()}
        className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
      >
        <List>
          {[...RouteMap.active].map((route, i) => (
            <ListItem 
              key={i}
              onClick={() => handlePush(route.path)}
              button 
            >
              <ListItemIcon>
                {route.icon()}
              </ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItem>
          ))}
          
          {/* <ListItem button onClick={() => handlePush("/slopes")}>
            <ListItemIcon><FaSkiing size={20} /></ListItemIcon>
            <ListItemText primary="Slopes" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/avalanche")}>
            <ListItemIcon><FaSnowflake size={20} /></ListItemIcon>
            <ListItemText primary="Avalanche" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/lodge")}>
            <ListItemIcon><EmojiEventsIcon size={20} /></ListItemIcon>
            <ListItemText primary="Lodge" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/dashboard")}>
            <ListItemIcon><BarChartIcon size={20} /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/docs")}>
            <ListItemIcon><FaBook size={20} /></ListItemIcon>
            <ListItemText primary="Docs" />
          </ListItem> */}
          {/* 
          
          // Gate this

          <ListItem 
            button
            href="https://chart.altitude.finance/"
            target="_blank"
          >
            <ListItemIcon><TrendingUpIcon color="secondary" /></ListItemIcon>
            <ListItemText>
              <Typography color="secondary">
                Chart
                <LaunchIcon style={{fontSize: 12}} />
              </Typography>
            </ListItemText>
          </ListItem> */}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ConnectButton fullWidth />
          </ListItem>
          {/* <ListItem>
            <Button
              href="https://degen.altitude.finance/"
              target="_blank"
              color="secondary"
              endIcon={<LaunchIcon />}
            >
              Degen
            </Button>
          </ListItem> */}
        </List>
      </Drawer>
    </>
  )
}
