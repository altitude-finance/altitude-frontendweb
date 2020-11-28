import { Box, Grid, Icon, Paper, Typography } from '@material-ui/core'
import { IconAvatar } from 'components/IconAvatar'
import { TextDecoration } from 'components/TextDecoration'
import React from 'react'

export const StatCard = ({
  title,
  value,
  icon
}) => {
  return (
    <Paper variant="outlined">
      <Box p={1}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="overline" align="left">{title}</Typography>
            <Typography variant="h5" align="left"><b>{value}</b></Typography>
            <TextDecoration align="flex-start" />
          </Grid>
          <Grid item>
            <IconAvatar>
              {icon}
            </IconAvatar>
          </Grid>
        </Grid>
      </Box>
      
      
    </Paper>
  )
}
