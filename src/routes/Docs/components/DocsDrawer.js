import { Box, Divider, Drawer, List, ListItem, ListItemText, makeStyles, Toolbar } from '@material-ui/core'
import React  from 'react'
import { useTheme } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ExpandingListItem } from 'components/ExpandingListItem'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240
  },
  drawer: {
    width: 240,
    //flexShrink: 0
  }
}))

// Permanent drawer if on large screen, temporary if on mobile
export const DocsDrawer = () => {
  const classes = useStyles()
  const history = useHistory()
  
  return (
     <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper}}
    > 
      <Toolbar />
      <Divider />
      <Box overflow="auto">
        <List>
          <ListItem button onClick={() => history.push("/docs/")}>
            {/* <ListItem */}
            <ListItemText primary={"Altitude Docs"} />
          </ListItem>
          <ListItem button onClick={() => history.push("/docs/slopes")}>
            <ListItemText primary={"Slopes"} />
          </ListItem>
          <ListItem button onClick={() => history.push("/docs/avalanche")}>
            <ListItemText primary={"Avalanche"} />
          </ListItem>
          <ExpandingListItem title="Tokenomics" />
        </List>
      </Box>
    </Drawer>
  )
}
