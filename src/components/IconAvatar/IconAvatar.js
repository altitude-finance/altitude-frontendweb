import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  icon: {
    // color: theme.palette.text,
    backgroundColor: theme.palette.secondary.main
  }
}))

export const IconAvatar = ({children}) => {
  const classes = useStyles()

  return (
    <Avatar className={classes.icon}>
      {children}
    </Avatar>
  )
}
