import { Box, Button } from '@material-ui/core'
import React from 'react'

export const ConnectDialogButton = ({
  image,
  provider,
  onClick
}) => {
  return (
    <Box>
      <Button
        variant="outlined"
        // startIcon={}
        onClick={onClick}
        fullWidth
      >
        <Box p={2} display="flex" alignItems="center" justifyContent="center">
          <Box mr={1}>
            <img src={image} height="24" alt={provider} />
          </Box>
          <Box>
            {provider}
          </Box>
        </Box>
      </Button>
    </Box>
  )
}
