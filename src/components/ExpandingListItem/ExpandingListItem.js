import { List, ListItem } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const ExpandingListItem = ({
  title,
  items=[],
  defaultOpen=false,
}) => {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles()
  const [open, setOpen] = useState(defaultOpen)

  const handleToggle = () => {
    if (!open) {
      history.push(items[0].path)
    }
    setOpen(!open)
  }

  useEffect(() => {
    if (open && !location.pathname.includes(items[0].path)) {
      setOpen(!open)
    }
  }, [location.pathname, setOpen, items, open]) 

  return (
    <>
      <ListItem button onClick={handleToggle}>
        <ListItemText><b>{title}</b></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items && items.map((item, i) => (
            <ListItem 
              key={i}
              onClick={() => history.push(item.path)}
              className={classes.nested} 
              button
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
