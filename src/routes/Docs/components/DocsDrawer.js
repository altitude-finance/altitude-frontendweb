import { Box, Divider, Drawer, List, ListItem, ListItemText, makeStyles, Toolbar } from '@material-ui/core'
import React  from 'react'
import { useTheme } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ExpandingListItem } from 'components/ExpandingListItem'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
    paddingTop: theme.mixins.toolbar.minHeight
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
      {/* <Toolbar /> */}
      <Divider />
      <Box overflow="auto" mt={1}>
        <List>
          <ListItem button onClick={() => history.push("/docs/")}>
            {/* <ListItem */}
            <ListItemText primary="Altitude Docs" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/docs/lge")}>
            <ListItemText primary="Token Basics" />
          </ListItem>
          <ListItem button onClick={() => history.push("/docs/lge")}>
            <ListItemText primary="Liquidity Generation" />
          </ListItem>
          <ExpandingListItem 
            title="Yield Farming"
            items={[
              {
                title: "Slopes Basics",
                route: "/docs/slopes"
              },
              {
                title: "Slopes Basics",
                route: "/docs/slopes/#active-slopes"
              }
            ]}
          />
          <ListItem button onClick={() => history.push("/docs/avalanche")}>
            <ListItemText primary="Avalanche" />
          </ListItem>
          <ExpandingListItem 
            title="Tokenomics"
            items={[
              {
                title: "Token",
                route: "/docs/"
              }
            ]}
          />
        </List>
        <ListItem button onClick={() => history.push("/docs/glossary")}>
            <ListItemText primary="Glossary" />
          </ListItem>
      </Box>
    </Drawer>
  )
}
