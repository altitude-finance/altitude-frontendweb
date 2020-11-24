import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({

}))

export const ColumnView = ({
  children,
  ...props
}) => {
  return (
    <Box
      display="flex"
      // flexGrow={1}
      flexDirection="column"
      //height="100vh"
      {...props}
    >
      {children}
    </Box>
  )
}
