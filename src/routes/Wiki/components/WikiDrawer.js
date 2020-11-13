import { Divider, Drawer, List, ListItem, ListItemText, Typography, useMediaQuery } from '@material-ui/core'
import React, { useState } from 'react'
import { useTheme } from '@material-ui/core'

// Permanent drawer if on large screen, temporary if on mobile
export const WikiDrawer = () => {
  const theme = useTheme()
  const useMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [open, setOpen] = useState(!useMobile)

  return (
    <Drawer
      variant={useMobile ? "temporary" : "permanent"}
      anchor="left"
      open={open}
      onClose={() => setOpen(!open)}
    >
      <Typography variant="body1">
        Altitude.Finance Wiki
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary={"Wiki Home"} />
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
