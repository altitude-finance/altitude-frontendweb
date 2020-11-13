import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react'

export const ConnectDialogButton = ({
  image,
  provider,
  onClick
}) => {
  return (
    <Box ml={1} mr={1} mb={1}>
      <Button
        variant="outlined"
        startIcon={<img src={image} height="32" alt={provider} />}
        onClick={onClick}
        fullWidth
      >
        {provider}
      </Button>
    </Box>
  )
}
