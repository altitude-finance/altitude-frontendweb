import { Box } from '@material-ui/core'
import React from 'react'

export const FlexCenter = ({
  flexDirection="row",
  align="center",
  justify="center",
  m,
  mb,
  mt,
  mx,
  my,
  children, 
  ...props
}) => {
  return (
    <Box
      flexDirection={flexDirection}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      m={m || undefined}
      marginBottom={mb || undefined}
      marginTop={mt || undefined}
      mx={mx || undefined}
      my={my || undefined}
      {...props}
    >
      {children}
    </Box>
  )
}
