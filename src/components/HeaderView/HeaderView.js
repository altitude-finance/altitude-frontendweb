import { Grid, Typography } from '@material-ui/core'
import { DisplayView } from 'components/DisplayView'
import { FlexCenter } from 'components/FlexCenter'
import { TextDecoration } from 'components/TextDecoration'
import React from 'react'

export const HeaderView = ({
  title,
  align="center",
  children
}) => {
  return (
    <DisplayView justify="flex-start" alignItems="center">
      <Grid item>
        <FlexCenter flexDirection="column" my={3}>
          <Typography variant="h4" align={align}><b>{title}</b></Typography>
          <TextDecoration />
        </FlexCenter>
      </Grid>
      <Grid item>
        <FlexCenter flexDirection="column">
          {children}
        </FlexCenter>
      </Grid>
    </DisplayView>
  )
}
