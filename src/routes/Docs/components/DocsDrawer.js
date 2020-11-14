import { Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery } from '@material-ui/core'
import React, { useState } from 'react'
import { useTheme } from '@material-ui/core'

// Permanent drawer if on large screen, temporary if on mobile
export const DocsDrawer = () => {
  const theme = useTheme()
  const useMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [open, setOpen] = useState(!useMobile)

  return (
    
     <Drawer
      variant="permanent"
      anchor="left"
      // open={open}
      // onClose={() => setOpen(!open)}
    > 
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary={"Altitude Docs"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Slopes"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Avalanche"} />
        </ListItem>
      </List>
    </Drawer>
  )
}
