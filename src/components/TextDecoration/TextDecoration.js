import { Box, Divider, makeStyles, useTheme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  top: {
    height: "16px"
  },
  bottom: {
    height: "12px",
    borderFill: theme.palette.secondary,
    borderColor: theme.palette.secondary,
    
  }
}))

export const TextDecoration = ({
  mt=1,
  mb=2,
  my=0,
  align="center",
  justify="center",
  width=25
}) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={justify}
      alignItems={align}
      my={my || undefined}
      mt={mt || undefined}
      mb={mb || undefined}
      
      width="100%"
    >
      <Box
        width="80%"
        height="6px"
        border={3}
        borderColor={theme.palette.secondary.main}
      />
      <Box
        mt={1}
        width="60%"
        height="6px"
        border={3} 
        borderColor={theme.palette.text.main}
      />
    </Box>
  )
}
