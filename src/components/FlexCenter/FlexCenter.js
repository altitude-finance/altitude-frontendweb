import { Box } from '@material-ui/core'
import React from 'react'

export const FlexCenter = ({
  flexDirection="row",
  align="center",
  justify="center",
  m=0,
  mb=0,
  mt=0,
  mx=0,
  my=0,
  children, 
  ...props}
) => {
  return (
    <Box
      flexDirection={flexDirection}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      m={m || undefined}
      mb={mb || undefined}
      mt={mt || undefined}
      mx={mx || undefined}
      my={my || undefined}
      {...props}
    >
      {children}
    </Box>
  )
}
