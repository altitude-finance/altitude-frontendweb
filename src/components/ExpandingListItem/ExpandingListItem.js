import { List, ListItem } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
  const classes = useStyles()
  const [open, setOpen] = useState(defaultOpen)

  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items && items.map((item, i) => (
            <ListItem button className={classes.nested} onClick={() => history.push(item.route)}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
