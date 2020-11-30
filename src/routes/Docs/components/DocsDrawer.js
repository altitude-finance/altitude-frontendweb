import { Box, Divider, Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import React  from 'react'
import { useHistory } from 'react-router-dom'
import { ExpandingListItem } from 'components/ExpandingListItem'
import DocsRouteMap from 'constants/DocsRouteMap'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 320,
    paddingTop: theme.mixins.toolbar.minHeight,
    [theme.breakpoints.up('lg')]: {
      paddingBottom: 115,
    },
  },
  drawer: {
    width: 320
  }
}))

// Permanent drawer if on large screen, temporary if on mobile
export const DocsDrawer = () => {
  const classes = useStyles()
  const history = useHistory()

  const handlePush = (path) => {
    history.push(path)
  }
  
  return (
     <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper}}
    > 
      <Divider />
      <Box overflow="auto" mt={1}>
        <List>
          {[...DocsRouteMap.active].map((route, i) => {
            if (route.items) {
              return (
                <ExpandingListItem
                  key={i}
                  title={route.title}
                  items={route.items}
                />
              )
            } else {
              return (
                <ListItem
                  button 
                  key={i}
                  onClick={() => handlePush(route.path)}
                >
                  {/* <ListItemIcon /> */}
                  <ListItemText><b>{route.title}</b></ListItemText>
                </ListItem>
              )
            }
          })}
        </List>
      </Box>
    </Drawer>
  )
}
