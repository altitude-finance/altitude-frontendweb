import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({

}))

export const ColumnView = ({
  height,
  minHeight,
  m,
  mx,
  my,
  children,
  ...props
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      //height="100vh"
      height={height || undefined}
      minHeight={minHeight || undefined}
      m={m || undefined}
      mx={mx || undefined}
      my={my || undefined}
      {...props}
    >
      {children}
    </Box>
  )
}
