import { Box, Divider, Paper, Typography } from '@material-ui/core'
import React from 'react'

export const Card = ({ title, children }) => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        {title && (
          <Box mb={2}>
            <Typography variant="h5" align="center">{title}</Typography>
          </Box>
        )}
        {title && <Divider />}
        <Box mt={1}>
          {children}
        </Box>
      </Box>
    </Paper>
  )
}
