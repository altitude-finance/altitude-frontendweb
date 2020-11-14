import React, { useState } from 'react'
import { useHistory } from 'react-router-dom' 
import { IconButton, Drawer, List, ListItem, ListItemText, Divider, Toolbar, Button, ListItemIcon, Grid, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ConnectButton } from 'components/ConnectButton'
import { ThemeSwitch } from 'components/ThemeSwitch'
import HomeIcon from '@material-ui/icons/Home'
import LaunchIcon from '@material-ui/icons/Launch'
import BarChartIcon from '@material-ui/icons/BarChart'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import { FaSkiing, FaSnowflake, FaBook } from 'react-icons/fa'

export const MobileMenu = () => {
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
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => handlePush("/")}>
            <ListItemIcon><HomeIcon size={20} /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/slopes")}>
            <ListItemIcon><FaSkiing size={20} /></ListItemIcon>
            <ListItemText primary="Slopes" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/avalanche")}>
            <ListItemIcon><FaSnowflake size={20} /></ListItemIcon>
            <ListItemText primary="Avalanche" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/leaderboards")}>
            <ListItemIcon><BarChartIcon size={20} /></ListItemIcon>
            <ListItemText primary="Leaderboards" />
          </ListItem>
          <ListItem button onClick={() => handlePush("/docs")}>
            <ListItemIcon><FaBook size={20} /></ListItemIcon>
            <ListItemText primary="Docs" />
          </ListItem>
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
          </ListItem>
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
